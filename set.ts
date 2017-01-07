import { UniqueSet } from "./base/UniqueSet";
import { MultiSet } from "./base/MultiSet";
import { ITreeSet } from "./base/ITreeSet";

import { _SetTree } from "./base/tree/_SetTree";
import { SetIterator, SetReverseIterator } from "./base/SetContainer";

import { Container } from "./base/Container";
import { Iterator } from "./iterator";

import { Pair, make_pair } from "./utility";
import { less, equal_to } from "./functional";

/**
 * <p> Tree-structured set, <code>std::set</code> of STL. </p>
 *
 * <p> {@link TreeSet}s are containers that store unique elements following a specific order. </p>
 *
 * <p> In a {@link TreeSet}, the value of an element also identifies it (the value is itself the 
 * <i>key</i>, of type <i>T</i>), and each value must be unique. The value of the elements in a 
 * {@link TreeSet} cannot be modified once in the container (the elements are always const), but they 
 * can be inserted or removed from the container. </p>
 *
 * <p> Internally, the elements in a {@link TreeSet} are always sorted following a specific strict weak 
 * ordering criterion indicated by its internal comparison method (of {@link less}). </p>
 *
 * <p> {@link TreeSet} containers are generally slower than {@link HashSet} containers to access 
 * individual elements by their <i>key</i>, but they allow the direct iteration on subsets based on their 
 * order. </p>
 *
 * <p> {@link TreeSet}s are typically implemented as binary search trees. </p>
 * 
 * <p> <a href="http://samchon.github.io/tstl/images/design/class_diagram/set_containers.png" target="_blank"> 
 * <img src="http://samchon.github.io/tstl/images/design/class_diagram/set_containers.png" style="max-width: 100%" /> </a></p>
 * 
 * <h3> Container properties </h3>
 * <dl>
 *	<dt> Associative </dt>
 *	<dd> 
 *		Elements in associative containers are referenced by their <i>key</i> and not by their absolute 
 *		position in the container.
 *	</dd>
 * 
 *	<dt> Ordered </dt>
 *	<dd> 
 *		The elements in the container follow a strict order at all times. All inserted elements are 
 *		given a position in this order. 
 *	</dd>
 *
 *	<dt> Set </dt>
 *	<dd> The value of an element is also the <i>key</i> used to identify it. </dd>
 *
 *	<dt> Unique keys </dt>
 *	<dd> No two elements in the container can have equivalent <i>keys</i>. </dd>
 * </dl>
 *
 * @param <T> Type of the elements. 
 *			  Each element in an {@link TreeSet} is also uniquely identified by this value.
 *
 * @reference http://www.cplusplus.com/reference/set/set
 * @author Jeongho Nam <http://samchon.org>
 */
