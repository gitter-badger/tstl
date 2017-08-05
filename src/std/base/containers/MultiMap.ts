/// <reference path="../../API.ts" />

/// <reference path="MapContainer.ts" />

namespace std.base
{
	export abstract class MultiMap<Key, T>
		extends MapContainer<Key, T>
	{
		/* ---------------------------------------------------------
			INSERT
		--------------------------------------------------------- */
		public emplace(key: Key, value: T): MapIterator<Key, T>;

		public emplace(pair: Pair<Key, T>): MapIterator<Key, T>;

		public emplace(...args: any[]): MapIterator<Key, T>
		{
			if (args.length == 1)
				return this._Insert_by_pair(args[0]);
			else
				return this._Insert_by_pair(make_pair<Key, T>(args[0], args[1]));
		}

		public insert(pair: Pair<Key, T>): MapIterator<Key, T>;

		public insert<L extends Key, U extends T>(tuple: [L, U]): MapIterator<Key, T>;

		public insert(hint: MapIterator<Key, T>, pair: Pair<Key, T>): MapIterator<Key, T>;

		public insert(hint: MapReverseIterator<Key, T>, pair: Pair<Key, T>): MapReverseIterator<Key, T>;

		public insert<L extends Key, U extends T>
			(hint: MapIterator<Key, T>, tuple: [L, U]): MapIterator<Key, T>;

		public insert<L extends Key, U extends T>
			(hint: MapReverseIterator<Key, T>, tuple: [L, U]): MapReverseIterator<Key, T>;

		public insert<L extends Key, U extends T, InputIterator extends Iterator<Pair<L, U>>>
			(first: InputIterator, last: InputIterator): void

		public insert(...args: any[]): any
		{
			return super.insert.apply(this, args);
		}

		/* ---------------------------------------------------------
			UTILITY
		--------------------------------------------------------- */
		public merge<L extends Key, U extends T>(source: MapContainer<L, U>): void
		{
			this.insert<L, U, MapIterator<L, U>>(source.begin(), source.end());
			source.clear();
		}
	}
}