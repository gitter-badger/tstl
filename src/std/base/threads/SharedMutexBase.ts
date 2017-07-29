/// <reference path="../../API.ts" />

namespace std.base
{
	export class SharedMutexBase<Listeners extends Container<Pair<IMutexListener, boolean>>>
		implements ILockable
	{
		/**
		 * @hidden
		 */
		protected read_lock_count_: number;

		/**
		 * @hidden
		 */
		protected write_lock_count_: number;

		/**
		 * @hidden
		 */
		protected listeners_: Listeners;

		/* ---------------------------------------------------------
			CONSTRUCTORS
		--------------------------------------------------------- */
		/**
		 * Default Constructor.
		 */
		protected constructor(listeners: Listeners)
		{
			this.read_lock_count_ = 0;
			this.write_lock_count_ = 0;

			this.listeners_ = listeners;
		}

		/* =========================================================
			LOCK & UNLOCK
				- WRITE LOCK
				- READ LOCK
		============================================================
			WRITE LOCK
		--------------------------------------------------------- */
		public lock(): Promise<void>
		{
			return new Promise<void>(resolve =>
			{
				if (this.read_lock_count_ == 0 && this.write_lock_count_++ == 0)
					resolve();
				else
					this.listeners_.push(make_pair(resolve, false));
			});
		}

		public try_lock(): boolean
		{
			if (this.write_lock_count_ != 0 || this.read_lock_count_ != 0)
				return false;

			this.write_lock_count_++;
			return true;
		}

		public unlock(): void
		{
			if (this.write_lock_count_ == 0)
				throw new RangeError("This mutex is free on the unique lock.");

			while (this.listeners_.empty() == false)
			{
				// PARAMETERS
				let pair = this.listeners_.begin().value;
				let fn: IMutexListener = pair.first;
				let is_write_lock: boolean = pair.second;

				this.listeners_.erase(this.listeners_.begin()); // POP FIRST
				fn(); // AND CALL LATER

				// UNTIL MEET THE WRITE LOCK
				if (is_write_lock)
					break;
			}
			this.write_lock_count_--;
		}

		/* ---------------------------------------------------------
			READ LOCK
		--------------------------------------------------------- */
		public lock_shared(): Promise<void>
		{
			return new Promise<void>(resolve =>
			{
				++this.read_lock_count_;
				
				if (this.write_lock_count_ == 0)
					resolve();
				else
					this.listeners_.push(make_pair(resolve, true));
			});
		}

		public try_lock_shared(): boolean
		{
			if (this.write_lock_count_ != 0)
				return false;
			
			++this.read_lock_count_;
			return true;
		}

		public unlock_shared(): void
		{
			if (this.read_lock_count_ == 0)
				throw new RangeError("This mutex is free on the shared lock.");

			--this.read_lock_count_;

			if (this.listeners_.empty() == false)
			{ 
				// MUST BE WRITE LOCK
				let fn: IMutexListener = this.listeners_.begin().value.first;

				this.listeners_.erase(this.listeners_.begin()); // POP FIRST
				fn(); // AND CALL LATER
			}
		}
	}
}
