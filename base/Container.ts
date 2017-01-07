import { Iterator, IReverseIterator } from "./../iterator";

import { Vector } from "./../vector";

/**
 * <p> An abstract container. </p>
 * 
 * <p> <a href="http://samchon.github.io/tstl/images/class_diagram/abstract_containers.png" target="_blank"> 
 * <img src="http://samchon.github.io/tstl/images/class_diagram/abstract_containers.png" style="max-width: 100%" /> 
 * </a> </p>
 *
 * <h3> Container properties </h3>
 * <dl>
 * 	<dt> Sequence </dt>
 * 	<dd> Elements in sequence containers are ordered in a strict linear sequence. Individual elements are 
 *		 accessed by their position in this sequence. </dd>
 *
 * 	<dt> Doubly-linked list </dt>
 *	<dd> Each element keeps information on how to locate the next and the previous elements, allowing 
 *		 constant time insert and erase operations before or after a specific element (even of entire ranges), 
 *		 but no direct random access. </dd>
 * </dl>
 *
 * @param <T> Type of elements.
 * 
 * @author Jeongho Nam <http://samchon.org>
 */
export abstract class Container<T>
{
	/* =========================================================
		CONSTRUCTORS & SEMI-CONSTRUCTORS
			- CONSTRUCTORS
			- ASSIGN & CLEAR
	============================================================
		CONSTURCTORS
	--------------------------------------------------------- */
	/**
	 * Default Constructor.
	 */
	protected constructor()
	{
		// THIS IS ABSTRACT CLASS
		// NOTHING TO DO ESPECIALLY
	}

	/* ---------------------------------------------------------
		ASSIGN & CLEAR
	--------------------------------------------------------- */
	/**
	 * <p> Assign new content to content. </p>
	 *
	 * <p> Assigns new contents to the container, replacing its current contents, and modifying its 
	 * {@link size} accordingly. </p>
	 *
	 * @param begin Input interator of the initial position in a sequence.
	 * @param end Input interator of the final position in a sequence.
	 */
	public abstract assign<U extends T, InputIterator extends Iterator<U>>
		(begin: InputIterator, end: InputIterator): void;

	/**
	 * <p> Clear content. </p>
	 *
	 * <p> Removes all elements from the Container, leaving the container with a size of 0. </p>
	 */
	public clear(): void
	{
		this.erase(this.begin(), this.end());
	}

	/* ---------------------------------------------------------------
		GETTERS
	--------------------------------------------------------------- */
	/**
	 * <p> Return iterator to beginning. </p>
	 *
	 * <p> Returns an iterator referring the first element in the  </p>
	 *
	 * <h4> Note </h4>
	 * <p> If the container is {@link empty}, the returned iterator is same with {@link end end()}. </p>
	 *
	 * @return An iterator to the first element in the  The iterator containes the first element's value.
	 */
	public abstract begin(): Iterator<T>;

	/**
	 * <p> Return iterator to end. </p>
	 * <p> Returns an iterator referring to the past-the-end element in the  </p>
	 *
	 * <p> The past-the-end element is the theoretical element that would follow the last element in the  
	 * It does not point to any element, and thus shall not be dereferenced. </p>
	 *
	 * <p> Because the ranges used by functions of the Container do not include the element reference by their 
	 * closing iterator, this function is often used in combination with {@link IContainer}.{@link begin} to 
	 * specify a range including all the elements in the container. </p>
	 *
	 * <h4> Note </h4>
	 * <p> Returned iterator from {@link IContainer}.{@link end} does not refer any element. Trying to accessing 
	 * element by the iterator will cause throwing exception ({@link OutOfRange}). </p>
	 * 
	 * <p> If the container is {@link empty}, this function returns the same as {@link Container}.{@link begin}. 
	 * </p>
	 * 
	 * @return An iterator to the end element in the 
	 */
	public abstract end(): Iterator<T>;

