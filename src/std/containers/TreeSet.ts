/// <reference path="../API.ts" />

/// <reference path="../base/containers/UniqueSet.ts" />

namespace std.TreeSet
{
	export type iterator<T> = SetIterator<T>;
	export type reverse_iterator<T> = SetReverseIterator<T>;
}

namespace std
{
	export class TreeSet<T>
		extends base.UniqueSet<T>
		implements base.ITreeSet<T>
	{
		/**
		 * @hidden
		 */
		private tree_: base._UniqueSetTree<T>;

		/* =========================================================
			CONSTRUCTORS & SEMI-CONSTRUCTORS
				- CONSTRUCTORS
				- ASSIGN & CLEAR
		============================================================
			CONSTURCTORS
		--------------------------------------------------------- */
		public constructor();

		public constructor(compare: (x: T, y: T) => boolean);

		public constructor(array: Array<T>);

		public constructor(array: Array<T>, compare: (x: T, y: T) => boolean);

		public constructor(container: TreeMultiSet<T>);

		public constructor(container: TreeMultiSet<T>, compare: (x: T, y: T) => boolean);

		public constructor(begin: base.Iterator<T>, end: base.Iterator<T>);

		public constructor(begin: base.Iterator<T>, end: base.Iterator<T>, compare: (x: T, y: T) => boolean);

		public constructor(...args: any[])
		{
			super();

			//--------
			// SPECIFIY CONSTRUCTOR
			//--------
			let compare: (x: T, y: T) => boolean = less;
			let fn: Function = null;

			if (args.length >= 1 && args[0] instanceof TreeSet)
			{
				// COPY CONSTRUCTOR
				let container: TreeSet<T> = args[0]; // PARAMETER
				if (args.length == 2) // SPECIFIED COMPARISON FUNCTION
					compare = args[1];

				fn = this.assign.bind(this, container.begin(), container.end());
			}
			else if (args.length >= 1 && args[0] instanceof Array)
			{
				// INITIALIZER LIST CONSTRUCTOR
				let items: T[] = args[0]; // PARAMETER
				if (args.length == 2) // SPECIFIED COMPARISON FUNCTION
					compare = args[1];

				fn = this.push.bind(this, ...items);
			}
			else if (args.length >= 2 && args[0] instanceof base.Iterator && args[1] instanceof base.Iterator)
			{
				// RANGE CONSTRUCTOR
				let first: base.Iterator<T> = args[0]; // PARAMETER 1
				let last: base.Iterator<T> = args[1]; // PARAMETER 2
				if (args.length == 3) // SPECIFIED COMPARISON FUNCTION
					compare = args[2];

				fn = this.assign.bind(this, first, last);
			}
			else if (args.length == 1)
			{
				// DEFAULT CONSTRUCTOR WITH SPECIFIED COMPARISON FUNCTION
				compare = args[0];
			}

			//--------
			// ADJUST THE SPECIFIED CONSTRUCTOR
			//--------
			this.tree_ = new base._UniqueSetTree<T>(this, compare);
			if (fn != null)
				fn();
		}

		/* ---------------------------------------------------------
			ASSIGN & CLEAR
		--------------------------------------------------------- */
		public clear(): void
		{
			super.clear();

			this.tree_.clear();
		}
		
		/* =========================================================
			ACCESSORS
		========================================================= */
		public find(val: T): SetIterator<T>
		{
			let node = this.tree_.find_by_val(val);

			if (node == null || equal_to(node.value.value, val) == false)
				return this.end();
			else
				return node.value;
		}

		public key_comp(): (x: T, y: T) => boolean
		{
			return this.tree_.key_comp();
		}

		public value_comp(): (x: T, y: T) => boolean
		{
			return this.tree_.key_comp();
		}

		public lower_bound(val: T): SetIterator<T>
		{
			return this.tree_.lower_bound(val);
		}

		public upper_bound(val: T): SetIterator<T>
		{
			return this.tree_.upper_bound(val);
		}

		public equal_range(val: T): Pair<SetIterator<T>, SetIterator<T>>
		{
			return this.tree_.equal_range(val);
		}

		/* =========================================================
			ELEMENTS I/O
				- INSERT
				- POST-PROCESS
				- SWAP
		============================================================
			INSERT
		--------------------------------------------------------- */
		/**
		 * @hidden
		 */
		protected _Insert_by_val(val: T): Pair<SetIterator<T>, boolean>
		{
			// FIND POSITION TO INSERT
			let it: SetIterator<T> = this.lower_bound(val);
			if (!it.equals(this.end()) && equal_to(it.value, val))
				return make_pair(it, false);

			// ITERATOR TO RETURN
			it = this["data_"].insert(it, val);
			this._Handle_insert(it, it.next()); // POST-PROCESS

			return make_pair(it, true);
		}

		protected _Insert_by_hint(hint: SetIterator<T>, val: T): SetIterator<T>
		{
			//--------
			// INSERT BRANCH
			//--------
			// prev < current < hint
			let prev: SetIterator<T> = hint.prev();
			let keys: Vector<T> = new Vector<T>();

			// CONSTRUCT KEYS
			if (!prev.equals(this.end()))
				if (equal_to(prev.value, val))
					return prev; // SAME KEY, THEN RETURNS IT`
				else
					keys.push_back(prev.value); // DIFFERENT KEY

			keys.push_back(val); // NEW ITEM'S KEY

			if (!hint.equals(this.end()))
				if (equal_to(hint.value, val))
					return hint;
				else
					keys.push_back(hint.value);

			// IS THE HINT VALID ?
			let ret: SetIterator<T>;

			if (is_sorted(keys.begin(), keys.end(), this.key_comp()))
			{
				// CORRECT HINT
				ret = this["data_"].insert(hint, val);

				// POST-PROCESS
				this._Handle_insert(ret, ret.next());
			}
			else // INVALID HINT
				ret = this._Insert_by_val(val).first;

			return ret;
		}

		/**
		 * @hidden
		 */
		protected _Insert_by_range<U extends T, InputIterator extends base.Iterator<U>>
			(first: InputIterator, last: InputIterator): void
		{
			for (; !first.equals(last); first = first.next() as InputIterator)
				this._Insert_by_val(first.value);
		}

		/* ---------------------------------------------------------
			POST-PROCESS
		--------------------------------------------------------- */
		/**
		 * @hidden
		 */
		protected _Handle_insert(first: SetIterator<T>, last: SetIterator<T>): void
		{
			this.tree_.insert(first);
		}

		/**
		 * @hidden
		 */
		protected _Handle_erase(first: SetIterator<T>, last: SetIterator<T>): void
		{
			for (; !first.equals(last); first = first.next())
				this.tree_.erase(first);
		}

		/* ---------------------------------------------------------
			SWAP
		--------------------------------------------------------- */
		public swap(obj: TreeSet<T>): void;

		public swap(obj: base.Container<T>): void;
		
		public swap(obj: TreeSet<T> | base.Container<T>): void
		{
			if (obj instanceof TreeSet && this.key_comp() == obj.key_comp())
			{
				this._Swap(obj);
				[this.tree_, obj.tree_] = [obj.tree_, this.tree_];
			}
			else
				super.swap(obj);
		}
	}
}