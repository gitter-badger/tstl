/// <reference path="../API.ts" />

/// <reference path="../base/iterators/_ListIteratorBase.ts" />

namespace std
{
	export class MapIterator<Key, T>
		extends base._ListIteratorBase<Pair<Key, T>>
		implements IComparable<MapIterator<Key, T>>
	{
		/* ---------------------------------------------------------
			CONSTRUCTORS
		--------------------------------------------------------- */
		public constructor(source: base._MapElementList<Key, T>, prev: MapIterator<Key, T>, next: MapIterator<Key, T>, val: Pair<Key, T>)
		{
			super(source, prev, next, val);
		}

		/* ---------------------------------------------------------
			MOVERS
		--------------------------------------------------------- */
		public prev(): MapIterator<Key, T>
		{
			return this.prev_ as MapIterator<Key, T>;
		}

		public next(): MapIterator<Key, T>
		{
			return this.next_ as MapIterator<Key, T>;
		}

		public advance(step: number): MapIterator<Key, T>
		{
			return super.advance(step) as MapIterator<Key, T>;
		}

		/* ---------------------------------------------------------
			ACCESSORS
		--------------------------------------------------------- */
		/**
		 * @hidden
		 */
		public source(): base.MapContainer<Key, T>
		{
			return (this.source_ as base._MapElementList<Key, T>).associative();
		}

		public get first(): Key
		{
			return this.value.first;
		}

		public get second(): T
		{
			return this.value.second;
		}

		public set second(val: T)
		{
			this.value.second = val;
		}

		/* ---------------------------------------------------------
			COMPARISONS
		--------------------------------------------------------- */
		public less(obj: MapIterator<Key, T>): boolean
		{
			return less(this.first, obj.first);
		}
		
		public equals(obj: MapIterator<Key, T>): boolean 
		{
			return this == obj;
		}

		public hashCode(): number
		{
			return hash(this.first);
		}

		public swap(obj: MapIterator<Key, T>): void
		{
			super.swap(obj);
		}
	}
}

namespace std
{
	export class MapReverseIterator<Key, T>
		extends base.ReverseIterator<Pair<Key, T>, base.MapContainer<Key, T>, MapIterator<Key, T>, MapReverseIterator<Key, T>>
		implements IComparable<MapReverseIterator<Key, T>>
	{
		/* ---------------------------------------------------------
			CONSTRUCTORS
		--------------------------------------------------------- */
		public constructor(base: MapIterator<Key, T>)
		{
			super(base);
		}

		/**
		 * @hidden
		 */
		protected _Create_neighbor(base: MapIterator<Key, T>): MapReverseIterator<Key, T>
		{
			return new MapReverseIterator<Key, T>(base);
		}

		/* ---------------------------------------------------------
			ACCESSORS
		--------------------------------------------------------- */
		public get first(): Key
		{
			return this.base_.first;
		}

		public get second(): T
		{
			return this.base_.second;
		}

		public set second(val: T)
		{
			this.base_.second = val;
		}
	}
}