export class TreeSet<T>
	extends UniqueSet<T>
	implements ITreeSet<T>
{
	/**
	 * @hidden
	 */
	private tree_: _SetTree<T>;

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
	public constructor();

	/**
	 * Construct from compare.
	 * 
	 * @param compare A binary predicate determines order of elements.
	 */
	public constructor(compare: (x: T, y: T) => boolean);

	/**
	 * Contruct from elements.
	 *
	 * @param array Elements to be contained.
	 */
	public constructor(array: Array<T>);

	/**
	 * Contruct from elements with compare.
	 *
	 * @param array Elements to be contained.
	 * @param compare A binary predicate determines order of elements.
	 */
	public constructor(array: Array<T>, compare: (x: T, y: T) => boolean);

	/**
	 * Copy Constructor.
	 */
	public constructor(container: TreeMultiSet<T>);

	/**
	 * Copy Constructor with compare.
	 * 
	 * @param container A container to be copied.
	 * @param compare A binary predicate determines order of elements.
	 */
	public constructor(container: TreeMultiSet<T>, compare: (x: T, y: T) => boolean);

	/**
	 * Range Constructor.
	 *
	 * @param begin Input interator of the initial position in a sequence.
	 * @param end Input interator of the final position in a sequence.
	 */
	public constructor(begin: Iterator<T>, end: Iterator<T>);

	/**
	 * Construct from range and compare.
	 * 
	 * @param begin Input interator of the initial position in a sequence.
	 * @param end Input interator of the final position in a sequence.
	 * @param compare A binary predicate determines order of elements.
	 */
	public constructor(begin: Iterator<T>, end: Iterator<T>, compare: (x: T, y: T) => boolean);

	public constructor(...args: any[])
	{
		// INIT MEMBERS
		super();
		this.tree_ = new _SetTree<T>(this);

		if (args.length >= 1 && args[0] instanceof TreeSet)
		{
			// COPY CONSTRUCTOR
			let container: TreeSet<T> = args[0]; // PARAMETER
			if (args.length == 2) // SPECIFIED COMPARISON FUNCTION
				this.tree_["compare_"] = (args[1]);

			this.assign(container.begin(), container.end());
		}
		else if (args.length >= 1 && args[0] instanceof Array)
		{
			// INITIALIZER LIST CONSTRUCTOR
			let items: T[] = args[0]; // PARAMETER
			if (args.length == 2) // SPECIFIED COMPARISON FUNCTION
				this.tree_["compare_"] = (args[1]);

			this.push(...items);
		}
		else if (args.length >= 2 && args[0] instanceof Iterator && args[1] instanceof Iterator)
		{
			// RANGE CONSTRUCTOR
			let first: Iterator<T> = args[0]; // PARAMETER 1
			let last: Iterator<T> = args[1]; // PARAMETER 2
			if (args.length == 2) // SPECIFIED COMPARISON FUNCTION
				this.tree_["compare_"] = (args[2]);

			this.assign(first, last);
		}
		else if (args.length == 1)
		{
			// DEFAULT CONSTRUCTOR WITH SPECIFIED COMPARISON FUNCTION
			this.tree_["compare_"] = (args[0]);
		}
	}

	/* ---------------------------------------------------------
		ASSIGN & CLEAR
	--------------------------------------------------------- */
	/**
	 * @inheritdoc
	 */
	public clear(): void
	{
		super.clear();

		this.tree_.clear();
	}

	/* =========================================================
		ACCESSORS
	========================================================= */
	/**
	 * @inheritdoc
	 */
	public find(val: T): SetIterator<T>
	{
		let node = this.tree_.find(val);

		if (node == null || equal_to(node.value.value, val) == false)
			return this.end();
		else
			return node.value;
	}

	/**
	 * @inheritdoc
	 */
	public key_comp(): (x: T, y: T) => boolean
	{
		return this.tree_.key_comp();
	}

	/**
	 * @inheritdoc
	 */
	public value_comp(): (x: T, y: T) => boolean
	{
		return this.tree_.key_comp();
	}

	/**
	 * @inheritdoc
	 */
	public lower_bound(val: T): SetIterator<T>
	{
		return this.tree_.lower_bound(val);
	}

	/**
	 * @inheritdoc
	 */
	public upper_bound(val: T): SetIterator<T>
	{
		return this.tree_.upper_bound(val);
	}

	/**
	 * @inheritdoc
	 */
	public equal_range(val: T): Pair<SetIterator<T>, SetIterator<T>>
	{
		return this.tree_.equal_range(val);
	}

	/* =========================================================
		ELEMENTS I/O
			- INSERT
			- POST-PROCESS
			- SWAP
	============================================================
		INSERT
	--------------------------------------------------------- */
	/**
	 * @hidden
	 */
	protected _Insert_by_val(val: T): any
	{
		let node = this.tree_.find(val);

		// IF EQUALS, THEN RETURN FALSE
		if (node != null && equal_to(node.value.value, val) == true)
			return make_pair(node.value, false);

		// FIND NODE
		let it: SetIterator<T>;

		if (node == null)
			it = this.end();
		else if (this.key_comp()(node.value.value, val) == true)
			it = node.value.next();
		else
			it = node.value;

		/////
		// INSERTS
		/////
		it = this["data_"].insert(it, val);
		this._Handle_insert(it, it.next()); // POST-PROCESS

		return make_pair(it, true);
	}

	protected _Insert_by_hint(hint: SetIterator<T>, val: T): SetIterator<T>
	{
		// FIND KEY
		if (this.has(val) == true)
			return this.end();

		// VALIDATE HINT
		let ret: SetIterator<T>;
		let compare = this.tree_.key_comp();

		// hint < current && current < next
		if (compare(hint.value, val) == true
			&& (hint.next().equals(this.end()) || compare(val, hint.next().value) == true))
		{
			///////
			// RIGHT HINT
			///////
			// INSERT
			ret = this["data_"].insert(hint, val);

			// POST-PROCESS
			this._Handle_insert(ret, ret.next());
		}
		else
		{
			///////
			// WRONG HINT
			///////
			// INSERT BY AUTOMATIC NODE FINDING
			ret = this._Insert_by_val(val).first;
		}
		return ret;
	}

	/**
	 * @hidden
	 */
	protected _Insert_by_range<U extends T, InputIterator extends Iterator<U>>
		(first: InputIterator, last: InputIterator): void
	{
		for (; !first.equals(last); first = first.next() as InputIterator)
			this._Insert_by_val(first.value);
	}

	/* ---------------------------------------------------------
		POST-PROCESS
	--------------------------------------------------------- */
	/**
	 * @hidden
	 */
	protected _Handle_insert(first: SetIterator<T>, last: SetIterator<T>): void
	{
		this.tree_.insert(first);
	}

	/**
	 * @hidden
	 */
	protected _Handle_erase(first: SetIterator<T>, last: SetIterator<T>): void
	{
		for (; !first.equals(last); first = first.next())
			this.tree_.erase(first);
	}

	/* ---------------------------------------------------------
		SWAP
	--------------------------------------------------------- */
	/**
	 * <p> Swap content. </p>
	 * 
	 * <p> Exchanges the content of the container by the content of <i>obj</i>, which is another 
	 * {@link TreeSet set} of the same type. Sizes abd container type may differ. </p>
	 * 
	 * <p> After the call to this member function, the elements in this container are those which were 
	 * in <i>obj</i> before the call, and the elements of <i>obj</i> are those which were in this. All 
	 * iterators, references and pointers remain valid for the swapped objects. </p>
	 *
	 * <p> Notice that a non-member function exists with the same name, {@link swap swap}, overloading that 
	 * algorithm with an optimization that behaves like this member function. </p>
	 * 
	 * @param obj Another {@link TreeSet set container} of the same type of elements as this (i.e.,
	 *			  with the same template parameters, <b>Key</b> and <b>T</b>) whose content is swapped 
	 *			  with that of this {@link TreeSet container}.
	 */
	public swap(obj: TreeSet<T>): void;

	/**
	 * @inheritdoc
	 */
	public swap(obj: Container<T>): void;

	public swap(obj: TreeSet<T> | Container<T>): void
	{
		if (obj instanceof TreeSet && this.key_comp() == obj.key_comp())
		{
			this._Swap(obj);
			[this.tree_, obj.tree_] = [obj.tree_, this.tree_];
		}
		else
			super.swap(obj);
	}
}

