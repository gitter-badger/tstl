namespace std.base
{
    export interface ITreeMap<Key, T>
        extends MapContainer<Key, T>
	{
		key_comp(): (x: Key, y: Key) => boolean;

		value_comp(): (x: Pair<Key, T>, y: Pair<Key, T>) => boolean;

		lower_bound(key: Key): MapIterator<Key, T>;

		upper_bound(key: Key): MapIterator<Key, T>;

		equal_range(key: Key): Pair<MapIterator<Key, T>, MapIterator<Key, T>>;
	}
}