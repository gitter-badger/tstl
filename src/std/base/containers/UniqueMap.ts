/// <reference path="../../API.ts" />

/// <reference path="MapContainer.ts" />

namespace std.base
{
	export abstract class UniqueMap<Key, T>
		extends MapContainer<Key, T>
	{
		/* ---------------------------------------------------------
			ACCESSORS
		--------------------------------------------------------- */
		public count(key: Key): number
		{
			return this.find(key).equals(this.end()) ? 0 : 1;
		}

		public get(key: Key): T
		{
			let it = this.find(key);
			if (it.equals(this.end()) == true)
				throw new OutOfRange("unable to find the matched key.");

			return it.second;
		}

		public set(key: Key, val: T): void
		{
			this.insert_or_assign(key, val);
		}

		/* ---------------------------------------------------------
			INSERT
		--------------------------------------------------------- */
		public emplace(key: Key, value: T): Pair<MapIterator<Key, T>, boolean>;

		public emplace(pair: Pair<Key, T>): Pair<MapIterator<Key, T>, boolean>;

		public emplace(...args: any[]): Pair<MapIterator<Key, T>, boolean>
		{
			if (args.length == 1)
				return this._Insert_by_pair(args[0]);
			else
				return this._Insert_by_pair(make_pair<Key, T>(args[0], args[1]));
		}

		public insert(pair: Pair<Key, T>): Pair<MapIterator<Key, T>, boolean>;
		
		public insert<L extends Key, U extends T>
			(tuple: [L, U]): Pair<MapIterator<Key, T>, boolean>;

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

		public insert_or_assign(key: Key, value: T): Pair<MapIterator<Key, T>, boolean>;

		public insert_or_assign(hint: MapIterator<Key, T>, key: Key, value: T): MapIterator<Key, T>;

		public insert_or_assign(hint: MapReverseIterator<Key, T>, key: Key, value: T): MapReverseIterator<Key, T>;

		public insert_or_assign(...args: any[]): any
		{
			if (args.length == 2)
			{
				return this._Insert_or_assign_with_key_value(args[0], args[1]);
			}
			else if (args.length == 3)
			{
				let ret: MapIterator<Key, T>;
				let is_reverse_iterator: boolean = false;

				// REVERSE_ITERATOR TO ITERATOR
				if (args[0] instanceof MapReverseIterator)
				{
					is_reverse_iterator = true;
					args[0] = (args[0] as MapReverseIterator<Key, T>).base().prev();
				}

				// INSERT OR ASSIGN AN ELEMENT
				ret = this._Insert_or_assign_with_hint(args[0], args[1], args[2]);

				// RETURN BRANCHES
				if (is_reverse_iterator == true)
					return new MapReverseIterator<Key, T>(ret.next());
				else
					return ret;
			}
		}

		/**
		 * @hidden
		 */
		private _Insert_or_assign_with_key_value(key: Key, value: T): Pair<MapIterator<Key, T>, boolean>
		{
			let it = this.find(key);

			if (it.equals(this.end()) == true)
				return this._Insert_by_pair(make_pair(key, value));
			else
			{
				it.second = value;
				return make_pair(it, false);
			}
		}

		/**
		 * @hidden
		 */
		private _Insert_or_assign_with_hint(hint: MapIterator<Key, T>, key: Key, value: T): MapIterator<Key, T>
		{
			return this._Insert_or_assign_with_key_value(key, value).first;
		}

		/* ---------------------------------------------------------
			ERASE
		--------------------------------------------------------- */
		public extract(key: Key): Pair<Key, T>;

		public extract(it: MapIterator<Key, T>): MapIterator<Key, T>;

		public extract(it: MapReverseIterator<Key, T>): MapReverseIterator<Key, T>;

		public extract(param: Key | MapIterator<Key, T> | MapReverseIterator<Key, T>): any
		{
			if (param instanceof MapIterator)
				return this._Extract_by_iterator(param);
			else if (param instanceof MapReverseIterator)
				return this._Extract_by_reverse_iterator(param);
			else
				return this._Extract_by_key(param);
		}

		/**
		 * @hidden
		 */
		private _Extract_by_key(key: Key): Pair<Key, T>
		{
			let it = this.find(key);
			if (it.equals(this.end()) == true)
				throw new OutOfRange("No such key exists.");

			let ret: Pair<Key, T> = it.value;
			this.erase(it);

			return ret;
		}

		/**
		 * @hidden
		 */
		private _Extract_by_iterator(it: MapIterator<Key, T>): MapIterator<Key, T>
		{
			if (it.equals(this.end()) == true)
				return this.end();

			this.erase(it);
			return it;
		}

		/**
		 * @hidden
		 */
		private _Extract_by_reverse_iterator(it: MapReverseIterator<Key, T>): MapReverseIterator<Key, T>
		{
			this._Extract_by_iterator(it.base().next());
			return it;
		}

		/* ---------------------------------------------------------
			UTILITY
		--------------------------------------------------------- */
		public merge<L extends Key, U extends T>(source: MapContainer<L, U>): void
		{
			for (let it = source.begin(); !it.equals(source.end());)
			{
				if (this.has(it.first) == false)
				{
					this.insert(it.value);
					it = source.erase(it);
				}
				else
					it = it.next();
			}
		}
	}
}