namespace std.base
{
    export interface ITreeSet<T>
        extends SetContainer<T>
	{
		key_comp(): (x: T, y: T) => boolean;

		value_comp(): (x: T, y: T) => boolean;

		lower_bound(val: T): SetIterator<T>;

		upper_bound(val: T): SetIterator<T>;

		equal_range(val: T): Pair<SetIterator<T>, SetIterator<T>>;
	}
}