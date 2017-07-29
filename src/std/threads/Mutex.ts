/// <reference path="../API.ts" />

/// <reference path="../base/threads/MutexBase.ts" />

namespace std
{
	export class Mutex extends base.MutexBase<void, List<base.IResolver>>
	{
		/* ---------------------------------------------------------
			CONSTRUCTORS
		--------------------------------------------------------- */
		/**
		 * Default Constructor.
		 */
		public constructor()
		{
			super(new List<base.IResolver>());
		}

		protected _Resolve(resolve: base.IResolver<void>): void
		{
			resolve();
		}
	}
}
