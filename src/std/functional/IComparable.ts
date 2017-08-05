namespace std
{
	export interface IComparable<T>
		extends Object
	{
		equals(obj: T): boolean;

		less?(obj: T): boolean;

		hashCode?(): number;
	}
}