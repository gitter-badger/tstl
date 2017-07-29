/// <reference path="../API.ts" />

/// <reference path="../base/threads/MutexBase.ts" />

namespace std
{
	export class TimedMutex extends base.MutexBase<boolean, HashSet<base.IResolver<boolean>>>
	{
		/* ---------------------------------------------------------
			CONSTRUCTORS
		--------------------------------------------------------- */
		/**
		 * Default Constructor.
		 */
		public constructor()
		{
			super(new HashSet<base.IResolver<boolean>>());
		}

		protected _Resolve(listener: base.IResolver<boolean>): void
		{
			listener(true);
		}

		/* ---------------------------------------------------------
			TIMED LOCK
		--------------------------------------------------------- */
		public try_lock_for(ms: number): Promise<boolean>
		{
			return new Promise<boolean>(resolve =>
			{
				if (this._Lock(resolve) == true)
					return;

				// DO LOCK
				this.listeners_.insert(resolve);

				// AUTOMATIC UNLOCK
				sleep_for(ms).then(() =>
				{
					if (this.listeners_.has(resolve) == false)
						return; // HAVE OR HAD LOCKED

					// NOT LOCKED YET - RELEASE
					this.listeners_.erase(resolve); // POP THE LISTENER
					--this.lock_count_; // DECREASE THE LOCKED COUNT

					resolve(false); // RETURN FAILURE
				});
			});
		}
		
		public try_lock_until(at: Date): Promise<boolean>
		{
			let now: Date = new Date();
			let ms: number = at.getTime() - now.getTime(); // MILLISECONDS TO WAIT

			return this.try_lock_for(ms);
		}
	}
}
