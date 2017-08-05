/// <reference path="../../API.ts" />

namespace std.base
{
	export abstract class Iterator<T> 
		implements IComparable<Iterator<T>>
	{
		/**
		 * @hidden
		 */
		protected source_: Container<T>;

		/* ---------------------------------------------------------
			CONSTRUCTORS
		--------------------------------------------------------- */
		protected constructor(source: Container<T>)
		{
			this.source_ = source;
		}

		/* ---------------------------------------------------------
			MOVERS
		--------------------------------------------------------- */
		public abstract prev(): Iterator<T>;

		public abstract next(): Iterator<T>;

		public abstract advance(n: number): Iterator<T>;

		/* ---------------------------------------------------------
			ACCESSORS
		--------------------------------------------------------- */
		public abstract source(): Container<T>;

		public equals(obj: Iterator<T>): boolean
		{
			return this.source_ == obj.source_;
		}
		
		public abstract get value(): T; // TS2.0 New Feature

		public abstract swap(obj: Iterator<T>): void;
	}
}

namespace std.base
{
	export abstract class ReverseIterator<T, Source extends Container<T>, Base extends Iterator<T>, This extends ReverseIterator<T, Source, Base, This>>
		extends Iterator<T>
		implements IComparable<ReverseIterator<T, Source, Base, This>>
	{
		/**
		 * @hidden
		 */
		protected base_: Base;

		/* ---------------------------------------------------------
			CONSTRUCTORS
		--------------------------------------------------------- */
		protected constructor(base: Base)
		{
			if (base == null)
				super(null);
			else
			{
				super(base.source());
				this.base_ = base.prev() as Base;
			}
		}

		// CREATE A NEW OBJECT WITH SAME (DERIVED) TYPE
		/**
		 * @hidden
		 */
		protected abstract _Create_neighbor(base: Base): This;

		/* ---------------------------------------------------------
			ACCESSORS
		--------------------------------------------------------- */
		public source(): Source
		{
			return this.source_ as Source;
		}

		public base(): Base
		{
			return this.base_.next() as Base;
		}
		
		public get value(): T
		{
			return this.base_.value;
		}

		/* ---------------------------------------------------------
			MOVERS
		--------------------------------------------------------- */
		public prev(): This
		{
			return this._Create_neighbor(this.base_);
		}

		public next(): This
		{
			return this._Create_neighbor(this.base().prev() as Base);
		}

		public advance(n: number): This
		{
			return this._Create_neighbor(this.base().advance(-n) as Base);
		}

		/* ---------------------------------------------------------
			COMPARES
		--------------------------------------------------------- */
		public equals(obj: This): boolean
		{
			return this.base_.equals(obj.base_);
		}

		public swap(obj: This): void
		{
			this.base_.swap(obj.base_);
		}
	}
}