/**
 * <p> Tree-structured multiple-key set. </p>
 *
 * <p> {@link TreeMultiSet TreeMultiSets} are containers that store elements following a specific order, and 
 * where multiple elements can have equivalent values. </p>
 *
 * <p> In a {@link TreeMultiSet}, the value of an element also identifies it (the value is itself 
 * the <i>key</i>, of type <i>T</i>). The value of the elements in a {@link TreeMultiSet} cannot 
 * be modified once in the container (the elements are always const), but they can be inserted or removed 
 * from the container. </p>
 *
 * <p> Internally, the elements in a {@link TreeMultiSet TreeMultiSets} are always sorted following a strict 
 * weak ordering criterion indicated by its internal comparison method (of {@link IComparable.less less}). </p>
 *
 * <p> {@link TreeMultiSet} containers are generally slower than {@link HashMultiSet} containers 
 * to access individual elements by their <i>key</i>, but they allow the direct iteration on subsets based on 
 * their order. </p>
 *
 * <p> {@link TreeMultiSet TreeMultiSets} are typically implemented as binary search trees. </p>
 * 
 * <p> <a href="http://samchon.github.io/tstl/images/design/class_diagram/set_containers.png" target="_blank"> 
 * <img src="http://samchon.github.io/tstl/images/design/class_diagram/set_containers.png" style="max-width: 100%" /> </a></p>
 * 
 * <h3> Container properties </h3>
 * <dl>
 *	<dt> Associative </dt>
 *	<dd> 
 *		Elements in associative containers are referenced by their <i>key</i> and not by their absolute 
 *		position in the container.
 *	</dd>
 * 
 *	<dt> Ordered </dt>
 *	<dd> 
 *		The elements in the container follow a strict order at all times. All inserted elements are 
 *		given a position in this order. 
 *	</dd>
 *
 *	<dt> Set </dt>
 *	<dd> The value of an element is also the <i>key</i> used to identify it. </dd>
 *
 *	<dt> Multiple equivalent keys </dt>
 *	<dd> Multiple elements in the container can have equivalent <i>keys</i>. </dd>
 * </dl>
 * 
 * @param <T> Type of the elements. Each element in a {@link TreeMultiSet} container is also identified 
 *			  by this value (each value is itself also the element's <i>key</i>).
 *
 * @reference http://www.cplusplus.com/reference/set/multiset
 * @author Jeongho Nam <http://samchon.org>
 */
