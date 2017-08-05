/// <reference path="../API.ts" />

/// <reference path="../base/containers/UniqueMap.ts" />

namespace std.HashMap
{
	export type iterator<Key, T> = MapIterator<Key, T>;
	export type reverse_iterator<Key, T> = MapReverseIterator<Key, T>;
}

namespace std
{
	export class HashMap<Key, T>
		extends base.UniqueMap<Key, T>
		implements base.IHashMap<Key, T>
	{
		/**
		 * @hidden
		 */
		private hash_buckets_: base._MapHashBuckets<Key, T>;
	
		/* =========================================================
			CONSTRUCTORS & SEMI-CONSTRUCTORS
				- CONSTRUCTORS
				- ASSIGN & CLEAR
		============================================================
			CONSTURCTORS
		--------------------------------------------------------- */
		public constructor();

		public constructor(items: Pair<Key, T>[]);

		public constructor(array: [Key, T][]);

		public constructor(container: HashMap<Key, T>);

		public constructor(begin: base.Iterator<Pair<Key, T>>, end: base.Iterator<Pair<Key, T>>);

		public constructor(...args: any[])
		{
			// INIT MEMBERS
			super();
			this.hash_buckets_ = new base._MapHashBuckets<Key, T>(this);

			// BRANCH - METHOD OVERLOADINGS
			if (args.length == 0) 
			{
				// DO NOTHING
			}
			else if (args.length == 1 && args[0] instanceof HashMap)
			{
				// COPY CONSTRUCTOR
				let container: HashMap<Key, T> = args[0];

				this.assign(container.begin(), container.end());
			}
			else if (args.length == 1 && args[0] instanceof Array)
			{
				// INITIALIZER LIST CONSTRUCTOR
				let items: Pair<Key, T>[] = args[0];

				this.rehash(items.length * base._Hash.RATIO);
				this.push(...items);
			}
			else if (args.length == 2 && args[0] instanceof base.Iterator && args[1] instanceof base.Iterator)
			{
				// RANGE CONSTRUCTOR
				let first: base.Iterator<Pair<Key, T>> = args[0];
				let last: base.Iterator<Pair<Key, T>> = args[1];

				this.assign(first, last);
			}
		}
		
		/* ---------------------------------------------------------
			ASSIGN & CLEAR
		--------------------------------------------------------- */
		public clear(): void
		{
			this.hash_buckets_.clear();

			super.clear();
		}

		/* =========================================================
			ACCESSORS
				- MEMBER
				- HASH
		============================================================
			MEMBER
		--------------------------------------------------------- */
		public find(key: Key): MapIterator<Key, T>
		{
			return this.hash_buckets_.find(key);
		}

		public begin(): MapIterator<Key, T>;

		public begin(index: number): MapIterator<Key, T>;

		public begin(index: number = -1): MapIterator<Key, T>
		{
			if (index == -1)
				return super.begin();
			else
				return this.hash_buckets_.at(index).front();
		}

		public end(): MapIterator<Key, T>;

		public end(index: number): MapIterator<Key, T>

		public end(index: number = -1): MapIterator<Key, T>
		{
			if (index == -1)
				return super.end();
			else
				return this.hash_buckets_.at(index).back().next();
		}

		public rbegin(): MapReverseIterator<Key, T>;

		public rbegin(index: number): MapReverseIterator<Key, T>;

		public rbegin(index: number = -1): MapReverseIterator<Key, T>
		{
			if (index == -1)
				return super.rbegin();
			else
				return new MapReverseIterator<Key, T>(this.end(index));
		}

		public rend(): MapReverseIterator<Key, T>;

		public rend(index: number): MapReverseIterator<Key, T>;

		public rend(index: number = -1): MapReverseIterator<Key, T>
		{
			if (index == -1)
				return super.rend();
			else
				return new MapReverseIterator<Key, T>(this.begin(index));
		}

		/* ---------------------------------------------------------
			HASH
		--------------------------------------------------------- */
		public bucket_count(): number
		{
			return this.hash_buckets_.size();
		}

		public bucket_size(index: number): number
		{
			return this.hash_buckets_.at(index).size();
		}

		public max_load_factor(): number;

		public max_load_factor(z: number): void;

		public max_load_factor(z: number = -1): any
		{
			if (z == -1)
				return this.size() / this.bucket_count();
			else
				this.rehash(Math.ceil(this.bucket_count() / z));
		}

		public bucket(key: Key): number
		{
			return hash(key) % this.hash_buckets_.size();
		}

		public reserve(n: number): void
		{
			this.hash_buckets_.rehash(Math.ceil(n * this.max_load_factor()));
		}

		public rehash(n: number): void
		{
			if (n <= this.bucket_count())
				return;

			this.hash_buckets_.rehash(n);
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
		protected _Insert_by_pair(pair: Pair<Key, T>): Pair<MapIterator<Key, T>, boolean>
		{
			// TEST WHETHER EXIST
			let it: MapIterator<Key, T> = this.find(pair.first);
			if (it.equals(this.end()) == false)
				return make_pair(it, false);

			// INSERT
			this["data_"].push(pair);
			it = it.prev();

			// POST-PROCESS
			this._Handle_insert(it, it.next());

			return make_pair(it, true);
		}

		/**
		 * @hidden
		 */
		protected _Insert_by_hint(hint: MapIterator<Key, T>, pair: Pair<Key, T>): MapIterator<Key, T>
		{
			// FIND DUPLICATED KEY
			let it: MapIterator<Key, T> = this.find(pair.first);
			if (it.equals(this.end()) == true)
			{
				// INSERT
				it = this["data_"].insert(hint, pair);

				// POST-PROCESS
				this._Handle_insert(it, it.next());
			}
			return it;
		}

		/**
		 * @hidden
		 */
		protected _Insert_by_range<L extends Key, U extends T, InputIterator extends base.Iterator<Pair<L, U>>>
			(first: InputIterator, last: InputIterator): void
		{
			let my_first: MapIterator<Key, T> = this.end().prev();
			let size: number = 0;

			// INSERT ELEMENTS
			for (; !first.equals(last); first = first.next() as InputIterator)
			{
				// TEST WHETER EXIST
				if (this.has(first.value.first))
					continue;

				// INSERTS
				this["data_"].push(make_pair<Key, T>(first.value.first, first.value.second));
				size++;
			}
			my_first = my_first.next();

			// IF NEEDED, HASH_BUCKET TO HAVE SUITABLE SIZE
			if (this.size() + size > this.hash_buckets_.size() * base._Hash.MAX_RATIO)
				this.hash_buckets_.rehash((this.size() + size) * base._Hash.RATIO);

			// POST-PROCESS
			this._Handle_insert(my_first, this.end());
		}

		/* ---------------------------------------------------------
			POST-PROCESS
		--------------------------------------------------------- */
		/**
		 * @hidden
		 */
		protected _Handle_insert(first: MapIterator<Key, T>, last: MapIterator<Key, T>): void
		{
			for (; !first.equals(last); first = first.next())
				this.hash_buckets_.insert(first);
		}

		/**
		 * @hidden
		 */
		protected _Handle_erase(first: MapIterator<Key, T>, last: MapIterator<Key, T>): void
		{
			for (; !first.equals(last); first = first.next())
				this.hash_buckets_.erase(first);
		}

		/* ---------------------------------------------------------
			SWAP
		--------------------------------------------------------- */
		public swap(obj: HashMap<Key, T>): void;

		public swap(obj: base.Container<Pair<Key, T>>): void;

		public swap(obj: HashMap<Key, T> | base.Container<Pair<Key, T>>): void
		{
			if (obj instanceof HashMap)
			{
				this._Swap(obj);
				[this.hash_buckets_, obj.hash_buckets_] = [obj.hash_buckets_, this.hash_buckets_];
			}
			else
				super.swap(obj);
		}
	}
}