import { Container } from "./base/Container";

/**
 * <p> Comparable instance. </p>
 * 
 * <p> {@link IComparable} is a common interface for objects who can compare each other. </p>
 * 
 * @reference https://docs.oracle.com/javase/7/docs/api/java/lang/Object.html
 * @author Jeongho Nam <http://samchon.org>
 */
export interface IComparable<T>
	extends Object
{
	/**
	 * <p> Indicates whether some other object is &quot;equal to&quot; this one. </p>
	 *
	 * <p> The {@link equal_to} method implements an equivalence relation on non-null object references: </p>
	 * 
	 * <ul>
	 *	<li> 
	 *		It is <b>reflexive</b>: for any non-null reference value <code>x</code>, <code>x.equal_to(x)</code> 
	 *		should return <code>true</code>. 
	 *	</li>
	 *	<li> 
	 *		It is <b>symmetric</b>: for any non-null reference values <code>x</code> and <code>y</code>, 
	 *		<code>x.equal_to(y)</code> should return <code>true</code> if and only if <code>y.equal_to(x)</code> 
	 *		returns <code>true</code>. </li>
	 *	<li> 
	 *		It is <b>transitive</b>: for any non-null reference values <code>x</code>, <code>y</code>, and 
	 *		<code>z</code>, if <code>x.equal_to(y)</code> returns <code>true</code> and <code>y.equal_to(z)</code> 
	 *		returns <code>true</code>, then <code>x.equal_to(z)</code> should return <code>true</code>. 
	 *	</li>
	 *	<li> 
	 *		It is <b>consistent</b>: for any non-null reference values <code>x</code> and <code>y</code>, multiple 
	 *		invocations of <code>x.equal_to(y)</code> consistently return <code>true</code> or consistently return 
	 *		<code>false</code>, provided no information used in equal_to comparisons on the objects is modified. 
	 *	</li>
	 *	<li> 
	 *		For any non-null reference value <code>x</code>, <code>x.equal_to(null)</code> should return 
	 *		<code>false</code>.
	 *	</li>
	 * </ul>
	 * 
	 * <p> The {@link equal_to} method for interface {@link IComparable} implements the most discriminating possible 
	 * equivalence relation on objects; that is, for any non-null reference values <code>x</code> and 
	 * <code>y</code>, this method returns <code>true</code> if and only if <code>x</code> and <code>y</code> 
	 * refer to the same object (<code>x == y</code> has the value <code>true</code>). </p>
	 * 
	 * <p> Note that it is generally necessary to override the {@link hash_code} method whenever this method is 
	 * overridden, so as to maintain the general contract for the {@link hash_code} method, which states that 
	 * equal objects must have equal hash codes. </p>
	 *
	 * <ul>
	 *	<li> {@link IComparable.equal_to} is called by {@link std.equal_to}. </li>
	 * </ul>
	 * 
	 * @param obj the reference object with which to compare.
	 * 
	 * @return <code>true</code> if this object is the same as the obj argument; <code>false</code> otherwise.
	 */
	equals(obj: T): boolean;

	/**
	 * <p> Less-than inequality comparison. </p>
	 *
	 * <p> Binary method returns whether the the instance compares less than the <i>obj</i>. </p>
	 *
	 * <ul>
	 *	<li> 
	 *		{@link IComparable.less} is called by {@link std.less}. Also, this method can be used on standard 
	 *		algorithms such as {@link sort sort()}</code>, {@link merge merge()} or 
	 *		{@link TreeMap.lower_bound lower_bound()}. 
	 *	</li>
	 * </ul>
	 *
	 * @param obj the reference object with which to compare.
	 *
	 * @return Whether the first parameter is less than the second.
	 */
	less(obj: T): boolean;

	/**
	 * <p> Issue a hash code. </p> 
	 * 
	 * <p> Returns a hash code value for the object. This method is supported for the benefit of hash tables such 
	 * as those provided by hash containers; {@link HashSet}, {@link HashMap}, {@link MultiHashSet} and 
	 * {@link MultiHashMap}. </p>
	 *
	 * <p> As much as is reasonably practical, the {@link hash_code} method defined by interface 
	 * {@link IComparable} does return distinct integers for distinct objects. (This is typically implemented by 
	 * converting the internal address of the object into an integer, but this implementation technique is not 
	 * required by the JavaScript programming language.) </p>
	 * 
	 * <ul>
	 *	<li> 
	 *		{@link IComparable.hash_code} is called by {@link std.hash_code}. If you want to keep basically 
	 *		provided hash function, then returns {@link std.Hash.code}; <code>return std.Hash.code(this);</code> 
	 *	</li>
	 * </ul>
	 * 
	 * @return An hash code who represents the object.
	 */
	hashCode?(): number;
}

