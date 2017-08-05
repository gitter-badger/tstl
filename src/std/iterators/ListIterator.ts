/// <reference path="../API.ts" />

/// <reference path="../base/iterators/_ListIteratorBase.ts" />

namespace std
{
	export class ListIterator<T>
		extends base._ListIteratorBase<T>
		implements IComparable<ListIterator<T>>
	{
		/* ---------------------------------------------------------------
			CONSTRUCTORS
		--------------------------------------------------------------- */
		public constructor(source: List<T>, prev: ListIterator<T>, next: ListIterator<T>, value: T)
		{
			super(source, prev, next, value);
		}

		/* ---------------------------------------------------------------
			ACCESSORS
		--------------------------------------------------------------- */
		public source(): List<T>
		{
			return this.source_ as List<T>;
		}

		public get value(): T
		{
			return this.value_;
		}

		public set value(val: T)
		{
			this.value_ = val;
		}

		/* ---------------------------------------------------------
			MOVERS
		--------------------------------------------------------- */
		public prev(): ListIterator<T>
		{
			return this.prev_ as ListIterator<T>;
		}

		public next(): ListIterator<T>
		{
			return this.next_ as ListIterator<T>;
		}

		public advance(step: number): ListIterator<T>
		{
			return super.advance(step) as ListIterator<T>;
		}

		/* ---------------------------------------------------------------
			COMPARISON
		--------------------------------------------------------------- */
		public equals(obj: ListIterator<T>): boolean
		{
			return this == obj;
		}

		public swap(obj: ListIterator<T>): void
		{
			super.swap(obj);
		}
	}
}

namespace std
{
	export class ListReverseIterator<T>
		extends base.ReverseIterator<T, List<T>, ListIterator<T>, ListReverseIterator<T>>
		implements base.ILinearIterator<T>, IComparable<ListReverseIterator<T>>
	{
		/* ---------------------------------------------------------------
			CONSTRUCTORS
		--------------------------------------------------------------- */
		public constructor(base: ListIterator<T>)
		{
			super(base);
		}

		/**
		 * @hidden
		 */
		protected _Create_neighbor(base: ListIterator<T>): ListReverseIterator<T>
		{
			return new ListReverseIterator<T>(base);
		}

		/* ---------------------------------------------------------
			ACCESSORS
		--------------------------------------------------------- */
		public get value(): T
		{
			return this.base_.value;
		}

		public set value(val: T)
		{
			this.base_.value = val;
		}
	}
}

