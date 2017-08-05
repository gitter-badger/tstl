/// <reference path="../../API.ts" />

/// <reference path="_ListContainer.ts" />

namespace std.base
{
	export abstract class SetContainer<T>
		extends Container<T>
	{
		private data_: _SetElementList<T>;
		
		/* ---------------------------------------------------------
			CONSTURCTORS
		--------------------------------------------------------- */
		protected constructor()
		{
			super();

			this.data_ = new _SetElementList<T>(this);
		}

		public assign<U extends T, InputIterator extends Iterator<U>>
			(begin: Iterator<U>, end: Iterator<U>): void
		{
			// INSERT
			this.clear();
			this.insert(begin, end);
		}

		public clear(): void
		{
			// TO BE ABSTRACT
			this.data_.clear();
		}

		/* =========================================================
			ACCESSORS
				- ITERATORS
				- ELEMENTS
		============================================================
			ITERATOR
		--------------------------------------------------------- */
		public abstract find(val: T): SetIterator<T>;

		public begin(): SetIterator<T>
		{
			return this.data_.begin();
		}

		public end(): SetIterator<T>
		{
			return this.data_.end();
		}

		public rbegin(): SetReverseIterator<T>
		{
			return this.data_.rbegin();
		}

		public rend(): SetReverseIterator<T>
		{
			return this.data_.rend();
		}

		/* ---------------------------------------------------------
			ELEMENTS
		--------------------------------------------------------- */
		public has(val: T): boolean
		{
			return !this.find(val).equals(this.end());
		}

		public abstract count(val: T): number;

		public size(): number
		{
			return this.data_.size();
		}

		///**
		// * @hidden
		// */
		//protected _Get_data(): List<T>
		//{
		//	return this.data_;
		//}

		/* =========================================================
			ELEMENTS I/O
				- INSERT
				- ERASE
				- UTILITY
				- POST-PROCESS
		============================================================
			INSERT
		--------------------------------------------------------- */
		public push(...items: T[]): number
		{
			if (items.length == 0)
				return this.size();

			// INSERT BY RANGE
			let first: _NativeArrayIterator<T> = new _NativeArrayIterator<T>(items, 0);
			let last: _NativeArrayIterator<T> = new _NativeArrayIterator<T>(items, items.length);

			this._Insert_by_range(first, last);

			// RETURN SIZE
			return this.size();
		}
		
		public insert(hint: SetIterator<T>, val: T): SetIterator<T>;

		public insert(hint: SetReverseIterator<T>, val: T): SetReverseIterator<T>;

		public insert<U extends T, InputIterator extends Iterator<U>>
			(begin: InputIterator, end: InputIterator): void;

		public insert(...args: any[]): any
		{
			if (args.length == 1)
				return this._Insert_by_val(args[0]);
			else if (args.length == 2 && args[0] instanceof Iterator)
			{
				if (args[1] instanceof Iterator && (args[0] as SetIterator<T>).source() != this && (args[1] as SetIterator<T>).source() != this)
				{
					// IT DOESN'T CONTAIN POSITION
					// RANGES TO INSERT ONLY
					return this._Insert_by_range(args[0], args[1]);
				}
				else
				{
					let ret: SetIterator<T>;
					let is_reverse_iterator: boolean = false;

					// REVERSE_ITERATOR TO ITERATOR
					if (args[0] instanceof SetReverseIterator)
					{
						is_reverse_iterator = true;
						args[0] = (args[0] as SetReverseIterator<T>).base().prev();
					}

					// INSERT AN ELEMENT
					ret = this._Insert_by_hint(args[0], args[1]);

					// RETURN BRANCHES
					if (is_reverse_iterator == true)
						return new SetReverseIterator<T>(ret.next());
					else
						return ret;
				}
			}
		}

		/**
		 * @hidden
		 */
		protected abstract _Insert_by_val(val: T): any;
		
		/**
		 * @hidden
		 */
		protected abstract _Insert_by_hint(hint: SetIterator<T>, val: T): SetIterator<T>;
		
		/**
		 * @hidden
		 */
		protected abstract _Insert_by_range<U extends T, InputIterator extends Iterator<U>>
			(begin: InputIterator, end: InputIterator): void;

		/* ---------------------------------------------------------
			ERASE
		--------------------------------------------------------- */
		public erase(val: T): number;

		public erase(it: SetIterator<T>): SetIterator<T>;

		public erase(begin: SetIterator<T>, end: SetIterator<T>): SetIterator<T>;

		public erase(it: SetReverseIterator<T>): SetReverseIterator<T>;

		public erase(begin: SetReverseIterator<T>, end: SetReverseIterator<T>): SetReverseIterator<T>;

		public erase(...args: any[]): any
		{
			if (args.length == 1 && (args[0] instanceof Iterator == false || (args[0] as SetIterator<T>).source() != this))
				return this._Erase_by_val(args[0]);
			else
				if (args.length == 1)
					return this._Erase_by_iterator(args[0]);
				else
					return this._Erase_by_iterator(args[0], args[1]);
		}

		/**
		 * @hidden
		 */
		private _Erase_by_iterator(first: any, last: any = first.next()): any
		{
			let ret: SetIterator<T>;
			let is_reverse_iterator: boolean = false;

			// REVERSE ITERATOR TO ITERATOR
			if (first instanceof SetReverseIterator)
			{
				is_reverse_iterator = true;

				let first_it = (last as SetReverseIterator<T>).base();
				let last_it = (first as SetReverseIterator<T>).base();

				first = first_it;
				last = last_it;
			}

			// ERASE ELEMENTS
			ret = this._Erase_by_range(first, last);

			// RETURN BRANCHES
			if (is_reverse_iterator == true)
				return new SetReverseIterator<T>(ret.next());
			else
				return ret;
		}

		/**
		 * @hidden
		 */
		private _Erase_by_val(val: T): number
		{
			// TEST WHETHER EXISTS
			let it = this.find(val);
			if (it.equals(this.end()) == true)
				return 0;

			// ERASE
			this._Erase_by_iterator(it);
			return 1;
		}

		/**
		 * @hidden
		 */
		private _Erase_by_range(first: SetIterator<T>, last: SetIterator<T>): SetIterator<T>
		{
			// ERASE
			let it = this.data_.erase(first, last);
			
			// POST-PROCESS
			this._Handle_erase(first, last);

			return it; 
		}

		/* ---------------------------------------------------------
			UTILITY
		--------------------------------------------------------- */
		/**
		 * @hidden
		 */
		protected _Swap(obj: SetContainer<T>): void
		{
			[this.data_, obj.data_] = [obj.data_, this.data_];
		}

		public abstract merge<U extends T>(source: SetContainer<U>): void;

		/* ---------------------------------------------------------
			POST-PROCESS
		--------------------------------------------------------- */
		/**
		 * @hidden
		 */
		protected abstract _Handle_insert(first: SetIterator<T>, last: SetIterator<T>): void;

		/**
		 * @hidden
		 */
		protected abstract _Handle_erase(first: SetIterator<T>, last: SetIterator<T>): void;
	}

	/**
	 * @hidden
	 */
	export class _SetElementList<T> 
		extends _ListContainer<T, SetIterator<T>>
	{
		private associative_: SetContainer<T>;
		private rend_: SetReverseIterator<T>;

		public constructor(associative: SetContainer<T>)
		{
			super();

			this.associative_ = associative;
		}
		protected _Create_iterator(prev: SetIterator<T>, next: SetIterator<T>, val: T): SetIterator<T>
		{
			return new SetIterator<T>(this, prev, next, val);
		}
		protected _Set_begin(it: SetIterator<T>): void
		{
			super._Set_begin(it);
			this.rend_ = new SetReverseIterator<T>(it);
		}

		public associative(): SetContainer<T>
		{
			return this.associative_;
		}
		public rbegin(): SetReverseIterator<T>
		{
			return new SetReverseIterator<T>(this.end());
		}
		public rend(): SetReverseIterator<T>
		{
			return this.rend_;
		}
	}
}
