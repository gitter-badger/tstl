/// <reference path="../API.ts" />

/// <reference path="../base/threads/SharedMutexBase.ts" />

namespace std
{
	export class SharedMutex extends base.SharedMutexBase<List<Pair<base.IResolver, boolean>>>
	{
		/* ---------------------------------------------------------
			CONSTRUCTORS
		--------------------------------------------------------- */
		/**
		 * Default Constructor.
		 */
		public constructor()
		{
			super(new List<Pair<base.IResolver, boolean>>());
		}
	}
}
