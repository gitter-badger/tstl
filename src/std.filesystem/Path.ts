/// <reference path="API.ts" />

namespace std.filesystem
{
	export class Path
	{
		private elements_: std.Vector<string>;

		/* ---------------------------------------------------------
			CONSTRUCTORS
		--------------------------------------------------------- */
		/**
		 * Default Constructor.
		 */
		public constructor();

		public constructor(str: string);

		public constructor(path: Path);

		public constructor(first: VectorIterator<string>, last: VectorIterator<string>)

		public constructor(...items: any[])
		{

		}

		public assign(first: VectorIterator<string>, last: VectorIterator<string>): void;

		public assign(...items: any[])
		{
			
		}

		/* =========================================================
			ACCESSORS
				- QUERIES
				- DECOMPOSITIONS
		============================================================
			QUERIES
		--------------------------------------------------------- */
		public empty(): boolean
		{
			return this.elements_.empty();
		}

		public begin(): VectorIterator<string>
		{
			return this.elements_.begin();
		}
	
		public end(): VectorIterator<string>
		{
			return this.elements_.end();
		}

		/* ---------------------------------------------------------
			DECOMPOSITIONS
		--------------------------------------------------------- */
		public filename(): string
		{
			return this.elements_.back();
		}

		public extension(): string
		{
			let filename: string = this.filename();
			let index: number = filename.lastIndexOf(".");

			if (index == -1)
				return "";
			else
				return filename.substr(index + 1);
		}
	}
}