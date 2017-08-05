/// <reference path="../API.ts" />

/// <reference path="../base/iterators/_ListIteratorBase.ts" />

namespace std
{
	export class SetIterator<T>
		extends base._ListIteratorBase<T>
		implements IComparable<SetIterator<T>>
	{
		/* ---------------------------------------------------------
			CONSTRUCTORS
		--------------------------------------------------------- */
		public constructor(source: base._SetElementList<T>, prev: SetIterator<T>, next: SetIterator<T>, val: T)
		{
			super(source, prev, next, val);
		}

		/* ---------------------------------------------------------
			ACCESSORS
		--------------------------------------------------------- */
		public source(): base.SetContainer<T>
		{
			return (this.source_ as base._SetElementList<T>).associative();
		}

		public prev(): SetIterator<T>
		{
			return this.prev_ as SetIterator<T>;
		}

		public next(): SetIterator<T>
		{
			return this.next_ as SetIterator<T>;
		}

		public advance(size: number): SetIterator<T>
		{
			return super.advance(size) as SetIterator<T>;
		}
		
		/* ---------------------------------------------------------
			COMPARISONS
		--------------------------------------------------------- */
		public less(obj: SetIterator<T>): boolean
		{
			return less(this.value, obj.value);
		}
		
		public equals(obj: SetIterator<T>): boolean 
		{
			return this == obj;
		}

		public hashCode(): number
		{
			return hash(this.value);
		}

		public swap(obj: SetIterator<T>): void
		{
			super.swap(obj);
		}
	}
}

namespace std
{
	export class SetReverseIterator<T>
		extends base.ReverseIterator<T, base.SetContainer<T>, SetIterator<T>, SetReverseIterator<T>>
		implements IComparable<SetReverseIterator<T>>
	{
		/* ---------------------------------------------------------
			CONSTRUCTORS
		--------------------------------------------------------- */
		public constructor(base: SetIterator<T>)
		{
			super(base);
		}

		/**
		 * @hidden
		 */
		protected _Create_neighbor(base: SetIterator<T>): SetReverseIterator<T>
		{
			return new SetReverseIterator<T>(base);
		}
	}
}