export class TreeMultiSet<T>
	extends MultiSet<T>
	implements ITreeSet<T>
{
	/**
	 * @hidden
	 */
	private tree_: _SetTree<T>;

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
	public constructor();

	/**
	 * Construct from compare.
	 * 
	 * @param compare A binary predicate determines order of elements.
	 */
	public constructor(compare: (x: T, y: T) => boolean);

	/**
	 * Contruct from elements.
	 *
	 * @param array Elements to be contained.
	 */
	public constructor(array: Array<T>);

	/**
	 * Contruct from elements with compare.
	 *
	 * @param array Elements to be contained.
	 * @param compare A binary predicate determines order of elements.
	 */
	public constructor(array: Array<T>, compare: (x: T, y: T) => boolean);

	/**
	 * Copy Constructor.
	 */
	public constructor(container: TreeMultiSet<T>);

	/**
	 * Copy Constructor with compare.
	 * 
	 * @param container A container to be copied.
	 * @param compare A binary predicate determines order of elements.
	 */
	public constructor(container: TreeMultiSet<T>, compare: (x: T, y: T) => boolean);

	/**
	 * Range Constructor.
	 *
	 * @param begin Input interator of the initial position in a sequence.
	 * @param end Input interator of the final position in a sequence.
	 */
	public constructor(begin: Iterator<T>, end: Iterator<T>);

	/**
	 * Construct from range and compare.
	 * 
	 * @param begin Input interator of the initial position in a sequence.
	 * @param end Input interator of the final position in a sequence.
	 * @param compare A binary predicate determines order of elements.
	 */
	public constructor(begin: Iterator<T>, end: Iterator<T>, compare: (x: T, y: T) => boolean);

	public constructor(...args: any[])
	{
		// INIT MEMBERS
		super();
		this.tree_ = new _SetTree<T>(this);

		if (args.length >= 1 && args[0] instanceof TreeMultiSet)
		{
			// COPY CONSTRUCTOR
			let container: TreeMultiSet<T> = args[0]; // PARAMETER
			if (args.length == 2) // SPECIFIED COMPARISON FUNCTION
				this.tree_["compare_"] = (args[1]);

			this.assign(container.begin(), container.end());
		}
		else if (args.length >= 1 && args[0] instanceof Array)
		{
			// INITIALIZER LIST CONSTRUCTOR
			let items: T[] = args[0]; // PARAMETER
			if (args.length == 2) // SPECIFIED COMPARISON FUNCTION
				this.tree_["compare_"] = (args[1]);

			this.push(...items);
		}
		else if (args.length >= 2 && args[0] instanceof Iterator && args[1] instanceof Iterator)
		{
			// RANGE CONSTRUCTOR
			let first: Iterator<T> = args[0]; // PARAMETER 1
			let last: Iterator<T> = args[1]; // PARAMETER 2
			if (args.length == 2) // SPECIFIED COMPARISON FUNCTION
				this.tree_["compare_"] = (args[2]);

			this.assign(first, last);
		}
		else if (args.length == 1)
		{
			// DEFAULT CONSTRUCTOR WITH SPECIFIED COMPARISON FUNCTION
			this.tree_["compare_"] = (args[0]);
		}
	}

	/* ---------------------------------------------------------
		ASSIGN & CLEAR
	--------------------------------------------------------- */
	/**
	 * @inheritdoc
	 */
	public clear(): void
	{
		super.clear();

		this.tree_.clear();
	}

	/* =========================================================
		ACCESSORS
	========================================================= */
	/**
	 * @inheritdoc
	 */
	public find(val: T): SetIterator<T>
	{
		var node = this.tree_.find(val);

		if (node == null || equal_to(val, node.value.value) == false)
			return this.end();
		else
			return node.value;
	}

	/**
	 * @inheritdoc
	 */
	public count(val: T): number
	{
		let it = this.find(val);
		let cnt: number = 0;

		for (; !it.equals(this.end()) && equal_to(it.value, val); it = it.next())
			cnt++;

		return cnt;
	}

	/**
	 * @inheritdoc
	 */
	public key_comp(): (x: T, y: T) => boolean
	{
		return this.tree_.key_comp();
	}

	/**
	 * @inheritdoc
	 */
	public value_comp(): (x: T, y: T) => boolean
	{
		return this.tree_.key_comp();
	}

	/**
	 * @inheritdoc
	 */
	public lower_bound(val: T): SetIterator<T>
	{
		return this.tree_.lower_bound(val);
	}

	/**
	 * @inheritdoc
	 */
	public upper_bound(val: T): SetIterator<T>
	{
		return this.tree_.upper_bound(val);
	}

	/**
	 * @inheritdoc
	 */
	public equal_range(val: T): Pair<SetIterator<T>, SetIterator<T>>
	{
		return this.tree_.equal_range(val);
	}

	///**
	// * @hidden
	// */
	//public _Get_tree(): AtomicTree<T>
	//{
	//	return this.tree_;
	//}

	/* =========================================================
		ELEMENTS I/O
			- INSERT
			- POST-PROCESS
			- SWAP
	============================================================
		INSERT
	--------------------------------------------------------- */
	/**
	 * @hidden
	 */
	protected _Insert_by_val(val: T): any
	{
		var node = this.tree_.find(val);
		var it: SetIterator<T>;

		// FIND NODE
		if (node == null)
		{
			it = this.end();
		}
		else if (equal_to(node.value.value, val) == true)
		{
			it = node.value.next();
		}
		else if (this.key_comp()(node.value.value, val) == true)
		{
			it = node.value.next();

			while (it.equals(this.end()) == false && this.key_comp()(it.value, val))
				it = it.next();
		}
		else
		{
			it = node.value;
		}

		/////
		// INSERTS
		/////
		it = this["data_"].insert(it, val);
		this._Handle_insert(it, it.next()); // POST-PROCESS

		return it;
	}

	/**
	 * @hidden
	 */
	protected _Insert_by_hint(hint: SetIterator<T>, val: T): SetIterator<T>
	{
		// VALIDATE HINT
		let ret: SetIterator<T>;
		let compare = this.tree_.key_comp();

		// hint <= current && current <= next
		if ((compare(hint.value, val) || equal_to(hint.value, val))
			&& (hint.next().equals(this.end()) || (compare(val, hint.next().value) || equal_to(val, hint.next().value))))
		{
			///////
			// RIGHT HINT
			///////
			// INSERT
			ret = this["data_"].insert(hint, val);

			// POST-PROCESS
			this._Handle_insert(ret, ret.next());
		}
		else
		{
			///////
			// WRONG HINT
			///////
			// INSERT BY AUTOMATIC NODE FINDING
			ret = this._Insert_by_val(val);
		}
		return ret;
	}

	/**
	 * @hidden
	 */
	protected _Insert_by_range<U extends T, InputIterator extends Iterator<U>>
		(first: InputIterator, last: InputIterator): void
	{
		for (; !first.equals(last); first = first.next() as InputIterator)
			this._Insert_by_val(first.value);
	}

	/* ---------------------------------------------------------
		POST-PROCESS
	--------------------------------------------------------- */
	/**
	 * @hidden
	 */
	protected _Handle_insert(first: SetIterator<T>, last: SetIterator<T>): void
	{
		this.tree_.insert(first);
	}

	/**
	 * @hidden
	 */
	protected _Handle_erase(first: SetIterator<T>, last: SetIterator<T>): void
	{
		for (; !first.equals(last); first = first.next())
			this.tree_.erase(first);
	}

	/* ---------------------------------------------------------
		SWAP
	--------------------------------------------------------- */
	/**
	 * <p> Swap content. </p>
	 * 
	 * <p> Exchanges the content of the container by the content of <i>obj</i>, which is another 
	 * {@link TreeMultiSet set} of the same type. Sizes abd container type may differ. </p>
	 * 
	 * <p> After the call to this member function, the elements in this container are those which were 
	 * in <i>obj</i> before the call, and the elements of <i>obj</i> are those which were in this. All 
	 * iterators, references and pointers remain valid for the swapped objects. </p>
	 *
	 * <p> Notice that a non-member function exists with the same name, {@link swap swap}, overloading that 
	 * algorithm with an optimization that behaves like this member function. </p>
	 * 
	 * @param obj Another {@link TreeMultiSet set container} of the same type of elements as this (i.e.,
	 *			  with the same template parameters, <b>Key</b> and <b>T</b>) whose content is swapped 
	 *			  with that of this {@link TreeMultiSet container}.
	 */
	public swap(obj: TreeMultiSet<T>): void;

	/**
	 * @inheritdoc
	 */
	public swap(obj: Container<T>): void;

	public swap(obj: TreeMultiSet<T> | Container<T>): void
	{
		if (obj instanceof TreeMultiSet && this.key_comp() == obj.key_comp())
		{
			this._Swap(obj);
			[this.tree_, obj.tree_] = [obj.tree_, this.tree_];
		}
		else
			super.swap(obj);
	}
}