	/**
	 * <p> Return {@link ReverseIterator reverse iterator} to <i>reverse beginning</i>. </p>
	 * 
	 * <p> Returns a {@link ReverseIterator reverse iterator} pointing to the last element in the container (i.e., 
	 * its <i>reverse beginning</i>). </p>
	 * 
	 * <p> {@link ReverseIterator reverse iterators} iterate backwards: increasing them moves them towards the 
	 * beginning of the  </p>
	 * 
	 * <p> {@link rbegin} points to the element right before the one that would be pointed to by member {@link end}.
	 * </p>
	 * 
	 * @return A {@link ReverseIterator reverse iterator} to the <i>reverse beginning</i> of the sequence 
	 */
	public abstract rbegin(): IReverseIterator<T>;

	/**
	 * <p> Return {@link ReverseIterator reverse iterator} to <i>reverse end</i>. </p>
	 * 
	 * <p> Returns a {@link ReverseIterator reverse iterator} pointing to the theoretical element preceding the 
	 * first element in the container (which is considered its <i>reverse end</i>). </p>
	 * 
	 * <p> The range between {@link IContainer}.{@link rbegin} and {@link IContainer}.{@link rend} contains all 
	 * the elements of the container (in reverse order).
	 * 
	 * @return A {@link ReverseIterator reverse iterator} to the <i>reverse end</i> of the sequence 
	 */
	public abstract rend(): IReverseIterator<T>;

	/**
	 * Return the number of elements in the Container.
	 *
	 * @return The number of elements in the 
	 */
	public abstract size(): number;

	/**
	 * <p> Test whether the container is empty. </p>
	 * <p> Returns whether the container is empty (i.e. whether its size is 0). </p>
	 *
	 * <p> This function does not modify the container in any way. To clear the content of the container,
	 * see {@link clear clear()}. </p>
	 *
	 * @return <code>true</code> if the container size is 0, <code>false</code> otherwise.
	 */
	public empty(): boolean
	{
		return this.size() == 0;
	}

	/* =========================================================
		ELEMENTS I/O
			- INSERT
			- ERASE
	============================================================
		INSERT
	--------------------------------------------------------- */
	/**
	 * <p> Insert elements. </p>
	 *
	 * <p> Appends new elements to the container, and returns the new size of the  </p>
	 * 
	 * @param items New elements to insert.
	 * 
	 * @return New size of the Container.
	 */
	public abstract push(...items: T[]): number;

	/**
	 * <p> Insert an element. </p>
	 *
	 * <p> The container is extended by inserting a new element before the element at the specified
	 * <i>position</i>. This effectively increases the {@link IContainer.size container size} by the amount of
	 * elements inserted. </p>
	 *
	 * @param position Position in the {@link IContainer} where the new element is inserted.
	 *				   {@link iterator} is a member type, defined as a {@link Iterator random access iterator}
	 *				   type that points to elements.
	 * @param val Value to be copied to the inserted element.
	 *
	 * @return An iterator that points to the newly inserted element.
	 */
	public abstract insert(position: Iterator<T>, val: T): Iterator<T>;

	/* ---------------------------------------------------------
		ERASE
	--------------------------------------------------------- */
	/**
	 * <p> Erase an element. </p>
	 *
	 * <p> Removes from the container a single element. </p>
	 *
	 * <p> This effectively reduces the container size by the number of element removed. </p>
	 *
	 * @param position Iterator pointing to a single element to be removed from the Container.
	 *
	 * @return An iterator pointing to the element that followed the last element erased by the function 
	 *		   call. This is the {@link end Container.end} if the operation erased the last element in the 
	 *		   sequence.
	 */
	public abstract erase(position: Iterator<T>): Iterator<T>;

	/**
	 * <p> Erase elements. </p>
	 *
	 * <p> Removes from the container a range of elements. </p>
	 *
	 * <p> This effectively reduces the container size by the number of elements removed. </p>
	 *
	 * @param begin An iterator specifying a range of beginning to erase.
	 * @param end An iterator specifying a range of end to erase.
	 *
	 * @return An iterator pointing to the element that followed the last element erased by the function 
	 *		   call. This is the {@link end Container.end} if the operation erased the last element in 
	 *		   the sequence.
	 */
	public abstract erase<U extends T>(begin: Iterator<U>, end: Iterator<U>): Iterator<T>;

