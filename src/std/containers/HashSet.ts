/// <reference path="../API.ts" />

/// <reference path="../base/containers/UniqueSet.ts" />

namespace std.HashSet
{
	export type iterator<T> = SetIterator<T>;
	export type reverse_iterator<T> = SetReverseIterator<T>;
}

namespace std
{
	export class HashSet<T>
		extends base.UniqueSet<T>
		implements base.IHashSet<T>
	{
		/**
		 * @hidden
		 */
		private hash_buckets_: base._SetHashBuckets<T>;

		/* =========================================================
			CONSTRUCTORS & SEMI-CONSTRUCTORS
				- CONSTRUCTORS
				- ASSIGN & CLEAR
		============================================================
			CONSTURCTORS
		--------------------------------------------------------- */
		public constructor();

		public constructor(items: T[]);

		public constructor(container: HashSet<T>);

		public constructor(begin: base.Iterator<T>, end: base.Iterator<T>);

		public constructor(...args: any[])
		{
			// INIT MEMBERS
			super();
			this.hash_buckets_ = new base._SetHashBuckets<T>(this);

			// BRANCH - METHOD OVERLOADINGS
			if (args.length == 0)
			{
				// DO NOTHING
			}
			else if (args.length == 1 && args[0] instanceof HashSet)
			{
				// COPY CONSTRUCTOR
				let container: HashSet<T> = args[0];

				this.assign(container.begin(), container.end());
			}
			else if (args.length == 1 && args[0] instanceof Array)
			{
				// INITIALIZER LIST CONSTRUCTOR
				let items: T[] = args[0];

				this.rehash(items.length * base._Hash.RATIO);
				this.push(...items);
			}
			else if (args.length == 2 && args[0] instanceof base.Iterator && args[1] instanceof base.Iterator)
			{
				// RANGE CONSTRUCTOR
				let first: base.Iterator<T> = args[0];
				let last: base.Iterator<T> = args[1];

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
		public find(key: T): SetIterator<T>
		{
			return this.hash_buckets_.find(key);
		}

		public begin(): SetIterator<T>;

		public begin(index: number): SetIterator<T>;

		public begin(index: number = -1): SetIterator<T>
		{
			if (index == -1)
				return super.begin();
			else
				return this.hash_buckets_.at(index).front();
		}

		public end(): SetIterator<T>;

		public end(index: number): SetIterator<T>

		public end(index: number = -1): SetIterator<T>
		{
			if (index == -1)
				return super.end();
			else
				return this.hash_buckets_.at(index).back().next();
		}

		public rbegin(): SetReverseIterator<T>;

		public rbegin(index: number): SetReverseIterator<T>;

		public rbegin(index: number = -1): SetReverseIterator<T>
		{
			if (index == -1)
				return super.rbegin();
			else
				return new SetReverseIterator<T>(this.end(index));
		}

		public rend(): SetReverseIterator<T>;

		public rend(index: number): SetReverseIterator<T>;

		public rend(index: number = -1): SetReverseIterator<T>
		{
			if (index == -1)
				return super.rend();
			else
				return new SetReverseIterator<T>(this.begin(index));
		}

		/* ---------------------------------------------------------
			HASH
		--------------------------------------------------------- */
		public bucket_count(): number
		{
			return this.hash_buckets_.size();
		}

		public bucket_size(n: number): number
		{
			return this.hash_buckets_.at(n).size();
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

		public bucket(key: T): number
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
		protected _Insert_by_val(val: T): Pair<SetIterator<T>, boolean>
		{
			// TEST WHETHER EXIST
			let it: SetIterator<T> = this.find(val);
			if (it.equals(this.end()) == false)
				return make_pair(it, false);

			// INSERT
			this["data_"].push(val);
			it = it.prev();

			// POST-PROCESS
			this._Handle_insert(it, it.next());

			return make_pair(it, true);
		}

		/**
		 * @hidden
		 */
		protected _Insert_by_hint(hint: SetIterator<T>, val: T): SetIterator<T>
		{
			// FIND DUPLICATED KEY
			let it: SetIterator<T> = this.find(val);
			if (it.equals(this.end()) == true)
			{
				// INSERT
				it = this["data_"].insert(hint, val);

				// POST-PROCESS
				this._Handle_insert(it, it.next());
			}
			return it;
		}

		/**
		 * @hidden
		 */
		protected _Insert_by_range<U extends T, InputIterator extends base.Iterator<U>>
			(first: InputIterator, last: InputIterator): void
		{
			let my_first: SetIterator<T> = this.end().prev();
			let size: number = 0;

			for (; !first.equals(last); first = first.next() as InputIterator)
			{
				// TEST WHETER EXIST
				if (this.has(first.value))
					continue;
				
				// INSERTS
				this["data_"].push(first.value);
				size++;
			}
			my_first = my_first.next();
			
			// IF NEEDED, HASH_BUCKET TO HAVE SUITABLE SIZE
			if (this.size() + size > this.hash_buckets_.size() * base._Hash.MAX_RATIO)
				this.hash_buckets_.rehash((this.size() + size) * base._Hash.RATIO);

			// INSERTS
			this._Handle_insert(my_first, this.end());
		}

		/* ---------------------------------------------------------
			POST-PROCESS
		--------------------------------------------------------- */
		/**
		 * @hidden
		 */
		protected _Handle_insert(first: SetIterator<T>, last: SetIterator<T>): void
		{
			for (; !first.equals(last); first = first.next())
				this.hash_buckets_.insert(first);
		}

		/**
		 * @hidden
		 */
		protected _Handle_erase(first: SetIterator<T>, last: SetIterator<T>): void
		{
			for (; !first.equals(last); first = first.next())
				this.hash_buckets_.erase(first);
		}

		/* ---------------------------------------------------------
			SWAP
		--------------------------------------------------------- */
		public swap(obj: HashSet<T>): void;

		public swap(obj: base.Container<T>): void;

		public swap(obj: HashSet<T> | base.Container<T>): void
		{
			if (obj instanceof HashSet)
			{
				this._Swap(obj);
				[this.hash_buckets_, obj.hash_buckets_] = [obj.hash_buckets_, this.hash_buckets_];
			}
			else
				super.swap(obj);
		}
	}
}