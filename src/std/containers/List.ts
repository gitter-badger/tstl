/// <reference path="../API.ts" />

/// <reference path="../base/containers/_ListContainer.ts" />

namespace std.List
{
	export type iterator<T> = ListIterator<T>;
	export type reverse_iterator<T> = ListReverseIterator<T>;
}

namespace std
{
	export class List<T>
		extends base._ListContainer<T, ListIterator<T>>
		implements base.IDequeContainer<T>
	{
		private rend_: ListReverseIterator<T>;

		/* =========================================================
			CONSTRUCTORS & SEMI-CONSTRUCTORS
				- CONSTRUCTORS
				- ASSIGN & CLEAR
		============================================================
			CONSTURCTORS
		--------------------------------------------------------- */
		public constructor();

		public constructor(items: Array<T>);

		public constructor(size: number, val: T);

		public constructor(container: List<T>);

		public constructor(begin: base.Iterator<T>, end: base.Iterator<T>);

		public constructor(...args: any[])
		{
			super();

			// BRANCHES
			if (args.length == 0) 
			{
				// DO NOTHING
			}
			else if (args.length == 1 && args[0] instanceof Array) 
			{
				let array: Array<T> = args[0];

				this.push(...array);
			}
			else if (args.length == 1 && (args[0] instanceof List)) 
			{
				let container: List<T> = args[0];

				this.assign(container.begin(), container.end());
			}
			else if (args.length == 2 && args[0] instanceof base.Iterator && args[1] instanceof base.Iterator) 
			{
				let begin: base.Iterator<T> = args[0];
				let end: base.Iterator<T> = args[1];

				this.assign(begin, end);
			}
			else if (args.length == 2 && typeof args[0] == "number")
			{
				let size: number = args[0];
				let val: T = <T>args[1];

				this.assign(size, val);
			}
		}

		/**
		 * @hidden
		 */
		protected _Create_iterator(prev: ListIterator<T>, next: ListIterator<T>, val: T): ListIterator<T>
		{
			return new ListIterator<T>(this, prev as ListIterator<T>, next as ListIterator<T>, val);
		}

		/**
		 * @hidden
		 */
		protected _Set_begin(it: ListIterator<T>): void
		{
			super._Set_begin(it);
			this.rend_ = new ListReverseIterator<T>(it);
		}

		/* ---------------------------------------------------------
			ASSIGN & CLEAR
		--------------------------------------------------------- */
		public assign(n: number, val: T): void;

		public assign<U extends T, InputIterator extends base.Iterator<U>>
			(begin: InputIterator, end: InputIterator): void;

		public assign<U extends T, InputIterator extends base.Iterator<U>>
			(par1: any, par2: any): void
		{
			this.clear();
			this.insert(this.end(), par1, par2);
		}
		
		/* =========================================================
			ACCESSORS
		========================================================= */
		public rbegin(): ListReverseIterator<T>
		{
			return new ListReverseIterator<T>(this.end());
		}

		public rend(): ListReverseIterator<T>
		{
			return this.rend_;
		}

		/* =========================================================
			ELEMENTS I/O
				- INSERT
				- ERASE
				- POST-PROCESS
		============================================================
			INSERT
		--------------------------------------------------------- */
		public insert(position: ListIterator<T>, val: T): ListIterator<T>;

		public insert(position: ListIterator<T>, size: number, val: T): ListIterator<T>;

		public insert<U extends T, InputIterator extends base.Iterator<U>>
			(position: ListIterator<T>, begin: InputIterator, end: InputIterator): ListIterator<T>;
		
		public insert(position: ListReverseIterator<T>, val: T): ListReverseIterator<T>;

		public insert(position: ListReverseIterator<T>, size: number, val: T): ListReverseIterator<T>;

		public insert<U extends T, InputIterator extends base.Iterator<U>>
			(position: ListReverseIterator<T>, begin: InputIterator, end: InputIterator): ListReverseIterator<T>;

		public insert(...args: any[]): ListIterator<T> | ListReverseIterator<T>
		{
			// REVERSE_ITERATOR TO ITERATOR
			let ret: ListIterator<T>;
			let is_reverse_iterator: boolean = false;

			if (args[0] instanceof ListReverseIterator)
			{
				is_reverse_iterator = true;
				args[0] = (args[0] as ListReverseIterator<T>).base().prev();
			}

			//----
			// DO INSERT VIA SUPER
			//----
			ret = super.insert.apply(this, args);
			
			// RETURNS
			if (is_reverse_iterator == true)
				return new ListReverseIterator<T>(ret.next());
			else
				return ret;
		}

		/* ---------------------------------------------------------
			ERASE
		--------------------------------------------------------- */
		public erase(position: ListIterator<T>): ListIterator<T>;
		
		public erase(begin: ListIterator<T>, end: ListIterator<T>): ListIterator<T>;

		public erase(position: ListReverseIterator<T>): ListReverseIterator<T>;

		public erase(begin: ListReverseIterator<T>, end: ListReverseIterator<T>): ListReverseIterator<T>;

		public erase(first: any, last: any = first.next()): ListIterator<T> | ListReverseIterator<T>
		{
			let ret: ListIterator<T>;
			let is_reverse_iterator: boolean = false;

			// REVERSE ITERATOR TO ITERATOR
			if (first instanceof ListReverseIterator)
			{
				is_reverse_iterator = true;

				let first_it = (last as ListReverseIterator<T>).base();
				let last_it = (first as ListReverseIterator<T>).base();

				first = first_it;
				last = last_it;
			}

			// ERASE ELEMENTS
			ret = this._Erase_by_range(first, last);

			// RETURN BRANCHES
			if (is_reverse_iterator == true)
				return new ListReverseIterator<T>(ret.next());
			else
				return ret;
		}

		/* ===============================================================
			ALGORITHMS
				- UNIQUE & REMOVE (IF)
				- MERGE & SPLICE
				- SORT
				- SWAP
		==================================================================
			UNIQUE & REMOVE (IF)
		--------------------------------------------------------------- */
		public unique(): void;

		public unique(binary_pred: (left: T, right: T) => boolean): void;

		public unique(binary_pred: (left: T, right: T) => boolean = equal_to): void
		{
			let it = this.begin().next();

			while (!it.equals(this.end()))
			{
				if (equal_to(it.value, it.prev().value) == true)
					it = this.erase(it);
				else
					it = it.next();
			}
		}

		public remove(val: T): void
		{
			let it = this.begin();

			while (!it.equals(this.end()))
			{
				if (equal_to(it.value, val) == true)
					it = this.erase(it);
				else
					it = it.next();
			}
		}

		public remove_if(pred: (val: T) => boolean): void
		{
			let it = this.begin();

			while (!it.equals(this.end()))
			{
				if (pred(it.value) == true)
					it = this.erase(it);
				else
					it = it.next();
			}
		}

		/* ---------------------------------------------------------
			MERGE & SPLICE
		--------------------------------------------------------- */
		public merge<U extends T>(obj: List<U>): void;

		public merge<U extends T>(obj: List<U>, compare: (left: T, right: T) => boolean): void;

		public merge<U extends T>(obj: List<U>, compare: (left: T, right: T) => boolean = less): void
		{
			if (this == <List<T>>obj)
				return;

			let it = this.begin();

			while (obj.empty() == false)
			{
				let begin = obj.begin();
				while (!it.equals(this.end()) && compare(it.value, begin.value) == true)
					it = it.next();

				this.splice(it, obj, begin);
			}
		}

		public splice<U extends T>(position: ListIterator<T>, obj: List<U>): void;
		
		public splice<U extends T>(position: ListIterator<T>, obj: List<U>, it: ListIterator<U>): void;
		
		public splice<U extends T>
			(position: ListIterator<T>, obj: List<U>, begin: ListIterator<U>, end: ListIterator<U>): void;

		public splice<U extends T>
			(
				position: ListIterator<T>, obj: List<U>, 
				begin: ListIterator<U> = null, end: ListIterator<U> = null): void
		{
			if (begin == null)
			{
				begin = obj.begin();
				end = obj.end();
			}
			else if (end == null)
			{
				end = begin.next();
			}

			this.insert(position, begin, end);
			obj.erase(begin, end);
		}

		/* ---------------------------------------------------------
			SORT
		--------------------------------------------------------- */
		public sort(): void;

		public sort(compare: (left: T, right: T) => boolean): void;

		public sort(compare: (left: T, right: T) => boolean = less): void
		{
			this._Quick_sort(this.begin(), this.end().prev(), compare);
		}

		/**
		 * @hidden
		 */
		private _Quick_sort(first: ListIterator<T>, last: ListIterator<T>, compare: (left: T, right: T) => boolean): void
		{
			if (!first.equals(last) && !last.equals(this.end()) && !first.equals(last.next()))
			{
				let temp: ListIterator<T> = this._Quick_sort_partition(first, last, compare);

				this._Quick_sort(first, temp.prev(), compare);
				this._Quick_sort(temp.next(), last, compare);
			}
		}

		/**
		 * @hidden
		 */
		private _Quick_sort_partition(first: ListIterator<T>, last: ListIterator<T>, compare: (left: T, right: T) => boolean): ListIterator<T>
		{
			let standard: T = last.value; // TO BE COMPARED
			let prev: ListIterator<T> = first.prev(); // TO BE SMALLEST

			let it: ListIterator<T> = first;
			for (; !it.equals(last); it = it.next())
				if (compare(it.value, standard))
				{
					prev = prev.equals(this.end()) ? first : prev.next();
					[prev.value, it.value] = [it.value, prev.value];
				}

			prev = prev.equals(this.end()) ? first : prev.next();
			[prev.value, it.value] = [it.value, prev.value];
		
			return prev;
		}

		public reverse(): void
		{
			let begin: ListIterator<T> = this.end().prev();
			let prev_of_end: ListIterator<T> = this.begin();

			for (let it = this.begin(); !it.equals(this.end()); )
			{
				let next = it.next();
				[it["prev_"], it["next_"]] = [it["next_"], it["prev_"]];

				it = next;
			}
			
			// ADJUST THE BEGIN AND END
			this._Set_begin(begin); // THE NEW BEGIN
			this.end()["prev_"] = prev_of_end;
			this.end()["next_"] = begin;
		}

		/* ---------------------------------------------------------
			SWAP
		--------------------------------------------------------- */
		public swap(obj: List<T>): void

		public swap(obj: base.Container<T>): void;

		public swap(obj: List<T> | base.Container<T>): void
		{
			super.swap(obj);
		}
	}
}
