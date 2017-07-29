namespace std.base
{
	export interface IResolver<T = void>
	{
		(value?: T | PromiseLike<T>): void;
	}
}