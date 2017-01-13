/// <reference path="API.ts" />

/// <reference path="Iterator.ts" />

namespace std
{
	export class ArrayIterator<T>
		extends Iterator<T>
		implements base.IArrayIterator<T>
	{
		/**
		 * @hidden
		 */
		private index_: number;

		/* ---------------------------------------------------------
			CONSTRUCTORS
		--------------------------------------------------------- */
		/**
		 * Initializer Constructor.
		 *
		 * #### Note
		 * Do not create the iterator directly, by yourself.
		 *
		 * Use {@link begin std.begin()}, {@link end std.end()} instead.
		 * 
		 * @param source The source array to reference.
		 * @param index Sequence number of the element in the source array.
		 */
		public constructor(source: Array<T>, index: number)
		{
			super(source);

			this.index_ = index;
		}

		/* ---------------------------------------------------------
			ACCESSORS
		--------------------------------------------------------- */
		/**
		 * @inheritdoc
		 */
		public source(): Array<T>
		{
			return this.source_ as any as Array<T>;
		}

		/**
		 * @inheritdoc
		 */
		public get value(): T
		{
			return this.source()[this.index_];
		}

		/**
		 * Set value of the iterator is pointing to.
		 * 
		 * @param val Value to set.
		 */
		public set value(val: T)
		{
			this.source()[this.index_] = val;
		}

		/**
		 * Get index.
		 */
		public index(): number
		{
			return this.index_;
		}

		/* ---------------------------------------------------------
			MOVERS
		--------------------------------------------------------- */
		/**
		 * @inheritdoc
		 */
		public prev(): ArrayIterator<T>
		{
			if (this.index_ == -1)
				return new ArrayIterator(this.source(), this.source().length - 1);
			else if (this.index_ - 1 < 0)
				return new ArrayIterator<T>(this.source(), -1);
			else
				return new ArrayIterator<T>(this.source(), this.index_ - 1);
		}

		/**
		 * @inheritdoc
		 */
		public next(): ArrayIterator<T>
		{
			if (this.index_ >= this.source().length - 1)
				return new ArrayIterator<T>(this.source(), -1);
			else
				return new ArrayIterator<T>(this.source(), this.index_ + 1);
		}

		/**
		 * @inheritdoc
		 */
		public advance(n: number): ArrayIterator<T>
		{
			let new_index: number;
			if (n < 0 && this.index_ == -1)
				new_index = this.source().length + n;
			else
				new_index = this.index_ + n;

			if (new_index < 0 || new_index >= this.source().length)
				return new ArrayIterator<T>(this.source(), -1);
			else
				return new ArrayIterator<T>(this.source(), new_index);
		}

		/* ---------------------------------------------------------
			COMPARES
		--------------------------------------------------------- */
		/**
		 * @inheritdoc
		 */
		public equals(obj: ArrayIterator<T>): boolean
		{
			return super.equals(obj) && this.index_ == obj.index_;
		}

		/**
		 * @inheritdoc
		 */
		public swap(obj: ArrayIterator<T>): void
		{
			[this.value, obj.value] = [obj.value, this.value];
		}
	}
}

namespace std
{
	export class ArrayReverseIterator<T>
		extends ReverseIterator<T, Array<T>, ArrayIterator<T>, ArrayReverseIterator<T>>
		implements base.IArrayIterator<T>
	{
		/* ---------------------------------------------------------
			CONSTRUCTORS
		--------------------------------------------------------- */
		/**
		 * Construct from base iterator.
		 * 
		 * @param base A reference of the base iterator, which iterates in the opposite direction.
		 */
		public constructor(base: ArrayIterator<T>)
		{
			super(base);
		}

		/**
		 * @hidden
		 */
		protected _Create_neighbor(base: ArrayIterator<T>): ArrayReverseIterator<T>
		{
			return new ArrayReverseIterator<T>(base);
		}

		/* ---------------------------------------------------------
			ACCESSORS
		--------------------------------------------------------- */
		/**
		 * @inheritdoc
		 */
		public get value(): T
		{
			return this.base_.value;
		}

		/**
		 * Set value of the iterator is pointing to.
		 * 
		 * @param val Value to set.
		 */
		public set value(val: T)
		{
			this.base_.value = val;
		}

		/**
		 * Get index.
		 */
		public index(): number
		{
			return this.base_.index();
		}
	}
}