/**
 * <p> Function object class for equality comparison. </p>
 *
 * <p> Binary function object class whose call returns whether its two arguments compare <i>equal</i> (as returned by 
 * operator ==). </p>
 *
 * <p> Generically, function objects are instances of a class with member function {@link IComparable.equal_to equal_to}
 * defined. This member function allows the object to be used with the same syntax as a function call. </p>
 *
 * @param x First element to compare.
 * @param y Second element to compare.
 *
 * @return Whether the arguments are equal.
 */
export function equal_to<T>(x: T, y: T): boolean
{
	if (x instanceof Object)
		if ((x as any).equals)
			return (x as Object as IComparable<T>).equals(y);
		else
			return x == y;
	else
		return x == y;
}

/**
 * <p> Function object class for non-equality comparison. </p>
 * 
 * <p> Binary function object class whose call returns whether its two arguments compare <i>not equal</i> (as returned 
 * by operator operator!=). </p>
 * 
 * <p> Generically, function objects are instances of a class with member function {@link IComparable.equal_to equal_to} 
 * defined. This member function allows the object to be used with the same syntax as a function call. </p>
 *
 * @param x First element to compare.
 * @param y Second element to compare.
 *
 * @return Whether the arguments are not equal.
 */
export function not_equal_to<T>(x: T, y: T): boolean
{
	return !equal_to(x, y);
}

/**
 * <p> Function for less-than inequality comparison. </p>
 *
 * <p> Binary function returns whether the its first argument compares less than the second. </p>
 *
 * <p> Generically, function objects are instances of a class with member function {@link IComparable.less less} 
 * defined. If an object doesn't have the method, then its own uid will be used to compare insteadly. 
 * This member function allows the object to be used with the same syntax as a function call. </p>
 * 
 * <p> Objects of this class can be used on standard algorithms such as {@link sort sort()}</code>, 
 * {@link merge merge()} or {@link TreeMap.lower_bound lower_bound()}. </p>
 *
 * @param <T> Type of arguments to compare by the function call. The type shall supporrt the operation 
 *			  <i>operator<()</i> or method {@link IComparable.less less}.
 *
 * @param x First element, the standard of comparison.
 * @param y Second element compare with the first.
 *
 * @return Whether the first parameter is less than the second.
 */
export function less<T>(x: T, y: T): boolean
{
	if (x instanceof Object)
		if ((<any>x).less != undefined) // has less()
			return (<any>x).less(y);
		else
			return (<any>x).__get_m_iUID() < (<any>y).__get_m_iUID();
	else
		return x < y;
}

/**
 * <p> Function object class for less-than-or-equal-to comparison. </p>
 * 
 * <p> Binary function object class whose call returns whether the its first argument compares {@link less less than} or 
 * {@link equal_to equal to} the second (as returned by operator <=). </p>
 * 
 * <p> Generically, <i>function objects</i> are instances of a class with member function {@link IComparable.less less} 
 * and {@link IComparable.equal_to equal_to} defined. This member function allows the object to be used with the same 
 * syntax as a function call. </p>
 * 
 * @param x First element, the standard of comparison.
 * @param y Second element compare with the first.
 * 
 * @return Whether the <i>x</i> is {@link less less than} or {@link equal_to equal to} the <i>y</i>.
 */
export function less_equal<T>(x: T, y: T): boolean
{
	return less(x, y) || equal_to(x, y);
}

/**
 * <p> Function for greater-than inequality comparison. </p>
 *
 * <p> Binary function returns whether the its first argument compares greater than the second. </p>
 *
 * <p> Generically, function objects are instances of a class with member function {@link less} and
 * {@link equal_to equal_to()} defined. If an object doesn't have those methods, then its own uid will be used
 * to compare insteadly. This member function allows the object to be used with the same syntax as a function 
 * call. </p>
 * 
 * <p> Objects of this class can be used on standard algorithms such as {@link sort sort()}, 
 * {@link merge merge()} or {@link TreeMap.lower_bound lower_bound()}. </p>
 *
 * @param <T> Type of arguments to compare by the function call. The type shall supporrt the operation 
 *			  <i>operator>()</i> or method {@link IComparable.greater greater}.
 * 
 * @return Whether the <i>x</i> is greater than the <i>y</i>.
 */
export function greater<T>(x: T, y: T): boolean
{
	return !less_equal(x, y);
}

