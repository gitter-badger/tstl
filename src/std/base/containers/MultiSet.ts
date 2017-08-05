/// <reference path="../../API.ts" />

/// <reference path="SetContainer.ts" />

namespace std.base
{
	export abstract class MultiSet<T>
		extends SetContainer<T>
	{
		/* ---------------------------------------------------------
			INSERT
		--------------------------------------------------------- */
		public insert(val: T): SetIterator<T>;

		public insert(hint: SetIterator<T>, val: T): SetIterator<T>;

		public insert(hint: SetReverseIterator<T>, val: T): SetReverseIterator<T>;

		public insert<U extends T, InputIterator extends Iterator<U>>
			(begin: InputIterator, end: InputIterator): void;

		public insert(...args: any[]): any
		{
			return super.insert.apply(this, args);
		}

		/* ---------------------------------------------------------
			UTILITY
		--------------------------------------------------------- */
		public merge<U extends T>(source: SetContainer<U>): void
		{
			this.insert<U, SetIterator<U>>(source.begin(), source.end());
			source.clear();
		}
	}
}