	/* ---------------------------------------------------------------
		UTILITIES
	--------------------------------------------------------------- */
	/**
	 * <p> Swap content. </p>
	 * 
	 * <p> Exchanges the content of the container by the content of <i>obj</i>, which is another 
	 * {@link IContainer container} object with same type of elements. Sizes and container type may differ. </p>
	 * 
	 * <p> After the call to this member function, the elements in this container are those which were in <i>obj</i> 
	 * before the call, and the elements of <i>obj</i> are those which were in this. All iterators, references and 
	 * pointers remain valid for the swapped objects. </p>
	 *
	 * <p> Notice that a non-member function exists with the same name, {@link std.swap swap}, overloading that 
	 * algorithm with an optimization that behaves like this member function. </p>
	 * 
	 * @param obj Another {@link IContainer container} of the same type of elements (i.e., instantiated 
	 *			  with the same template parameter, <b>T</b>) whose content is swapped with that of this 
	 *			  {@link container IContainer}.
	 */
	public swap(obj: Container<T>): void
	{
		let supplement: Vector<T> = new Vector<T>(this.begin(), this.end());

		this.assign(obj.begin(), obj.end());
		obj.assign(supplement.begin(), supplement.end());
	}
}

/**
 * <p> An interface for linear containers.  </p>
 * 
 * <p> <a href="http://samchon.github.io/tstl/images/class_diagram/linear_containers.png" target="_blank"> 
 * <img src="http://samchon.github.io/tstl/images/class_diagram/linear_containers.png" style="max-width: 100%" /></a> 
 * </p>
 *
 * @author Jeonngho Nam
 */