/**
 * <p> Function object class for greater-than-or-equal-to comparison. </p>
 * 
 * <p> Binary function object class whose call returns whether the its first argument compares 
 * {@link greater greater than} or {@link equal_to equal to} the second (as returned by operator >=). </p>
 * 
 * <p> Generically, function objects are instances of a class with member function {@link IComparable.less less}
 * defined. If an object doesn't have the method, then its own uid will be used to compare insteadly.
 * This member function allows the object to be used with the same syntax as a function call. </p>
 * 
 * @param x First element, the standard of comparison.
 * @param y Second element compare with the first.
 * 
 * @return Whether the <i>x</i> is {@link greater greater than} or {@link equal_to equal to} the <i>y</i>.
 */
export function greater_equal<T>(x: T, y: T): boolean
{
	return !less(x, y);
}

/**
 * <p> Logical AND function object class. </p>
 * 
 * <p> Binary function object class whose call returns the result of the <i>logical "and"</i> operation between its two 
 * arguments (as returned by operator &&). </p>
 * 
 * <p> Generically, function objects are instances of a class with member function operator() defined. This member 
 * function allows the object to be used with the same syntax as a function call. </p>
 * 
 * @param x First element.
 * @param y Second element.
 * 
 * @return Result of logical AND operation.
 */
export function logical_and<T>(x: T, y: T): boolean
{
	return <any>x && <any>y;
}

/**
 * <p> Logical OR function object class. </p>
 * 
 * <p> Binary function object class whose call returns the result of the <i>logical "or"</i> operation between its two 
 * arguments (as returned by operator ||). </p>
 * 
 * <p> Generically, function objects are instances of a class with member function operator() defined. This member 
 * function allows the object to be used with the same syntax as a function call. </p>
 * 
 * @param x First element.
 * @param y Second element.
 * 
 * @return Result of logical OR operation.
 */
export function logical_or<T>(x: T, y: T): boolean
{
	return <any>x || <any>y;
}

/**
 * <p> Logical NOT function object class. </p>
 * 
 * <p> Unary function object class whose call returns the result of the <i>logical "not"</i> operation on its argument 
 * (as returned by operator !). </p>
 * 
 * <p> Generically, function objects are instances of a class with member function operator() defined. This member 
 * function allows the object to be used with the same syntax as a function call. </p>
 * 
 * @param x Target element.
 *
 * @return Result of logical NOT operation.
 */
export function logical_not<T>(x: T): boolean
{
	return !<any>x;
}

/**
 * <p> Bitwise AND function object class. </p>
 * 
 * <p> Binary function object class whose call returns the result of applying the <i>bitwise "and"</i> operation between 
 * its two arguments (as returned by operator &). </p>
 * 
 * @param x First element.
 * @param y Second element.
 * 
 * @return Result of bitwise AND operation.
 */
export function bit_and(x: number, y: number): number
{
	return x & y;
}

/**
 * <p> Bitwise OR function object class. </p>
 * 
 * <p> Binary function object class whose call returns the result of applying the <i>bitwise "and"</i> operation between 
 * its two arguments (as returned by operator &). </p>
 * 
 * @param x First element.
 * @param y Second element.
 * 
 * @return Result of bitwise OR operation.
 */
export function bit_or(x: number, y: number): number
{
	return x | y;
}

/**
 * <p> Bitwise XOR function object class. </p>
 * 
 * <p> Binary function object class whose call returns the result of applying the <i>bitwise "exclusive or"</i> 
 * operation between its two arguments (as returned by operator ^). </p>
 * 
 * @param x First element.
 * @param y Second element.
 * 
 * @return Result of bitwise XOR operation.
 */
export function bit_xor(x: number, y: number): number
{
	return x ^ y;
}

/**
 * <p> Default hash function for number. </p>
 * 
 * <p> Unary function that defines the default hash function used by the standard library. </p>
 * 
 * <p> The functional call returns a hash value of its argument: A hash value is a value that depends solely on 
 * its argument, returning always the same value for the same argument (for a given execution of a program). The 
 * value returned shall have a small likelihood of being the same as the one returned for a different argument.
 * </p>
 * 
 * @param val Value to be hashed.
 * 
 * @return Returns a hash value for its argument, as a value of type number. The number is an unsigned integer.
 */
export function hash(val: number): number;

/**
 * <p> Default hash function for string. </p>
 * 
 * <p> Unary function that defines the default hash function used by the standard library. </p>
 * 
 * <p> The functional call returns a hash value of its argument: A hash value is a value that depends solely on 
 * its argument, returning always the same value for the same argument (for a given execution of a program). The 
 * value returned shall have a small likelihood of being the same as the one returned for a different argument.
 * </p>
 * 
 * @param str A string to be hashed.
 * 
 * @return Returns a hash value for its argument, as a value of type number. The number is an unsigned integer.
 */
