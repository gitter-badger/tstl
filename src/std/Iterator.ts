/// <reference path="API.ts" />

// base.Iterator definitions.
//
// @reference http://www.cplusplus.com/reference/iterator
// @author Jeongho Nam <http://samchon.org>

namespace std
{
	/* =========================================================
		GLOBAL FUNCTIONS
			- ACCESSORS
			- MOVERS
			- FACTORY
	============================================================
		ACCESSORS
	--------------------------------------------------------- */
	export function size<T>(container: base.Container<T>): number
	{
		return container.size();
	}

	export function empty<T>(container: base.Container<T>): boolean
	{
		return container.empty();
	}

	export function distance<T, InputIterator extends base.Iterator<T>>
		(first: InputIterator, last: InputIterator): number
	{
		if ((<any>first).index != undefined)
			return _Distance_via_index(<any>first, <any>last);

		let length: number = 0;
		for (; !first.equals(last); first = first.next() as InputIterator)
			length++;

		return length;
	}

	/**
	 * @hidden
	 */
	function _Distance_via_index<T>(first: base.IArrayIterator<T>, last: base.IArrayIterator<T>): number
	{
		return Math.abs(last.index() - first.index());
	}

	/* ---------------------------------------------------------
		ACCESSORS
	--------------------------------------------------------- */
	export function advance<T, InputIterator extends base.Iterator<T>>
		(it: InputIterator, n: number): InputIterator
	{
		return it.advance(n) as InputIterator;
	}
	
	export function prev<T, BidirectionalIterator extends base.Iterator<T>>
		(it: BidirectionalIterator, n: number = 1): BidirectionalIterator
	{
		return it.advance(-n) as BidirectionalIterator;
	}
	
	export function next<T, ForwardIterator extends base.Iterator<T>>
		(it: ForwardIterator, n: number = 1): ForwardIterator
	{	
		return it.advance(n) as ForwardIterator;
	}

	/* ---------------------------------------------------------
		FACTORY
	--------------------------------------------------------- */
	export function begin<T>(container: base.Container<T>): base.Iterator<T>;
	export function begin<T>(container: Vector<T>): VectorIterator<T>;
	export function begin<T>(container: List<T>): ListIterator<T>;
	export function begin<T>(container: Deque<T>): DequeIterator<T>;
	export function begin<T>(container: base.SetContainer<T>): SetIterator<T>;
	export function begin<Key, T>(container: base.MapContainer<Key, T>): MapIterator<Key, T>;

	// typedef is not specified in TypeScript yet.
	// Instead, I listed all the containers and its iterators as overloaded functions
	export function begin(container: any): any
	{
		return container.begin();
	}

	export function rbegin<T, Source extends base.IArrayContainer<T>>
		(container: base.ArrayContainer<T, Source>): base.ArrayReverseIterator<T, Source>;
	export function rbegin<T>(container: List<T>): ListReverseIterator<T>;
	export function rbegin<T>(container: base.SetContainer<T>): SetReverseIterator<T>;
	export function rbegin<Key, T>(container: base.MapContainer<Key, T>): MapReverseIterator<Key, T>;

	export function rbegin(container: any): any
	{
		return container.rbegin();
	}
	
	export function end<T>(container: base.Container<T>): base.Iterator<T>;
	export function end<T>(container: Vector<T>): VectorIterator<T>;
	export function end<T>(container: List<T>): ListIterator<T>;
	export function end<T>(container: Deque<T>): DequeIterator<T>;
	export function end<T>(container: base.SetContainer<T>): SetIterator<T>;
	export function end<Key, T>(container: base.MapContainer<Key, T>): MapIterator<Key, T>;

	export function end(container: any): any
	{
		return container.end();
	}

	export function rend<T>(container: base.Container<T>): base.IReverseIterator<T>;
	export function rend<T, Source extends base.IArrayContainer<T>>
		(container: base.ArrayContainer<T, Source>): base.ArrayReverseIterator<T, Source>;
	export function rend<T>(container: List<T>): ListReverseIterator<T>;
	export function rend<T>(container: base.SetContainer<T>): SetReverseIterator<T>;
	export function rend<Key, T>(container: base.MapContainer<Key, T>): MapReverseIterator<Key, T>;

	export function rend(container: any): any
	{
		return container.rend();
	}

	export function make_reverse_iterator<T, Source extends base.IArrayContainer<T>>
		(it: base.ArrayIterator<T, Source>): base.ArrayReverseIterator<T, Source>;
	export function make_reverse_iterator<T>(it: ListIterator<T>): ListReverseIterator<T>;
	export function make_reverse_iterator<T>(it: SetIterator<T>): SetReverseIterator<T>;
	export function make_reverse_iterator<Key, T>(it: MapIterator<Key, T>): MapReverseIterator<Key, T>;
	
	export function make_reverse_iterator(it: any): any
	{
		if (it instanceof base.ArrayIterator)
			return new base.ArrayReverseIterator<any, base.IArrayContainer<any>>(it);
		else if (it instanceof ListIterator)
			return new ListReverseIterator<any>(it);

		else if (it instanceof SetIterator)
			return new SetReverseIterator<any>(it);
		else if (it instanceof MapIterator)
			return new MapReverseIterator<any, any>(it);
	}
}