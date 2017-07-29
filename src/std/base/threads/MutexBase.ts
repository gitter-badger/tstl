/// <reference path="../../API.ts" />

namespace std.base
{
	export abstract class MutexBase<Ret, Listeners extends Container<IResolver<Ret>>> 
		implements ILockable
	{
		protected lock_count_: number;
		protected listeners_: Listeners;

		/* ---------------------------------------------------------
			CONSTRUCTORS
		--------------------------------------------------------- */
		/**
		 * Default Constructor.
		 */
		protected constructor(listeners: Listeners)
		{
			this.lock_count_ = 0;
			this.listeners_ = listeners;
		}

		protected abstract _Resolve(resolve: IResolver<Ret>): void;

		/* ---------------------------------------------------------
			LOCK & UNLOCK
		--------------------------------------------------------- */
		public lock(): Promise<void>
		{
			return new Promise<void>(resolve =>
			{
				this._Lock(resolve as any);
			});
		}

		protected _Lock(listener: IResolver<Ret>): boolean
		{
			if (this.lock_count_++ == 0)
			{
				this._Resolve(listener);
				return true;
			}
			else
			{
				this.listeners_.push(listener);
				return false;
			}
		}

		/**
		 * Lock mutex if not locked.
		 * 
		 * Attempts to lock the mutex, without blocking:
		 */
		public try_lock(): boolean
		{
			if (this.lock_count_ != 0)
				return false; // HAVE LOCKED
			
			++this.lock_count_;
			return true;			
		}

		public unlock(): void
		{
			if (this.lock_count_ == 0)
				throw new RangeError("This mutex is free.");

			--this.lock_count_; // DECREASE LOCKED COUNT
			if (this.listeners_.empty() == false)
			{
				let fn: IResolver<Ret> = this.listeners_.begin().value;
				
				this.listeners_.erase(this.listeners_.begin()); // POP FIRST
				this._Resolve(fn); // AND CALL LATER
			}
		}
	}
}