export function hash(str: string): number;

/**
 * <p> Default hash function for Object. </p>
 * 
 * <p> Unary function that defines the default hash function used by the standard library. </p>
 * 
 * <p> The functional call returns a hash value of its argument: A hash value is a value that depends solely on 
 * its argument, returning always the same value for the same argument (for a given execution of a program). The 
 * value returned shall have a small likelihood of being the same as the one returned for a different argument.
 * </p>
 * 
 * <p> The default {@link hash} function of Object returns a value returned from {@link hash hash(number)} with 
 * an <b>unique id</b> of each Object. If you want to specify {@link hash} function of a specific class, then
 * define a member function <code>public hashCode(): number</code> in the class. </p>
 * 
 * @param obj Object to be hashed.
 * 
 * @return Returns a hash value for its argument, as a value of type number. The number is an unsigned integer.
 */
export function hash(obj: Object): number;

export function hash(par: any): number
{
	let type: string = typeof par;

	if (type == "number")
		return hash_of_number(par);
	else if (type == "string")
		return hash_of_string(par);
	else
		return hash_of_object(par);
}

/**
 * @hidden
 */
function hash_of_number(val: number): number
{
	// ------------------------------------------
	//	IN C++
	//		CONSIDER A NUMBER AS A STRING
	//		HASH<STRING>((CHAR*)&VAL, 8)
	// ------------------------------------------
	// CONSTRUCT BUFFER AND BYTE_ARRAY
	let buffer: ArrayBuffer = new ArrayBuffer(8);
	let byteArray: Int8Array = new Int8Array(buffer);
	let valueArray: Float64Array = new Float64Array(buffer);

	valueArray[0] = val;

	let code: number = 2166136261;

	for (let i: number = 0; i < byteArray.length; i++)
	{
		let byte = (byteArray[i] < 0) ? byteArray[i] + 256 : byteArray[i];

		code ^= byte;
		code *= 16777619;
	}
	return Math.abs(code);
}

/**
 * @hidden
 */
function hash_of_string(str: string): number
{
	let code: number = 2166136261;

	for (let i: number = 0; i < str.length; i++)
	{
		code ^= str.charCodeAt(i);
		code *= 16777619;
	}
	return Math.abs(code);
}

/**
 * @hidden
 */
function hash_of_object(obj: Object): number
{
	if ((<any>obj).hashCode != undefined)
		return (obj as IComparable<Object>).hashCode();
	else
		return hash_of_number((<any>obj).__get_m_iUID());
}

/* ---------------------------------------------------------
	UNIQUE ID FOR OBJECTS
--------------------------------------------------------- */
// Incremental sequence of unique id for objects.
/**
 * @hidden
 */
var __s_iUID: number = 0;

if (Object.prototype.hasOwnProperty("__get_m_iUID") == false)
{
	Object.defineProperties(Object.prototype,
		{
			"__get_m_iUID":
			{
				value: function (): number
				{
					if (this.hasOwnProperty("__m_iUID") == false)
					{
						var uid: number = ++__s_iUID;

						Object.defineProperty
						(
							this, "__m_iUID",
							{
								"get": function (): number
								{
									return uid;
								}
							}
						);
					}

					return this.__m_iUID;
				}
			}
		});
}

/* ---------------------------------------------------------
	SWAP
--------------------------------------------------------- */
/**
 * <p> Exchange contents of {@link IContainers containers}. </p>
 * 
 * <p> The contents of container <i>left</i> are exchanged with those of <i>right</i>. Both container objects must have 
 * same type of elements (same template parameters), although sizes may differ. </p>
 * 
 * <p> After the call to this member function, the elements in <i>left</i> are those which were in <i>right</i> before 
 * the call, and the elements of <i>right</i> are those which were in <i>left</i>. All iterators, references and 
 * pointers remain valid for the swapped objects. </p>
 *
 * <p> This is an overload of the generic algorithm swap that improves its performance by mutually transferring 
 * ownership over their assets to the other container (i.e., the containers exchange references to their data, without 
 * actually performing any element copy or movement): It behaves as if <i>left</i>. 
 * {@link IContainer.swap swap}(<i>right</i>) was called. </p>
 * 
 * @param left A {@link Container container} to swap its contents.
 * @param right A {@link Container container} to swap its contents.
 */
export function swap<T, Cont extends Container<T>>
	(left: Cont, right: Cont): void
{
	left.swap(right);
}