export interface ILinearContainer<T>
	extends Container<T>
{
	/* ---------------------------------------------------------
		CONSTRUCTORS
	--------------------------------------------------------- */
	/**
	 * @inheritdoc
	 */
	assign<U extends T, InputIterator extends Iterator<U>>
		(begin: InputIterator, end: InputIterator): void;

	/**
	 * <p> Assign container content. </p>
	 *
	 * <p> Assigns new contents to the {@link IList container}, replacing its current contents, 
	 * and modifying its {@link size} accordingly. </p>
	 *
	 * @param n New size for the 
	 * @param val Value to fill the container with. Each of the <u>n</u> elements in the container will 
	 *			  be initialized to a copy of this value.
	 */
	assign(n: number, val: T): void;

	/* ---------------------------------------------------------
		ACCESSORS
	--------------------------------------------------------- */
	/**
	 * <p> Access first element. </p>
	 * <p> Returns a value of the first element in the {@link IList container}. </p>
	 *
	 * <p> Unlike member {@link end end()}, which returns an iterator just past this element, 
	 * this function returns a direct value. </p>
	 *
	 * <p> Calling this function on an {@link empty} {@link IList container} causes undefined behavior. </p>
	 *
	 * @return A value of the first element of the {@link IList container}.
	 */
	front(): T;

	/**
	 * <p> Access last element. </p>
	 * <p> Returns a value of the last element in the {@link IList container}. </p>
	 *
	 * <p> Unlike member {@link end end()}, which returns an iterator just past this element, 
	 * this function returns a direct value. </p>
	 *
	 * <p> Calling this function on an {@link empty} {@link IList container} causes undefined behavior. </p>
	 *
	 * @return A value of the last element of the {@link IList container}.
	 */
	back(): T;

	/* ---------------------------------------------------------
		ELEMENTS I/O
	--------------------------------------------------------- */
	/**
	 * <p> Add element at the end. </p> 
	 *
	 * <p> Adds a new element at the end of the {@link IList container}, after its current last element. 
	 * This effectively increases the {@link IList container} {@link size} by one. </p>
	 *
	 * @param val Value to be copied to the new element.
	 */
	push_back(val: T): void;

	/**
	 * <p> Delete last element. </p>
	 * 
	 * <p> Removes the last element in the {@link IList container}, effectively reducing the 
	 * {@link IList container} {@link size} by one. </p>
	 */
	pop_back(): void;

	/**
	 * <p> Insert an element. </p>
	 *
	 * <p> The {@link IList conatiner} is extended by inserting new element before the element at the 
	 * specified <i>position</i>, effectively increasing the {@link IList container} {@link size} by 
	 * one. </p>
	 *
	 * @param position Position in the {@link IList container} where the new elements are inserted.
	 *				   {@link iterator} is a member type, defined as a {@link iterator random access iterator} 
	 *				   type that points to elements.
	 * @param val Value to be copied to the inserted element.
	 *
	 * @return An iterator that points to the newly inserted element.
	 */
	insert(position: Iterator<T>, val: T): Iterator<T>;

	/**
	 * <p> Insert elements by range iterators. </p>
	 *
	 * <p> The {@link IList container} is extended by inserting new elements before the element at the 
	 * specified <i>position</i>, effectively increasing the {@link IList container} {@link size} by 
	 * the number of repeating elements </i>n</i>. </p>
	 * 
	 * @param position Position in the {@link IList container} where the new elements are inserted.
	 *				   {@link iterator} is a member type, defined as a {@link iterator random access iterator} 
	 *				   type that points to elements.
	 * @param n Number of elements to insert. Each element is initialized to a copy of <i>val</i>.
	 * @param val Value to be copied (or moved) to the inserted elements.
	 *
	 * @return An iterator that points to the first of the newly inserted elements.
	 */
	insert(position: Iterator<T>, n: number, val: T): Iterator<T>;

	/**
	 * <p> Insert elements by range iterators. </p>
	 *
	 * <p> The {@link IList container} is extended by inserting new elements before the element at the 
	 * specified <i>position</i>, effectively increasing the {@link IList container} {@link size} by 
	 * the number of elements inserted by range iterators. </p>
	 *
	 * @param position Position in the {@link IList container} where the new elements are inserted.
	 *				   {@link iterator} is a member type, defined as a {@link iterator random access iterator} 
	 *				   type that points to elements.
	 * @param begin Input interator of the initial position in a sequence.
	 * @param end Input interator of the final position in a sequence.
	 *
	 * @return An iterator that points to the first of the newly inserted elements.
	 */
	insert<U extends T, InputIterator extends Iterator<U>>
		(position: Iterator<T>, begin: InputIterator, end: InputIterator): Iterator<T>;
}

/**
 * <p> Array Container. </p>
 *
 * <p> {@link IArrayContainer} is an interface for sequence containers representing <i>arrays</i> that can change in 
 * {@link size}. However, compared to <i>arrays</i>, {@link IArrayContainer} objectss consume more memory in exchange for 
 * the ability to manage storage and grow dynamically in an efficient way. </p> </p>
 * 
 * <p> Both {@link Vector Vectors} and {@link Deque Deques} who implemented {@link IArrayContainer} provide a very 
 * similar interface and can be used for similar purposes, but internally both work in quite different ways: 
 * While {@link Vector Vectors} use a single array that needs to be occasionally reallocated for growth, the 
 * elements of a {@link Deque} can be scattered in different chunks of storage, with the container keeping the 
 * necessary information internally to provide direct access to any of its elements in constant time and with a 
 * uniform sequential interface (through iterators). Therefore, {@link Deque Deques} are a little more complex 
 * internally than {@link Vector Vectors}, but this allows them to grow more efficiently under certain 
 * circumstances, especially with very long sequences, where reallocations become more expensive. </p>
 * 
 * <p> Both {@link Vector Vectors} and {@link Deque Deques} provide a very similar interface and can be used for 
 * similar purposes, but internally both work in quite different ways: While {@link Vector Vectors} use a single 
 * array that needs to be occasionally reallocated for growth, the elements of a {@link Deque} can be scattered 
 * in different chunks of storage, with the container keeping the necessary information internally to provide 
 * direct access to any of its elements in constant time and with a uniform sequential interface (through 
 * iterators). Therefore, {@link Deque Deques} are a little more complex internally than {@link Vector Vectors}, 
 * but this allows them to grow more efficiently under certain circumstances, especially with very long 
 * sequences, where reallocations become more expensive. </p>
 *
 * <p> For operations that involve frequent insertion or removals of elements at positions other than the 
 * beginning or the end, {@link IArrayContainer} objects perform worse and have less consistent iterators and references 
 * than {@link List Lists} </p>.
 * 
 * <p> <a href="http://samchon.github.io/tstl/images/design/class_diagram/linear_containers.png" target="_blank"> 
 * <img src="http://samchon.github.io/tstl/images/design/class_diagram/linear_containers.png" style="max-width: 100%" /> 
 * </a> </p>
 * 
 * <h3> Container properties </h3>
 * <dl>
 *	<dt> Sequence </dt>
 *	<dd>
 *		Elements in sequence containers are ordered in a strict linear sequence. Individual elements are
 *		accessed by their position in this sequence.
 *	</dd>
 *
 *	<dt> Dynamic array </dt>
 *	<dd>
 *		Allows direct access to any element in the sequence, even through pointer arithmetics, and provides
 *		relatively fast addition/removal of elements at the end of the sequence.
 *	</dd>
 * </dl>
 *
 * @param <T> Type of the elements.
 * 
 * @author Jeongho Nam <http://samchon.org>
 */
