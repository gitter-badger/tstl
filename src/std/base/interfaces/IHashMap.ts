namespace std.base
{
    export interface IHashMap<Key, T>
        extends MapContainer<Key, T>
	{
		bucket_count(): number;

		bucket_size(n: number): number;

		max_load_factor(): number;

		max_load_factor(z: number): void;

		bucket(key: Key): number;

		reserve(n: number): void;

		rehash(n: number): void;
	}
}