export interface IArrayContainer<T>
	extends ILinearContainer<T>
{
	/* ---------------------------------------------------------
		ACCESSORS
	--------------------------------------------------------- */
	/**
	 * <p> Access element. </p>
	 * <p> Returns a value to the element at position <i>index</i> in the {@link IArrayContainer container}.</p>
	 *
	 * <p> The function automatically checks whether <i>index</i> is within the bounds of valid elements 
	 * in the {@link IArrayContainer container}, throwing an {@link OutOfRange} exception if it is not (i.e., 
	 * if <i>index</i> is greater or equal than its {@link size}). </p>
	 *
	 * @param index Position of an element in the 
	 *				If this is greater than or equal to the {@link IArrayContainer container} {@link size}, an 
	 *				exception of type {@link OutOfRange} is thrown. Notice that the first 
	 *				element has a position of 0 (not 1).
	 *
	 * @return The element at the specified position in the 
	 */
	at(index: number): T;

	/**
	 * <p> Modify element. </p>
	 * <p> Replaces an element at the specified position (<i>index</i>) in this {@link IArrayContainer container} 
	 * with the specified element (<i>val</i>). </p>
	 *
	 * <p> The function automatically checks whether <i>index</i> is within the bounds of valid elements 
	 * in the {@link IArrayContainer container}, throwing an {@link OutOfRange} exception if it is not (i.e., if 
	 * <i>index</i> is greater or equal than its {@link size}). </p>
	 * 
	 * @.param index A specified position of the value to replace.
	 * @param val A value to be stored at the specified position.
	 *
	 * @return The previous element had stored at the specified position.
	 */
	set(index: number, val: T): void;
}

/**
 * <p> An interface for deque  </p>
 * 
 * <p> <a href="http://samchon.github.io/tstl/images/class_diagram/linear_containers.png" target="_blank"> 
 * <img src="http://samchon.github.io/tstl/images/class_diagram/linear_containers.png" style="max-width: 100%" /> 
 * </a> </p>
 *
 * @author Jeongho Nam <http://samchon.org>
 */
export interface IDequeContainer<T>
	extends ILinearContainer<T>
{
	/**
	 * <p> Insert element at beginning. </p>
	 *
	 * <p> Inserts a new element at the beginning of the {@link IDeque container}, right before its 
	 * current first element. This effectively increases the {@link IDeque container} {@link size} by 
	 * one. </p>
	 *
	 * @param val Value to be inserted as an element.
	 */
	push_front(val: T): void;

	/**
	 * <p> Delete first element. </p>
	 * 
	 * <p> Removes the first element in the {@link IDeque container}, effectively reducing its 
	 * {@link size} by one. </p>
	 */
	pop_front(): void;
}