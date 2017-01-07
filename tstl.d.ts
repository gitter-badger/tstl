declare module 'tstl/functional' {
	import { Container } from 'tstl/base/Container';
	/**
	 * <p> Comparable instance. </p>
	 *
	 * <p> {@link IComparable} is a common interface for objects who can compare each other. </p>
	 *
	 * @reference https://docs.oracle.com/javase/7/docs/api/java/lang/Object.html
	 * @author Jeongho Nam <http://samchon.org>
	 */
	export interface IComparable<T> extends Object {
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
	export function equal_to<T>(x: T, y: T): boolean;
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
	export function not_equal_to<T>(x: T, y: T): boolean;
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
	export function less<T>(x: T, y: T): boolean;
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
	export function less_equal<T>(x: T, y: T): boolean;
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
	export function greater<T>(x: T, y: T): boolean;
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
	export function greater_equal<T>(x: T, y: T): boolean;
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
	export function logical_and<T>(x: T, y: T): boolean;
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
	export function logical_or<T>(x: T, y: T): boolean;
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
	export function logical_not<T>(x: T): boolean;
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
	export function bit_and(x: number, y: number): number;
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
	export function bit_or(x: number, y: number): number;
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
	export function bit_xor(x: number, y: number): number;
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
	export function swap<T, Cont extends Container<T>>(left: Cont, right: Cont): void;

}
declare module 'tstl/utility' {
	import { IComparable } from 'tstl/functional';
	/**
	 * <p> Running on Node. </p>
	 *
	 * <p> Test whether the JavaScript is running on Node. </p>
	 *
	 * @references http://stackoverflow.com/questions/17575790/environment-detection-node-js-or-browser
	 */
	export function is_node(): boolean;
	/**
	 * <p> Pair of values. </p>
	 *
	 * <p> This class couples together a pair of values, which may be of different types (<i>T1</i> and
	 * <i>T2</i>). The individual values can be accessed through its public members {@link first} and
	 * {@link second}. </p>
	 *
	 * @param <T1> Type of member {@link first}.
	 * @param <T2> Type of member {@link second}.
	 *
	 * @reference http://www.cplusplus.com/reference/utility/pair
	 * @author Jeongho Nam <http://samchon.org>
	 */
	export class Pair<T1, T2> implements IComparable<Pair<T1, T2>> {
	    /**
	     * <p> A first value in the Pair. </p>
	     */
	    first: T1;
	    /**
	     * <p> A second value in the Pair. </p>
	     */
	    second: T2;
	    /**
	     * <p> Construct from pair values. </p>
	     *
	     * @param first The first value of the Pair
	     * @param second The second value of the Pair
	     */
	    constructor(first: T1, second: T2);
	    /**
	     * <p> Whether a Pair is equal with the Pair. <p>
	     * <p> Compare each first and second value of two Pair(s) and returns whether they are equal or not. </p>
	     *
	     * <p> If stored key and value in a Pair are not number or string but an object like a class or struct,
	     * the comparison will be executed by a member method (SomeObject)::equals(). If the object does not have
	     * the member method equal_to(), only address of pointer will be compared. </p>
	     *
	     * @param obj A Map to compare
	     * @return Indicates whether equal or not.
	     */
	    equals<U1 extends T1, U2 extends T2>(pair: Pair<U1, U2>): boolean;
	    /**
	     * @inheritdoc
	     */
	    less<U1 extends T1, U2 extends T2>(pair: Pair<U1, U2>): boolean;
	}
	/**
	 * <p> Construct {@link Pair} object. </p>
	 *
	 * <p> Constructs a {@link Pair} object with its {@link Pair.first first} element set to <i>x</i> and its
	 * {@link Pair.second second} element set to <i>y</i>. </p>
	 *
	 * <p> The template types can be implicitly deduced from the arguments passed to {@link make_pair}. </p>
	 *
	 * <p> {@link Pair} objects can be constructed from other {@link Pair} objects containing different types, if the
	 * respective types are implicitly convertible. </p>
	 *
	 * @param x Value for member {@link Pair.first first}.
	 * @param y Value for member {@link Pair.second second}.
	 *
	 * @return A {@link Pair} object whose elements {@link Pair.first first} and {@link Pair.second second} are set to
	 *		   <i>x</i> and <i>y</i> respectivelly.
	 */
	export function make_pair<T1, T2>(x: T1, y: T2): Pair<T1, T2>;

}
declare module 'tstl/exception' {
	/**
	 * <p> Function handling termination on exception </p>
	 *
	 * <p> Calls the current terminate handler. </p>
	 *
	 * <p> By default, the terminate handler calls abort. But this behavior can be redefined by calling
	 * {@link set_terminate}. </p>
	 *
	 * <p> This function is automatically called when no <code>catch</code> handler can be found for a thrown exception,
	 * or for some other exceptional circumstance that makes impossible to continue the exception handling process. </p>
	 *
	 * <p> This function is provided so that the terminate handler can be explicitly called by a program that needs to
	 * abnormally terminate, and works even if {@link set_terminate} has not been used to set a custom terminate handler
	 * (calling abort in this case). </p>
	 */
	export function terminate(): void;
	/**
	 * <p> Set <i>terminate handler</i> function. </p>
	 *
	 * <p> A <i>terminate handler</i> function is a function automatically called when the exception handling process has
	 * to be abandoned for some reason. This happens when no catch handler can be found for a thrown exception, or for
	 * some other exceptional circumstance that makes impossible to continue the exception handling process. </p>
	 *
	 * <p> Before this function is called by the program for the first time, the default behavior is to call abort. </p>
	 *
	 * <p> A program may explicitly call the current terminate handler function by calling {@link terminate}. </p>
	 *
	 * @param f Function that takes no parameters and returns no value (<i>void</i>).
	 */
	export function set_terminate(f: () => void): void;
	/**
	 * <p> Get <i>terminate handler</i> function. </p>
	 *
	 * <p> The <i>terminate handler</i> function is automatically called when no <code>catch</code> handler can be found
	 * for a thrown exception, or for some other exceptional circumstance that makes impossible to continue the exception
	 * handling process. </p>
	 *
	 * <p> If no such function has been set by a previous call to {@link set_terminate}, the function returns a
	 * <i>null-pointer</i>. </p>
	 *
	 * @return If {@link set_terminate} has previously been called by the program, the function returns the current
	 *		   <i>terminate handler</i> function. Otherwise, it returns a <i>null-pointer</i>.
	 */
	export function get_terminate(): () => void;
	/**
	 * <p> Standard exception class. </p>
	 *
	 * <p> Base class for standard exceptions. </p>
	 *
	 * <p> All objects thrown by components of the standard library are derived from this class.
	 * Therefore, all standard exceptions can be caught by catching this type by reference. </p>
	 *
	 * <p> <a href="http://samchon.github.io/tstl/images/class_diagram/exceptions.png" target="_blank">
	 * <img src="http://samchon.github.io/tstl/images/class_diagram/exceptions.png" style="max-width: 100%" /> </a> </p>
	 *
	 * @reference http://www.cplusplus.com/reference/exception/exception
	 * @author Jeongho Nam <http://samchon.org>
	 */
	export class Exception {
	    /**
	     * @hidden
	     */
	    private message_;
	    /**
	     * Default Constructor.
	     */
	    constructor();
	    /**
	     * <p> Construct from a message. </p>
	     *
	     * @param message A message representing specification about the Exception.
	     */
	    constructor(message: string);
	    /**
	     * <p> Get string identifying exception. </p>
	     *
	     * <p> Returns a string that may be used to identify the exception. </p>
	     *
	     * <p> The particular representation pointed by the returned value is implementation-defined.
	     * As a virtual function, derived classes may redefine this function so that specify value are
	     * returned. </p>
	     */
	    what(): string;
	}
	/**
	 * <p> Logic error exception. </p>
	 *
	 * <p> This class defines the type of objects thrown as exceptions to report errors in the internal
	 * logical of the program, such as violation of logical preconditions or class invariants. </p>
	 *
	 * <p> These errors are presumably detectable before the program executes. </p>
	 *
	 * <p> It is used as a base class for several logical error exceptions. </p>
	 *
	 * <p> <a href="http://samchon.github.io/tstl/images/class_diagram/exceptions.png" target="_blank">
	 * <img src="http://samchon.github.io/tstl/images/class_diagram/exceptions.png" style="max-width: 100%" /> </a> </p>
	 *
	 * @reference http://www.cplusplus.com/reference/stdexcept/logic_error
	 * @author Jeongho Nam <http://samchon.org>
	 */
	export class LogicError extends Exception {
	    /**
	     * <p> Construct from a message. </p>
	     *
	     * @param message A message representing specification about the Exception.
	     */
	    constructor(message: string);
	}
	/**
	 * <p> Domain error exception. </p>
	 *
	 * <p> This class defines the type of objects thrown as exceptions to report domain errors. </p>
	 *
	 * <p> Generally, the domain of a mathematical function is the subset of values that it is defined for.
	 * For example, the square root function is only defined for non-negative numbers. Thus, a negative number
	 * for such a function would qualify as a domain error. </p>
	 *
	 * <p> No component of the standard library throws exceptions of this type. It is designed as a standard
	 * exception to be thrown by programs. </p>
	 *
	 * <p> <a href="http://samchon.github.io/tstl/images/class_diagram/exceptions.png" target="_blank">
	 * <img src="http://samchon.github.io/tstl/images/class_diagram/exceptions.png" style="max-width: 100%" /> </a></p>
	 *
	 * @reference http://www.cplusplus.com/reference/stdexcept/domain_error
	 * @author Jeongho Nam <http://samchon.org>
	 */
	export class DomainError extends LogicError {
	    /**
	     * <p> Construct from a message. </p>
	     *
	     * @param message A message representing specification about the Exception.
	     */
	    constructor(message: string);
	}
	/**
	 * <p> Invalid argument exception. </p>
	 *
	 * <p> This class defines the type of objects thrown as exceptions to report an invalid argument. </p>
	 *
	 * <p> It is a standard exception that can be thrown by programs. Some components of the standard library
	 * also throw exceptions of this type to signal invalid arguments. </p>
	 *
	 * <p> <a href="http://samchon.github.io/tstl/images/class_diagram/exceptions.png" target="_blank">
	 * <img src="http://samchon.github.io/tstl/images/class_diagram/exceptions.png" style="max-width: 100%" /> </a> </p>
	 *
	 * @reference http://www.cplusplus.com/reference/stdexcept/invalid_argument
	 * @author Jeongho Nam <http://samchon.org>
	 */
	export class InvalidArgument extends LogicError {
	    /**
	     * <p> Construct from a message. </p>
	     *
	     * @param message A message representing specification about the Exception.
	     */
	    constructor(message: string);
	}
	/**
	 * <p> Length error exception. </p>
	 *
	 * <p> This class defines the type of objects thrown as exceptions to report a length error. </p>
	 *
	 * <p> It is a standard exception that can be thrown by programs. Some components of the standard library,
	 * such as vector and string also throw exceptions of this type to signal errors resizing. </p>
	 *
	 * <p> <a href="http://samchon.github.io/tstl/images/class_diagram/exceptions.png" target="_blank">
	 * <img src="http://samchon.github.io/tstl/images/class_diagram/exceptions.png" style="max-width: 100%" /> </a> </p>
	 *
	 * @reference http://www.cplusplus.com/reference/stdexcept/length_error
	 * @author Jeongho Nam <http://samchon.org>
	 */
	export class LengthError extends LogicError {
	    /**
	     * <p> Construct from a message. </p>
	     *
	     * @param message A message representing specification about the Exception.
	     */
	    constructor(message: string);
	}
	/**
	 * <p> Out-of-range exception. </p>
	 *
	 * <p> This class defines the type of objects thrown as exceptions to report an out-of-range error. </p>
	 *
	 * <p> It is a standard exception that can be thrown by programs. Some components of the standard library,
	 * such as vector, deque, string and bitset also throw exceptions of this type to signal arguments
	 * out of range. </p>
	 *
	 * <p> <a href="http://samchon.github.io/tstl/images/class_diagram/exceptions.png" target="_blank">
	 * <img src="http://samchon.github.io/tstl/images/class_diagram/exceptions.png" style="max-width: 100%" /> </a> </p>
	 *
	 * @reference http://www.cplusplus.com/reference/stdexcept/out_of_range
	 * @author Jeongho Nam <http://samchon.org>
	 */
	export class OutOfRange extends LogicError {
	    /**
	     * <p> Construct from a message. </p>
	     *
	     * @param message A message representing specification about the Exception.
	     */
	    constructor(message: string);
	}
	/**
	 * <p> Runtime error exception. </p>
	 *
	 * <p> This class defines the type of objects thrown as exceptions to report errors that can only be
	 * detected during runtime. </p>
	 *
	 * <p> It is used as a base class for several runtime error exceptions. </p>
	 *
	 * <p> <a href="http://samchon.github.io/tstl/images/class_diagram/exceptions.png" target="_blank">
	 * <img src="http://samchon.github.io/tstl/images/class_diagram/exceptions.png" style="max-width: 100%" /> </a> </p>
	 *
	 * @reference http://www.cplusplus.com/reference/stdexcept/runtime_error
	 * @author Jeongho Nam <http://samchon.org>
	 */
	export class RuntimeError extends Exception {
	    /**
	     * <p> Construct from a message. </p>
	     *
	     * @param message A message representing specification about the Exception.
	     */
	    constructor(message: string);
	}
	/**
	 * <p> Overflow error exception. </p>
	 *
	 * <p> This class defines the type of objects thrown as exceptions to arithmetic overflow errors. </p>
	 *
	 * <p> It is a standard exception that can be thrown by programs. Some components of the standard library
	 * also throw exceptions of this type to signal range errors. </p>
	 *
	 * <p> <a href="http://samchon.github.io/tstl/images/class_diagram/exceptions.png" target="_blank">
	 * <img src="http://samchon.github.io/tstl/images/class_diagram/exceptions.png" style="max-width: 100%" /> </a> </p>
	 *
	 * @reference http://www.cplusplus.com/reference/stdexcept/overflow_error
	 * @author Jeongho Nam <http://samchon.org>
	 */
	export class OverflowError extends RuntimeError {
	    /**
	     * <p> Construct from a message. </p>
	     *
	     * @param message A message representing specification about the Exception.
	     */
	    constructor(message: string);
	}
	/**
	 * <p> Underflow error exception. </p>
	 *
	 * <p> This class defines the type of objects thrown as exceptions to arithmetic underflow errors. </p>
	 *
	 * <p> No component of the standard library throws exceptions of this type. It is designed as a standard
	 * exception to be thrown by programs. </p>
	 *
	 * <p> <a href="http://samchon.github.io/tstl/images/class_diagram/exceptions.png" target="_blank">
	 * <img src="http://samchon.github.io/tstl/images/class_diagram/exceptions.png" style="max-width: 100%" /> </a> </p>
	 *
	 * @reference http://www.cplusplus.com/reference/stdexcept/underflow_error
	 * @author Jeongho Nam <http://samchon.org>
	 */
	export class UnderflowError extends RuntimeError {
	    /**
	     * <p> Construct from a message. </p>
	     *
	     * @param message A message representing specification about the Exception.
	     */
	    constructor(message: string);
	}
	/**
	 * <p> Range error exception. </p>
	 *
	 * <p> This class defines the type of objects thrown as exceptions to report range errors in internal
	 * computations. </p>
	 *
	 * <p> It is a standard exception that can be thrown by programs. Some components of the standard library
	 * also throw exceptions of this type to signal range errors. </p>
	 *
	 * <p> <a href="http://samchon.github.io/tstl/images/class_diagram/exceptions.png" target="_blank">
	 * <img src="http://samchon.github.io/tstl/images/class_diagram/exceptions.png" style="max-width: 100%" /> </a> </p>
	 *
	 * @reference http://www.cplusplus.com/reference/stdexcept/range_error
	 * @author Jeongho Nam <http://samchon.org>
	 */
	export class RangeError extends RuntimeError {
	    /**
	     * <p> Construct from a message. </p>
	     *
	     * @param message A message representing specification about the Exception.
	     */
	    constructor(message: string);
	}

}
declare module 'tstl/vector' {
	import { Container, IArrayContainer } from 'tstl/base/Container';
	import { Iterator, ReverseIterator, IArrayIterator } from 'tstl/iterator';
	/**
	 * <p> Vector, the dynamic array. </p>
	 *
	 * <p> {@link Vector}s are sequence containers representing arrays that can change in size. </p>
	 *
	 * <p> Just like arrays, {@link Vector}s use contiguous storage locations for their elements, which means that
	 * their elements can also be accessed using offsets on regular pointers to its elements, and just as efficiently
	 * as in arrays. But unlike arrays, their size can change dynamically, with their storage being handled
	 * automatically by the container. </p>
	 *
	 * <p> Internally, {@link Vector}s use a dynamically allocated array to store their elements. This array may need
	 * to be reallocated in order to grow in size when new elements are inserted, which implies allocating a new
	 * array and moving all elements to it. This is a relatively expensive task in terms of processing time, and
	 * thus, {@link Vector}s do not reallocate each time an element is added to the container. </p>
	 *
	 * <p> Compared to the other dynamic sequence containers ({@link Deque}s, {@link List}s), {@link Vector Vectors}
	 * are very efficient accessing its elements (just like arrays) and relatively efficient adding or removing
	 * elements from its end. For operations that involve inserting or removing elements at positions other than the
	 * end, they perform worse than the others, and have less consistent iterators and references than {@link List}s.
	 * </p>
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
	 * @reference http://www.cplusplus.com/reference/vector/vector
	 * @author Jeongho Nam <http://samchon.org>
	 */
	export class Vector<T> extends Container<T> implements IArrayContainer<T> {
	    /**
	     * @hidden
	     */
	    private data_;
	    /**
	     * @hidden
	     */
	    private begin_;
	    /**
	     * @hidden
	     */
	    private end_;
	    /**
	     * @hidden
	     */
	    private rend_;
	    /**
	     * <p> Default Constructor. </p>
	     *
	     * <p> Constructs an empty container, with no elements. </p>
	     */
	    constructor();
	    /**
	     * @inheritdoc
	     */
	    constructor(array: Array<T>);
	    /**
	     * <p> Initializer list Constructor. </p>
	     *
	     * <p> Constructs a container with a copy of each of the elements in <i>array</i>, in the same order. </p>
	     *
	     * @param array An array containing elements to be copied and contained.
	     */
	    constructor(n: number);
	    /**
	     * <p> Fill Constructor. </p>
	     *
	     * <p> Constructs a container with <i>n</i> elements. Each element is a copy of <i>val</i> (if provided). </p>
	     *
	     * @param n Initial container size (i.e., the number of elements in the container at construction).
	     * @param val Value to fill the container with. Each of the <i>n</i> elements in the container is
	     *			  initialized to a copy of this value.
	     */
	    constructor(n: number, val: T);
	    /**
	     * <p> Copy Constructor. </p>
	     *
	     * <p> Constructs a container with a copy of each of the elements in <i>container</i>, in the same order. </p>
	     *
	     * @param container Another container object of the same type (with the same class template
	     *					arguments <i>T</i>), whose contents are either copied or acquired.
	     */
	    constructor(container: Vector<T>);
	    /**
	     * <p> Range Constructor. </p>
	     *
	     * <p> Constructs a container with as many elements as the range (<i>begin</i>, <i>end<i>), with each
	     * element emplace-constructed from its corresponding element in that range, in the same order. </p>
	     *
	     * @param begin Input interator of the initial position in a sequence.
	     * @param end Input interator of the final position in a sequence.
	     */
	    constructor(begin: Iterator<T>, end: Iterator<T>);
	    /**
	     * @inheritdoc
	     */
	    assign<U extends T, InputIterator extends Iterator<U>>(begin: InputIterator, end: InputIterator): void;
	    /**
	     * @inheritdoc
	     */
	    assign(n: number, val: T): void;
	    /**
	     * @inheritdoc
	     */
	    clear(): void;
	    /**
	     * @inheritdoc
	     */
	    begin(): VectorIterator<T>;
	    /**
	     * @inheritdoc
	     */
	    end(): VectorIterator<T>;
	    /**
	     * @inheritdoc
	     */
	    rbegin(): VectorReverseIterator<T>;
	    /**
	     * @inheritdoc
	     */
	    rend(): VectorReverseIterator<T>;
	    /**
	     * @inheritdoc
	     */
	    size(): number;
	    /**
	     * @inheritdoc
	     */
	    empty(): boolean;
	    /**
	     * @inheritdoc
	     */
	    at(index: number): T;
	    /**
	     * @inheritdoc
	     */
	    set(index: number, val: T): T;
	    /**
	     * @inheritdoc
	     */
	    front(): T;
	    /**
	     * @inheritdoc
	     */
	    back(): T;
	    /**
	     * Access data.
	     *
	     * Returns a direct array which is used internally by the {@link vector} to store its owned elements.
	     *
	     * @returns An array.
	     */
	    data(): Array<T>;
	    /**
	     * @inheritdoc
	     */
	    push(...items: T[]): number;
	    /**
	     * @inheritdoc
	     */
	    push_back(val: T): void;
	    /**
	     * <p> Insert an element. </p>
	     *
	     * <p> The {@link Vector} is extended by inserting new element before the element at the specified
	     * <i>position</i>, effectively increasing the container size by one. </p>
	     *
	     * <p> Because {@link Vector}s use an <code>Array</code> as their underlying storage, inserting element in
	     * positions other than the {@link end end()} causes the container to relocate all the elements that were
	     * after <i>position</i> to its new position. This is generally an inefficient operation compared to the one
	     * performed for the same operation by other kinds of sequence containers (such as {@link List}). </p>
	     *
	     * @param position Position in the {@link Vector} where the new element is inserted.
	     *				   {@link iterator} is a member type, defined as a
	     *				   {@link VectorIterator random access iterator} type that points to elements.
	     * @param val Value to be copied to the inserted element.
	     *
	     * @return An iterator that points to the newly inserted element.
	     */
	    insert(position: VectorIterator<T>, val: T): VectorIterator<T>;
	    /**
	     * <p> Insert elements by repeated filling. </p>
	     *
	     * <p> The {@link Vector} is extended by inserting new elements before the element at the specified
	     * <i>position</i>, effectively increasing the container size by the number of elements inserted. </p>
	     *
	     * <p> Because {@link Vector}s use an <code>Array</code> as their underlying storage, inserting elements in
	     * positions other than the {@link end end()} causes the container to relocate all the elements that were
	     * after <i>position</i> to their new positions. This is generally an inefficient operation compared to the
	     * one performed for the same operation by other kinds of sequence containers (such as {@link List}).
	     *
	     * @param position Position in the {@link Vector} where the new elements are inserted.
	     *				   {@link iterator} is a member type, defined as a
	     *				   {@link VectorIterator random access iterator} type that points to elements.
	     * @param n Number of elements to insert. Each element is initialized to a copy of <i>val</i>.
	     * @param val Value to be copied (or moved) to the inserted elements.
	     *
	     * @return An iterator that points to the first of the newly inserted elements.
	     */
	    insert(position: VectorIterator<T>, n: number, val: T): VectorIterator<T>;
	    /**
	     * <p> Insert elements by range iterators. </p>
	     *
	     * <p> The {@link Vector} is extended by inserting new elements before the element at the specified
	     * <i>position</i>, effectively increasing the container size by the number of elements inserted by range
	     * iterators. </p>
	     *
	     * <p> Because {@link Vector}s use an <code>Array</code> as their underlying storage, inserting elements in
	     * positions other than the {@link end end()} causes the container to relocate all the elements that were
	     * after <i>position</i> to their new positions. This is generally an inefficient operation compared to the
	     * one performed for the same operation by other kinds of sequence containers (such as {@link List}).
	     *
	     * @param position Position in the {@link Vector} where the new elements are inserted.
	     *				   {@link iterator} is a member type, defined as a
	     *				   {@link VectorIterator random access iterator} type that points to elements.
	     * @param begin Input interator of the initial position in a sequence.
	     * @param end Input interator of the final position in a sequence.
	     *
	     * @return An iterator that points to the first of the newly inserted elements.
	     */
	    insert<U extends T, InputIterator extends Iterator<U>>(position: VectorIterator<T>, begin: InputIterator, end: InputIterator): VectorIterator<T>;
	    /**
	     * <p> Insert an element. </p>
	     *
	     * <p> The {@link Vector} is extended by inserting new element before the element at the specified
	     * <i>position</i>, effectively increasing the container size by one. </p>
	     *
	     * <p> Because {@link Vector}s use an <code>Array</code> as their underlying storage, inserting element in
	     * positions other than the {@link end end()} causes the container to relocate all the elements that were
	     * after <i>position</i> to its new position. This is generally an inefficient operation compared to the one
	     * performed for the same operation by other kinds of sequence containers (such as {@link List}). </p>
	     *
	     * @param position Position in the {@link Vector} where the new element is inserted.
	     *				   {@link iterator} is a member type, defined as a
	     *				   {@link VectorIterator random access iterator} type that points to elements.
	     * @param val Value to be copied to the inserted element.
	     *
	     * @return An iterator that points to the newly inserted element.
	     */
	    insert(position: VectorReverseIterator<T>, val: T): VectorReverseIterator<T>;
	    /**
	     * <p> Insert elements by repeated filling. </p>
	     *
	     * <p> The {@link Vector} is extended by inserting new elements before the element at the specified
	     * <i>position</i>, effectively increasing the container size by the number of elements inserted. </p>
	     *
	     * <p> Because {@link Vector}s use an <code>Array</code> as their underlying storage, inserting elements in
	     * positions other than the {@link end end()} causes the container to relocate all the elements that were
	     * after <i>position</i> to their new positions. This is generally an inefficient operation compared to the
	     * one performed for the same operation by other kinds of sequence containers (such as {@link List}).
	     *
	     * @param position Position in the {@link Vector} where the new elements are inserted.
	     *				   {@link iterator} is a member type, defined as a
	     *				   {@link VectorIterator random access iterator} type that points to elements.
	     * @param n Number of elements to insert. Each element is initialized to a copy of <i>val</i>.
	     * @param val Value to be copied (or moved) to the inserted elements.
	     *
	     * @return An iterator that points to the first of the newly inserted elements.
	     */
	    insert(position: VectorReverseIterator<T>, n: number, val: T): VectorReverseIterator<T>;
	    /**
	     * <p> Insert elements by range iterators. </p>
	     *
	     * <p> The {@link Vector} is extended by inserting new elements before the element at the specified
	     * <i>position</i>, effectively increasing the container size by the number of elements inserted by range
	     * iterators. </p>
	     *
	     * <p> Because {@link Vector}s use an <code>Array</code> as their underlying storage, inserting elements in
	     * positions other than the {@link end end()} causes the container to relocate all the elements that were
	     * after <i>position</i> to their new positions. This is generally an inefficient operation compared to the
	     * one performed for the same operation by other kinds of sequence containers (such as {@link List}).
	     *
	     * @param position Position in the {@link Vector} where the new elements are inserted.
	     *				   {@link iterator} is a member type, defined as a
	     *				   {@link VectorIterator random access iterator} type that points to elements.
	     * @param begin Input interator of the initial position in a sequence.
	     * @param end Input interator of the final position in a sequence.
	     *
	     * @return An iterator that points to the first of the newly inserted elements.
	     */
	    insert<U extends T, InputIterator extends Iterator<U>>(position: VectorReverseIterator<T>, begin: InputIterator, end: InputIterator): VectorReverseIterator<T>;
	    /**
	     * @hidden
	     */
	    private _Insert_by_val(position, val);
	    /**
	     * @hidden
	     */
	    protected _Insert_by_repeating_val(position: VectorIterator<T>, n: number, val: T): VectorIterator<T>;
	    /**
	     * @hidden
	     */
	    protected _Insert_by_range<InputIterator extends Iterator<T>>(position: VectorIterator<T>, first: InputIterator, last: InputIterator): VectorIterator<T>;
	    /**
	     * @inheritdoc
	     */
	    pop_back(): void;
	    /**
	     * <p> Erase element. </p>
	     *
	     * <p> Removes from the {@link Vector} either a single element; <i>position</i>. </p>
	     *
	     * <p> This effectively reduces the container size by the number of element removed. </p>
	     *
	     * <p> Because {@link Vector}s use an <code>Array</code> as their underlying storage, erasing an element in
	     * position other than the {@link end end()} causes the container to relocate all the elements after the
	     * segment erased to their new positions. This is generally an inefficient operation compared to the one
	     * performed for the same operation by other kinds of sequence containers (such as {@link List}). </p>
	     *
	     * @param position Iterator pointing to a single element to be removed from the {@link Vector}.
	     *
	     * @return An iterator pointing to the new location of the element that followed the last element erased by
	     *		   the function call. This is the {@link end end()} if the operation erased the last element in the
	     *		   sequence.
	     */
	    erase(position: VectorIterator<T>): VectorIterator<T>;
	    /**
	     * <p> Erase element. </p>
	     *
	     * <p> Removes from the <ode>Vector</code> either a single element; <i>position</i>. </p>
	     *
	     * <p> This effectively reduces the container size by the number of elements removed. </p>
	     *
	     * <p> Because {@link Vector}s use an <code>Array</code> as their underlying storage, erasing elements in
	     * position other than the {@link end end()} causes the container to relocate all the elements after the
	     * segment erased to their new positions. This is generally an inefficient operation compared to the one
	     * performed for the same operation by other kinds of sequence containers (such as {@link List}). </p>
	     *
	     * @param begin An iterator specifying a range of beginning to erase.
	     * @param end An iterator specifying a range of end to erase.
	     *
	     * @return An iterator pointing to the new location of the element that followed the last element erased by
	     *		   the function call. This is the {@link rend rend()} if the operation erased the last element in the
	     *		   sequence.
	     */
	    erase(first: VectorIterator<T>, last: VectorIterator<T>): VectorIterator<T>;
	    /**
	     * <p> Erase element. </p>
	     *
	     * <p> Removes from the {@link Vector} either a single element; <i>position</i>. </p>
	     *
	     * <p> This effectively reduces the container size by the number of element removed. </p>
	     *
	     * <p> Because {@link Vector}s use an <code>Array</code> as their underlying storage, erasing an element in
	     * position other than the {@link end end()} causes the container to relocate all the elements after the
	     * segment erased to their new positions. This is generally an inefficient operation compared to the one
	     * performed for the same operation by other kinds of sequence containers (such as {@link List}). </p>
	     *
	     * @param position Iterator pointing to a single element to be removed from the {@link Vector}.
	     *
	     * @return An iterator pointing to the new location of the element that followed the last element erased by
	     *		   the function call. This is the {@link rend rend()} if the operation erased the last element in the
	     *		   sequence.
	     */
	    erase(position: VectorReverseIterator<T>): VectorReverseIterator<T>;
	    /**
	     * <p> Erase element. </p>
	     *
	     * <p> Removes from the <ode>Vector</code> either a single element; <i>position</i>. </p>
	     *
	     * <p> This effectively reduces the container size by the number of elements removed. </p>
	     *
	     * <p> Because {@link Vector}s use an <code>Array</code> as their underlying storage, erasing elements in
	     * position other than the {@link end end()} causes the container to relocate all the elements after the
	     * segment erased to their new positions. This is generally an inefficient operation compared to the one
	     * performed for the same operation by other kinds of sequence containers (such as {@link List}). </p>
	     *
	     * @param begin An iterator specifying a range of beginning to erase.
	     * @param end An iterator specifying a range of end to erase.
	     *
	     * @return An iterator pointing to the new location of the element that followed the last element erased by
	     *		   the function call. This is the {@link end end()} if the operation erased the last element in the
	     *		   sequence.
	     */
	    erase(first: VectorReverseIterator<T>, last: VectorReverseIterator<T>): VectorReverseIterator<T>;
	    /**
	     * @hidden
	     */
	    protected _Erase_by_range(first: VectorIterator<T>, last: VectorIterator<T>): VectorIterator<T>;
	    /**
	     * <p> Swap content. </p>
	     *
	     * <p> Exchanges the content of the container by the content of <i>obj</i>, which is another
	     * {@link Vector container} object with same type of elements. Sizes and container type may differ. </p>
	     *
	     * <p> After the call to this member function, the elements in this container are those which were in <i>obj</i>
	     * before the call, and the elements of <i>obj</i> are those which were in this. All iterators, references and
	     * pointers remain valid for the swapped objects. </p>
	     *
	     * <p> Notice that a non-member function exists with the same name, {@link std.swap swap}, overloading that
	     * algorithm with an optimization that behaves like this member function. </p>
	     *
	     * @param obj Another {@link Vector container} of the same type of elements (i.e., instantiated
	     *			  with the same template parameter, <b>T</b>) whose content is swapped with that of this
	     *			  {@link container Vector}.
	     */
	    swap(obj: Vector<T>): void;
	    /**
	     * @inheritdoc
	     */
	    swap(obj: Container<T>): void;
	}
	/**
	 * <p> An iterator of Vector. </p>
	 *
	 * <p> <a href="http://samchon.github.io/tstl/images/design/class_diagram/linear_containers.png" target="_blank">
	 * <img src="http://samchon.github.io/tstl/images/design/class_diagram/linear_containers.png" style="max-width: 100%" />
	 * </p>
	 *
	 * @param <T> Type of the elements.
	 *
	 * @author Jeongho Nam <http://samchon.org>
	 */
	export class VectorIterator<T> extends Iterator<T> implements IArrayIterator<T> {
	    /**
	     * @hidden
	     */
	    private index_;
	    /**
	     * <p> Construct from the source {@link Vector container}. </p>
	     *
	     * <h4> Note </h4>
	     * <p> Do not create the iterator directly, by yourself. </p>
	     * <p> Use {@link Vector.begin begin()}, {@link Vector.end end()} in {@link Vector container} instead. </p>
	     *
	     * @param source The source {@link Vector container} to reference.
	     * @param index Sequence number of the element in the source {@link Vector}.
	     */
	    constructor(source: Vector<T>, index: number);
	    /**
	     * @inheritdoc
	     */
	    /**
	     * Set value of the iterator is pointing to.
	     *
	     * @param val Value to set.
	     */
	    value: T;
	    /**
	     * Get index.
	     */
	    readonly index: number;
	    /**
	     * @inheritdoc
	     */
	    prev(): VectorIterator<T>;
	    /**
	     * @inheritdoc
	     */
	    next(): VectorIterator<T>;
	    /**
	     * @inheritdoc
	     */
	    advance(n: number): VectorIterator<T>;
	    /**
	     * @inheritdoc
	     */
	    equals(obj: VectorIterator<T>): boolean;
	    /**
	     * @inheritdoc
	     */
	    swap(obj: VectorIterator<T>): void;
	    toString(): number;
	}
	/**
	 * <p> A reverse-iterator of Vector. </p>
	 *
	 * <p> <a href="http://samchon.github.io/tstl/images/design/class_diagram/linear_containers.png" target="_blank">
	 * <img src="http://samchon.github.io/tstl/images/design/class_diagram/linear_containers.png" style="max-width: 100%" />
	 * </p>
	 *
	 * @param <T> Type of the elements.
	 *
	 * @author Jeongho Nam <http://samchon.org>
	 */
	export class VectorReverseIterator<T> extends ReverseIterator<T, VectorIterator<T>, VectorReverseIterator<T>> implements IArrayIterator<T> {
	    /**
	     * Construct from base iterator.
	     *
	     * @param base A reference of the base iterator, which iterates in the opposite direction.
	     */
	    constructor(base: VectorIterator<T>);
	    /**
	     * @hidden
	     */
	    protected _Create_neighbor(base: VectorIterator<T>): VectorReverseIterator<T>;
	    /**
	     * @inheritdoc
	     */
	    /**
	     * Set value of the iterator is pointing to.
	     *
	     * @param val Value to set.
	     */
	    value: T;
	    /**
	     * Get index.
	     */
	    readonly index: number;
	}

}
declare module 'tstl/base/Container' {
	import { Iterator, IReverseIterator } from 'tstl/iterator';
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
	export abstract class Container<T> {
	    /**
	     * Default Constructor.
	     */
	    protected constructor();
	    /**
	     * <p> Assign new content to content. </p>
	     *
	     * <p> Assigns new contents to the container, replacing its current contents, and modifying its
	     * {@link size} accordingly. </p>
	     *
	     * @param begin Input interator of the initial position in a sequence.
	     * @param end Input interator of the final position in a sequence.
	     */
	    abstract assign<U extends T, InputIterator extends Iterator<U>>(begin: InputIterator, end: InputIterator): void;
	    /**
	     * <p> Clear content. </p>
	     *
	     * <p> Removes all elements from the Container, leaving the container with a size of 0. </p>
	     */
	    clear(): void;
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
	    abstract begin(): Iterator<T>;
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
	    abstract end(): Iterator<T>;
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
	    abstract rbegin(): IReverseIterator<T>;
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
	    abstract rend(): IReverseIterator<T>;
	    /**
	     * Return the number of elements in the Container.
	     *
	     * @return The number of elements in the
	     */
	    abstract size(): number;
	    /**
	     * <p> Test whether the container is empty. </p>
	     * <p> Returns whether the container is empty (i.e. whether its size is 0). </p>
	     *
	     * <p> This function does not modify the container in any way. To clear the content of the container,
	     * see {@link clear clear()}. </p>
	     *
	     * @return <code>true</code> if the container size is 0, <code>false</code> otherwise.
	     */
	    empty(): boolean;
	    /**
	     * <p> Insert elements. </p>
	     *
	     * <p> Appends new elements to the container, and returns the new size of the  </p>
	     *
	     * @param items New elements to insert.
	     *
	     * @return New size of the Container.
	     */
	    abstract push(...items: T[]): number;
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
	    abstract insert(position: Iterator<T>, val: T): Iterator<T>;
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
	    abstract erase(position: Iterator<T>): Iterator<T>;
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
	    abstract erase<U extends T>(begin: Iterator<U>, end: Iterator<U>): Iterator<T>;
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
	    swap(obj: Container<T>): void;
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
	export interface ILinearContainer<T> extends Container<T> {
	    /**
	     * @inheritdoc
	     */
	    assign<U extends T, InputIterator extends Iterator<U>>(begin: InputIterator, end: InputIterator): void;
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
	    insert<U extends T, InputIterator extends Iterator<U>>(position: Iterator<T>, begin: InputIterator, end: InputIterator): Iterator<T>;
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
	export interface IArrayContainer<T> extends ILinearContainer<T> {
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
	export interface IDequeContainer<T> extends ILinearContainer<T> {
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

}
declare module 'tstl/iterator' {
	import { Container } from 'tstl/base/Container';
	/**
	 * <p> Bi-directional iterator. </p>
	 *
	 * <p> {@link Iterator Bidirectional iterators} are iterators that can be used to access the sequence of elements
	 * in a range in both directions (towards the end and towards the beginning). </p>
	 *
	 * <p> All {@link IArrayIterator random-access iterators} are also valid {@link Iterrator bidirectional iterators}.
	 * </p>
	 *
	 * <p> There is not a single type of {@link Iterator bidirectional iterator}: {@link IContainer Each container}
	 * may define its own specific iterator type able to iterate through it and access its elements. </p>
	 *
	 * <p> <a href="http://samchon.github.io/tstl/images/class_diagram/abstract_containers.png" target="_blank">
	 * <img src="http://samchon.github.io/tstl/images/class_diagram/abstract_containers.png" style="max-width: 100%" /></a>
	 * </p>
	 *
	 * @reference http://www.cplusplus.com/reference/iterator/BidirectionalIterator
	 * @author Jeongho Nam <http://samchon.org>
	 */
	export abstract class Iterator<T> {
	    /**
	     * Source container of the iterator is directing for.
	     */
	    protected source_: Container<T>;
	    /**
	     * Construct from the source {@link IContainer container}.
	     *
	     * @param source The source container.
	     */
	    protected constructor(source: Container<T>);
	    /**
	     * <p> Get iterator to previous element. </p>
	     * <p> If current iterator is the first item(equal with {@link IContainer.begin IContainer.begin()}),
	     * returns {@link IContainer.end IContainer.end()}. </p>
	     *
	     * @return An iterator of the previous item.
	     */
	    abstract prev(): Iterator<T>;
	    /**
	     * <p> Get iterator to next element. </p>
	     * <p> If current iterator is the last item, returns {@link IContainer.end IContainer.end()}. </p>
	     *
	     * @return An iterator of the next item.
	     */
	    abstract next(): Iterator<T>;
	    /**
	     * Advances the {@link Iterator} by <i>n</i> element positions.
	     *
	     * @param n Number of element positions to advance.
	     * @return An advanced iterator.
	     */
	    advance(n: number): Iterator<T>;
	    /**
	     * Get source container.
	     */
	    source(): Container<T>;
	    /**
	     * <p> Whether an iterator is equal with the iterator. </p>
	     *
	     * <p> Compare two iterators and returns whether they are equal or not. </p>
	     *
	     * <h4> Note </h4>
	     * <p> Iterator's {@link equals equals()} only compare souce container and index number. </p>
	     *
	     * <p> Although elements in a pair, key and value are {@link std.equal_to equal_to}, if the source map or
	     * index number is different, then the {@link equals equals()} will return false. If you want to
	     * compare the elements of a pair, compare them directly by yourself. </p>
	     *
	     * @param obj An iterator to compare
	     * @return Indicates whether equal or not.
	     */
	    equals(obj: Iterator<T>): boolean;
	    /**
	     * <p> Get value of the iterator is pointing. </p>
	     *
	     * @return A value of the iterator.
	     */
	    readonly abstract value: T;
	    abstract swap(obj: Iterator<T>): void;
	}
	/**
	 * An interface for iterators from linear containers.
	 *
	 * {@link ILieanerIterator} is an bi-directional iterator which is created from the related
	 * {@link ILinearContainer linear containers}. Not only accessing to {@link value} of the pointed element from
	 * this {@link ILieanerIterator}, but also modifying the {@link value} is possible.
	 *
	 * @author Jeongho Nam <http://samchon.org>
	 */
	export interface ILinearIterator<T> extends Iterator<T> {
	    /**
	     * @inheritdoc
	     */
	    value: T;
	    /**
	     * @inheritdoc
	     */
	    prev(): ILinearIterator<T>;
	    /**
	     * @inheritdoc
	     */
	    next(): ILinearIterator<T>;
	}
	/**
	 * <p> Random-access iterator. </p>
	 *
	 * <p> {@link IArrayIterator Random-access iterators} are iterators that can be used to access elements at an
	 * arbitrary offset position relative to the element they point to, offering the same functionality as pointers.
	 * </p>
	 *
	 * <p> {@link IArrayIterator Random-access iterators} are the most complete iterators in terms of functionality.
	 * All pointer types are also valid {@link IArrayIterator random-access iterators}. </p>
	 *
	 * <p> There is not a single type of {@link IArrayIterator random-access iterator}: Each container may define its
	 * own specific iterator type able to iterate through it and access its elements. </p>
	 *
	 * <p> <a href="http://samchon.github.io/tstl/images/class_diagram/linear_containers.png" target="_blank">
	 * <img src="http://samchon.github.io/tstl/images/class_diagram/linear_containers.png" style="max-width: 100%" />
	 * </a> </p>
	 *
	 * @reference http://www.cplusplus.com/reference/iterator/RandomAccessIterator
	 * @author Jeongho Nam <http://samchon.org>
	 */
	export interface IArrayIterator<T> extends ILinearIterator<T> {
	    /**
	     * Get index, sequence number of the iterator in the source {@link IArrayContainer array}.
	     *
	     * @return Sequence number of the iterator in the source {@link IArrayContainer array}.
	     */
	    index: number;
	    /**
	     * @inheritdoc
	     */
	    prev(): IArrayIterator<T>;
	    /**
	     * @inheritdoc
	     */
	    next(): IArrayIterator<T>;
	}
	/**
	 * <p> This class reverses the direction in which a bidirectional or random-access iterator iterates through a range.
	 * </p>
	 *
	 * <p> A copy of the original iterator (the {@link Iterator base iterator}) is kept internally and used to reflect
	 * the operations performed on the {@link ReverseIterator}: whenever the {@link ReverseIterator} is incremented, its
	 * {@link Iterator base iterator} is decreased, and vice versa. A copy of the {@link Iterator base iterator} with the
	 * current state can be obtained at any time by calling member {@link base}. </p>
	 *
	 * <p> Notice however that when an iterator is reversed, the reversed version does not point to the same element in
	 * the range, but to <b>the one preceding it</b>. This is so, in order to arrange for the past-the-end element of a
	 * range: An iterator pointing to a past-the-end element in a range, when reversed, is pointing to the last element
	 * (not past it) of the range (this would be the first element of the reversed range). And if an iterator to the
	 * first element in a range is reversed, the reversed iterator points to the element before the first element (this
	 * would be the past-the-end element of the reversed range). </p>
	 *
	 * <p> <a href="http://samchon.github.io/tstl/images/class_diagram/abstract_containers.png" target="_blank">
	 * <img src="http://samchon.github.io/tstl/images/class_diagram/abstract_containers.png" style="max-width: 100%" /></a>
	 * </p>
	 *
	 * @reference http://www.cplusplus.com/reference/iterator/reverse_iterator
	 * @author Jeongho Nam <http://samchon.org>
	 */
	export abstract class ReverseIterator<T, Base extends Iterator<T>, This extends ReverseIterator<T, Base, This>> extends Iterator<T> {
	    /**
	     * @hidden
	     */
	    protected base_: Base;
	    /**
	     * Construct from base iterator.
	     *
	     * @param base A reference of the base iterator, which iterates in the opposite direction.
	     */
	    protected constructor(base: Base);
	    /**
	     * <p> Return base iterator. </p>
	     *
	     * <p> Return a reference of the base iteraotr. </p>
	     *
	     * <p> The base iterator is an iterator of the same type as the one used to construct the {@link ReverseIterator},
	     * but pointing to the element next to the one the {@link ReverseIterator} is currently pointing to
	     * (a {@link ReverseIterator} has always an offset of -1 with respect to its base iterator).
	     *
	     * @return A reference of the base iterator, which iterates in the opposite direction.
	     */
	    base(): Base;
	    /**
	     * @hidden
	     */
	    protected abstract _Create_neighbor(base: Base): This;
	    /**
	     * <p> Get value of the iterator is pointing. </p>
	     *
	     * @return A value of the reverse iterator.
	     */
	    readonly value: T;
	    /**
	     * @inheritdoc
	     */
	    prev(): This;
	    /**
	     * @inheritdoc
	     */
	    next(): This;
	    /**
	     * @inheritdoc
	     */
	    advance(n: number): This;
	    /**
	     * @inheritdoc
	     */
	    equals(obj: This): boolean;
	    /**
	     * @inheritdoc
	     */
	    swap(obj: This): void;
	}
	export interface IReverseIterator<T> extends ReverseIterator<T, Iterator<T>, IReverseIterator<T>> {
	}
	/**
	 * <p> Return distance between {@link Iterator iterators}. </p>
	 *
	 * <p> Calculates the number of elements between <i>first</i> and <i>last</i>. </p>
	 *
	 * <p> If it is a {@link IArrayIterator random-access iterator}, the function uses operator- to calculate this.
	 * Otherwise, the function uses the increase operator {@link Iterator.next next()} repeatedly. </p>
	 *
	 * @param first Iterator pointing to the initial element.
	 * @param last Iterator pointing to the final element. This must be reachable from first.
	 *
	 * @return The number of elements between first and last.
	 */
	export function distance<T, InputIterator extends Iterator<T>>(first: InputIterator, last: InputIterator): number;
	/**
	 * <p> Advance iterator. </p>
	 *
	 * <p> Advances the iterator <i>it</i> by <i>n</i> elements positions. </p>
	 *
	 * @param it Iterator to be advanced.
	 * @param n Number of element positions to advance.
	 *
	 * @return An iterator to the element <i>n</i> positions before <i>it</i>.
	 */
	export function advance<T, InputIterator extends Iterator<T>>(it: InputIterator, n: number): InputIterator;
	/**
	 * <p> Get iterator to previous element. </p>
	 *
	 * <p> Returns an iterator pointing to the element that <i>it</i> would be pointing to if advanced <i>-n</i> positions. </p>
	 *
	 * @param it Iterator to base position.
	 * @param n Number of element positions offset (1 by default).
	 *
	 * @return An iterator to the element <i>n</i> positions before <i>it</i>.
	 */
	export function prev<T, BidirectionalIterator extends Iterator<T>>(it: BidirectionalIterator, n?: number): BidirectionalIterator;
	/**
	 * <p> Get iterator to next element. </p>
	 *
	 * <p> Returns an iterator pointing to the element that <i>it</i> would be pointing to if advanced <i>n</i> positions. </p>
	 *
	 * @param it Iterator to base position.
	 * @param n Number of element positions offset (1 by default).
	 *
	 * @return An iterator to the element <i>n</i> positions away from <i>it</i>.
	 */
	export function next<T, ForwardIterator extends Iterator<T>>(it: ForwardIterator, n?: number): ForwardIterator;

}
declare module 'tstl/algorithm' {
	import { Iterator, ILinearIterator, IArrayIterator } from 'tstl/iterator';
	import { Pair } from 'tstl/utility';
	/**
	 * <p> Apply function to range. </p>
	 *
	 * <p> Applies function <i>fn</i> to each of the elements in the range [<i>first</i>, <i>last</i>). </p>
	 *
	 * @param first An {@link Iterator} to the initial position in a sequence.
	 * @param last An {@link Iterator} to the final position in a sequence. The range used is [<i>first</i>, <i>last</i>),
	 *			  which contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
	 *			  <i>first</i> but not the element pointed by <i>last</i>.
	 * @param fn Unary function that accepts an element in the range as argument. This can either be a function p
	 *			 ointer or a move constructible function object. Its return value, if any, is ignored.
	 */
	export function for_each<T, InputIterator extends Iterator<T>, Func extends (val: T) => any>(first: InputIterator, last: InputIterator, fn: Func): Func;
	/**
	 * Apply function to range.
	 *
	 * Applies function *fn* to each of the elements in the range [*first*, *first + n*).
	 *
	 * @param first An {@link Iterator} to the initial position in a sequence.
	 * @param n the number of elements to apply the function to
	 * @param fn Unary function that accepts an element in the range as argument. This can either be a function p
	 *			 ointer or a move constructible function object. Its return value, if any, is ignored.
	 *
	 * @return first + n
	 */
	export function for_each_n<T, InputIterator extends Iterator<T>>(first: InputIterator, n: number, fn: (val: T) => any): InputIterator;
	/**
	 * <p> Test condition on all elements in range. </p>
	 *
	 * <p> Returns <code>true</code> if <i>pred</i> returns <code>true</code> for all the elements in the range
	 * [<i>first</i>, <i>last</i>) or if the range is {@link IContainer.empty empty}, and <code>false</code> otherwise.
	 * </p>
	 *
	 * @param first An {@link Iterator} to the initial position in a sequence.
	 * @param last An {@link Iterator} to the final position in a sequence. The range used is [<i>first</i>, <i>last</i>),
	 *			  which contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
	 *			  <i>first</i> but not the element pointed by <i>last</i>.
	 * @param pred Unary function that accepts an element in the range as argument and returns a value convertible to
	 *			   <code>boolean</code>. The value returned indicates whether the element fulfills the condition
	 *			   checked by this function. The function shall not modify its argument.
	 *
	 * @return <code>true</code> if pred returns true for all the elements in the range or if the range is
	 *		   {@link IContainer.empty empty}, and <code>false</code> otherwise.
	 */
	export function all_of<T, InputIterator extends Iterator<T>>(first: InputIterator, last: InputIterator, pred: (val: T) => boolean): boolean;
	/**
	 * <p> Test if any element in range fulfills condition. </p>
	 *
	 * <p> Returns <code>true</code> if <i>pred</i> returns true for any of the elements in the range
	 * [<i>first</i>, <i>last</i>), and <code>false</code> otherwise. </p>
	 *
	 * <p> If [<i>first</i>, <i>last</i>) is an {@link IContainer.empty empty} range, the function returns
	 * <code>false</code>. </p>
	 *
	 * @param first An {@link Iterator} to the initial position in a sequence.
	 * @param last An {@link Iterator} to the final position in a sequence. The range used is [<i>first</i>, <i>last</i>),
	 *			  which contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
	 *			  <i>first</i> but not the element pointed by <i>last</i>.
	 * @param pred Unary function that accepts an element in the range as argument and returns a value convertible to
	 *			   <code>boolean</code>. The value returned indicates whether the element fulfills the condition
	 *			   checked by this function. The function shall not modify its argument.
	 *
	 * @return <code>true</code> if <i>pred</i> returns <code>true</code> for any of the elements in the range
	 *		   [<i>first</i>, <i>last</i>), and <code>false</code> otherwise. If [<i>first</i>, <i>last</i>) is an
	 *		   {@link IContainer.empty empty} range, the function returns <code>false</code>.
	 */
	export function any_of<T, InputIterator extends Iterator<T>>(first: InputIterator, last: InputIterator, pred: (val: T) => boolean): boolean;
	/**
	 * <p> Test if no elements fulfill condition. </p>
	 *
	 * <p> Returns <code>true</code> if <i>pred</i> returns false for all the elements in the range
	 * [<i>first</i>, <i>last</i>) or if the range is {@link IContainer.empty empty}, and <code>false</code> otherwise.
	 * </p>
	 *
	 * @param first An {@link Iterator} to the initial position in a sequence.
	 * @param last An {@link Iterator} to the final position in a sequence. The range used is [<i>first</i>, <i>last</i>),
	 *			  which contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
	 *			  <i>first</i> but not the element pointed by <i>last</i>.
	 * @param pred Unary function that accepts an element in the range as argument and returns a value convertible to
	 *			   <code>boolean</code>. The value returned indicates whether the element fulfills the condition
	 *			   checked by this function. The function shall not modify its argument.
	 *
	 * @return <code>true</code> if <i>pred</i> returns <code>false</code> for all the elements in the range
	 *		   [<i>first</i>, <i>last</i>) or if the range is {@link IContainer.empty empty}, and <code>false</code>
	 *		   otherwise.
	 */
	export function none_of<T, InputIterator extends Iterator<T>>(first: InputIterator, last: InputIterator, pred: (val: T) => boolean): boolean;
	/**
	 * <p> Test whether the elements in two ranges are equal. </p>
	 *
	 * <p> Compares the elements in the range [<i>first1</i>, <i>last1</i>) with those in the range beginning at
	 * <i>first2</i>, and returns <code>true</code> if all of the elements in both ranges match. </p>
	 *
	 * @param first1 An {@link Iterator} to the initial position of the first sequence.
	 * @param last1 An {@link Iterator} to the final position in a sequence. The range used is
	 *				[<i>first1</i>, <i>last1</i>), including the element pointed by <i>first1</i>, but not the element
	 *				pointed by <i>last1</i>.
	 * @param first2 An {@link Iterator} to the initial position of the second sequence. The comparison includes up to
	 *				 as many elements of this sequence as those in the range [<i>first1</i>, <i>last1</i>).
	 *
	 * @return <code>true</code> if all the elements in the range [<i>first1</i>, <i>last1</i>) compare equal to those
	 *		   of the range starting at <i>first2</i>, and <code>false</code> otherwise.
	 */
	export function equal<T, InputIterator extends Iterator<T>>(first1: InputIterator, last1: InputIterator, first2: Iterator<T>): boolean;
	/**
	 * <p> Test whether the elements in two ranges are equal. </p>
	 *
	 * <p> Compares the elements in the range [<i>first1</i>, <i>last1</i>) with those in the range beginning at
	 * <i>first2</i>, and returns <code>true</code> if all of the elements in both ranges match. </p>
	 *
	 * @param first1 An {@link Iterator} to the initial position of the first sequence.
	 * @param last1 An {@link Iterator} to the final position in a sequence. The range used is
	 *				[<i>first1</i>, <i>last1</i>), including the element pointed by <i>first1</i>, but not the element
	 *				pointed by <i>last1</i>.
	 * @param first2 An {@link Iterator} to the initial position of the second sequence. The comparison includes up to
	 *				 as many elements of this sequence as those in the range [<i>first1</i>, <i>last1</i>).
	 * @param pred Binary function that accepts two elements as argument (one of each of the two sequences, in the same
	 *			   order), and returns a value convertible to <code>bool</code>. The value returned indicates whether
	 *			   the elements are considered to match in the context of this function.
	 *
	 * @return <code>true</code> if all the elements in the range [<i>first1</i>, <i>last1</i>) compare equal to those
	 *		   of the range starting at <i>first2</i>, and <code>false</code> otherwise.
	 */
	export function equal<T, InputIterator extends Iterator<T>>(first1: InputIterator, last1: InputIterator, first2: Iterator<T>, pred: (x: T, y: T) => boolean): boolean;
	/**
	 * <p> Lexicographical less-than comparison. </p>
	 *
	 * <p> Returns <code>true</code> if the range [<i>first1</i>, <i>last1</i>) compares <i>lexicographically less</i>
	 * than the range [<i>first2</i>, <i>last2</i>). </p>
	 *
	 * <p> A <i>lexicographical comparison</i> is the kind of comparison generally used to sort words alphabetically in
	 * dictionaries; It involves comparing sequentially the elements that have the same position in both ranges against
	 * each other until one element is not equivalent to the other. The result of comparing these first non-matching
	 * elements is the result of the lexicographical comparison. </p>
	 *
	 * <p> If both sequences compare equal until one of them ends, the shorter sequence is <i>lexicographically less</i>
	 * than the longer one. </p>
	 *
	 * @param first1 An {@link Iterator} to the initial position of the first sequence.
	 * @param last1 An {@link Iterator} to the final position in a sequence. The range used is
	 *				[<i>first1</i>, <i>last1</i>), including the element pointed by <i>first1</i>, but not the element
	 *				pointed by <i>last1</i>.
	 * @param first2 An {@link Iterator} to the initial position of the second sequence.
	 * @param last2 An {@link Iterator} to the final position of the second sequence. The ranged used is
	 *				[<i>first2</i>, <i>last2</i>).
	 *
	 * @return <code>true</code> if the first range compares <i>lexicographically less</i> than than the second.
	 *		   <code>false</code> otherwise (including when all the elements of both ranges are equivalent).
	 */
	export function lexicographical_compare<T, T1 extends T, T2 extends T, Iterator1 extends Iterator<T1>, Iterator2 extends Iterator<T2>>(first1: Iterator1, last1: Iterator1, first2: Iterator2, last2: Iterator2): boolean;
	/**
	 * <p> Lexicographical comparison. </p>
	 *
	 * <p> Returns <code>true</code> if the range [<i>first1</i>, <i>last1</i>) compares <i>lexicographically
	 * relationship</i> than the range [<i>first2</i>, <i>last2</i>). </p>
	 *
	 * <p> A <i>lexicographical comparison</i> is the kind of comparison generally used to sort words alphabetically in
	 * dictionaries; It involves comparing sequentially the elements that have the same position in both ranges against
	 * each other until one element is not equivalent to the other. The result of comparing these first non-matching
	 * elements is the result of the lexicographical comparison. </p>
	 *
	 * <p> If both sequences compare equal until one of them ends, the shorter sequence is <i>lexicographically
	 * relationship</i> than the longer one. </p>
	 *
	 * @param first1 An {@link Iterator} to the initial position of the first sequence.
	 * @param last1 An {@link Iterator} to the final position in a sequence. The range used is
	 *				[<i>first1</i>, <i>last1</i>), including the element pointed by <i>first1</i>, but not the element
	 *				pointed by <i>last1</i>.
	 * @param first2 An {@link Iterator} to the initial position of the second sequence.
	 * @param last2 An {@link Iterator} to the final position of the second sequence. The ranged used is
	 *				[<i>first2</i>, <i>last2</i>).
	 * @param compare Binary function that accepts two arguments of the types pointed by the iterators, and returns a
	 *		  value convertible to <code>bool</code>. The value returned indicates whether the first argument is
	 *		  considered to go before the second in the specific <i>strict weak ordering</i> it defines.
	 *
	 * @return <code>true</code> if the first range compares <i>lexicographically relationship</i> than than the
	 *		   second. <code>false</code> otherwise (including when all the elements of both ranges are equivalent).
	 */
	export function lexicographical_compare<T, T1 extends T, T2 extends T, Iterator1 extends Iterator<T1>, Iterator2 extends Iterator<T2>>(first1: Iterator1, last1: Iterator1, first2: Iterator2, last2: Iterator2, compare: (x: T, y: T) => boolean): boolean;
	/**
	 * <p> Find value in range. </p>
	 *
	 * <p> Returns an iterator to the first element in the range [<i>first</i>, <i>last</i>) that compares equal to
	 * <i>val</i>. If no such element is found, the function returns <i>last</i>. </p>
	 *
	 * <p> The function uses {@link equal_to equal_to} to compare the individual elements to <i>val</i>. </p>
	 *
	 * @param first An {@link Iterator} to the initial position in a sequence.
	 * @param last An {@link Iterator} to the final position in a sequence. The range used is [<i>first</i>, <i>last</i>),
	 *			  which contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
	 *			  <i>first</i> but not the element pointed by <i>last</i>.
	 * @param val Value to search for in the range.
	 *
	 * @return An {@link Iterator} to the first element in the range that compares equal to <i>val</i>. If no elements
	 *		   match, the function returns <i>last</i>.
	 */
	export function find<T, InputIterator extends Iterator<T>>(first: InputIterator, last: InputIterator, val: T): InputIterator;
	/**
	 * <p> Find element in range. </p>
	 *
	 * <p> Returns an iterator to the first element in the range [<i>first</i>, <i>last</i>) for which pred returns
	 * <code>true</code>. If no such element is found, the function returns <i>last</i>. </p>
	 *
	 * @param first An {@link Iterator} to the initial position in a sequence.
	 * @param last An {@link Iterator} to the final position in a sequence. The range used is [<i>first</i>, <i>last</i>),
	 *			  which contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
	 *			  <i>first</i> but not the element pointed by <i>last</i>.
	 * @param pred Unary function that accepts an element in the range as argument and returns a value convertible
	 *			   to <code>bool</code>. The value returned indicates whether the element is considered a match in
	 *			   the context of this function. The function shall not modify its argument.
	 *
	 * @return An {@link Iterator} to the first element in the range for which <i>pred</i> does not return
	 *		   <code>false</code>. If <i>pred</i> is <code>false</code> for all elements, the function returns
	 *		   <i>last</i>.
	 */
	export function find_if<T, InputIterator extends Iterator<T>>(first: InputIterator, last: InputIterator, pred: (val: T) => boolean): InputIterator;
	/**
	 * <p> Find element in range. </p>
	 *
	 * <p> Returns an iterator to the first element in the range [<i>first</i>, <i>last</i>) for which pred returns
	 * <code>true</code>. If no such element is found, the function returns <i>last</i>. </p>
	 *
	 * @param first An {@link Iterator} to the initial position in a sequence.
	 * @param last An {@link Iterator} to the final position in a sequence. The range used is [<i>first</i>, <i>last</i>),
	 *			  which contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
	 *			  <i>first</i> but not the element pointed by <i>last</i>.
	 * @param pred Unary function that accepts an element in the range as argument and returns a value convertible
	 *			   to <code>bool</code>. The value returned indicates whether the element is considered a match in
	 *			   the context of this function. The function shall not modify its argument.
	 *
	 * @return An {@link Iterator} to the first element in the range for which <i>pred</i> returns <code>false</code>.
	 *		   If <i>pred</i> is <code>true</code> for all elements, the function returns <i>last</i>.
	 */
	export function find_if_not<T, InputIterator extends Iterator<T>>(first: InputIterator, last: InputIterator, pred: (val: T) => boolean): InputIterator;
	/**
	 * <p> Find last subsequence in range. </p>
	 *
	 * <p> Searches the range [<i>first1</i>, <i>last1</i>) for the last occurrence of the sequence defined by
	 * [<i>first2</i>, <i>last2</i>), and returns an {@link Iterator} to its first element, or <i>last1,/i> if no
	 * occurrences are found. </p>
	 *
	 * <p> The elements in both ranges are compared sequentially using {@link equal_to}: A subsequence of
	 * [<i>first1</i>, <i>last1</i>) is considered a match only when this is <code>true</code> for all the elements of
	 * [<i>first2</i>, <i>last2</i>). </p>
	 *
	 * <p> This function returns the last of such occurrences. For an algorithm that returns the first instead, see
	 * {@link search}. </p>
	 *
	 * @param first1 An {@link Iterator} to the initial position of the first sequence.
	 * @param last1 An {@link Iterator} to the final position in a sequence. The range used is
	 *				[<i>first1</i>, <i>last1</i>), including the element pointed by <i>first1</i>, but not the element
	 *				pointed by <i>last1</i>.
	 * @param first2 An {@link Iterator} to the initial position of the element values to be searched for.
	 * @param last2 An {@link Iterator} to the final position of the element values to be searched for. The range used
	 *				is [<i>first2</i>, <i>last2</i>).
	 * @param pred Binary function that accepts two elements as arguments (one of each of the two sequences, in the
	 *			   same order), and returns a value convertible to <code>bool</code>. The value returned indicates
	 *			   whether the elements are considered to match in the context of this function.
	 *
	 * @return An {@link Iterator} to the first element of the last occurrence of [<i>first2</i>, <i>last2</i>) in
	 *		   [<i>first1</i>, <i>last1</i>). If the sequence is not found, the function returns ,i>last1</i>. Otherwise
	 *		   [<i>first2</i>, <i>last2</i>) is an empty range, the function returns <i>last1</i>.
	 */
	export function find_end<T, Iterator1 extends Iterator<T>, Iterator2 extends Iterator<T>>(first1: Iterator1, last1: Iterator1, first2: Iterator2, last2: Iterator2): Iterator1;
	/**
	 * <p> Find last subsequence in range. </p>
	 *
	 * <p> Searches the range [<i>first1</i>, <i>last1</i>) for the last occurrence of the sequence defined by
	 * [<i>first2</i>, <i>last2</i>), and returns an {@link Iterator} to its first element, or <i>last1,/i> if no
	 * occurrences are found. </p>
	 *
	 * <p> The elements in both ranges are compared sequentially using <i>pred</i>: A subsequence of
	 * [<i>first1</i>, <i>last1</i>) is considered a match only when this is <code>true</code> for all the elements of
	 * [<i>first2</i>, <i>last2</i>). </p>
	 *
	 * <p> This function returns the last of such occurrences. For an algorithm that returns the first instead, see
	 * {@link search}. </p>
	 *
	 * @param first1 An {@link Iterator} to the initial position of the first sequence.
	 * @param last1 An {@link Iterator} to the final position in a sequence. The range used is
	 *				[<i>first1</i>, <i>last1</i>), including the element pointed by <i>first1</i>, but not the element
	 *				pointed by <i>last1</i>.
	 * @param first2 An {@link Iterator} to the initial position of the element values to be searched for.
	 * @param last2 An {@link Iterator} to the final position of the element values to be searched for. The range used
	 *				is [<i>first2</i>, <i>last2</i>).
	 * @param pred Binary function that accepts two elements as arguments (one of each of the two sequences, in the
	 *			   same order), and returns a value convertible to <code>bool</code>. The value returned indicates
	 *			   whether the elements are considered to match in the context of this function.
	 *
	 * @return An {@link Iterator} to the first element of the last occurrence of [<i>first2</i>, <i>last2</i>) in
	 *		   [<i>first1</i>, <i>last1</i>). If the sequence is not found, the function returns ,i>last1</i>. Otherwise
	 *		   [<i>first2</i>, <i>last2</i>) is an empty range, the function returns <i>last1</i>.
	 */
	export function find_end<T, Iterator1 extends Iterator<T>, Iterator2 extends Iterator<T>>(first1: Iterator1, last1: Iterator1, first2: Iterator2, last2: Iterator2, pred: (x: T, y: T) => boolean): Iterator1;
	/**
	 * <p> Find element from set in range. </p>
	 *
	 * <p> Returns an iterator to the first element in the range [<i>first1</i>, <i>last1</i>) that matches any of the
	 * elements in [<i>first2</i>, <i>last2</i>). If no such element is found, the function returns <i>last1</i>. </p>
	 *
	 * <p> The elements in [<i>first1</i>, <i>last1</i>) are sequentially compared to each of the values in
	 * [<i>first2</i>, <i>last2</i>) using {@link equal_to}, until a pair matches. </p>
	 *
	 * @param first1 An {@link Iterator} to the initial position of the first sequence.
	 * @param last1 An {@link Iterator} to the final position in a sequence. The range used is
	 *				[<i>first1</i>, <i>last1</i>), including the element pointed by <i>first1</i>, but not the element
	 *				pointed by <i>last1</i>.
	 * @param first2 An {@link Iterator} to the initial position of the element values to be searched for.
	 * @param last2 An {@link Iterator} to the final position of the element values to be searched for. The range used
	 *				is [<i>first2</i>, <i>last2</i>).
	 *
	 * @return An {@link Iterator} to the first element in [<i>first1</i>, <i>last1</i>) that is part of
	 *		   [<i>first2</i>, <i>last2</i>). If no matches are found, the function returns <i>last1</i>.
	 */
	export function find_first_of<T, Iterator1 extends Iterator<T>, Iterator2 extends Iterator<T>>(first1: Iterator1, last1: Iterator1, first2: Iterator2, last2: Iterator2): Iterator1;
	/**
	 * <p> Find element from set in range. </p>
	 *
	 * <p> Returns an iterator to the first element in the range [<i>first1</i>, <i>last1</i>) that matches any of the
	 * elements in [<i>first2</i>, <i>last2</i>). If no such element is found, the function returns <i>last1</i>. </p>
	 *
	 * <p> The elements in [<i>first1</i>, <i>last1</i>) are sequentially compared to each of the values in
	 * [<i>first2</i>, <i>last2</i>) using <i>pred</i>, until a pair matches. </p>
	 *
	 * @param first1 An {@link Iterator} to the initial position of the first sequence.
	 * @param last1 An {@link Iterator} to the final position in a sequence. The range used is
	 *				[<i>first1</i>, <i>last1</i>), including the element pointed by <i>first1</i>, but not the element
	 *				pointed by <i>last1</i>.
	 * @param first2 An {@link Iterator} to the initial position of the element values to be searched for.
	 * @param last2 An {@link Iterator} to the final position of the element values to be searched for. The range used
	 *				is [<i>first2</i>, <i>last2</i>).
	 * @param pred Binary function that accepts two elements as arguments (one of each of the two sequences, in the
	 *			   same order), and returns a value convertible to <code>bool</code>. The value returned indicates
	 *			   whether the elements are considered to match in the context of this function.
	 *
	 * @return An {@link Iterator} to the first element in [<i>first1</i>, <i>last1</i>) that is part of
	 *		   [<i>first2</i>, <i>last2</i>). If no matches are found, the function returns <i>last1</i>.
	 */
	export function find_first_of<T, Iterator1 extends Iterator<T>, Iterator2 extends Iterator<T>>(first1: Iterator1, last1: Iterator1, first2: Iterator2, last2: Iterator2, pred: (x: T, y: T) => boolean): Iterator1;
	/**
	 * <p> Find equal adjacent elements in range. </p>
	 *
	 * <p> Searches the range [<i>first</i>, <i>last</i>) for the first occurrence of two consecutive elements that match,
	 * and returns an {@link Iterator} to the first of these two elements, or <i>last</i> if no such pair is found. </p>
	 *
	 * <p> Two elements match if they compare equal using {@link equal_to}. </p>
	 *
	 * @param first An {@link Iterator} to the initial position in a sequence.
	 * @param last An {@link Iterator} to the final position in a sequence. The range used is [<i>first</i>, <i>last</i>),
	 *			  which contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
	 *			  <i>first</i> but not the element pointed by <i>last</i>.
	 *
	 * @return An {@link Iterator} to the first element of the first pair of matching consecutive elements in the range
	 *		   [<i>first</i>, <i>last</i>). If no such pair is found, the function returns <i>last</i>.
	 */
	export function adjacent_find<T, InputIterator extends Iterator<T>>(first: InputIterator, last: InputIterator): InputIterator;
	/**
	 * <p> Find equal adjacent elements in range. </p>
	 *
	 * <p> Searches the range [<i>first</i>, <i>last</i>) for the first occurrence of two consecutive elements that match,
	 * and returns an {@link Iterator} to the first of these two elements, or <i>last</i> if no such pair is found. </p>
	 *
	 * <p> Two elements match if they compare equal using <i>pred</i>. </p>
	 *
	 * @param first An {@link Iterator} to the initial position in a sequence.
	 * @param last An {@link Iterator} to the final position in a sequence. The range used is [<i>first</i>, <i>last</i>),
	 *			  which contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
	 *			  <i>first</i> but not the element pointed by <i>last</i>.
	 * @param pred Unary function that accepts an element in the range as argument and returns a value convertible to
	 *			   <code>bool</code>. The value returned indicates whether the element is considered a match in the
	 *			   context of this function. The function shall not modify its argument.
	 *
	 * @return An {@link Iterator} to the first element of the first pair of matching consecutive elements in the range
	 *		   [<i>first</i>, <i>last</i>). If no such pair is found, the function returns <i>last</i>.
	 */
	export function adjacent_find<T, InputIterator extends Iterator<T>>(first: InputIterator, last: InputIterator, pred: (x: T, y: T) => boolean): InputIterator;
	/**
	 * <p> Search range for subsequence. </p>
	 *
	 * <p> Searches the range [<i>first1</i>, <i>last1</i>) for the first occurrence of the sequence defined by
	 * [<i>first2</i>, <i>last2</i>), and returns an iterator to its first element, or <i>last1</i> if no occurrences are
	 * found. </p>
	 *
	 * <p> The elements in both ranges are compared sequentially using {@link equal_to}: A subsequence of
	 * [<i>first1</i>, <i>last1</i>) is considered a match only when this is true for <b>all</b> the elements of
	 * [<i>first2</i>, <i>last2</i>). </p>
	 *
	 * <p> This function returns the first of such occurrences. For an algorithm that returns the last instead, see
	 * {@link find_end}. </p>
	 *
	 * @param first1 {@link Iterator Forward iterator} to the initial position of the searched sequence.
	 * @param last1 {@link Iterator Forward iterator} to the final position of the searched sequence. The range used is
	 *				[<i>first1</i>, <i>last1</i>), which contains all the elements between <i>first1</i> and <i>last1</i>,
	 *				including the element pointed by <i>first1</i> but not the element pointed by <i>last1</i>.
	 * @param first2 {@link Iterator Forward iterator} to the initial position of the sequence to be searched for.
	 * @param last2 {@link Iterator Forward iterator} to the final position of the sequence to be searched for. The range
	 *				used is [<i>first2</i>, <i>last2</i>).
	 *
	 * @return An iterator to the first element of the first occurrence of [<i>first2</i>, <i>last2</i>) in <i>first1</i>
	 *		   and <i>last1</i>. If the sequence is not found, the function returns <i>last1</i>. Otherwise
	 *		   [<i>first2</i>, <i>last2</i>) is an empty range, the function returns <i>first1</i>.
	 */
	export function search<T, ForwardIterator1 extends Iterator<T>, ForwardIterator2 extends Iterator<T>>(first1: ForwardIterator1, last1: ForwardIterator1, first2: ForwardIterator2, last2: ForwardIterator2): ForwardIterator1;
	/**
	 * <p> Search range for subsequence. </p>
	 *
	 * <p> Searches the range [<i>first1</i>, <i>last1</i>) for the first occurrence of the sequence defined by
	 * [<i>first2</i>, <i>last2</i>), and returns an iterator to its first element, or <i>last1</i> if no occurrences are
	 * found. </p>
	 *
	 * <p> The elements in both ranges are compared sequentially using <i>pred</i>: A subsequence of
	 * [<i>first1</i>, <i>last1</i>) is considered a match only when this is true for <b>all</b> the elements of
	 * [<i>first2</i>, <i>last2</i>). </p>
	 *
	 * <p> This function returns the first of such occurrences. For an algorithm that returns the last instead, see
	 * {@link find_end}. </p>
	 *
	 * @param first1 {@link Iterator Forward iterator} to the initial position of the searched sequence.
	 * @param last1 {@link Iterator Forward iterator} to the final position of the searched sequence. The range used is
	 *				[<i>first1</i>, <i>last1</i>), which contains all the elements between <i>first1</i> and <i>last1</i>,
	 *				including the element pointed by <i>first1</i> but not the element pointed by <i>last1</i>.
	 * @param first2 {@link Iterator Forward iterator} to the initial position of the sequence to be searched for.
	 * @param last2 {@link Iterator Forward iterator} to the final position of the sequence to be searched for. The range
	 *				used is [<i>first2</i>, <i>last2</i>).
	 * @param pred Binary function that accepts two elements as arguments (one of each of the two sequences, in the same
	 *			   order), and returns a value convertible to bool. The returned value indicates whether the elements are
	 *			   considered to match in the context of this function. The function shall not modify any of its
	 *			   arguments.
	 *
	 * @return An iterator to the first element of the first occurrence of [<i>first2</i>, <i>last2</i>) in
	 *		   [<i>first1</i>, <i>last1</i>). If the sequence is not found, the function returns last1. Otherwise
	 *		   [<i>first2</i>, <i>last2</i>) is an empty range, the function returns <i>first1</i>.
	 */
	export function search<T, ForwardIterator1 extends Iterator<T>, ForwardIterator2 extends Iterator<T>>(first1: ForwardIterator1, last1: ForwardIterator1, first2: ForwardIterator2, last2: ForwardIterator2, pred: (x: T, y: T) => boolean): ForwardIterator1;
	/**
	 * <p> Search range for elements. </p>
	 *
	 * <p> Searches the range [<i>first</i>, <i>last</i>) for a sequence of <i>count</i> elements, each comparing equal to
	 * <i>val</i>. </p>
	 *
	 * <p> The function returns an iterator to the first of such elements, or <i>last</i> if no such sequence is found.
	 * </p>
	 *
	 * @param first {@link Iterator Forward iterator} to the initial position of the searched sequence.
	 * @param last {@link Iterator Forward iterator} to the final position of the searched sequence. The range used is
	 *			   [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and <i>last</i>,
	 *			   including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
	 * @param count Minimum number of successive elements to match.
	 * @param val Individual value to be compared, or to be used as argument for {@link equal_to}.
	 *
	 * @return An iterator to the first element of the sequence. If no such sequence is found, the function returns
	 *		   <i>last</i>.
	 */
	export function search_n<T, ForwardIterator extends IArrayIterator<T>>(first: ForwardIterator, last: ForwardIterator, count: number, val: T): ForwardIterator;
	/**
	 * <p> Search range for elements. </p>
	 *
	 * <p> Searches the range [<i>first</i>, <i>last</i>) for a sequence of <i>count</i> elements, each comparing equal to
	 * <i>val</i>. </p>
	 *
	 * <p> The function returns an iterator to the first of such elements, or <i>last</i> if no such sequence is found.
	 * </p>
	 *
	 * @param first {@link Iterator Forward iterator} to the initial position of the searched sequence.
	 * @param last {@link Iterator Forward iterator} to the final position of the searched sequence. The range used is
	 *			   [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and <i>last</i>,
	 *			   including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
	 * @param count Minimum number of successive elements to match.
	 * @param val Individual value to be compared, or to be used as argument for <i>pred</i>.
	 * @param pred Binary function that accepts two arguments (one element from the sequence as first, and <i>val</i> as
	 *			   second), and returns a value convertible to <code>bool</code>. The value returned indicates whether the
	 *			   element is considered a match in the context of this function. The function shall not modify any of its
	 *			   arguments.
	 *
	 * @return An {@link Iterator} to the first element of the sequence. If no such sequence is found, the function
	 *		   returns <i>last</i>.
	 */
	export function search_n<T, ForwardIterator extends IArrayIterator<T>>(first: ForwardIterator, last: ForwardIterator, count: number, val: T, pred: (x: T, y: T) => boolean): ForwardIterator;
	/**
	 * <p> Return first position where two ranges differ. </p>
	 *
	 * <p> Compares the elements in the range [<i>first1</i>, <i>last1</i>) with those in the range beginning at
	 * <i>first2</i>, and returns the first element of both sequences that does not match. </p>
	 *
	 * <p> The function returns a {@link Pair} of {@link iterators Iterator} to the first element in each range that
	 * does not match. </p>
	 *
	 * @param first1 An {@link Iterator} to the initial position of the first sequence.
	 * @param last1 An {@link Iterator} to the final position in a sequence. The range used is
	 *				[<i>first1</i>, <i>last1</i>), including the element pointed by <i>first1</i>, but not the element
	 *				pointed by <i>last1</i>.
	 * @param first2 An {@link Iterator} to the initial position of the second sequence. The comparison includes up to
	 *				 as many elements of this sequence as those in the range [<i>first1</i>, <i>last1</i>).
	 *
	 * @return A {@link Pair}, where its members {@link Pair.first first} and {@link Pair.second second} point to the
	 *		   first element in both sequences that did not compare equal to each other. If the elements compared in
	 *		   both sequences have all matched, the function returns a {@link Pair} with {@link Pair.first first} set
	 *		   to <i>last1</i> and {@link Pair.second second} set to the element in that same relative position in the
	 *		   second sequence. If none matched, it returns {@link make_pair}(<i>first1</i>, <i>first2</i>).
	 */
	export function mismatch<T, Iterator1 extends Iterator<T>, Iterator2 extends Iterator<T>>(first1: Iterator1, last1: Iterator1, first2: Iterator2): Pair<Iterator1, Iterator2>;
	/**
	 * <p> Return first position where two ranges differ. </p>
	 *
	 * <p> Compares the elements in the range [<i>first1</i>, <i>last1</i>) with those in the range beginning at
	 * <i>first2</i>, and returns the first element of both sequences that does not match. </p>
	 *
	 * <p> The function returns a {@link Pair} of {@link iterators Iterator} to the first element in each range that
	 * does not match. </p>
	 *
	 * @param first1 An {@link Iterator} to the initial position of the first sequence.
	 * @param last1 An {@link Iterator} to the final position in a sequence. The range used is
	 *				[<i>first1</i>, <i>last1</i>), including the element pointed by <i>first1</i>, but not the element
	 *				pointed by <i>last1</i>.
	 * @param first2 An {@link Iterator} to the initial position of the second sequence. The comparison includes up to
	 *				 as many elements of this sequence as those in the range [<i>first1</i>, <i>last1</i>).
	 * @param pred Binary function that accepts two elements as argument (one of each of the two sequences, in the same
	 *			   order), and returns a value convertible to <code>bool</code>. The value returned indicates whether
	 *			   the elements are considered to match in the context of this function.
	 *
	 * @return A {@link Pair}, where its members {@link Pair.first first} and {@link Pair.second second} point to the
	 *		   first element in both sequences that did not compare equal to each other. If the elements compared in
	 *		   both sequences have all matched, the function returns a {@link Pair} with {@link Pair.first first} set
	 *		   to <i>last1</i> and {@link Pair.second second} set to the element in that same relative position in the
	 *		   second sequence. If none matched, it returns {@link make_pair}(<i>first1</i>, <i>first2</i>).
	 */
	export function mismatch<T, Iterator1 extends Iterator<T>, Iterator2 extends Iterator<T>>(first1: Iterator1, last1: Iterator1, first2: Iterator2, compare: (x: T, y: T) => boolean): Pair<Iterator1, Iterator2>;
	/**
	 * <p> Count appearances of value in range. </p>
	 *
	 * <p> Returns the number of elements in the range [<i>first</i>, <i>last</i>) that compare equal to <i>val</i>. </p>
	 *
	 * <p> The function uses {@link equal_to} to compare the individual elements to <i>val</i>. </p>
	 *
	 * @param first An {@link Iterator} to the initial position in a sequence.
	 * @param last An {@link Iterator} to the final position in a sequence. The range used is [<i>first</i>, <i>last</i>),
	 *			  which contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
	 *			  <i>first</i> but not the element pointed by <i>last</i>.
	 * @param val Value to match.
	 *
	 * @return The number of elements in the range [<i>first</i>, <i>last</i>) that compare equal to <i>val</i>.
	 */
	export function count<T, InputIterator extends Iterator<T>>(first: InputIterator, last: InputIterator, val: T): number;
	/**
	 * <p> Return number of elements in range satisfying condition. </p>
	 *
	 * <p> Returns the number of elements in the range [<i>first</i>, <i>last</i>) for which pred is <code>true</code>.
	 * </p>
	 *
	 * @param first An {@link Iterator} to the initial position in a sequence.
	 * @param last An {@link Iterator} to the final position in a sequence. The range used is [<i>first</i>, <i>last</i>),
	 *			  which contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
	 *			  <i>first</i> but not the element pointed by <i>last</i>.
	 * @param pred Unary function that accepts an element in the range as argument, and returns a value convertible
	 *			   to <code>bool</code>. The value returned indicates whether the element is counted by this function.
	 *			   The function shall not modify its argument. This can either be a function pointer or a function
	 *			   object.
	 */
	export function count_if<T, InputIterator extends Iterator<T>>(first: InputIterator, last: InputIterator, pred: (val: T) => boolean): number;
	/**
	 * <p> Copy range of elements. </p>
	 *
	 * <p> Copies the elements in the range [<i>first</i>, <i>last</i>) into the range beginning at <i>result</i>. </p>
	 *
	 * <p> The function returns an iterator to the end of the destination range (which points to the element following the
	 * last element copied). </p>
	 *
	 * <p> The ranges shall not overlap in such a way that result points to an element in the range
	 * [<i>first</i>, <i>last</i>). For such cases, see {@link copy_backward}. </p>
	 *
	 * @param first {@link Iterator Input iterator} to the initial position in a sequence to be copied.
	 * @param last {@link Iterator Input iterator} to the initial position in a sequence to be copied. The range used is
	 *			   [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and <i>last</i>,
	 *			   including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
	 * @param result {@link Iterator Output iterator} to the initial position in the destination sequence. This shall not
	 *				 point to any element in the range [<i>first</i>, <i>last</i>).
	 *
	 * @return An iterator to the end of the destination range where elements have been copied.
	 */
	export function copy<T, InputIterator extends Iterator<T>, OutputIterator extends ILinearIterator<T>>(first: InputIterator, last: InputIterator, result: OutputIterator): OutputIterator;
	/**
	 * <p> Copy elements. </p>
	 *
	 * <p> Copies the first <i>n</i> elements from the range beginning at <i>first</i> into the range beginning at
	 * <i>result</i>. </p>
	 *
	 * <p> The function returns an iterator to the end of the destination range (which points to one past the last element
	 * copied). </p>
	 *
	 * <p> If <i>n</i> is negative, the function does nothing. </p>
	 *
	 * <p> If the ranges overlap, some of the elements in the range pointed by result may have undefined but valid values.
	 * </p>
	 *
	 * @param first {@link Iterator Input iterator} to the initial position in a sequence of at least <i>n</i> elements to
	 *				be copied. <i>InputIterator</i> shall point to a type assignable to the elements pointed by
	 *				<i>OutputIterator</i>.
	 * @param n Number of elements to copy. If this value is negative, the function does nothing.
	 * @param result {@link Iterator Output iterator} to the initial position in the destination sequence of at least
	 *				 <i>n</i> elements. This shall not point to any element in the range [<i>first</i>, last].
	 *
	 * @return An iterator to the end of the destination range where elements have been copied.
	 */
	export function copy_n<T, InputIterator extends Iterator<T>, OutputIterator extends ILinearIterator<T>>(first: InputIterator, n: number, result: OutputIterator): OutputIterator;
	/**
	 * <p> Copy certain elements of range. </p>
	 *
	 * <p> Copies the elements in the range [<i>first</i>, <i>last</i>) for which pred returns <code>true</code> to the
	 * range beginning at <i>result</i>. </p>
	 *
	 * @param first {@link Iterator Input iterator} to the initial position in a sequence to be copied.
	 * @param last {@link Iterator Input iterator} to the initial position in a sequence to be copied. The range used is
	 *			   [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and <i>last</i>,
	 *			   including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
	 * @param result {@link Iterator Output iterator} to the initial position in the destination sequence. This shall not
	 *				 point to any element in the range [<i>first</i>, <i>last</i>).
	 * @param pred Unary function that accepts an element in the range as argument, and returns a value convertible to
	 *			   <code>bool</code>. The value returned indicates whether the element is to be copied (if
	 *			   <code>true</code>, it is copied). The function shall not modify any of its arguments.
	 *
	 * @return An iterator to the end of the destination range where elements have been copied.
	 */
	export function copy_if<T, InputIterator extends Iterator<T>, OutputIterator extends ILinearIterator<T>>(first: InputIterator, last: InputIterator, result: OutputIterator, pred: (x: T) => boolean): OutputIterator;
	/**
	 * <p> Copy range of elements backward. </p>
	 *
	 * <p> Copies the elements in the range [<i>first</i>, <i>last</i>) starting from the end into the range terminating
	 * at <i>result</i>. </p>
	 *
	 * <p> The function returns an iterator to the first element in the destination range. </p>
	 *
	 * <p> The resulting range has the elements in the exact same order as [<i>first</i>, <i>last</i>). To reverse their
	 * order, see {@link reverse_copy}. </p>
	 *
	 * <p> The function begins by copying <code>*(last-1)</code> into <code>*(result-1)</code>, and then follows backward
	 * by the elements preceding these, until <i>first</i> is reached (and including it). </p>
	 *
	 * <p> The ranges shall not overlap in such a way that <i>result</i> (which is the <i>past-the-end element</i> in the
	 * destination range) points to an element in the range (first,last]. For such cases, see {@link copy}. </p>
	 *
	 * @param first {@link Iterator Bidirectional iterator} to the initial position in a sequence to be copied.
	 * @param last {@link Iterator Bidirectional iterator} to the initial position in a sequence to be copied. The range
	 *			   used is [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and
	 *			   <i>last</i>, including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
	 * @param result {@link Iterator Bidirectional iterator} to the initial position in the destination sequence. This
	 *				 shall not point to any element in the range [<i>first</i>, <i>last</i>).
	 *
	 * @return An iterator to the first element of the destination sequence where elements have been copied.
	 */
	export function copy_backward<T, BidirectionalIterator1 extends Iterator<T>, BidirectionalIterator2 extends ILinearIterator<T>>(first: BidirectionalIterator1, last: BidirectionalIterator1, result: BidirectionalIterator2): BidirectionalIterator2;
	/**
	 * <p> Fill range with value. </p>
	 *
	 * <p> Assigns val to all the elements in the range [<i>first</i>, <i>last</i>). </p>
	 *
	 * @param first {@link Iterator Forward iterator} to the initial position in a sequence of elements that support being
	 *				assigned a value of type <i>T</i>.
	 * @param last {@link Iterator Forward iterator} to the final position in a sequence of elements that support being
	 *				assigned a value of type <i>T</i>.. The range filled is [<i>first</i>, <i>last</i>), which contains
	 *				all the elements between <i>first</i> and <i>last</i>, including the element pointed by <i>first</i>
	 *				but not the element pointed by <i>last</i>.
	 * @param val Value to assign to the elements in the filled range.
	 */
	export function fill<T, ForwardIterator extends ILinearIterator<T>>(first: ForwardIterator, last: ForwardIterator, val: T): void;
	/**
	 * <p> Fill sequence with value. </p>
	 *
	 * <p> Assigns <i>val</i> to the first <i>n</i> elements of the sequence pointed by <i>first</i>. </p>
	 *
	 * @param first {@link Iterator Output iterator} to the initial position in a sequence of elements that support being
	 *				assigned a value of type <i>T</i>.
	 * @param n Number of elements to fill. If negative, the function does nothing.
	 * @param val Value to be used to fill the range.
	 *
	 * @return An iterator pointing to the element that follows the last element filled.
	 */
	export function fill_n<T, OutputIterator extends ILinearIterator<T>>(first: OutputIterator, n: number, val: T): OutputIterator;
	/**
	 * <p> Transform range. </p>
	 *
	 * <p> Applies <i>op</i> to each of the elements in the range [<i>first</i>, <i>last</i>) and stores the value returned
	 * by each operation in the range that begins at <i>result</i>. </p>
	 *
	 * @param first {@link Iterator Input iterator} to the initial position in a sequence to be transformed.
	 * @param last {@link Iterator Input iterator} to the initial position in a sequence to be transformed. The range
	 *			   used is [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and
	 *			   <i>last</i>, including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
	 * @param result {@link Iterator Output} iterator to the initial position of the range where the operation results are
	 *				 stored. The range includes as many elements as [<i>first</i>, <i>last</i>).
	 * @param op Unary function that accepts one element of the type pointed to by <i>InputIterator</i> as argument, and
	 *			 returns some result value convertible to the type pointed to by <i>OutputIterator</i>.
	 *
	 * @return An iterator pointing to the element that follows the last element written in the <i>result</i> sequence.
	 */
	export function transform<T, InputIterator extends Iterator<T>, OutputIterator extends ILinearIterator<T>>(first: InputIterator, last: InputIterator, result: OutputIterator, op: (val: T) => T): OutputIterator;
	/**
	 * <p> Transform range. </p>
	 *
	 * <p> Calls <i>binary_op</i> using each of the elements in the range [<i>first1</i>, <i>last1</i>) as first argument,
	 * and the respective argument in the range that begins at <i>first2</i> as second argument. The value returned by
	 * each call is stored in the range that begins at <i>result</i>. </p>
	 *
	 * @param first1 {@link Iterator Input iterator} to the initial position of the first sequence.
	 * @param last1 {@link Iterator Input iterator} to the final position of the first sequence. The range used is
	 *				[<i>first1</i>, <i>last1</i>), including the element pointed by <i>first1</i>, but not the element
	 *				pointed by <i>last1</i>.
	 * @param first2 {@link Iterator Input iterator} to the initial position of the second range. The range includes as
	 *				 many elements as [<i>first1</i>, <i>last1</i>).
	 * @param result {@link Iterator Output} iterator to the initial position of the range where the operation results are
	 *				 stored. The range includes as many elements as [<i>first1</i>, <i>last1</i>).
	 * @param binary_op Binary function that accepts two elements as argument (one of each of the two sequences), and
	 *					returns some result value convertible to the type pointed to by <i>OutputIterator</i>.
	 *
	 * @return An iterator pointing to the element that follows the last element written in the <i>result</i> sequence.
	 */
	export function transform<T, InputIterator1 extends Iterator<T>, InputIterator2 extends Iterator<T>, OutputIterator extends ILinearIterator<T>>(first1: InputIterator1, last1: InputIterator1, first2: InputIterator2, result: OutputIterator, binary_op: (x: T, y: T) => T): OutputIterator;
	/**
	 * <p> Generate values for range with function. </p>
	 *
	 * <p> Assigns the value returned by successive calls to gen to the elements in the range [<i>first</i>, <i>last</i>).
	 * </p>
	 *
	 * @param first {@link Iterator Forward iterator} to the initial position in a sequence.
	 * @param last {@link Iterator Forward iterator} to the final position in a sequence. The range affected is
	 *			   [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and <i>last</i>,
	 *			   including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
	 * @param gen Generator function that is called with no arguments and returns some value of a type convertible to
	 *			  those pointed by the iterators.
	 */
	export function generate<T, ForwardIterator extends ILinearIterator<T>>(first: ForwardIterator, last: ForwardIterator, gen: () => T): void;
	/**
	 * <p> Generate values for sequence with function. </p>
	 *
	 * <p> Assigns the value returned by successive calls to <i>gen</i> to the first <i>n</i> elements of the sequence
	 * pointed by <i>first</i>. </p>
	 *
	 * @param first {@link Iterator Output iterator} to the initial position in a sequence of at least <i>n</i> elements
	 *				that support being assigned a value of the type returned by <i>gen</i>.
	 * @param n Number of values to generate. If negative, the function does nothing.
	 * @param gen Generator function that is called with no arguments and returns some value of a type convertible to
	 *			  those pointed by the iterators.
	 *
	 * @return An iterator pointing to the element that follows the last element whose value has been generated.
	 */
	export function generate_n<T, ForwardIterator extends ILinearIterator<T>>(first: ForwardIterator, n: number, gen: () => T): ForwardIterator;
	/**
	 * <p> Remove consecutive duplicates in range. </p>
	 *
	 * <p> Removes all but the first element from every consecutive group of equivalent elements in the range
	 * [<i>first</i>, <i>last</i>). </p>
	 *
	 * <p> The function cannot alter the properties of the object containing the range of elements (i.e., it cannot
	 * alter the size of an array or a container): The removal is done by replacing the duplicate elements by the next
	 * element that is not a duplicate, and signaling the new size of the shortened range by returning an iterator to
	 * the element that should be considered its new past-the-last element. </p>
	 *
	 * <p> The relative order of the elements not removed is preserved, while the elements between the returned
	 * iterator and last are left in a valid but unspecified state. </p>
	 *
	 * @param first An {@link Iterator} to the initial position in a sequence.
	 * @param last An {@link Iterator} to the final position in a sequence. The range used is [<i>first</i>, <i>last</i>),
	 *			  which contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
	 *			  <i>first</i> but not the element pointed by <i>last</i>.
	 *
	 * @return An iterator to the element that follows the last element not removed. The range between <i>first</i> and
	 *		   this iterator includes all the elements in the sequence that were not considered duplicates.
	 */
	export function unique<T, InputIterator extends Iterator<T>>(first: InputIterator, last: InputIterator): InputIterator;
	/**
	 * <p> Remove consecutive duplicates in range. </p>
	 *
	 * <p> Removes all but the first element from every consecutive group of equivalent elements in the range
	 * [<i>first</i>, <i>last</i>). </p>
	 *
	 * <p> The function cannot alter the properties of the object containing the range of elements (i.e., it cannot
	 * alter the size of an array or a container): The removal is done by replacing the duplicate elements by the next
	 * element that is not a duplicate, and signaling the new size of the shortened range by returning an iterator to
	 * the element that should be considered its new past-the-last element. </p>
	 *
	 * <p> The relative order of the elements not removed is preserved, while the elements between the returned
	 * iterator and last are left in a valid but unspecified state. </p>
	 *
	 * @param first An {@link Iterator} to the initial position in a sequence.
	 * @param last An {@link Iterator} to the final position in a sequence. The range used is [<i>first</i>, <i>last</i>),
	 *			  which contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
	 *			  <i>first</i> but not the element pointed by <i>last</i>.
	 * @param pred Binary function that accepts two elements in the range as argument, and returns a value convertible
	 *			   to <code>bool</code>. The value returned indicates whether both arguments are considered equivalent
	 *			  (if <code>true</code>, they are equivalent and one of them is removed). The function shall not modify
	 *			  any of its arguments.
	 *
	 * @return An iterator to the element that follows the last element not removed. The range between <i>first</i> and
	 *		   this iterator includes all the elements in the sequence that were not considered duplicates.
	 */
	export function unique<t, InputIterator extends Iterator<t>>(first: InputIterator, last: InputIterator, pred: (left: t, right: t) => boolean): InputIterator;
	/**
	 * <p> Copy range removing duplicates. </p>
	 *
	 * <p> Copies the elements in the range [<i>first</i>, <i>last</i>) to the range beginning at <i>result</i>, except
	 * consecutive duplicates (elements that compare equal to the element preceding). </p>
	 *
	 * <p> Only the first element from every consecutive group of equivalent elements in the range
	 * [<i>first</i>, <i>last</i>) is copied. </p>
	 *
	 * <p> The comparison between elements is performed by applying {@lnk equal_to}. </p>
	 *
	 * @param first {@link Iterator Forward iterator} to the initial position in a sequence.
	 * @param last {@link Iterator Forward iterator} to the final position in a sequence. The range used is
	 *			   [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and <i>last</i>,
	 *			   including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
	 * @param result Output iterator to the initial position of the range where the resulting range of values is stored.
	 *				 The pointed type shall support being assigned the value of an element in the range
	 *				 [<i>first</i>, <i>last</i>).
	 *
	 * @return An iterator pointing to the end of the copied range, which contains no consecutive duplicates.
	 */
	export function unique_copy<T, InputIterator extends Iterator<T>, OutputIterator extends ILinearIterator<T>>(first: InputIterator, last: InputIterator, result: OutputIterator): OutputIterator;
	/**
	 * <p> Copy range removing duplicates. </p>
	 *
	 * <p> Copies the elements in the range [<i>first</i>, <i>last</i>) to the range beginning at <i>result</i>, except
	 * consecutive duplicates (elements that compare equal to the element preceding). </p>
	 *
	 * <p> Only the first element from every consecutive group of equivalent elements in the range
	 * [<i>first</i>, <i>last</i>) is copied. </p>
	 *
	 * <p> The comparison between elements is performed by applying <i>pred</i>. </p>
	 *
	 * @param first {@link Iterator Forward iterator} to the initial position in a sequence.
	 * @param last {@link Iterator Forward iterator} to the final position in a sequence. The range used is
	 *			   [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and <i>last</i>,
	 *			   including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
	 * @param result Output iterator to the initial position of the range where the resulting range of values is stored.
	 *				 The pointed type shall support being assigned the value of an element in the range
	 *				 [<i>first</i>, <i>last</i>).
	 * @param pred Binary function that accepts two elements in the range as argument, and returns a value convertible to
	 *			   <code>bool</code>. The value returned indicates whether both arguments are considered equivalent (if
	 *			   <code>true</code>, they are equivalent and one of them is removed). The function shall not modify any
	 *			   of its arguments.
	 *
	 * @return An iterator pointing to the end of the copied range, which contains no consecutive duplicates.
	 */
	export function unique_copy<T, InputIterator extends Iterator<T>, OutputIterator extends ILinearIterator<T>>(first: InputIterator, last: InputIterator, result: OutputIterator, pred: (x: T, y: T) => boolean): OutputIterator;
	/**
	 * <p> Remove value from range. </p>
	 *
	 * <p> Transforms the range [<i>first</i>, <i>last</i>) into a range with all the elements that compare equal to
	 * <i>val</i> removed, and returns an iterator to the new last of that range. </p>
	 *
	 * <p> The function cannot alter the properties of the object containing the range of elements (i.e., it cannot alter
	 * the size of an array or a container): The removal is done by replacing the elements that compare equal to
	 * <i>val</i> by the next element that does not, and signaling the new size of the shortened range by returning an
	 * iterator to the element that should be considered its new past-the-last element. </p>
	 *
	 * <p> The relative order of the elements not removed is preserved, while the elements between the returned iterator
	 * and last are left in a valid but unspecified state. </p>
	 *
	 * @param first An {@link Iterator} to the initial position in a sequence.
	 * @param last An {@link Iterator} to the final position in a sequence. The range used is [<i>first</i>, <i>last</i>),
	 *			  which contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
	 *			  <i>first</i> but not the element pointed by <i>last</i>.
	 * @param val Value to be removed.
	 */
	export function remove<T, InputIterator extends Iterator<T>>(first: InputIterator, last: InputIterator, val: T): InputIterator;
	/**
	 * <p> Remove elements from range. </p>
	 *
	 * <p> Transforms the range [<i>first</i>, <i>last</i>) into a range with all the elements for which pred returns
	 * <code>true</code> removed, and returns an iterator to the new last of that range. </p>
	 *
	 * <p> The function cannot alter the properties of the object containing the range of elements (i.e., it cannot
	 * alter the size of an array or a container): The removal is done by replacing the elements for which pred returns
	 * <code>true</code> by the next element for which it does not, and signaling the new size of the shortened range
	 * by returning an iterator to the element that should be considered its new past-the-last element. </p>
	 *
	 * <p> The relative order of the elements not removed is preserved, while the elements between the returned
	 * iterator and last are left in a valid but unspecified state. </p>
	 *
	 * @param first An {@link Iterator} to the initial position in a sequence.
	 * @param last An {@link Iterator} to the final position in a sequence. The range used is [<i>first</i>, <i>last</i>),
	 *			  which contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
	 *			  <i>first</i> but not the element pointed by <i>last</i>.
	 * @param pred Unary function that accepts an element in the range as argument, and returns a value convertible to
	 *			   <code>bool</code>. The value returned indicates whether the element is to be removed (if
	 *			   <code>true</code>, it is removed). The function shall not modify its argument.
	 */
	export function remove_if<T, InputIterator extends Iterator<T>>(first: InputIterator, last: InputIterator, pred: (left: T) => boolean): InputIterator;
	/**
	 * <p> Copy range removing value. </p>
	 *
	 * <p> Copies the elements in the range [<i>first</i>, <i>last</i>) to the range beginning at <i>result</i>, except
	 * those elements that compare equal to <i>val</i>. </p>
	 *
	 * <p> The resulting range is shorter than [<i>first</i>, <i>last</i>) by as many elements as matches in the sequence,
	 * which are "removed". </p>
	 *
	 * <p> The function uses {@link equal_to} to compare the individual elements to <i>val</i>. </p>
	 *
	 * @param first {@link Iterator InputIterator} to the initial position in a sequence.
	 * @param last {@link Iterator InputIterator} to the final position in a sequence. The range used is
	 *			   [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and <i>last</i>,
	 *			   including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
	 * @param result {@link Iterator Output iterator} to the initial position of the range where the resulting sequence is
	 *				 stored. The pointed type shall support being assigned the value of an element in the range
	 *				 [<i>first</i>, <i>last</i>).
	 * @param val Value to be removed.
	 *
	 * @return An iterator pointing to the end of the copied range, which includes all the elements in
	 *		   [<i>first</i>, <i>last</i>) except those that compare equal to <i>val</i>.
	 */
	export function remove_copy<T, InputIterator extends Iterator<T>, OutputIterator extends ILinearIterator<T>>(first: InputIterator, last: InputIterator, result: OutputIterator, val: T): OutputIterator;
	/**
	 * <p> Copy range removing values. </p>
	 *
	 * <p> Copies the elements in the range [<i>first</i>, <i>last</i>) to the range beginning at <i>result</i>, except
	 * those elements for which <i>pred</i> returns <code>true</code>. </p>
	 *
	 * <p> The resulting range is shorter than [<i>first</i>, <i>last</i>) by as many elements as matches, which are
	 * "removed". </p>
	 *
	 * @param first {@link Iterator InputIterator} to the initial position in a sequence.
	 * @param last {@link Iterator InputIterator} to the final position in a sequence. The range used is
	 *			   [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and <i>last</i>,
	 *			   including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
	 * @param result {@link Iterator Output iterator} to the initial position of the range where the resulting sequence is
	 *				 stored. The pointed type shall support being assigned the value of an element in the range
	 *				 [<i>first</i>, <i>last</i>).
	 * @param pred Unary function that accepts an element in the range as argument, and returns a value convertible to
	 *			   <code>bool</code>. The value returned indicates whether the element is to be removed from the copy (if
	 *			   <code>true</code>, it is not copied). The function shall not modify its argument.
	 *
	 * @return An iterator pointing to the end of the copied range, which includes all the elements in
	 *		   [<i>first</i>, <i>last</i>) except those for which <i>pred</i> returns <code>true</code>.
	 */
	export function remove_copy_if<T, InputIterator extends Iterator<T>, OutputIterator extends ILinearIterator<T>>(first: InputIterator, last: InputIterator, result: OutputIterator, pred: (val: T) => boolean): OutputIterator;
	/**
	 * <p> Replace value in range. </p>
	 *
	 * <p> Assigns <i>new_val</i> to all the elements in the range [<i>first</i>, <i>last</i>) that compare equal to
	 * <i>old_val</i>. </p>
	 *
	 * <p> The function uses {@link equal_to} to compare the individual elements to old_val. </p>
	 *
	 * @param first An {@link Iterator} to the initial position in a sequence.
	 * @param last An {@link Iterator} to the final position in a sequence. The range used is [<i>first</i>, <i>last</i>),
	 *			  which contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
	 *			  <i>first</i> but not the element pointed by <i>last</i>.
	 * @param old_val Value to be replaced.
	 * @param new_val Replacement value.
	 */
	export function replace<T, InputIterator extends ILinearIterator<T>>(first: InputIterator, last: InputIterator, old_val: T, new_val: T): void;
	/**
	 * <p> Replace value in range. </p>
	 *
	 * <p> Assigns <i>new_val</i> to all the elements in the range [<i>first</i>, <i>last</i>) for which pred returns
	 * <code>true</code>. </p>
	 *
	 * @param first An {@link Iterator} to the initial position in a sequence.
	 * @param last An {@link Iterator} to the final position in a sequence. The range used is [<i>first</i>, <i>last</i>),
	 *			  which contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
	 *			  <i>first</i> but not the element pointed by <i>last</i>.
	 * @param pred Unary function that accepts an element in the range as argument, and returns a value convertible to
	 *			   <code>bool</code>. The value returned indicates whether the element is to be replaced (if
	 *			   <code>true</code>, it is replaced). The function shall not modify its argument.
	 * @param new_val Value to assign to replaced elements.
	 */
	export function replace_if<T, InputIterator extends ILinearIterator<T>>(first: InputIterator, last: InputIterator, pred: (val: T) => boolean, new_val: T): void;
	/**
	 * <p> Copy range replacing value. </p>
	 *
	 * <p> Copies the elements in the range [<i>first</i>, <i>last</i>) to the range beginning at <i>result</i>, replacing
	 * the appearances of <i>old_value</i> by <i>new_value</i>. </p>
	 *
	 * <p> The function uses {@link equal_to} to compare the individual elements to <i>old_value</i>. </p>
	 *
	 * <p> The ranges shall not overlap in such a way that result points to an element in the range
	 * [<i>first</i>, <i>last</i>). </p>
	 *
	 * @param first {@link Iterator InputIterator} to the initial position in a sequence.
	 * @param last {@link Iterator InputIterator} to the final position in a sequence. The range used is
	 *			   [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and <i>last</i>,
	 *			   including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
	 * @param result {@link Iterator Output iterator} to the initial position of the range where the resulting sequence is
	 *				 stored. The pointed type shall support being assigned the value of an element in the range
	 *				 [<i>first</i>, <i>last</i>).
	 * @param old_val Value to be replaced.
	 * @param new_val Replacement value.
	 *
	 * @return An iterator pointing to the element that follows the last element written in the result sequence.
	 */
	export function replace_copy<T, InputIterator extends Iterator<T>, OutputIterator extends ILinearIterator<T>>(first: InputIterator, last: InputIterator, result: OutputIterator, old_val: T, new_val: T): OutputIterator;
	/**
	 * <p> Copy range replacing value. </p>
	 *
	 * <p> Copies the elements in the range [<i>first</i>, <i>last</i>) to the range beginning at <i>result</i>, replacing
	 * those for which <i>pred</i> returns <code>true</code> by <i>new_value</i>. </p>
	 *
	 * @param first {@link Iterator InputIterator} to the initial position in a sequence.
	 * @param last {@link Iterator InputIterator} to the final position in a sequence. The range used is
	 *			   [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and <i>last</i>,
	 *			   including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
	 * @param result {@link Iterator Output iterator} to the initial position of the range where the resulting sequence is
	 *				 stored. The pointed type shall support being assigned the value of an element in the range
	 *				 [<i>first</i>, <i>last</i>).
	 * @param pred Unary function that accepts an element in the range as argument, and returns a value convertible to
	 *			   <code>bool</code>. The value returned indicates whether the element is to be removed from the copy (if
	 *			   <code>true</code>, it is not copied). The function shall not modify its argument.
	 * @param new_val Value to assign to replaced values.
	 *
	 * @return An iterator pointing to the element that follows the last element written in the result sequence.
	 */
	export function replace_copy_if<T, InputIterator extends Iterator<T>, OutputIterator extends ILinearIterator<T>>(first: InputIterator, last: InputIterator, result: OutputIterator, pred: (val: T) => boolean, new_val: T): OutputIterator;
	/**
	 * <p> Exchange values of objects pointed to by two iterators. </p>
	 *
	 * <p> Swaps the elements pointed to by <i>x</i> and <i>y</i>. </p>
	 *
	 * <p> The function calls {@link Iterator.swap} to exchange the elements. </p>
	 *
	 * @param x {@link Iterator Forward iterator} to the objects to swap.
	 * @param y {@link Iterator Forward iterator} to the objects to swap.
	 */
	export function iter_swap<T>(x: Iterator<T>, y: Iterator<T>): void;
	/**
	 * <p> Exchange values of two ranges. </p>
	 *
	 * <p> Exchanges the values of each of the elements in the range [<i>first1</i>, <i>last1</i>) with those of their
	 * respective elements in the range beginning at <i>first2</i>. </p>
	 *
	 * <p> The function calls {@link Iterator.swap} to exchange the elements. </p>
	 *
	 * @param first1 {@link Iterator Forward iterator} to the initial position of the first sequence.
	 * @param last1 {@link Iterator Forward iterator} to the final position of the first sequence. The range used is
	 *				[<i>first1</i>, <i>last1</i>), including the element pointed by <i>first1</i>, but not the element
	 *				pointed by <i>last1</i>.
	 * @param first2 {@link Iterator Forward iterator} to the initial position of the second range. The range includes as
	 *				 many elements as [<i>first1</i>, <i>last1</i>). The two ranges shall not overlap.
	 *
	 * @return An iterator to the last element swapped in the second sequence.
	 */
	export function swap_ranges<T, ForwardIterator1 extends Iterator<T>, ForwardIterator2 extends Iterator<T>>(first1: ForwardIterator1, last1: ForwardIterator1, first2: ForwardIterator2): ForwardIterator2;
	/**
	 * <p> Reverse range. </p>
	 *
	 * <p> Reverses the order of the elements in the range [<i>first</i>, <i>last</i>). </p>
	 *
	 * <p> The function calls {@link iter_swap} to swap the elements to their new locations. </p>
	 *
	 * @param first An {@link Iterator} to the initial position in a sequence.
	 * @param last An {@link Iterator} to the final position in a sequence. The range used is [<i>first</i>, <i>last</i>),
	 *			  which contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
	 *			  <i>first</i> but not the element pointed by <i>last</i>.
	 */
	export function reverse<T, InputIterator extends Iterator<T>>(first: InputIterator, last: InputIterator): void;
	/**
	 * <p> Copy range reversed. </p>
	 *
	 * <p> Copies the elements in the range [<i>first</i>, <i>last</i>) to the range beginning at <i>result</i>, but in
	 * reverse order. </p>
	 *
	 * @param first {@link Iterator Bidirectional iterator} to the initial position in a sequence to be copied.
	 * @param last {@link Iterator Bidirectional iterator} to the initial position in a sequence to be copied. The range
	 *			   used is [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and
	 *			   <i>last</i>, including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
	 * @param result {@link Iterator Output iterator} to the initial position of the range where the reserved range is
	 *				 stored. The pointed type shall support being assigned the value of an element in the range
	 *				 [<i>first</i>, <i>last</i>).
	 *
	 * @return An output iterator pointing to the end of the copied range, which contains the same elements in reverse
	 *		   order.
	 */
	export function reverse_copy<T, BidirectionalIterator extends Iterator<T>, OutputIterator extends ILinearIterator<T>>(first: BidirectionalIterator, last: BidirectionalIterator, result: OutputIterator): OutputIterator;
	/**
	 * <p> Rotate left the elements in range. </p>
	 *
	 * <p> Rotates the order of the elements in the range [<i>first</i>, <i>last</i>), in such a way that the element
	 * pointed by middle becomes the new first element. </p>
	 *
	 * @param first An {@link Iterator} to the initial position in a sequence.
	 * @param middle An {@link Iterator} pointing to the element within the range [<i>first</i>, <i>last</i>) that is
	 *				 moved to the first position in the range.
	 * @param last An {@link Iterator} to the final position in a sequence. The range used is [<i>first</i>, <i>last</i>),
	 *			  which contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
	 *			  <i>first</i> but not the element pointed by <i>last</i>.
	 *
	 * @return An iterator pointing to the element that now contains the value previously pointed by <i>first</i>.
	 */
	export function rotate<T, InputIterator extends Iterator<T>>(first: InputIterator, middle: InputIterator, last: InputIterator): InputIterator;
	/**
	 * <p> Copy range rotated left. </p>
	 *
	 * <p> Copies the elements in the range [<i>first</i>, <i>last</i>) to the range beginning at <i>result</i>, but
	 * rotating the order of the elements in such a way that the element pointed by <i>middle</i> becomes the first
	 * element in the resulting range. </p>
	 *
	 * @param first {@link Iterator Forward iterator} to the initial position of the range to be copy-rotated.
	 * @param middle Forward iterator pointing to the element within the range [<i>first</i>, <i>last</i>) that is copied as the first element in the resulting range.
	 * @param last {@link Iterator Forward iterator} to the final positions of the range to be copy-rotated. The range
	 *			   used is [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and
	 *			   <i>last</i>, including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
	 *			   Notice that in this function, these are not consecutive parameters, but the first and <b>third</b> ones.
	 * @param result {@link Iterator Output iterator} to the initial position of the range where the reserved range is
	 *				 stored. The pointed type shall support being assigned the value of an element in the range
	 *				 [<i>first</i>, <i>last</i>).
	 *
	 * @return An output iterator pointing to the end of the copied range.
	 */
	export function rotate_copy<T, ForwardIterator extends Iterator<T>, OutputIterator extends ILinearIterator<T>>(first: ForwardIterator, middle: ForwardIterator, last: ForwardIterator, result: OutputIterator): OutputIterator;
	/**
	 * <p> Randomly rearrange elements in range. </p>
	 *
	 * <p> Rearranges the elements in the range [<i>first</i>, <i>last</i>) randomly. </p>
	 *
	 * <p> The function swaps the value of each element with that of some other randomly picked element. When provided,
	 * the function gen determines which element is picked in every case. Otherwise, the function uses some unspecified
	 * source of randomness. </p>
	 *
	 * <p> To specify a uniform random generator, see {@link shuffle}. </p>
	 *
	 * @param first An {@link Iterator} to the initial position in a sequence.
	 * @param last An {@link Iterator} to the final position in a sequence. The range used is [<i>first</i>, <i>last</i>),
	 *			  which contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
	 *			  <i>first</i> but not the element pointed by <i>last</i>.
	 */
	export function random_shuffle<T, RandomAccessIterator extends IArrayIterator<T>>(first: RandomAccessIterator, last: RandomAccessIterator): void;
	/**
	 * <p> Randomly rearrange elements in range using generator. </p>
	 *
	 * <p> Rearranges the elements in the range [<i>first</i>, <i>last</i>) randomly, using <i>g</i> as uniform random
	 * number generator. </p>
	 *
	 * <p> The function swaps the value of each element with that of some other randomly picked element. The function
	 * determines the element picked by calling <i>g()</i>. </p>
	 *
	 * <p> To shuffle the elements of the range without such a generator, see {@link random_shuffle} instead. </p>
	 *
	 * <h5> Note </h5>
	 * <p> Using random generator engine is not implemented yet. </p>
	 *
	 * @param first An {@link Iterator} to the initial position in a sequence.
	 * @param last An {@link Iterator} to the final position in a sequence. The range used is [<i>first</i>, <i>last</i>),
	 *			  which contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
	 *			  <i>first</i> but not the element pointed by <i>last</i>.
	 */
	export function shuffle<T, RandomAccessIterator extends IArrayIterator<T>>(first: RandomAccessIterator, last: RandomAccessIterator): void;
	/**
	 * <p> Sort elements in range. </p>
	 *
	 * <p> Sorts the elements in the range [<i>first</i>, <i>last</i>) into ascending order. The elements are compared
	 * using {@link less}. </p>
	 *
	 * @param first {@link IArrayIterator Random-access iterator} to the initial position of the sequence to be sorted.
	 * @param last {@link IArrayIterator Random-access iterator} to the final position of the sequence to be sorted.
	 *			  The range used is [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i>
	 *			  and <i>last</i>, including the element pointed by <i>first</i> but not the element pointed by
	 *			  <i>last</i>. {@link IArrayIterator RandomAccessIterator} shall point to a type for which
	 *			  {@link Iterator.swap swap} is properly defined.
	 */
	export function sort<T, RandomAccessIterator extends IArrayIterator<T>>(first: RandomAccessIterator, last: RandomAccessIterator): void;
	/**
	 * <p> Sort elements in range. </p>
	 *
	 * <p> Sorts the elements in the range [<i>first</i>, <i>last</i>) into specific order. The elements are compared
	 * using <i>compare</i>. </p>
	 *
	 * @param first {@link IArrayIterator Random-access iterator} to the initial position of the sequence to be sorted.
	 * @param last {@link IArrayIterator Random-access iterator} to the final position of the sequence to be sorted.
	 *			  The range used is [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i>
	 *			  and <i>last</i>, including the element pointed by <i>first</i> but not the element pointed by
	 *			  <i>last</i>. {@link IArrayIterator RandomAccessIterator} shall point to a type for which
	 *			  {@link Iterator.swap swap} is properly defined.
	 * @param compare Binary function that accepts two elements in the range as arguments, and returns a value
	 *		  convertible to <code>boolean</code>. The value returned indicates whether the element passed as first
	 *		  argument is considered to go before the second in the specific strict weak ordering it defines. The
	 *		  function shall not modify any of its arguments. This can either be a function pointer or a function
	 *		  object.
	 */
	export function sort<T, RandomAccessIterator extends IArrayIterator<T>>(first: RandomAccessIterator, last: RandomAccessIterator, compare: (left: T, right: T) => boolean): void;
	/**
	 * <p> Partially sort elements in range. </p>
	 *
	 * <p> Rearranges the elements in the range [<i>first</i>, <i>last</i>), in such a way that the elements before
	 * <i>middle</i> are the smallest elements in the entire range and are sorted in ascending order, while the remaining
	 * elements are left without any specific order. </p>
	 *
	 * <p> The elements are compared using {@link less}. </p>
	 *
	 * @param last {@link IArrayIterator Random-access iterator} to the first position of the sequence to be sorted.
	 * @param middle {@link IArrayIterator Random-access iterator} pointing to the element within the range [<i>first</i>, <i>last</i>) that is used as the upper boundary of the elements that are fully sorted.
	 * @param last {@link IArrayIterator Random-access iterator} to the final position of the sequence to be sorted.
	 *			  The range used is [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i>
	 *			  and <i>last</i>, including the element pointed by <i>first</i> but not the element pointed by
	 *			  <i>last</i>.
	 */
	export function partial_sort<T, RandomAccessIterator extends IArrayIterator<T>>(first: RandomAccessIterator, middle: RandomAccessIterator, last: RandomAccessIterator): void;
	/**
	 * <p> Partially sort elements in range. </p>
	 *
	 * <p> Rearranges the elements in the range [<i>first</i>, <i>last</i>), in such a way that the elements before
	 * <i>middle</i> are the smallest elements in the entire range and are sorted in ascending order, while the remaining
	 * elements are left without any specific order. </p>
	 *
	 * <p> The elements are compared using <i>comp</i>. </p>
	 *
	 * @param last {@link IArrayIterator Random-access iterator} to the first position of the sequence to be sorted.
	 * @param middle {@link IArrayIterator Random-access iterator} pointing to the element within the range [<i>first</i>, <i>last</i>) that is used as the upper boundary of the elements that are fully sorted.
	 * @param last {@link IArrayIterator Random-access iterator} to the final position of the sequence to be sorted.
	 *			  The range used is [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i>
	 *			  and <i>last</i>, including the element pointed by <i>first</i> but not the element pointed by
	 *			  <i>last</i>.
	 * @param compare Binary function that accepts two elements in the range as arguments, and returns a value
	 *				  convertible to <code>boolean</code>. The value returned indicates whether the element passed as
	 *				  first argument is considered to go before the second in the specific strict weak ordering it
	 *				  defines. The function shall not modify any of its arguments.
	 */
	export function partial_sort<T, RandomAccessIterator extends IArrayIterator<T>>(first: RandomAccessIterator, middle: RandomAccessIterator, last: RandomAccessIterator, compare: (x: T, y: T) => boolean): void;
	/**
	 * <p> Copy and partially sort range. </p>
	 *
	 * <p> Copies the smallest  elements in the range [<i>first</i>, <i>last</i>) to
	 * [<i>result_first</i>, <i>result_last</i>), sorting the elements copied. The number of elements copied is the same
	 * as the {@link distance} between <i>result_first</i> and <i>result_last</i> (unless this is more than the amount of
	 * elements in [<i>first</i>, <i>last</i>)). </p>
	 *
	 * <p> The range [<i>first</i>, <i>last</i>) is not modified. </p>
	 *
	 * <p> The elements are compared using {@link less}. </p>
	 *
	 * @param first {@link Iterator Input iterator} to the initial position of the sequence to copy from.
	 * @param last {@link Iterator Input iterator} to the final position of the sequence to copy from. The range used is
	 *			   [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and <i>last</i>,
	 *			   including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
	 *			   <i>InputIterator</i> shall point to a type assignable to the elements pointed by
	 *			   <i>RandomAccessIterator</i>.
	 * @param result_first {@link Iterator Random-access iterator} to the initial position of the destination sequence.
	 * @param result_last {@link Iterator Random-access iterator} to the final position of the destination sequence.
	 *					  The range used is [<i>result_first</i>, <i>result_last</i>).
	 * @param compare Binary function that accepts two elements in the result range as arguments, and returns a value
	 *				  convertible to <code>bool</code>. The value returned indicates whether the element passed as first
	 *				  argument is considered to go before the second in the specific <i>strict weak ordering</i> it
	 *				  defines. The function shall not modify any of its arguments.
	 *
	 * @return An iterator pointing to the element that follows the last element written in the result sequence.
	 */
	export function partial_sort_copy<T, InputIterator extends Iterator<T>, RandomAccessIterator extends Iterator<T>>(first: InputIterator, last: InputIterator, result_first: RandomAccessIterator, result_last: RandomAccessIterator): RandomAccessIterator;
	/**
	 * <p> Copy and partially sort range. </p>
	 *
	 * <p> Copies the smallest (or largest) elements in the range [<i>first</i>, <i>last</i>) to
	 * [<i>result_first</i>, <i>result_last</i>), sorting the elements copied. The number of elements copied is the same
	 * as the {@link distance} between <i>result_first</i> and <i>result_last</i> (unless this is more than the amount of
	 * elements in [<i>first</i>, <i>last</i>)). </p>
	 *
	 * <p> The range [<i>first</i>, <i>last</i>) is not modified. </p>
	 *
	 * <p> The elements are compared using <i>compare</i>. </p>
	 *
	 * @param first {@link Iterator Input iterator} to the initial position of the sequence to copy from.
	 * @param last {@link Iterator Input iterator} to the final position of the sequence to copy from. The range used is
	 *			   [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and <i>last</i>,
	 *			   including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
	 *			   <i>InputIterator</i> shall point to a type assignable to the elements pointed by
	 *			   <i>RandomAccessIterator</i>.
	 * @param result_first {@link Iterator Random-access iterator} to the initial position of the destination sequence.
	 * @param result_last {@link Iterator Random-access iterator} to the final position of the destination sequence.
	 *					  The range used is [<i>result_first</i>, <i>result_last</i>).
	 * @param compare Binary function that accepts two elements in the result range as arguments, and returns a value
	 *				  convertible to <code>bool</code>. The value returned indicates whether the element passed as first
	 *				  argument is considered to go before the second in the specific <i>strict weak ordering</i> it
	 *				  defines. The function shall not modify any of its arguments.
	 *
	 * @return An iterator pointing to the element that follows the last element written in the result sequence.
	 */
	export function partial_sort_copy<T, InputIterator extends Iterator<T>, RandomAccessIterator extends Iterator<T>>(first: InputIterator, last: InputIterator, result_first: RandomAccessIterator, result_last: RandomAccessIterator, compare: (x: T, y: T) => boolean): RandomAccessIterator;
	/**
	 * <p> Check whether range is sorted. </p>
	 *
	 * <p> Returns <code>true</code> if the range [<i>first</i>, <i>last</i>) is sorted into ascending order. </p>
	 *
	 * <p> The elements are compared using {@link less}. </p>
	 *
	 * @param first {@link Iterator Forward iterator} to the initial position of the sequence.
	 * @param last {@link Iterator Forward iterator} to the final position of the sequence. The range checked is
	 *			   [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and <i>last</i>,
	 *			   including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
	 *
	 * @return <code>true</code> if the range [<i>first</i>, <i>last</i>) is sorted into ascending order,
	 *		   <code>false</code> otherwise. If the range [<i>first</i>, <i>last</i>) contains less than two elements,
	 *		   the function always returns <code>true</code>.
	 */
	export function is_sorted<T, ForwardIterator extends Iterator<T>>(first: ForwardIterator, last: ForwardIterator): boolean;
	/**
	 * <p> Check whether range is sorted. </p>
	 *
	 * <p> Returns <code>true</code> if the range [<i>first</i>, <i>last</i>) is sorted into ascending order. </p>
	 *
	 * <p> The elements are compared using <i>compare</i>. </p>
	 *
	 * @param first {@link Iterator Forward iterator} to the initial position of the sequence.
	 * @param last {@link Iterator Forward iterator} to the final position of the sequence. The range checked is
	 *			   [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and <i>last</i>,
	 *			   including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
	 * @param compare Binary function that accepts two elements in the range as arguments, and returns a value convertible
	 *				  to <code>bool</code>. The value returned indicates whether the element passed as first argument is
	 *				  considered to go before the second in the specific strict weak ordering it defines. The function
	 *				  shall not modify any of its arguments.
	 *
	 * @return <code>true</code> if the range [<i>first</i>, <i>last</i>) is sorted into ascending order,
	 *		   <code>false</code> otherwise. If the range [<i>first</i>, <i>last</i>) contains less than two elements,
	 *		   the function always returns <code>true</code>.
	 */
	export function is_sorted<T, ForwardIterator extends Iterator<T>>(first: ForwardIterator, last: ForwardIterator, compare: (x: T, y: T) => boolean): boolean;
	/**
	 * <p> Find first unsorted element in range. </p>
	 *
	 * <p> Returns an iterator to the first element in the range [<i>first</i>, <i>last</i>) which does not follow an
	 * ascending order. </p>
	 *
	 * <p> The range between <i>first</i> and the iterator returned {@link is_sorted is sorted}. </p>
	 *
	 * <p> If the entire range is sorted, the function returns <i>last</i>. </p>
	 *
	 * <p> The elements are compared using {@link equal_to}. </p>
	 *
	 * @param first {@link Iterator Forward iterator} to the initial position of the sequence.
	 * @param last {@link Iterator Forward iterator} to the final position of the sequence. The range checked is
	 *			   [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and <i>last</i>,
	 *			   including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
	 * @param compare Binary function that accepts two elements in the range as arguments, and returns a value convertible
	 *				  to <code>bool</code>. The value returned indicates whether the element passed as first argument is
	 *				  considered to go before the second in the specific strict weak ordering it defines. The function
	 *				  shall not modify any of its arguments.
	 *
	 * @return An iterator to the first element in the range which does not follow an ascending order, or <i>last</i> if
	 *		   all elements are sorted or if the range contains less than two elements.
	 */
	export function is_sorted_until<T, ForwardIterator extends Iterator<T>>(first: ForwardIterator, last: ForwardIterator): ForwardIterator;
	/**
	 * <p> Find first unsorted element in range. </p>
	 *
	 * <p> Returns an iterator to the first element in the range [<i>first</i>, <i>last</i>) which does not follow an
	 * ascending order. </p>
	 *
	 * <p> The range between <i>first</i> and the iterator returned {@link is_sorted is sorted}. </p>
	 *
	 * <p> If the entire range is sorted, the function returns <i>last</i>. </p>
	 *
	 * <p> The elements are compared using <i>compare</i>. </p>
	 *
	 * @param first {@link Iterator Forward iterator} to the initial position of the sequence.
	 * @param last {@link Iterator Forward iterator} to the final position of the sequence. The range checked is
	 *			   [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and <i>last</i>,
	 *			   including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
	 * @param compare Binary function that accepts two elements in the range as arguments, and returns a value convertible
	 *				  to <code>bool</code>. The value returned indicates whether the element passed as first argument is
	 *				  considered to go before the second in the specific strict weak ordering it defines. The function
	 *				  shall not modify any of its arguments.
	 *
	 * @return An iterator to the first element in the range which does not follow an ascending order, or <i>last</i> if
	 *		   all elements are sorted or if the range contains less than two elements.
	 */
	export function is_sorted_until<T, ForwardIterator extends Iterator<T>>(first: ForwardIterator, last: ForwardIterator, compare: (x: T, y: T) => boolean): ForwardIterator;
	/**
	 * <p> Make heap from range. </p>
	 *
	 * <p> Rearranges the elements in the range [<i>first</i>, <i>last</i>) in such a way that they form a heap. </p>
	 *
	 * <p> A heap is a way to organize the elements of a range that allows for fast retrieval of the element with the
	 * highest value at any moment (with {@link pop_heap}), even repeatedly, while allowing for fast insertion of new
	 * elements (with {@link push_heap}). </p>
	 *
	 * <p> The element with the highest value is always pointed by first. The order of the other elements depends on the
	 * particular implementation, but it is consistent throughout all heap-related functions of this header. </p>
	 *
	 * <p> The elements are compared using {@link less}: The element with the highest value is an element for which this
	 * would return false when compared to every other element in the range. </p>
	 *
	 * <p> The standard container adaptor {@link PriorityQueue} calls {@link make_heap}, {@link push_heap} and
	 * {@link pop_heap} automatically to maintain heap properties for a container. </p>
	 *
	 * @param first {@link IArrayIterator Random-access iterator} to the initial position of the sequence to be
	 *				transformed into a heap.
	 * @param last {@link IArrayIterator Random-access iterator} to the final position of the sequence to be transformed
	 *			   into a heap. The range used is [<i>first</i>, <i>last</i>), which contains all the elements between
	 *			   <i>first</i> and <i>last</i>, including the element pointed by <i>first</i> but not the element pointed
	 *			   by <i>last</i>. {@link IArrayIterator RandomAccessIterator} shall point to a type for which
	 *			   {@link Iterator.swap swap} is properly defined.
	 */
	export function make_heap<T, RandomAccessIterator extends IArrayIterator<T>>(first: RandomAccessIterator, last: RandomAccessIterator): void;
	/**
	 * <p> Make heap from range. </p>
	 *
	 * <p> Rearranges the elements in the range [<i>first</i>, <i>last</i>) in such a way that they form a heap. </p>
	 *
	 * <p> A heap is a way to organize the elements of a range that allows for fast retrieval of the element with the
	 * highest value at any moment (with {@link pop_heap}), even repeatedly, while allowing for fast insertion of new
	 * elements (with {@link push_heap}). </p>
	 *
	 * <p> The element with the highest value is always pointed by first. The order of the other elements depends on the
	 * particular implementation, but it is consistent throughout all heap-related functions of this header. </p>
	 *
	 * <p> The elements are compared using <i>compare</i>: The element with the highest value is an element for which this
	 * would return false when compared to every other element in the range. </p>
	 *
	 * <p> The standard container adaptor {@link PriorityQueue} calls {@link make_heap}, {@link push_heap} and
	 * {@link pop_heap} automatically to maintain heap properties for a container. </p>
	 *
	 * @param first {@link IArrayIterator Random-access iterator} to the initial position of the sequence to be
	 *				transformed into a heap.
	 * @param last {@link IArrayIterator Random-access iterator} to the final position of the sequence to be transformed
	 *			   into a heap. The range used is [<i>first</i>, <i>last</i>), which contains all the elements between
	 *			   <i>first</i> and <i>last</i>, including the element pointed by <i>first</i> but not the element pointed
	 *			   by <i>last</i>. {@link IArrayIterator RandomAccessIterator} shall point to a type for which
	 *			   {@link Iterator.swap swap} is properly defined.
	 * @param compare Binary function that accepts two elements in the range as arguments, and returns a value
	 *				  convertible to <code>boolean</code>. The value returned indicates whether the element passed as
	 *				  first argument is considered to go before the second in the specific strict weak ordering it defines.
	 *				  The function shall not modify any of its arguments. This can either be a function pointer or a
	 *				  function object.
	 */
	export function make_heap<T, RandomAccessIterator extends IArrayIterator<T>>(first: RandomAccessIterator, last: RandomAccessIterator, compare: (x: T, y: T) => boolean): void;
	/**
	 * <p> Push element into heap range. </p>
	 *
	 * <p> Given a heap in the range [<i>first</i>, <i>last</i> - 1), this function extends the range considered a heap to
	 * [<i>first</i>, <i>last</i>) by placing the value in (<i>last</i> - 1) into its corresponding location within it.
	 * </p>
	 *
	 * <p> A range can be organized into a heap by calling {@link make_heap}. After that, its heap properties are
	 * preserved if elements are added and removed from it using {@link push_heap} and {@link pop_heap}, respectively.
	 * </p>
	 *
	 * @param first {@link IArrayIterator Random-access iterator} to the initial position of the new heap range, including
	 *				the pushed element.
	 * @param last {@link IArrayIterator Random-access iterator} to the final position of the new heap range, including
	 *			   the pushed element.  The range used is [<i>first</i>, <i>last</i>), which contains all the elements
	 *			   between <i>first</i> and <i>last</i>, including the element pointed by <i>first</i> but not the element
	 *			   pointed by <i>last</i>. {@link IArrayIterator RandomAccessIterator} shall point to a type for which
	 *			   {@link Iterator.swap swap} is properly defined.
	 */
	export function push_heap<T, RandomAccessIterator extends IArrayIterator<T>>(first: RandomAccessIterator, last: RandomAccessIterator): void;
	/**
	 * <p> Push element into heap range. </p>
	 *
	 * <p> Given a heap in the range [<i>first</i>, <i>last</i> - 1), this function extends the range considered a heap to
	 * [<i>first</i>, <i>last</i>) by placing the value in (<i>last</i> - 1) into its corresponding location within it.
	 * </p>
	 *
	 * <p> A range can be organized into a heap by calling {@link make_heap}. After that, its heap properties are
	 * preserved if elements are added and removed from it using {@link push_heap} and {@link pop_heap}, respectively.
	 * </p>
	 *
	 * @param first {@link IArrayIterator Random-access iterator} to the initial position of the new heap range, including
	 *				the pushed element.
	 * @param last {@link IArrayIterator Random-access iterator} to the final position of the new heap range, including
	 *			   the pushed element.  The range used is [<i>first</i>, <i>last</i>), which contains all the elements
	 *			   between <i>first</i> and <i>last</i>, including the element pointed by <i>first</i> but not the element
	 *			   pointed by <i>last</i>. {@link IArrayIterator RandomAccessIterator} shall point to a type for which
	 *			   {@link Iterator.swap swap} is properly defined.
	 * @param compare Binary function that accepts two elements in the range as arguments, and returns a value
	 *				  convertible to <code>boolean</code>. The value returned indicates whether the element passed as
	 *				  first argument is considered to go before the second in the specific strict weak ordering it defines.
	 *				  The function shall not modify any of its arguments. This can either be a function pointer or a
	 *				  function object.
	 */
	export function push_heap<T, RandomAccessIterator extends IArrayIterator<T>>(first: RandomAccessIterator, last: RandomAccessIterator, compare: (x: T, y: T) => boolean): void;
	/**
	 * <p> Pop element from heap range. </p>
	 *
	 * <p> Rearranges the elements in the heap range [<i>first</i>, <i>last</i>) in such a way that the part considered a
	 * heap is shortened by one: The element with the highest value is moved to (<i>last</i> - 1). </p>
	 *
	 * <p> While the element with the highest value is moved from first to (<i>last</i> - 1) (which now is out of the
	 * heap), the other elements are reorganized in such a way that the range [<i>first</i>, <i>last</i> - 1) preserves
	 * the properties of a heap. </p>
	 *
	 * <p> A range can be organized into a heap by calling {@link make_heap}. After that, its heap properties are
	 * preserved if elements are added and removed from it using {@link push_heap} and {@link pop_heap}, respectively.
	 * </p>
	 *
	 * @param first {@link IArrayIterator Random-access iterator} to the initial position of the heap to be shrank by one.
	 * @param last {@link IArrayIterator Random-access iterator} to the final position of the heap to be shrank by one.
	 *			   The range used is [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and
	 *			   <i>last</i>, including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
	 *			   {@link IArrayIterator RandomAccessIterator} shall point to a type for which {@link Iterator.swap swap}
	 *			   is properly defined.
	 */
	export function pop_heap<T, RandomAccessIterator extends IArrayIterator<T>>(first: RandomAccessIterator, last: RandomAccessIterator): void;
	/**
	 * <p> Pop element from heap range. </p>
	 *
	 * <p> Rearranges the elements in the heap range [<i>first</i>, <i>last</i>) in such a way that the part considered a
	 * heap is shortened by one: The element with the highest value is moved to (<i>last</i> - 1). </p>
	 *
	 * <p> While the element with the highest value is moved from first to (<i>last</i> - 1) (which now is out of the
	 * heap), the other elements are reorganized in such a way that the range [<i>first</i>, <i>last</i> - 1) preserves
	 * the properties of a heap. </p>
	 *
	 * <p> A range can be organized into a heap by calling {@link make_heap}. After that, its heap properties are
	 * preserved if elements are added and removed from it using {@link push_heap} and {@link pop_heap}, respectively.
	 * </p>
	 *
	 * @param first {@link IArrayIterator Random-access iterator} to the initial position of the heap to be shrank by one.
	 * @param last {@link IArrayIterator Random-access iterator} to the final position of the heap to be shrank by one.
	 *			   The range used is [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and
	 *			   <i>last</i>, including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
	 *			   {@link IArrayIterator RandomAccessIterator} shall point to a type for which {@link Iterator.swap swap}
	 *			   is properly defined.
	 * @param compare Binary function that accepts two elements in the range as arguments, and returns a value
	 *				  convertible to <code>boolean</code>. The value returned indicates whether the element passed as
	 *				  first argument is considered to go before the second in the specific strict weak ordering it defines.
	 *				  The function shall not modify any of its arguments. This can either be a function pointer or a
	 *				  function object.
	 */
	export function pop_heap<T, RandomAccessIterator extends IArrayIterator<T>>(first: RandomAccessIterator, last: RandomAccessIterator, compare: (x: T, y: T) => boolean): void;
	/**
	 * <p> Test if range is heap. </p>
	 *
	 * <p> Returns true if the range [<i>first</i>, <i>last</i>) forms a heap, as if constructed with {@link make_heap}.
	 * </p>
	 *
	 * <p> The elements are compared using {@link less}. </p>
	 *
	 * @param first {@link IArrayIterator Random-access iterator} to the initial position of the sequence.
	 * @param last {@link IArrayIterator Random-access iterator} to the final position of the sequence. The range used is
	 *			   [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and <i>last</i>,
	 *			   including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
	 *			   {@link IArrayIterator RandomAccessIterator} shall point to a type for which {@link Iterator.swap swap}
	 *			   is properly defined.
	 *
	 * @return <code>true</code> if the range [<i>first</i>, <i>last</i>) is a heap (as if constructed with
	 *		   {@link make_heap}), <code>false</code> otherwise. If the range [<i>first</i>, <i>last</i>) contains less
	 *		   than two elements, the function always returns <code>true</code>.
	 */
	export function is_heap<T, RandomAccessIterator extends IArrayIterator<T>>(first: RandomAccessIterator, last: RandomAccessIterator): boolean;
	/**
	 * <p> Test if range is heap. </p>
	 *
	 * <p> Returns true if the range [<i>first</i>, <i>last</i>) forms a heap, as if constructed with {@link make_heap}.
	 * </p>
	 *
	 * <p> The elements are compared using <i>compare</i>. </p>
	 *
	 * @param first {@link IArrayIterator Random-access iterator} to the initial position of the sequence.
	 * @param last {@link IArrayIterator Random-access iterator} to the final position of the sequence. The range used is
	 *			   [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and <i>last</i>,
	 *			   including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
	 *			   {@link IArrayIterator RandomAccessIterator} shall point to a type for which {@link Iterator.swap swap}
	 *			   is properly defined.
	 * @param compare Binary function that accepts two elements in the range as arguments, and returns a value
	 *				  convertible to <code>boolean</code>. The value returned indicates whether the element passed as
	 *				  first argument is considered to go before the second in the specific strict weak ordering it defines.
	 *				  The function shall not modify any of its arguments. This can either be a function pointer or a
	 *				  function object.
	 *
	 * @return <code>true</code> if the range [<i>first</i>, <i>last</i>) is a heap (as if constructed with
	 *		   {@link make_heap}), <code>false</code> otherwise. If the range [<i>first</i>, <i>last</i>) contains less
	 *		   than two elements, the function always returns <code>true</code>.
	 */
	export function is_heap<T, RandomAccessIterator extends IArrayIterator<T>>(first: RandomAccessIterator, last: RandomAccessIterator, compare: (x: T, y: T) => boolean): boolean;
	/**
	 * <p> Find first element not in heap order. </p>
	 *
	 * <p> Returns an iterator to the first element in the range [<i>first</i>, <i>last</i>) which is not in a valid
	 * position if the range is considered a heap (as if constructed with {@link make_heap}). </p>
	 *
	 * <p> The range between first and the iterator returned is a heap. </p>
	 *
	 * <p> If the entire range is a valid heap, the function returns <i>last</i>. </p>
	 *
	 * <p> The elements are compared using {@link less}. </p>
	 *
	 * @param first {@link IArrayIterator Random-access iterator} to the initial position of the sequence.
	 * @param last {@link IArrayIterator Random-access iterator} to the final position of the sequence. The range used is
	 *			   [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and <i>last</i>,
	 *			   including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
	 *			   {@link IArrayIterator RandomAccessIterator} shall point to a type for which {@link Iterator.swap swap}
	 *			   is properly defined.
	 */
	export function is_heap_until<T, RandomAccessIterator extends IArrayIterator<T>>(first: RandomAccessIterator, last: RandomAccessIterator): RandomAccessIterator;
	/**
	 * <p> Find first element not in heap order. </p>
	 *
	 * <p> Returns an iterator to the first element in the range [<i>first</i>, <i>last</i>) which is not in a valid
	 * position if the range is considered a heap (as if constructed with {@link make_heap}). </p>
	 *
	 * <p> The range between first and the iterator returned is a heap. </p>
	 *
	 * <p> If the entire range is a valid heap, the function returns <i>last</i>. </p>
	 *
	 * <p> The elements are compared using {@link less}. </p>
	 *
	 * @param first {@link IArrayIterator Random-access iterator} to the initial position of the sequence.
	 * @param last {@link IArrayIterator Random-access iterator} to the final position of the sequence. The range used is
	 *			   [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and <i>last</i>,
	 *			   including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
	 *			   {@link IArrayIterator RandomAccessIterator} shall point to a type for which {@link Iterator.swap swap}
	 *			   is properly defined.
	 * @param compare Binary function that accepts two elements in the range as arguments, and returns a value
	 *				  convertible to <code>boolean</code>. The value returned indicates whether the element passed as
	 *				  first argument is considered to go before the second in the specific strict weak ordering it defines.
	 *				  The function shall not modify any of its arguments. This can either be a function pointer or a
	 *				  function object.
	 */
	export function is_heap_until<T, RandomAccessIterator extends IArrayIterator<T>>(first: RandomAccessIterator, last: RandomAccessIterator, compare: (x: T, y: T) => boolean): RandomAccessIterator;
	/**
	 * <p> Sort elements of heap. </p>
	 *
	 * <p> Sorts the elements in the heap range [<i>first</i>, <i>last</i>) into ascending order. </p>
	 *
	 * <p> The elements are compared using {@link less}, which shall be the same as used to construct the heap. </p>
	 *
	 * <p> The range loses its properties as a heap. </p>
	 *
	 * @param first {@link IArrayIterator Random-access iterator} to the initial position of the sequence to be sorted.
	 * @param last {@link IArrayIterator Random-access iterator} to the final position of the sequence to be sorted.
	 *			   The range used is [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and
	 *			   <i>last</i>, including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
	 *			   {@link IArrayIterator RandomAccessIterator} shall point to a type for which {@link Iterator.swap swap}
	 *			   is properly defined.
	 */
	export function sort_heap<T, RandomAccessIterator extends IArrayIterator<T>>(first: RandomAccessIterator, last: RandomAccessIterator): void;
	/**
	 * <p> Sort elements of heap. </p>
	 *
	 * <p> Sorts the elements in the heap range [<i>first</i>, <i>last</i>) into ascending order. </p>
	 *
	 * <p> The elements are compared using <i>compare</i>, which shall be the same as used to construct the heap. </p>
	 *
	 * <p> The range loses its properties as a heap. </p>
	 *
	 * @param first {@link IArrayIterator Random-access iterator} to the initial position of the sequence to be sorted.
	 * @param last {@link IArrayIterator Random-access iterator} to the final position of the sequence to be sorted.
	 *			   The range used is [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and
	 *			   <i>last</i>, including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
	 *			   {@link IArrayIterator RandomAccessIterator} shall point to a type for which {@link Iterator.swap swap}
	 *			   is properly defined.
	 * @param compare Binary function that accepts two elements in the range as arguments, and returns a value
	 *				  convertible to <code>boolean</code>. The value returned indicates whether the element passed as
	 *				  first argument is considered to go before the second in the specific strict weak ordering it defines.
	 *				  The function shall not modify any of its arguments. This can either be a function pointer or a
	 *				  function object.
	 */
	export function sort_heap<T, RandomAccessIterator extends IArrayIterator<T>>(first: RandomAccessIterator, last: RandomAccessIterator, compare: (x: T, y: T) => boolean): void;
	/**
	 * <p> Return iterator to lower bound. </p>
	 *
	 * <p> Returns an iterator pointing to the first element in the range [<i>first</i>, <i>last</i>) which does not
	 * compare less than <i>val</i>. </p>
	 *
	 * <p> The elements are compared using {@link less}. The elements in the range shall already be {@link is_sorted sorted}
	 * according to this same criterion ({@link less}), or at least {@link is_partitioned partitioned} with respect to
	 * <i>val</i>. </p>
	 *
	 * <p> The function optimizes the number of comparisons performed by comparing non-consecutive elements of the sorted
	 * range, which is specially efficient for {@link IArrayIterator random-access iterators}. </p>
	 *
	 * <p> Unlike {@link upper_bound}, the value pointed by the iterator returned by this function may also be equivalent
	 * to <i>val</i>, and not only greater. </p>
	 *
	 * @param first {@link Iterator Forward iterator} to the initial position of a {@link is_sorted sorted} (or properly
	 *				{@link is_partitioned partitioned}) sequence.
	 * @param last {@link Iterator Forward iterator} to the final position of a {@link is_sorted sorted} (or properly
	 *			   {@link is_partitioned partitioned}) sequence. The range used is [<i>first</i>, <i>last</i>), which
	 *			   contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
	 *			   <i>first</i> but not the element pointed by <i>last</i>.
	 * @param val Value of the lower bound to search for in the range. <i>T</i> shall be a type supporting being compared
	 *			  with elements of the range [<i>first</i>, <i>last</i>) as the left-hand side operand of {@link less}.
	 *
	 * @return An iterator to the lower bound of <i>val</i> in the range. If all the element in the range compare less than
	 *		   <i>val</i>, the function returns <i>last</i>.
	 */
	export function lower_bound<T, ForwardIterator extends Iterator<T>>(first: ForwardIterator, last: ForwardIterator, val: T): ForwardIterator;
	/**
	 * <p> Return iterator to lower bound. </p>
	 *
	 * <p> Returns an iterator pointing to the first element in the range [<i>first</i>, <i>last</i>) which does not
	 * compare less than <i>val</i>. </p>
	 *
	 * <p> The elements are compared using <i>compare</i>. The elements in the range shall already be
	 * {@link is_sorted sorted} according to this same criterion (<i>compare</i>), or at least
	 * {@link is_partitioned partitioned} with respect to <i>val</i>. </p>
	 *
	 * <p> The function optimizes the number of comparisons performed by comparing non-consecutive elements of the sorted
	 * range, which is specially efficient for {@link IArrayIterator random-access iterators}. </p>
	 *
	 * <p> Unlike {@link upper_bound}, the value pointed by the iterator returned by this function may also be equivalent
	 * to <i>val</i>, and not only greater. </p>
	 *
	 * @param first {@link Iterator Forward iterator} to the initial position of a {@link is_sorted sorted} (or properly
	 *				{@link is_partitioned partitioned}) sequence.
	 * @param last {@link Iterator Forward iterator} to the final position of a {@link is_sorted sorted} (or properly
	 *			   {@link is_partitioned partitioned}) sequence. The range used is [<i>first</i>, <i>last</i>), which
	 *			   contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
	 *			   <i>first</i> but not the element pointed by <i>last</i>.
	 * @param val Value of the lower bound to search for in the range.
	 * @param compare Binary function that accepts two arguments (the first of the type pointed by <i>ForwardIterator</i>,
	 *				  and the second, always <i>val</i>), and returns a value convertible to <code>bool</code>. The value
	 *				  returned indicates whether the first argument is considered to go before the second. The function
	 *				  shall not modify any of its arguments.
	 *
	 * @return An iterator to the lower bound of <i>val</i> in the range. If all the element in the range compare less than
	 *		   <i>val</i>, the function returns <i>last</i>.
	 */
	export function lower_bound<T, ForwardIterator extends Iterator<T>>(first: ForwardIterator, last: ForwardIterator, val: T, compare: (x: T, y: T) => boolean): ForwardIterator;
	/**
	 * <p> Return iterator to upper bound. </p>
	 *
	 * <p> Returns an iterator pointing to the first element in the range [<i>first</i>, <i>last</i>) which compares
	 * greater than <i>val</i>. </p>
	 *
	 * <p> The elements are compared using {@link less}. The elements in the range shall already be {@link is_sorted sorted}
	 * according to this same criterion ({@link less}), or at least {@link is_partitioned partitioned} with respect to
	 * <i>val</i>. </p>
	 *
	 * <p> The function optimizes the number of comparisons performed by comparing non-consecutive elements of the sorted
	 * range, which is specially efficient for {@link IArrayIterator random-access iterators}. </p>
	 *
	 * <p> Unlike {@link lower_bound}, the value pointed by the iterator returned by this function cannot be equivalent to
	 * <i>val</i>, only greater. </p>
	 *
	 * @param first {@link Iterator Forward iterator} to the initial position of a {@link is_sorted sorted} (or properly
	 *				{@link is_partitioned partitioned}) sequence.
	 * @param last {@link Iterator Forward iterator} to the final position of a {@link is_sorted sorted} (or properly
	 *			   {@link is_partitioned partitioned}) sequence. The range used is [<i>first</i>, <i>last</i>), which
	 *			   contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
	 *			   <i>first</i> but not the element pointed by <i>last</i>.
	 * @param val Value of the lower bound to search for in the range. <i>T</i> shall be a type supporting being compared
	 *			  with elements of the range [<i>first</i>, <i>last</i>) as the left-hand side operand of {@link less}.
	 *
	 * @return An iterator to the upper bound of <i>val</i> in the range. If no element in the range comparse greater than
	 *		   <i>val</i>, the function returns <i>last</i>.
	 */
	export function upper_bound<T, ForwardIterator extends Iterator<T>>(first: ForwardIterator, last: ForwardIterator, val: T): ForwardIterator;
	/**
	 * <p> Return iterator to upper bound. </p>
	 *
	 * <p> Returns an iterator pointing to the first element in the range [<i>first</i>, <i>last</i>) which compares
	 * greater than <i>val</i>. </p>
	 *
	 * <p> The elements are compared using <i>compare</i>. The elements in the range shall already be
	 * {@link is_sorted sorted} according to this same criterion (<i>compare</i>), or at least
	 * {@link is_partitioned partitioned} with respect to <i>val</i>. </p>
	 *
	 * <p> The function optimizes the number of comparisons performed by comparing non-consecutive elements of the sorted
	 * range, which is specially efficient for {@link IArrayIterator random-access iterators}. </p>
	 *
	 * <p> Unlike {@link lower_bound}, the value pointed by the iterator returned by this function cannot be equivalent to
	 * <i>val</i>, only greater. </p>
	 *
	 * @param first {@link Iterator Forward iterator} to the initial position of a {@link is_sorted sorted} (or properly
	 *				{@link is_partitioned partitioned}) sequence.
	 * @param last {@link Iterator Forward iterator} to the final position of a {@link is_sorted sorted} (or properly
	 *			   {@link is_partitioned partitioned}) sequence. The range used is [<i>first</i>, <i>last</i>), which
	 *			   contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
	 *			   <i>first</i> but not the element pointed by <i>last</i>.
	 * @param val Value of the lower bound to search for in the range.
	 * @param compare Binary function that accepts two arguments (the first of the type pointed by <i>ForwardIterator</i>,
	 *				  and the second, always <i>val</i>), and returns a value convertible to <code>bool</code>. The value
	 *				  returned indicates whether the first argument is considered to go before the second. The function
	 *				  shall not modify any of its arguments.
	 *
	 * @return An iterator to the upper bound of <i>val</i> in the range. If no element in the range comparse greater than
	 *		   <i>val</i>, the function returns <i>last</i>.
	 */
	export function upper_bound<T, ForwardIterator extends Iterator<T>>(first: ForwardIterator, last: ForwardIterator, val: T, compare: (x: T, y: T) => boolean): ForwardIterator;
	/**
	 * <p> Get subrange of equal elements. </p>
	 *
	 * <p> Returns the bounds of the subrange that includes all the elements of the range [<i>first</i>, <i>last</i>) with
	 * values equivalent to <i>val</i>. </p>
	 *
	 * <p> The elements are compared using {@link less}. Two elements, <i>ax/i> and <i>y</i> are considered equivalent
	 * <code>if (!less(x, y) && !less(y, x))</code>. </p>
	 *
	 * <p> The elements in the range shall already be {@link is_sorted sorted} according to this same criterion
	 * ({@link less}), or at least {@link is_partitioned partitioned} with respect to <i>val</i>. </p>
	 *
	 * <p> If <i>val</i> is not equivalent to any value in the range, the subrange returned has a length of zero, with both
	 * iterators pointing to the nearest value greater than <i>val</i>, if any, or to <i>last</i>, if <i>val</i> compares
	 * greater than all the elements in the range. </p>
	 *
	 * @param first {@link Iterator Forward iterator} to the initial position of a {@link is_sorted sorted} (or properly
	 *				{@link is_partitioned partitioned}) sequence.
	 * @param last {@link Iterator Forward iterator} to the final position of a {@link is_sorted sorted} (or properly
	 *			   {@link is_partitioned partitioned}) sequence. The range used is [<i>first</i>, <i>last</i>), which
	 *			   contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
	 *			   <i>first</i> but not the element pointed by <i>last</i>.
	 * @param val Value of the lower bound to search for in the range. <i>T</i> shall be a type supporting being compared
	 *			  with elements of the range [<i>first</i>, <i>last</i>) as the left-hand side operand of {@link less}.
	 *
	 * @return A {@link Pair} object, whose member {@link Pair.first} is an iterator to the lower bound of the subrange of
	 *		   equivalent values, and {@link Pair.second} its upper bound. The values are the same as those that would be
	 *		   returned by functions {@link lower_bound} and {@link upper_bound} respectively.
	 */
	export function equal_range<T, ForwardIterator extends Iterator<T>>(first: ForwardIterator, last: ForwardIterator, val: T): Pair<ForwardIterator, ForwardIterator>;
	/**
	 * <p> Get subrange of equal elements. </p>
	 *
	 * <p> Returns the bounds of the subrange that includes all the elements of the range [<i>first</i>, <i>last</i>) with
	 * values equivalent to <i>val</i>. </p>
	 *
	 * <p> The elements are compared using <i>compare</i>. Two elements, <i>ax/i> and <i>y</i> are considered equivalent
	 * <code>if (!compare(x, y) && !compare(y, x))</code>. </p>
	 *
	 * <p> The elements in the range shall already be {@link is_sorted sorted} according to this same criterion
	 * (<i>compare</i>), or at least {@link is_partitioned partitioned} with respect to <i>val</i>. </p>
	 *
	 * <p> If <i>val</i> is not equivalent to any value in the range, the subrange returned has a length of zero, with both
	 * iterators pointing to the nearest value greater than <i>val</i>, if any, or to <i>last</i>, if <i>val</i> compares
	 * greater than all the elements in the range. </p>
	 *
	 * @param first {@link Iterator Forward iterator} to the initial position of a {@link is_sorted sorted} (or properly
	 *				{@link is_partitioned partitioned}) sequence.
	 * @param last {@link Iterator Forward iterator} to the final position of a {@link is_sorted sorted} (or properly
	 *			   {@link is_partitioned partitioned}) sequence. The range used is [<i>first</i>, <i>last</i>), which
	 *			   contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
	 *			   <i>first</i> but not the element pointed by <i>last</i>.
	 * @param val Value of the lower bound to search for in the range.
	 * @param compare Binary function that accepts two arguments of the type pointed by <i>ForwardIterator</i> (and of type
	 *				  <i>T</i>), and returns a value convertible to <code>bool</code>. The value returned indicates whether
	 *				  the first argument is considered to go before the second. The function shall not modify any of its
	 *				  arguments.
	 *
	 * @return A {@link Pair} object, whose member {@link Pair.first} is an iterator to the lower bound of the subrange of
	 *		   equivalent values, and {@link Pair.second} its upper bound. The values are the same as those that would be
	 *		   returned by functions {@link lower_bound} and {@link upper_bound} respectively.
	 */
	export function equal_range<T, ForwardIterator extends Iterator<T>>(first: ForwardIterator, last: ForwardIterator, val: T, compare: (x: T, y: T) => boolean): Pair<ForwardIterator, ForwardIterator>;
	/**
	 * <p> Get subrange of equal elements. </p>
	 *
	 * <p> Returns the bounds of the subrange that includes all the elements of the range [<i>first</i>, <i>last</i>) with
	 * values equivalent to <i>val</i>. </p>
	 *
	 * <p> The elements are compared using {@link less}. Two elements, <i>x</i> and <i>y</i> are considered equivalent
	 * <code>if (!less(x, y) && !less(y, x))</code>. </p>
	 *
	 * <p> The elements in the range shall already be {@link is_sorted sorted} according to this same criterion
	 * ({@link less}), or at least {@link is_partitioned partitioned} with respect to <i>val</i>. </p>
	 *
	 * <p> If <i>val</i> is not equivalent to any value in the range, the subrange returned has a length of zero, with both
	 * iterators pointing to the nearest value greater than <i>val</i>, if any, or to <i>last</i>, if <i>val</i> compares
	 * greater than all the elements in the range. </p>
	 *
	 * @param first {@link Iterator Forward iterator} to the initial position of a {@link is_sorted sorted} (or properly
	 *				{@link is_partitioned partitioned}) sequence.
	 * @param last {@link Iterator Forward iterator} to the final position of a {@link is_sorted sorted} (or properly
	 *			   {@link is_partitioned partitioned}) sequence. The range used is [<i>first</i>, <i>last</i>), which
	 *			   contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
	 *			   <i>first</i> but not the element pointed by <i>last</i>.
	 * @param val Value of the lower bound to search for in the range. <i>T</i> shall be a type supporting being compared
	 *			  with elements of the range [<i>first</i>, <i>last</i>) as the left-hand side operand of {@link less}.
	 *
	 * @return <code>true</code> if an element equivalent to <i>val</i> is found, and <code>false</code> otherwise.
	 */
	export function binary_search<T, ForwardIterator extends Iterator<T>>(first: ForwardIterator, last: ForwardIterator, val: T): boolean;
	/**
	 * <p> Get subrange of equal elements. </p>
	 *
	 * <p> Returns the bounds of the subrange that includes all the elements of the range [<i>first</i>, <i>last</i>) with
	 * values equivalent to <i>val</i>. </p>
	 *
	 * <p> The elements are compared using {<i>compare</i>}. Two elements, <i>x</i> and <i>y</i> are considered equivalent
	 * <code>if (!compare(x, y) && !compare(y, x))</code>. </p>
	 *
	 * <p> The elements in the range shall already be {@link is_sorted sorted} according to this same criterion
	 * (<i>compare</i>), or at least {@link is_partitioned partitioned} with respect to <i>val</i>. </p>
	 *
	 * <p> If <i>val</i> is not equivalent to any value in the range, the subrange returned has a length of zero, with both
	 * iterators pointing to the nearest value greater than <i>val</i>, if any, or to <i>last</i>, if <i>val</i> compares
	 * greater than all the elements in the range. </p>
	 *
	 * @param first {@link Iterator Forward iterator} to the initial position of a {@link is_sorted sorted} (or properly
	 *				{@link is_partitioned partitioned}) sequence.
	 * @param last {@link Iterator Forward iterator} to the final position of a {@link is_sorted sorted} (or properly
	 *			   {@link is_partitioned partitioned}) sequence. The range used is [<i>first</i>, <i>last</i>), which
	 *			   contains all the elements between <i>first</i> and <i>last</i>, including the element pointed by
	 *			   <i>first</i> but not the element pointed by <i>last</i>.
	 * @param val Value of the lower bound to search for in the range.
	 * @param compare Binary function that accepts two arguments of the type pointed by <i>ForwardIterator</i> (and of type
	 *				  <i>T</i>), and returns a value convertible to <code>bool</code>. The value returned indicates whether
	 *				  the first argument is considered to go before the second. The function shall not modify any of its
	 *				  arguments.
	 *
	 * @return <code>true</code> if an element equivalent to <i>val</i> is found, and <code>false</code> otherwise.
	 */
	export function binary_search<T, ForwardIterator extends Iterator<T>>(first: ForwardIterator, last: ForwardIterator, val: T, compare: (x: T, y: T) => boolean): boolean;
	/**
	 * <p> Test whether range is partitioned. </p>
	 *
	 * <p> Returns <code>true</code> if all the elements in the range [<i>first</i>, <i>last</i>) for which <i>pred</i>
	 * returns <code>true</code> precede those for which it returns <code>false</code>. </p>
	 *
	 * <p> If the range is {@link IContainer.empty empty}, the function returns <code>true</code>. </p>
	 *
	 * @param first {@link Iterator Input iterator} to the initial position of the sequence.
	 * @param last {@link Iterator Input iterator} to the final position of the sequence. The range used is
	 *			   [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and <i>last</i>,
	 *			   including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
	 * @param pred Unary function that accepts an element in the range as argument, and returns a value convertible to
	 *			   <code>bool</code>. The value returned indicates whether the element belongs to the first group (if
	 *			   <code>true</code>, the element is expected before all the elements for which it returns
	 *			   <code>false</code>). The function shall not modify its argument.
	 *
	 * @return <code>true</code> if all the elements in the range [<i>first</i>, <i>last</i>) for which <i>pred</i> returns
	 *		   <code>true</code> precede those for which it returns <code>false</code>. Otherwise it returns
	 *		   <code>false</code>. If the range is {@link IContainer.empty empty}, the function returns <code>true</code>.
	 */
	export function is_partitioned<T, InputIterator extends Iterator<T>>(first: InputIterator, last: InputIterator, pred: (x: T) => boolean): boolean;
	/**
	 * <p> Partition range in two. </p>
	 *
	 * <p> Rearranges the elements from the range [<i>first</i>, <i>last</i>), in such a way that all the elements for
	 * which <i>pred</i> returns <code>true</code> precede all those for which it returns <code>false</code>. The iterator
	 * returned points to the first element of the second group. </p>
	 *
	 * <p> The relative ordering within each group is not necessarily the same as before the call. See
	 * {@link stable_partition} for a function with a similar behavior but with stable ordering within each group. </p>
	 *
	 * @param first {@link Iterator Forward iterator} to the initial position of the sequence to partition.
	 * @param last {@link Iterator Forward iterator} to the final position of the sequence to partition. The range used is
	 *			   [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and <i>last</i>,
	 *			   including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
	 * @param pred Unary function that accepts an element in the range as argument, and returns a value convertible to
	 *			   <code>bool</code>. The value returned indicates whether the element belongs to the first group (if
	 *			   <code>true</code>, the element is expected before all the elements for which it returns
	 *			   <code>false</code>). The function shall not modify its argument.
	 *
	 * @return An iterator that points to the first element of the second group of elements (those for which <i>pred</i>
	 *		   returns <code>false</code>), or <i>last</i> if this group is {@link IContainer.empty empty}.
	 */
	export function partition<T, BidirectionalIterator extends Iterator<T>>(first: BidirectionalIterator, last: BidirectionalIterator, pred: (x: T) => boolean): BidirectionalIterator;
	/**
	 * <p> Partition range in two - stable ordering. </p>
	 *
	 * <p> Rearranges the elements in the range [<i>first</i>, <i>last</i>), in such a way that all the elements for which
	 * <i>pred</i> returns <code>true</code> precede all those for which it returns <code>false</code>, and, unlike
	 * function {@link partition}, the relative order of elements within each group is preserved. </p>
	 *
	 * <p> This is generally implemented using an internal temporary buffer. </p>
	 *
	 * @param first {@link Iterator Bidirectional iterator} to the initial position of the sequence to partition.
	 * @param last {@link Iterator Bidirectional iterator} to the final position of the sequence to partition. The range
	 *			   used is [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and
	 *			   <i>last</i>, including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
	 * @param pred Unary function that accepts an element in the range as argument, and returns a value convertible to
	 *			   <code>bool</code>. The value returned indicates whether the element belongs to the first group (if
	 *			   <code>true</code>, the element is expected before all the elements for which it returns
	 *			   <code>false</code>). The function shall not modify its argument.
	 *
	 * @return An iterator that points to the first element of the second group of elements (those for which <i>pred</i>
	 *		   returns <code>false</code>), or <i>last</i> if this group is {@link IContainer.empty empty}.
	 */
	export function stable_partition<T, BidirectionalIterator extends Iterator<T>>(first: BidirectionalIterator, last: BidirectionalIterator, pred: (x: T) => boolean): BidirectionalIterator;
	/**
	 * <p> Partition range into two. </p>
	 *
	 * <p> Copies the elements in the range [<i>first</i>, <i>last</i>) for which <i>pred</i> returns <code>true</code>
	 * into the range pointed by <i>result_true</i>, and those for which it does not into the range pointed by
	 * <i>result_false</i>. </p>
	 *
	 * @param first {@link Iterator Input iterator} to the initial position of the range to be copy-partitioned.
	 * @param last {@link Iterator Input iterator} to the final position of the range to be copy-partitioned. The range
	 *			   used is [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and
	 *			   <i>last</i>, including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
	 * @param result_true {@link Iterator Output iterator} to the initial position of the range where the elements for
	 *					  which <i>pred</i> returns <code>true</code> are stored.
	 * @param result_false {@link Iterator Output iterator} to the initial position of the range where the elements for
	 *					   which <i>pred</i> returns <code>false</code> are stored.
	 * @param pred Unary function that accepts an element pointed by <i>InputIterator</i> as argument, and returns a value
	 *			   convertible to <code>bool</code>. The value returned indicates on which result range the element is
	 *			   copied. The function shall not modify its argument.
	 *
	 * @return A {@link Pair} of iterators with the end of the generated sequences pointed by <i>result_true</i> and
	 *		   <i>result_false</i>, respectivelly. Its member {@link Pair.first first} points to the element that follows
	 *		   the last element copied to the sequence of elements for which <i>pred</i> returned <code>true</code>. Its
	 *		   member {@link Pair.second second} points to the element that follows the last element copied to the sequence
	 *		   of elements for which <i>pred</i> returned <code>false</code>.
	 */
	export function partition_copy<T, InputIterator extends Iterator<T>, OutputIterator1 extends ILinearIterator<T>, OutputIterator2 extends ILinearIterator<T>>(first: InputIterator, last: InputIterator, result_true: OutputIterator1, result_false: OutputIterator2, pred: (val: T) => T): Pair<OutputIterator1, OutputIterator2>;
	/**
	 * <p> Get partition point. </p>
	 *
	 * <p> Returns an iterator to the first element in the partitioned range [<i>first</i>, <i>last</i>) for which
	 * <i>pred</i> is not <code>true</code>, indicating its partition point. </p>
	 *
	 * <p> The elements in the range shall already {@link is_partitioned be partitioned}, as if {@link partition} had been
	 * called with the same arguments. </p>
	 *
	 * <p> The function optimizes the number of comparisons performed by comparing non-consecutive elements of the sorted
	 * range, which is specially efficient for {@link Iteartor random-access iterators}. </p>
	 *
	 * @param first {@link Iterator Forward iterator} to the initial position of the partitioned sequence.
	 * @param last {@link Iterator Forward iterator} to the final position of the partitioned sequence. The range checked
	 *		  is [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> an <i>last</i>,
	 *		  including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
	 * @param pred Unary function that accepts an element in the range as argument, and returns a value convertible to
	 *			   <code>bool</code>. The value returned indicates whether the element goes before the partition point (if
	 *			   <code>true</code>, it goes before; if <code>false</code> goes at or after it). The function shall not
	 *			   modify its argument.
	 *
	 * @return An iterator to the first element in the partitioned range [<i>first</i>, <i>last</i>) for which <i>pred</i>
	 *		   is not <code>true</code>, or <i>last</i> if it is not <code>true</code> for any element.
	 */
	export function partition_point<T, ForwardIterator extends Iterator<T>>(first: ForwardIterator, last: ForwardIterator, pred: (x: T) => boolean): ForwardIterator;
	/**
	 * <p> Merge sorted ranges. </p>
	 *
	 * <p> Combines the elements in the sorted ranges [<i>first1</i>, <i>last1</i>) and [<i>first2</i>, <i>last2</i>), into
	 * a new range beginning at <i>result</i> with all its elements sorted. </p>
	 *
	 * <p> The elements are compared using {@link less}. The elements in both ranges shall already be ordered according to
	 * this same criterion ({@link less}). The resulting range is also sorted according to this. </p>
	 *
	 * @param first1 {@link Iterator Input iterator} to the initial position of the first sorted sequence.
	 * @param last1 {@link Iterator Input iterator} to the final position of the first sorted sequence. The range used is
	 *				[<i>first1</i>, <i>last1</i>), which contains all the elements between <i>first1</i> and <i>last1</i>,
	 *				including the element pointed by <i>first1</i> but not the element pointed by <i>last1</i>.
	 * @param first2 {@link Iterator Input iterator} to the initial position of the second sorted sequence.
	 * @param last2 {@link Iterator Input iterator} to the final position of the second sorted sequence. The range used is
	 *				[<i>first2</i>, <i>last2</i>).
	 * @param result {@link Iterator Output iterator} to the initial position of the range where the resulting combined
	 *				 range is stored. Its size is equal to the sum of both ranges above.
	 *
	 * @return An iterator pointing to the past-the-end element in the resulting sequence.
	 */
	export function merge<T, InputIterator1 extends Iterator<T>, InputIterator2 extends Iterator<T>, OutputIterator extends ILinearIterator<T>>(first1: InputIterator1, last1: InputIterator1, first2: InputIterator2, last2: InputIterator2, result: OutputIterator): OutputIterator;
	/**
	 * <p> Merge sorted ranges. </p>
	 *
	 * <p> Combines the elements in the sorted ranges [<i>first1</i>, <i>last1</i>) and [<i>first2</i>, <i>last2</i>), into
	 * a new range beginning at <i>result</i> with all its elements sorted. </p>
	 *
	 * <p> The elements are compared using {@link less}. The elements in both ranges shall already be ordered according to
	 * this same criterion (<i>compare</i>). The resulting range is also sorted according to this. </p>
	 *
	 * @param first1 {@link Iterator Input iterator} to the initial position of the first sorted sequence.
	 * @param last1 {@link Iterator Input iterator} to the final position of the first sorted sequence. The range used is
	 *				[<i>first1</i>, <i>last1</i>), which contains all the elements between <i>first1</i> and <i>last1</i>,
	 *				including the element pointed by <i>first1</i> but not the element pointed by <i>last1</i>.
	 * @param first2 {@link Iterator Input iterator} to the initial position of the second sorted sequence.
	 * @param last2 {@link Iterator Input iterator} to the final position of the second sorted sequence. The range used is
	 *				[<i>first2</i>, <i>last2</i>).
	 * @param result {@link Iterator Output iterator} to the initial position of the range where the resulting combined
	 *				 range is stored. Its size is equal to the sum of both ranges above.
	 * @param compare Binary function that accepts two arguments of the types pointed by the iterators, and returns a value
	 *				  convertible to <code>bool</code>. The value returned indicates whether the first argument is
	 *				  considered to go before the second in the specific <i>strict weak ordering</i> it defines. The
	 *				  function shall not modify any of its arguments.
	 *
	 * @return An iterator pointing to the past-the-end element in the resulting sequence.
	 */
	export function merge<T, InputIterator1 extends Iterator<T>, InputIterator2 extends Iterator<T>, OutputIterator extends ILinearIterator<T>>(first1: InputIterator1, last1: InputIterator1, first2: InputIterator2, last2: InputIterator2, result: OutputIterator, compare: (x: T, y: T) => boolean): OutputIterator;
	/**
	 * <p> Merge consecutive sorted ranges. </p>
	 *
	 * <p> Merges two consecutive sorted ranges: [<i>first</i>, <i>middle</i>) and [<i>middle</i>, <i>last</i>), putting
	 * the result into the combined sorted range [<i>first</i>, <i>last</i>). </p>
	 *
	 * <p> The elements are compared using {@link less}. The elements in both ranges shall already be ordered according to
	 * this same criterion ({@link less}). The resulting range is also sorted according to this. </p>
	 *
	 * <p> The function preserves the relative order of elements with equivalent values, with the elements in the first
	 * range preceding those equivalent in the second. </p>
	 *
	 * @param first {@link Iterator Bidirectional iterator} to the initial position in the first sorted sequence to merge.
	 *				This is also the initial position where the resulting merged range is stored.
	 * @param middle {@link Iterator Bidirectional iterator} to the initial position of the second sorted sequence, which
	 *				 because both sequences must be consecutive, matches the <i>past-the-end</i> position of the first
	 *				 sequence.
	 * @param last {@link Iterator Bidirectional iterator} to the <i>past-the-end</i> position of the second sorted
	 *			   sequence. This is also the <i>past-the-end</i> position of the range where the resulting merged range is
	 *			   stored.
	 */
	export function inplace_merge<T, BidirectionalIterator extends Iterator<T>>(first: BidirectionalIterator, middle: BidirectionalIterator, last: BidirectionalIterator): void;
	/**
	 * <p> Merge consecutive sorted ranges. </p>
	 *
	 * <p> Merges two consecutive sorted ranges: [<i>first</i>, <i>middle</i>) and [<i>middle</i>, <i>last</i>), putting
	 * the result into the combined sorted range [<i>first</i>, <i>last</i>). </p>
	 *
	 * <p> The elements are compared using <i>compare</i>. The elements in both ranges shall already be ordered according
	 * to this same criterion (<i>compare</i>). The resulting range is also sorted according to this. </p>
	 *
	 * <p> The function preserves the relative order of elements with equivalent values, with the elements in the first
	 * range preceding those equivalent in the second. </p>
	 *
	 * @param first {@link Iterator Bidirectional iterator} to the initial position in the first sorted sequence to merge.
	 *				This is also the initial position where the resulting merged range is stored.
	 * @param middle {@link Iterator Bidirectional iterator} to the initial position of the second sorted sequence, which
	 *				 because both sequences must be consecutive, matches the <i>past-the-end</i> position of the first
	 *				 sequence.
	 * @param last {@link Iterator Bidirectional iterator} to the <i>past-the-end</i> position of the second sorted
	 *			   sequence. This is also the <i>past-the-end</i> position of the range where the resulting merged range is
	 *			   stored.
	 * @param compare Binary function that accepts two arguments of the types pointed by the iterators, and returns a value
	 *				  convertible to <code>bool</code>. The value returned indicates whether the first argument is
	 *				  considered to go before the second in the specific <i>strict weak ordering</i> it defines. The
	 *				  function shall not modify any of its arguments.
	 */
	export function inplace_merge<T, BidirectionalIterator extends Iterator<T>>(first: BidirectionalIterator, middle: BidirectionalIterator, last: BidirectionalIterator, compare: (x: T, y: T) => boolean): void;
	/**
	 * <p> Test whether sorted range includes another sorted range. </p>
	 *
	 * <p> Returns <code>true</code> if the sorted range [<i>first1</i>, <i>last1</i>) contains all the elements in the
	 * sorted range [<i>first2</i>, <i>last2</i>). </p>
	 *
	 * <p> The elements are compared using {@link less}. Two elements, <i>x</i> and <i>y</i> are considered equivalent
	 * <code>if (!less(x, y) && !less(y, x))</code>. </p>
	 *
	 * <p> The elements in the range shall already be ordered according to this same criterion ({@link less}). </p>
	 *
	 * @param first1 {@link Iterator Input iterator} to the initial position of the first sorted sequence.
	 * @param last1 {@link Iterator Input iterator} to the final position of the first sorted sequence (which is tested on
	 *				whether it contains the second sequence). The range used is [<i>first1</i>, <i>last1</i>), which
	 *				contains all the elements between <i>first1</i> and <i>last1</i>, including the element pointed by
	 *				<i>first1</i> but not the element pointed by <i>last1</i>.
	 * @param first2 {@link Iterator Input iterator} to the initial position of the second sorted sequence.
	 * @param last2 {@link Iterator Input iterator} to the final position of the second sorted sequence. (which is tested
	 *				on whether it is contained in the first sequence). The range used is [<i>first2</i>, <i>last2</i>).
	 *
	 * @return <code>true</code> if every element in the range [<i>first2</i>, <i>last2</i>) is contained in the range
	 *		   [<i>first1</i>, <i>last1</i>), <code>false</code> otherwise. If [<i>first2</i>, <i>last2</i>) is an empty
	 *		   range, the function returns <code>true</code>.
	 */
	export function includes<T, InputIterator1 extends Iterator<T>, InputIterator2 extends Iterator<T>>(first1: InputIterator1, last1: InputIterator1, first2: InputIterator2, last2: InputIterator2): boolean;
	/**
	 * <p> Test whether sorted range includes another sorted range. </p>
	 *
	 * <p> Returns <code>true</code> if the sorted range [<i>first1</i>, <i>last1</i>) contains all the elements in the
	 * sorted range [<i>first2</i>, <i>last2</i>). </p>
	 *
	 * <p> The elements are compared using <i>compare</i>. Two elements, <i>x</i> and <i>y</i> are considered equivalent
	 * <code>if (!compare(x, y) && !compare(y, x))</code>. </p>
	 *
	 * <p> The elements in the range shall already be ordered according to this same criterion (<i>compare</i>). </p>
	 *
	 * @param first1 {@link Iterator Input iterator} to the initial position of the first sorted sequence.
	 * @param last1 {@link Iterator Input iterator} to the final position of the first sorted sequence (which is tested on
	 *				whether it contains the second sequence). The range used is [<i>first1</i>, <i>last1</i>), which
	 *				contains all the elements between <i>first1</i> and <i>last1</i>, including the element pointed by
	 *				<i>first1</i> but not the element pointed by <i>last1</i>.
	 * @param first2 {@link Iterator Input iterator} to the initial position of the second sorted sequence.
	 * @param last2 {@link Iterator Input iterator} to the final position of the second sorted sequence. (which is tested
	 *				on whether it is contained in the first sequence). The range used is [<i>first2</i>, <i>last2</i>).
	 * @param compare Binary function that accepts two elements as arguments (one from each of the two sequences, in the
	 *				  same order), and returns a value convertible to <code>bool</code>. The value returned indicates
	 *				  whether the element passed as first argument is considered to go before the second in the specific
	 *				  <i>strict weak ordering</i> it defines. The function shall not modify any of its arguments.
	 *
	 * @return <code>true</code> if every element in the range [<i>first2</i>, <i>last2</i>) is contained in the range
	 *		   [<i>first1</i>, <i>last1</i>), <code>false</code> otherwise. If [<i>first2</i>, <i>last2</i>) is an empty
	 *		   range, the function returns <code>true</code>.
	 */
	export function includes<T, InputIterator1 extends Iterator<T>, InputIterator2 extends Iterator<T>>(first1: InputIterator1, last1: InputIterator1, first2: InputIterator2, last2: InputIterator2, compare: (x: T, y: T) => boolean): boolean;
	/**
	 * <p> Union of two sorted ranges. </p>
	 *
	 * <p> Constructs a sorted range beginning in the location pointed by <i>result</i> with the <i>set union</i> of the
	 * two sorted ranges [<i>first1</i>, <i>last1</i>) and [<i>first2</i>, <i>last2</i>). </p>
	 *
	 * <p> The <i>union</i> of two sets is formed by the elements that are present in either one of the sets, or in both.
	 * Elements from the second range that have an equivalent element in the first range are not copied to the resulting
	 * range. </p>
	 *
	 * <p> The elements are compared using {@link less}. Two elements, <i>x</i> and <i>y</i> are considered equivalent
	 * <code>if (!less(x, y) && !less(y, x))</code>. </p>
	 *
	 * <p> The elements in the ranges shall already be ordered according to this same criterion ({@link less}). The
	 * resulting range is also sorted according to this. </p>
	 *
	 * @param first1 {@link Iterator Input iterator} to the initial position of the first sorted sequence.
	 * @param last1 {@link Iterator Input iterator} to the final position of the first sorted sequence. The range used is
	 *				[<i>first1</i>, <i>last1</i>), which contains all the elements between <i>first1</i> and <i>last1</i>,
	 *				including the element pointed by <i>first1</i> but not the element pointed by <i>last1</i>.
	 * @param first2 {@link Iterator Input iterator} to the initial position of the second sorted sequence.
	 * @param last2 {@link Iterator Input iterator} to the final position of the second sorted sequence. The range used is
	 *				[<i>first2</i>, <i>last2</i>).
	 * @param result {@link Iterator Output iterator} to the initial position of the range where the resulting sequence is
	 *				 stored. The pointed type shall support being assigned the value of an element from the other ranges.
	 *
	 * @return An iterator to the end of the constructed range.
	 */
	export function set_union<T, InputIterator1 extends Iterator<T>, InputIterator2 extends Iterator<T>, OutputIterator extends ILinearIterator<T>>(first1: InputIterator1, last1: InputIterator1, first2: InputIterator2, last2: InputIterator2, result: OutputIterator): OutputIterator;
	/**
	 * <p> Union of two sorted ranges. </p>
	 *
	 * <p> Constructs a sorted range beginning in the location pointed by <i>result</i> with the <i>set union</i> of the
	 * two sorted ranges [<i>first1</i>, <i>last1</i>) and [<i>first2</i>, <i>last2</i>). </p>
	 *
	 * <p> The <i>union</i> of two sets is formed by the elements that are present in either one of the sets, or in both.
	 * Elements from the second range that have an equivalent element in the first range are not copied to the resulting
	 * range. </p>
	 *
	 * <p> The elements are compared using <i>compare</i>. Two elements, <i>x</i> and <i>y</i> are considered equivalent
	 * <code>if (!compare(x, y) && !compare(y, x))</code>. </p>
	 *
	 * <p> The elements in the ranges shall already be ordered according to this same criterion (<i>compare</i>). The
	 * resulting range is also sorted according to this. </p>
	 *
	 * @param first1 {@link Iterator Input iterator} to the initial position of the first sorted sequence.
	 * @param last1 {@link Iterator Input iterator} to the final position of the first sorted sequence. The range used is
	 *				[<i>first1</i>, <i>last1</i>), which contains all the elements between <i>first1</i> and <i>last1</i>,
	 *				including the element pointed by <i>first1</i> but not the element pointed by <i>last1</i>.
	 * @param first2 {@link Iterator Input iterator} to the initial position of the second sorted sequence.
	 * @param last2 {@link Iterator Input iterator} to the final position of the second sorted sequence. The range used is
	 *				[<i>first2</i>, <i>last2</i>).
	 * @param result {@link Iterator Output iterator} to the initial position of the range where the resulting sequence is
	 *				 stored. The pointed type shall support being assigned the value of an element from the other ranges.
	 * @param compare Binary function that accepts two arguments of the types pointed by the input iterators, and returns a
	 *				  value convertible to <code>bool</code>. The value returned indicates whether the first argument is
	 *				  considered to go before the second in the specific <i>strict weak ordering</i> it defines. The
	 *				  function shall not modify any of its arguments.
	 *
	 * @return An iterator to the end of the constructed range.
	 */
	export function set_union<T, InputIterator1 extends Iterator<T>, InputIterator2 extends Iterator<T>, OutputIterator extends ILinearIterator<T>>(first1: InputIterator1, last1: InputIterator1, first2: InputIterator2, last2: InputIterator2, result: OutputIterator, compare: (x: T, y: T) => boolean): OutputIterator;
	/**
	 * <p> Intersection of two sorted ranges. </p>
	 *
	 * <p> Constructs a sorted range beginning in the location pointed by <i>result</i> with the <i>set intersection</i> of
	 * the two sorted ranges [<i>first1</i>, <i>last1</i>) and [<i>first2</i>, <i>last2</i>). </p>
	 *
	 * <p> The <i>intersection</i> of two sets is formed only by the elements that are present in both sets. The elements
	 * copied by the function come always from the first range, in the same order. </p>
	 *
	 * <p> The elements are compared using {@link less}. Two elements, <i>x</i> and <i>y</i> are considered equivalent
	 * <code>if (!less(x, y) && !less(y, x))</code>. </p>
	 *
	 * <p> The elements in the ranges shall already be ordered according to this same criterion ({@link less}). The
	 * resulting range is also sorted according to this. </p>
	 *
	 * @param first1 {@link Iterator Input iterator} to the initial position of the first sorted sequence.
	 * @param last1 {@link Iterator Input iterator} to the final position of the first sorted sequence. The range used is
	 *				[<i>first1</i>, <i>last1</i>), which contains all the elements between <i>first1</i> and <i>last1</i>,
	 *				including the element pointed by <i>first1</i> but not the element pointed by <i>last1</i>.
	 * @param first2 {@link Iterator Input iterator} to the initial position of the second sorted sequence.
	 * @param last2 {@link Iterator Input iterator} to the final position of the second sorted sequence. The range used is
	 *				[<i>first2</i>, <i>last2</i>).
	 * @param result {@link Iterator Output iterator} to the initial position of the range where the resulting sequence is
	 *				 stored. The pointed type shall support being assigned the value of an element from the first range.
	 *
	 * @return An iterator to the end of the constructed range.
	 */
	export function set_intersection<T, InputIterator1 extends Iterator<T>, InputIterator2 extends Iterator<T>, OutputIterator extends ILinearIterator<T>>(first1: InputIterator1, last1: InputIterator1, first2: InputIterator2, last2: InputIterator2, result: OutputIterator): OutputIterator;
	/**
	 * <p> Intersection of two sorted ranges. </p>
	 *
	 * <p> Constructs a sorted range beginning in the location pointed by <i>result</i> with the <i>set intersection</i> of
	 * the two sorted ranges [<i>first1</i>, <i>last1</i>) and [<i>first2</i>, <i>last2</i>). </p>
	 *
	 * <p> The <i>intersection</i> of two sets is formed only by the elements that are present in both sets. The elements
	 * copied by the function come always from the first range, in the same order. </p>
	 *
	 * <p> The elements are compared using <i>compare</i>. Two elements, <i>x</i> and <i>y</i> are considered equivalent
	 * <code>if (!compare(x, y) && !compare(y, x))</code>. </p>
	 *
	 * <p> The elements in the ranges shall already be ordered according to this same criterion (<i>compare</i>). The
	 * resulting range is also sorted according to this. </p>
	 *
	 * @param first1 {@link Iterator Input iterator} to the initial position of the first sorted sequence.
	 * @param last1 {@link Iterator Input iterator} to the final position of the first sorted sequence. The range used is
	 *				[<i>first1</i>, <i>last1</i>), which contains all the elements between <i>first1</i> and <i>last1</i>,
	 *				including the element pointed by <i>first1</i> but not the element pointed by <i>last1</i>.
	 * @param first2 {@link Iterator Input iterator} to the initial position of the second sorted sequence.
	 * @param last2 {@link Iterator Input iterator} to the final position of the second sorted sequence. The range used is
	 *				[<i>first2</i>, <i>last2</i>).
	 * @param result {@link Iterator Output iterator} to the initial position of the range where the resulting sequence is
	 *				 stored. The pointed type shall support being assigned the value of an element from the first range.
	 * @param compare Binary function that accepts two arguments of the types pointed by the input iterators, and returns a
	 *				  value convertible to <code>bool</code>. The value returned indicates whether the first argument is
	 *				  considered to go before the second in the specific <i>strict weak ordering</i> it defines. The
	 *				  function shall not modify any of its arguments.
	 *
	 * @return An iterator to the end of the constructed range.
	 */
	export function set_intersection<T, InputIterator1 extends Iterator<T>, InputIterator2 extends Iterator<T>, OutputIterator extends ILinearIterator<T>>(first1: InputIterator1, last1: InputIterator1, first2: InputIterator2, last2: InputIterator2, result: OutputIterator, compare: (x: T, y: T) => boolean): OutputIterator;
	/**
	 * <p> Difference of two sorted ranges. </p>
	 *
	 * <p> Constructs a sorted range beginning in the location pointed by <i>result</i> with the <i>set difference</i> of
	 * the sorted range [<i>first1</i>, <i>last1</i>) with respect to the sorted range [<i>first2</i>, <i>last2</i>). </p>
	 *
	 * <p> The <i>difference</i> of two sets is formed by the elements that are present in the first set, but not in the
	 * second one. The elements copied by the function come always from the first range, in the same order. </p>
	 *
	 * <p> For containers supporting multiple occurrences of a value, the <i>difference</i> includes as many occurrences of
	 * a given value as in the first range, minus the amount of matching elements in the second, preserving order. </p>
	 *
	 * <p> Notice that this is a directional operation - for a symmetrical equivalent, see {@link set_symmetric_difference}.
	 * </p>
	 *
	 * <p> The elements are compared using {@link less}. Two elements, <i>x</i> and <i>y</i> are considered equivalent
	 * <code>if (!less(x, y) && !less(y, x))</code>. </p>
	 *
	 * <p> The elements in the ranges shall already be ordered according to this same criterion ({@link less}). The
	 * resulting range is also sorted according to this. </p>
	 *
	 * @param first1 {@link Iterator Input iterator} to the initial position of the first sorted sequence.
	 * @param last1 {@link Iterator Input iterator} to the final position of the first sorted sequence. The range used is
	 *				[<i>first1</i>, <i>last1</i>), which contains all the elements between <i>first1</i> and <i>last1</i>,
	 *				including the element pointed by <i>first1</i> but not the element pointed by <i>last1</i>.
	 * @param first2 {@link Iterator Input iterator} to the initial position of the second sorted sequence.
	 * @param last2 {@link Iterator Input iterator} to the final position of the second sorted sequence. The range used is
	 *				[<i>first2</i>, <i>last2</i>).
	 * @param result {@link Iterator Output iterator} to the initial position of the range where the resulting sequence is
	 *				 stored. The pointed type shall support being assigned the value of an element from the first range.
	 *
	 * @return An iterator to the end of the constructed range.
	 */
	export function set_difference<T, InputIterator1 extends Iterator<T>, InputIterator2 extends Iterator<T>, OutputIterator extends ILinearIterator<T>>(first1: InputIterator1, last1: InputIterator1, first2: InputIterator2, last2: InputIterator2, result: OutputIterator): OutputIterator;
	/**
	 * <p> Difference of two sorted ranges. </p>
	 *
	 * <p> Constructs a sorted range beginning in the location pointed by <i>result</i> with the <i>set difference</i> of
	 * the sorted range [<i>first1</i>, <i>last1</i>) with respect to the sorted range [<i>first2</i>, <i>last2</i>). </p>
	 *
	 * <p> The <i>difference</i> of two sets is formed by the elements that are present in the first set, but not in the
	 * second one. The elements copied by the function come always from the first range, in the same order. </p>
	 *
	 * <p> For containers supporting multiple occurrences of a value, the <i>difference</i> includes as many occurrences of
	 * a given value as in the first range, minus the amount of matching elements in the second, preserving order. </p>
	 *
	 * <p> Notice that this is a directional operation - for a symmetrical equivalent, see {@link set_symmetric_difference}.
	 * </p>
	 *
	 * <p> The elements are compared using <i>compare</i>. Two elements, <i>x</i> and <i>y</i> are considered equivalent
	 * <code>if (!compare(x, y) && !compare(y, x))</code>. </p>
	 *
	 * <p> The elements in the ranges shall already be ordered according to this same criterion (<i>compare</i>). The
	 * resulting range is also sorted according to this. </p>
	 *
	 * @param first1 {@link Iterator Input iterator} to the initial position of the first sorted sequence.
	 * @param last1 {@link Iterator Input iterator} to the final position of the first sorted sequence. The range used is
	 *				[<i>first1</i>, <i>last1</i>), which contains all the elements between <i>first1</i> and <i>last1</i>,
	 *				including the element pointed by <i>first1</i> but not the element pointed by <i>last1</i>.
	 * @param first2 {@link Iterator Input iterator} to the initial position of the second sorted sequence.
	 * @param last2 {@link Iterator Input iterator} to the final position of the second sorted sequence. The range used is
	 *				[<i>first2</i>, <i>last2</i>).
	 * @param result {@link Iterator Output iterator} to the initial position of the range where the resulting sequence is
	 *				 stored. The pointed type shall support being assigned the value of an element from the first range.
	 * @param compare Binary function that accepts two arguments of the types pointed by the input iterators, and returns a
	 *				  value convertible to <code>bool</code>. The value returned indicates whether the first argument is
	 *				  considered to go before the second in the specific <i>strict weak ordering</i> it defines. The
	 *				  function shall not modify any of its arguments.
	 *
	 * @return An iterator to the end of the constructed range.
	 */
	export function set_difference<T, InputIterator1 extends Iterator<T>, InputIterator2 extends Iterator<T>, OutputIterator extends ILinearIterator<T>>(first1: InputIterator1, last1: InputIterator1, first2: InputIterator2, last2: InputIterator2, result: OutputIterator, compare: (x: T, y: T) => boolean): OutputIterator;
	/**
	 * <p> Symmetric difference of two sorted ranges. </p>
	 *
	 * <p> Constructs a sorted range beginning in the location pointed by0 <i>result</i> with the set
	 * <i>symmetric difference</i> of the two sorted ranges [<i>first1</i>, <i>last1</i>) and [<i>first2</i>, <i>last2</i>).
	 * </p>
	 *
	 * <p> The <i>symmetric difference</i> of two sets is formed by the elements that are present in one of the sets, but
	 * not in the other. Among the equivalent elements in each range, those discarded are those that appear before in the
	 * existent order before the call. The existing order is also preserved for the copied elements. </p>
	 *
	 * <p> The elements are compared using {@link less}. Two elements, <i>x</i> and <i>y</i> are considered equivalent
	 * <code>if (!less(x, y) && !less(y, x))</code>. </p>
	 *
	 * <p> The elements in the ranges shall already be ordered according to this same criterion ({@link less}). The
	 * resulting range is also sorted according to this. </p>
	 *
	 * @param first1 {@link Iterator Input iterator} to the initial position of the first sorted sequence.
	 * @param last1 {@link Iterator Input iterator} to the final position of the first sorted sequence. The range used is
	 *				[<i>first1</i>, <i>last1</i>), which contains all the elements between <i>first1</i> and <i>last1</i>,
	 *				including the element pointed by <i>first1</i> but not the element pointed by <i>last1</i>.
	 * @param first2 {@link Iterator Input iterator} to the initial position of the second sorted sequence.
	 * @param last2 {@link Iterator Input iterator} to the final position of the second sorted sequence. The range used is
	 *				[<i>first2</i>, <i>last2</i>).
	 * @param result {@link Iterator Output iterator} to the initial position of the range where the resulting sequence is
	 *				 stored. The pointed type shall support being assigned the value of an element from the other ranges.
	 * @param compare Binary function that accepts two arguments of the types pointed by the input iterators, and returns a
	 *				  value convertible to <code>bool</code>. The value returned indicates whether the first argument is
	 *				  considered to go before the second in the specific <i>strict weak ordering</i> it defines. The
	 *				  function shall not modify any of its arguments.
	 *
	 * @return An iterator to the end of the constructed range.
	 */
	export function set_symmetric_difference<T, InputIterator1 extends Iterator<T>, InputIterator2 extends Iterator<T>, OutputIterator extends ILinearIterator<T>>(first1: InputIterator1, last1: InputIterator1, first2: InputIterator2, last2: InputIterator2, result: OutputIterator): OutputIterator;
	/**
	 * <p> Symmetric difference of two sorted ranges. </p>
	 *
	 * <p> Constructs a sorted range beginning in the location pointed by0 <i>result</i> with the set
	 * <i>symmetric difference</i> of the two sorted ranges [<i>first1</i>, <i>last1</i>) and [<i>first2</i>, <i>last2</i>).
	 * </p>
	 *
	 * <p> The <i>symmetric difference</i> of two sets is formed by the elements that are present in one of the sets, but
	 * not in the other. Among the equivalent elements in each range, those discarded are those that appear before in the
	 * existent order before the call. The existing order is also preserved for the copied elements. </p>
	 *
	 * <p> The elements are compared using <i>compare</i>. Two elements, <i>x</i> and <i>y</i> are considered equivalent
	 * <code>if (!compare(x, y) && !compare(y, x))</code>. </p>
	 *
	 * <p> The elements in the ranges shall already be ordered according to this same criterion (<i>compare</i>). The
	 * resulting range is also sorted according to this. </p>
	 *
	 * @param first1 {@link Iterator Input iterator} to the initial position of the first sorted sequence.
	 * @param last1 {@link Iterator Input iterator} to the final position of the first sorted sequence. The range used is
	 *				[<i>first1</i>, <i>last1</i>), which contains all the elements between <i>first1</i> and <i>last1</i>,
	 *				including the element pointed by <i>first1</i> but not the element pointed by <i>last1</i>.
	 * @param first2 {@link Iterator Input iterator} to the initial position of the second sorted sequence.
	 * @param last2 {@link Iterator Input iterator} to the final position of the second sorted sequence. The range used is
	 *				[<i>first2</i>, <i>last2</i>).
	 * @param result {@link Iterator Output iterator} to the initial position of the range where the resulting sequence is
	 *				 stored. The pointed type shall support being assigned the value of an element from the other ranges.
	 * @param compare Binary function that accepts two arguments of the types pointed by the input iterators, and returns a
	 *				  value convertible to <code>bool</code>. The value returned indicates whether the first argument is
	 *				  considered to go before the second in the specific <i>strict weak ordering</i> it defines. The
	 *				  function shall not modify any of its arguments.
	 *
	 * @return An iterator to the end of the constructed range.
	 */
	export function set_symmetric_difference<T, InputIterator1 extends Iterator<T>, InputIterator2 extends Iterator<T>, OutputIterator extends ILinearIterator<T>>(first1: InputIterator1, last1: InputIterator1, first2: InputIterator2, last2: InputIterator2, result: OutputIterator, compare: (x: T, y: T) => boolean): OutputIterator;
	/**
	 * <p> Return the smallest. </p>
	 *
	 * <p> Returns the smallest of all the elements in the <i>args</i>. </p>
	 *
	 * @param args Values to compare.
	 *
	 * @return The lesser of the values passed as arguments.
	 */
	export function min<T>(...args: T[]): T;
	/**
	 * <p> Return the largest. </p>
	 *
	 * <p> Returns the largest of all the elements in the <i>args</i>. </p>
	 *
	 * @param args Values to compare.
	 *
	 * @return The largest of the values passed as arguments.
	 */
	export function max<T>(...args: T[]): T;
	/**
	 * <p> Return smallest and largest elements. </p>
	 *
	 * <p> Returns a {@link Pair} with the smallest of all the elements in the <i>args</i> as first element (the first of
	 * them, if there are more than one), and the largest as second (the last of them, if there are more than one). </p>
	 *
	 * @param args Values to compare.
	 *
	 * @return The lesser and greatest of the values passed as arguments.
	 */
	export function minmax<T>(...args: T[]): Pair<T, T>;
	/**
	 * <p> Return smallest element in range. </p>
	 *
	 * <p> Returns an iterator pointing to the element with the smallest value in the range  [<i>first</i>, <i>last</i>).
	 * </p>
	 *
	 * <p> The comparisons are performed using either {@link less}; An element is the smallest if no other element
	 * compares less than it. If more than one element fulfills this condition, the iterator returned points to the first
	 * of such elements. </p>
	 *
	 * @param first {@link Iteartor Input iterator} to the initial final position of the sequence to compare.
	 * @param last {@link Iteartor Input iterator} to the final final position of the sequence to compare. The range used
	 *			   is [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and <i>last</i>,
	 *			   including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
	 *
	 * @return An iterator to smallest value in the range, or <i>last</i> if the range is empty.
	 */
	export function min_element<T, ForwardIterator extends Iterator<T>>(first: ForwardIterator, last: ForwardIterator): ForwardIterator;
	/**
	 * <p> Return smallest element in range. </p>
	 *
	 * <p> Returns an iterator pointing to the element with the smallest value in the range  [<i>first</i>, <i>last</i>).
	 * </p>
	 *
	 * <p> The comparisons are performed using either <i>compare</i>; An element is the smallest if no other element
	 * compares less than it. If more than one element fulfills this condition, the iterator returned points to the first
	 * of such elements. </p>
	 *
	 * @param first {@link Iteartor Input iterator} to the initial final position of the sequence to compare.
	 * @param last {@link Iteartor Input iterator} to the final final position of the sequence to compare. The range used
	 *			   is [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and <i>last</i>,
	 *			   including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
	 * @param compare Binary function that accepts two elements in the range as arguments, and returns a value convertible
	 *				  to <code>bool</code>. The value returned indicates whether the element passed as first argument is
	 *				  considered less than the second. The function shall not modify any of its arguments.
	 *
	 * @return An iterator to smallest value in the range, or <i>last</i> if the range is empty.
	 */
	export function min_element<T, ForwardIterator extends Iterator<T>>(first: ForwardIterator, last: ForwardIterator, compare: (x: T, y: T) => boolean): ForwardIterator;
	/**
	 * <p> Return largest element in range. </p>
	 *
	 * <p> Returns an iterator pointing to the element with the largest value in the range  [<i>first</i>, <i>last</i>).
	 * </p>
	 *
	 * <p> The comparisons are performed using either {@link greater}; An element is the largest if no other element
	 * compares less than it. If more than one element fulfills this condition, the iterator returned points to the first
	 * of such elements. </p>
	 *
	 * @param first {@link Iteartor Input iterator} to the initial final position of the sequence to compare.
	 * @param last {@link Iteartor Input iterator} to the final final position of the sequence to compare. The range used
	 *			   is [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and <i>last</i>,
	 *			   including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
	 *
	 * @return An iterator to largest value in the range, or <i>last</i> if the range is empty.
	 */
	export function max_element<T, ForwardIterator extends Iterator<T>>(first: ForwardIterator, last: ForwardIterator): ForwardIterator;
	/**
	 * <p> Return largest element in range. </p>
	 *
	 * <p> Returns an iterator pointing to the element with the largest value in the range  [<i>first</i>, <i>last</i>).
	 * </p>
	 *
	 * <p> The comparisons are performed using either <i>compare</i>; An element is the largest if no other element
	 * compares less than it. If more than one element fulfills this condition, the iterator returned points to the first
	 * of such elements. </p>
	 *
	 * @param first {@link Iteartor Input iterator} to the initial final position of the sequence to compare.
	 * @param last {@link Iteartor Input iterator} to the final final position of the sequence to compare. The range used
	 *			   is [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and <i>last</i>,
	 *			   including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
	 * @param compare Binary function that accepts two elements in the range as arguments, and returns a value convertible
	 *				  to <code>bool</code>. The value returned indicates whether the element passed as first argument is
	 *				  considered less than the second. The function shall not modify any of its arguments.
	 *
	 * @return An iterator to largest value in the range, or <i>last</i> if the range is empty.
	 */
	export function max_element<T, ForwardIterator extends Iterator<T>>(first: ForwardIterator, last: ForwardIterator, compare: (x: T, y: T) => boolean): ForwardIterator;
	/**
	 * <p> Return smallest and largest elements in range. </p>
	 *
	 * <p> Returns a {@link Pair} with an iterator pointing to the element with the smallest value in the range
	 * [<i>first</i>, <i>last</i>) as first element, and the largest as second. </p>
	 *
	 * <p> The comparisons are performed using either {@link less} and {@link greater}. </p>
	 *
	 * <p> If more than one equivalent element has the smallest value, the first iterator points to the first of such
	 * elements. </p>
	 *
	 * <p> If more than one equivalent element has the largest value, the second iterator points to the last of such
	 * elements. </p>
	 *
	 * @param first {@link Iteartor Input iterator} to the initial final position of the sequence to compare.
	 * @param last {@link Iteartor Input iterator} to the final final position of the sequence to compare. The range used
	 *			   is [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and <i>last</i>,
	 *			   including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
	 * @param compare Binary function that accepts two elements in the range as arguments, and returns a value convertible
	 *				  to <code>bool</code>. The value returned indicates whether the element passed as first argument is
	 *				  considered less than the second. The function shall not modify any of its arguments.
	 *
	 * @return A {@link Pair} with an iterator pointing to the element with the smallest value in the range
	 *		   [<i>first</i>, <i>last</i>) as first element, and the largest as second.
	 */
	export function minmax_element<T, ForwardIterator extends Iterator<T>>(first: ForwardIterator, last: ForwardIterator): Pair<ForwardIterator, ForwardIterator>;
	/**
	 * <p> Return smallest and largest elements in range. </p>
	 *
	 * <p> Returns a {@link Pair} with an iterator pointing to the element with the smallest value in the range
	 * [<i>first</i>, <i>last</i>) as first element, and the largest as second. </p>
	 *
	 * <p> The comparisons are performed using either <i>compare</i>. </p>
	 *
	 * <p> If more than one equivalent element has the smallest value, the first iterator points to the first of such
	 * elements. </p>
	 *
	 * <p> If more than one equivalent element has the largest value, the second iterator points to the last of such
	 * elements. </p>
	 *
	 * @param first {@link Iteartor Input iterator} to the initial final position of the sequence to compare.
	 * @param last {@link Iteartor Input iterator} to the final final position of the sequence to compare. The range used
	 *			   is [<i>first</i>, <i>last</i>), which contains all the elements between <i>first</i> and <i>last</i>,
	 *			   including the element pointed by <i>first</i> but not the element pointed by <i>last</i>.
	 * @param compare Binary function that accepts two elements in the range as arguments, and returns a value convertible
	 *				  to <code>bool</code>. The value returned indicates whether the element passed as first argument is
	 *				  considered less than the second. The function shall not modify any of its arguments.
	 *
	 * @return A {@link Pair} with an iterator pointing to the element with the smallest value in the range
	 *		   [<i>first</i>, <i>last</i>) as first element, and the largest as second.
	 */
	export function minmax_element<T, ForwardIterator extends Iterator<T>>(first: ForwardIterator, last: ForwardIterator, compare: (x: T, y: T) => boolean): Pair<ForwardIterator, ForwardIterator>;
	/**
	 * <p> Test whether range is permutation of another. </p>
	 *
	 * <p> Compares the elements in the range [<i>first1</i>, <i>last1</i>) with those in the range beginning at
	 * <i>first2</i>, and returns <code>true</code> if all of the elements in both ranges match, even in a different
	 * order. </p>
	 *
	 * @param first1 An {@link Iterator} to the initial position of the first sequence.
	 * @param last1 An {@link Iterator} to the final position in a sequence. The range used is
	 *				[<i>first1</i>, <i>last1</i>), including the element pointed by <i>first1</i>, but not the element
	 *				pointed by <i>last1</i>.
	 * @param first2 An {@link Iterator} to the initial position of the second sequence. The comparison includes up to
	 *				 as many elements of this sequence as those in the range [<i>first1</i>, <i>last1</i>).
	 *
	 * @return <code>true</code> if all the elements in the range [<i>first1</i>, <i>last1</i>) compare equal to those
	 *		   of the range starting at <i>first2</i> in any order, and <code>false</code> otherwise.
	 */
	export function is_permutation<T, Iterator1 extends Iterator<T>, Iterator2 extends Iterator<T>>(first1: Iterator1, last1: Iterator1, first2: Iterator2): boolean;
	/**
	 * <p> Test whether range is permutation of another. </p>
	 *
	 * <p> Compares the elements in the range [<i>first1</i>, <i>last1</i>) with those in the range beginning at
	 * <i>first2</i>, and returns <code>true</code> if all of the elements in both ranges match, even in a different
	 * order. </p>
	 *
	 * @param first1 An {@link Iterator} to the initial position of the first sequence.
	 * @param last1 An {@link Iterator} to the final position in a sequence. The range used is
	 *				[<i>first1</i>, <i>last1</i>), including the element pointed by <i>first1</i>, but not the element
	 *				pointed by <i>last1</i>.
	 * @param first2 An {@link Iterator} to the initial position of the second sequence. The comparison includes up to
	 *				 as many elements of this sequence as those in the range [<i>first1</i>, <i>last1</i>).
	 * @param pred Binary function that accepts two elements as argument (one of each of the two sequences, in the same
	 *			   order), and returns a value convertible to <code>bool</code>. The value returned indicates whether
	 *			   the elements are considered to match in the context of this function.
	 *
	 * @return <code>true</code> if all the elements in the range [<i>first1</i>, <i>last1</i>) compare equal to those
	 *		   of the range starting at <i>first2</i> in any order, and <code>false</code> otherwise.
	 */
	export function is_permutation<T, Iterator1 extends Iterator<T>, Iterator2 extends Iterator<T>>(first1: Iterator1, last1: Iterator1, first2: Iterator2, pred: (x: T, y: T) => boolean): boolean;
	/**
	 * Transform range to previous permutation.
	 *
	 * Rearranges the elements in the range [*first*, *last*) into the previous *lexicographically-ordered* permutation.
	 *
	 * A *permutation* is each one of the N! possible arrangements the elements can take (where *N* is the number of
	 * elements in the range). Different permutations can be ordered according to how they compare
	 * {@link lexicographicaly lexicographical_compare} to each other; The first such-sorted possible permutation (the one
	 * that would compare *lexicographically smaller* to all other permutations) is the one which has all its elements
	 * sorted in ascending order, and the largest has all its elements sorted in descending order.
	 *
	 * The comparisons of individual elements are performed using the {@link less less()} function.
	 *
	 * If the function can determine the previous permutation, it rearranges the elements as such and returns true. If
	 * that was not possible (because it is already at the lowest possible permutation), it rearranges the elements
	 * according to the last permutation (sorted in descending order) and returns false.
	 *
	 * @param first Bidirectional iterators to the initial positions of the sequence
	 * @param last Bidirectional iterators to the final positions of the sequence. The range used is [*first*, *last*),
	 *			   which contains all the elements between *first* and *last*, including the element pointed by *first*
	 *			   but not the element pointed by *last*.
	 *
	 * @return true if the function could rearrange the object as a lexicographicaly smaller permutation. Otherwise, the
	 *		   function returns false to indicate that the arrangement is not less than the previous, but the largest
	 *		   possible (sorted in descending order).
	 */
	export function prev_permutation<T, BidirectionalIterator extends IArrayIterator<T>>(first: BidirectionalIterator, last: BidirectionalIterator): boolean;
	/**
	 * Transform range to previous permutation.
	 *
	 * Rearranges the elements in the range [*first*, *last*) into the previous *lexicographically-ordered* permutation.
	 *
	 * A *permutation* is each one of the N! possible arrangements the elements can take (where *N* is the number of
	 * elements in the range). Different permutations can be ordered according to how they compare
	 * {@link lexicographicaly lexicographical_compare} to each other; The first such-sorted possible permutation (the one
	 * that would compare *lexicographically smaller* to all other permutations) is the one which has all its elements
	 * sorted in ascending order, and the largest has all its elements sorted in descending order.
	 *
	 * The comparisons of individual elements are performed using the *compare*.
	 *
	 * If the function can determine the previous permutation, it rearranges the elements as such and returns true. If
	 * that was not possible (because it is already at the lowest possible permutation), it rearranges the elements
	 * according to the last permutation (sorted in descending order) and returns false.
	 *
	 * @param first Bidirectional iterators to the initial positions of the sequence
	 * @param last Bidirectional iterators to the final positions of the sequence. The range used is [*first*, *last*),
	 *			   which contains all the elements between *first* and *last*, including the element pointed by *first*
	 *			   but not the element pointed by *last*.
	 * @param compare Binary function that accepts two arguments of the type pointed by BidirectionalIterator, and returns
	 *				  a value convertible to bool. The value returned indicates whether the first argument is considered
	 *				  to go before the second in the specific strict weak ordering it defines.
	 *
	 * @return true if the function could rearrange the object as a lexicographicaly smaller permutation. Otherwise, the
	 *		   function returns false to indicate that the arrangement is not less than the previous, but the largest
	 *		   possible (sorted in descending order).
	 */
	export function prev_permutation<T, BidirectionalIterator extends IArrayIterator<T>>(first: BidirectionalIterator, last: BidirectionalIterator, compare: (x: T, y: T) => boolean): boolean;
	/**
	 * Transform range to next permutation.
	 *
	 * Rearranges the elements in the range [*first*, *last*) into the next *lexicographically greater* permutation.
	 *
	 * A permutation is each one of the *N!* possible arrangements the elements can take (where *N* is the number of
	 * elements in the range). Different permutations can be ordered according to how they compare
	 * {@link lexicographicaly lexicographical_compare} to each other; The first such-sorted possible permutation (the one
	 * that would compare *lexicographically smaller* to all other permutations) is the one which has all its elements
	 * sorted in ascending order, and the largest has all its elements sorted in descending order.
	 *
	 * The comparisons of individual elements are performed using the {@link less} function.
	 *
	 * If the function can determine the next higher permutation, it rearranges the elements as such and returns true. If
	 * that was not possible (because it is already at the largest possible permutation), it rearranges the elements
	 * according to the first permutation (sorted in ascending order) and returns false.
	 *
	 * @param first Bidirectional iterators to the initial positions of the sequence
	 * @param last Bidirectional iterators to the final positions of the sequence. The range used is [*first*, *last*),
	 *			   which contains all the elements between *first* and *last*, including the element pointed by *first*
	 *			   but not the element pointed by *last*.
	 *
	 * @return true if the function could rearrange the object as a lexicographicaly greater permutation. Otherwise, the
	 *		   function returns false to indicate that the arrangement is not greater than the previous, but the lowest
	 *		   possible (sorted in ascending order).
	 */
	export function next_permutation<T, BidirectionalIterator extends IArrayIterator<T>>(first: BidirectionalIterator, last: BidirectionalIterator): boolean;
	/**
	 * Transform range to next permutation.
	 *
	 * Rearranges the elements in the range [*first*, *last*) into the next *lexicographically greater* permutation.
	 *
	 * A permutation is each one of the *N!* possible arrangements the elements can take (where *N* is the number of
	 * elements in the range). Different permutations can be ordered according to how they compare
	 * {@link lexicographicaly lexicographical_compare} to each other; The first such-sorted possible permutation (the one
	 * that would compare *lexicographically smaller* to all other permutations) is the one which has all its elements
	 * sorted in ascending order, and the largest has all its elements sorted in descending order.
	 *
	 * The comparisons of individual elements are performed using the *compare*.
	 *
	 * If the function can determine the next higher permutation, it rearranges the elements as such and returns true. If
	 * that was not possible (because it is already at the largest possible permutation), it rearranges the elements
	 * according to the first permutation (sorted in ascending order) and returns false.
	 *
	 * @param first Bidirectional iterators to the initial positions of the sequence
	 * @param last Bidirectional iterators to the final positions of the sequence. The range used is [*first*, *last*),
	 *			   which contains all the elements between *first* and *last*, including the element pointed by *first*
	 *			   but not the element pointed by *last*.
	 * @param compare Binary function that accepts two arguments of the type pointed by BidirectionalIterator, and returns
	 *				  a value convertible to bool. The value returned indicates whether the first argument is considered
	 *				  to go before the second in the specific strict weak ordering it defines.
	 *
	 * @return true if the function could rearrange the object as a lexicographicaly greater permutation. Otherwise, the
	 *		   function returns false to indicate that the arrangement is not greater than the previous, but the lowest
	 *		   possible (sorted in ascending order).
	 */
	export function next_permutation<T, BidirectionalIterator extends IArrayIterator<T>>(first: BidirectionalIterator, last: BidirectionalIterator, compare: (x: T, y: T) => boolean): boolean;

}
declare module 'tstl/base/ListContainer' {
	import { Container, IDequeContainer } from 'tstl/base/Container';
	import { Iterator } from 'tstl/iterator';
	/**
	 * An abstract list.
	 *
	 * <p> {@link ListContainer}s are sequence containers that allow constant time insert and erase operations anywhere
	 * within the sequence, and iteration in both directions. </p>
	 *
	 * <p> List containers are implemented as doubly-linked lists; Doubly linked lists can store each of the elements they
	 * contain in different and unrelated storage locations. The ordering is kept internally by the association to each
	 * element of a link to the element preceding it and a link to the element following it. </p>
	 *
	 * <p> Compared to other base standard sequence containers (array, vector and deque), lists perform generally better
	 * in inserting, extracting and moving elements in any position within the container for which an iterator has already
	 * been obtained, and therefore also in algorithms that make intensive use of these, like sorting algorithms. </p>
	 *
	 * <p> The main drawback of lists and forward_lists compared to these other sequence containers is that they lack
	 * direct access to the elements by their position; For example, to access the sixth element in a list, one has to
	 * iterate from a known position (like the beginning or the end) to that position, which takes linear time in the
	 * distance between these. They also consume some extra memory to keep the linking information associated to each
	 * element (which may be an important factor for large lists of small-sized elements). </p>
	 *
	 * <h3> Container properties </h3>
	 * <dl>
	 * 	<dt> Sequence </dt>
	 * 	<dd> Elements in sequence containers are ordered in a strict linear sequence. Individual elements are accessed by
	 *		 their position in this sequence. </dd>
	 *
	 * 	<dt> Doubly-linked list </dt>
	 *	<dd> Each element keeps information on how to locate the next and the previous elements, allowing constant time
	 *		 insert and erase operations before or after a specific element (even of entire ranges), but no direct random
	 *		 access. </dd>
	 * </dl>
	 *
	 * @param <T> Type of the elements.
	 *
	 * @reference http://www.cplusplus.com/reference/list/list/
	 *
	 * @author Jeongho Nam <http://samchon.org>
	 */
	export abstract class ListContainer<T, BidirectionalIterator extends ListIteratorBase<T>> extends Container<T> implements IDequeContainer<T> {
	    /**
	     * @hidden
	     */
	    private begin_;
	    /**
	     * @hidden
	     */
	    private end_;
	    /**
	     * @hidden
	     */
	    private size_;
	    /**
	     * Default Constructor.
	     */
	    protected constructor();
	    /**
	     * @hidden
	     */
	    protected abstract _Create_iterator(prev: BidirectionalIterator, next: BidirectionalIterator, val: T): BidirectionalIterator;
	    /**
	     * @hidden
	     */
	    protected _Set_begin(it: BidirectionalIterator): void;
	    /**
	     * @inheritdoc
	     */
	    assign<U extends T, InputIterator extends Iterator<U>>(first: InputIterator, last: InputIterator): void;
	    /**
	     * @inheritdoc
	     */
	    clear(): void;
	    /**
	     * @inheritdoc
	     */
	    begin(): BidirectionalIterator;
	    /**
	     * @inheritdoc
	     */
	    end(): BidirectionalIterator;
	    /**
	     * @inheritdoc
	     */
	    size(): number;
	    /**
	     * @inheritdoc
	     */
	    front(): T;
	    /**
	     * @inheritdoc
	     */
	    back(): T;
	    /**
	     * @inheritdoc
	     */
	    push_front(val: T): void;
	    /**
	     * @inheritdoc
	     */
	    push_back(val: T): void;
	    /**
	     * @inheritdoc
	     */
	    pop_front(): void;
	    /**
	     * @inheritdoc
	     */
	    pop_back(): void;
	    /**
	     * @inheritdoc
	     */
	    push(...items: T[]): number;
	    /**
	     * <p> Insert an element. </p>
	     *
	     * <p> The container is extended by inserting a new element before the element at the specified
	     * <i>position</i>. This effectively increases the {@link List.size List size} by the amount of elements
	     * inserted. </p>
	     *
	     * <p> Unlike other standard sequence containers, {@link List} is specifically designed to be efficient
	     * inserting and removing elements in any position, even in the middle of the sequence. </p>
	     *
	     * @param position Position in the container where the new element is inserted.
	     *				   {@link iterator}> is a member type, defined as a
	     *				   {@link ListIterator bidirectional iterator} type that points to elements.
	     * @param val Value to be inserted as an element.
	     *
	     * @return An iterator that points to the newly inserted element; <i>val</i>.
	     */
	    insert(position: BidirectionalIterator, val: T): BidirectionalIterator;
	    /**
	     * <p> Insert elements by repeated filling. </p>
	     *
	     * <p> The container is extended by inserting a new element before the element at the specified
	     * <i>position</i>. This effectively increases the {@link List.size List size} by the amount of elements
	     * inserted. </p>
	     *
	     * <p> Unlike other standard sequence containers, {@link List} is specifically designed to be efficient
	     * inserting and removing elements in any position, even in the middle of the sequence. </p>
	     *
	     * @param position Position in the container where the new elements are inserted. The {@link iterator} is a
	     *				   member type, defined as a {@link ListIterator bidirectional iterator} type that points to
	     *				   elements.
	     * @param size Number of elements to insert.
	     * @param val Value to be inserted as an element.
	     *
	     * @return An iterator that points to the first of the newly inserted elements.
	     */
	    insert(position: BidirectionalIterator, size: number, val: T): BidirectionalIterator;
	    /**
	     * <p> Insert elements by range iterators. </p>
	     *
	     * <p> The container is extended by inserting a new element before the element at the specified
	     * <i>position</i>. This effectively increases the {@link List.size List size} by the amount of elements
	     * inserted. </p>
	     *
	     * <p> Unlike other standard sequence containers, {@link List} is specifically designed to be efficient
	     * inserting and removing elements in any position, even in the middle of the sequence. </p>
	     *
	     * @param position Position in the container where the new elements are inserted. The {@link iterator} is a
	     *				   member type, defined as a {@link ListIterator bidirectional iterator} type that points to
	     *				   elements.
	     * @param begin An iterator specifying range of the begining element.
	     * @param end An iterator specifying range of the ending element.
	     *
	     * @return An iterator that points to the first of the newly inserted elements.
	     */
	    insert<U extends T, InputIterator extends Iterator<U>>(position: BidirectionalIterator, begin: InputIterator, end: InputIterator): BidirectionalIterator;
	    /**
	     * @hidden
	     */
	    private _Insert_by_val(position, val);
	    /**
	     * @hidden
	     */
	    protected _Insert_by_repeating_val(position: BidirectionalIterator, size: number, val: T): BidirectionalIterator;
	    /**
	     * @hidden
	     */
	    protected _Insert_by_range<U extends T, InputIterator extends Iterator<U>>(position: BidirectionalIterator, begin: InputIterator, end: InputIterator): BidirectionalIterator;
	    /**
	     * <p> Erase an element. </p>
	     *
	     * <p> Removes from the {@link List} either a single element; <i>position</i>. </p>
	     *
	     * <p> This effectively reduces the container size by the number of element removed. </p>
	     *
	     * <p> Unlike other standard sequence containers, {@link List} objects are specifically designed to be
	     * efficient inserting and removing elements in any position, even in the middle of the sequence. </p>
	     *
	     * @param position Iterator pointing to a single element to be removed from the {@link List}.
	     *
	     * @return An iterator pointing to the element that followed the last element erased by the function call.
	     *		   This is the {@link end end()} if the operation erased the last element in the sequence.
	     */
	    erase(position: BidirectionalIterator): BidirectionalIterator;
	    /**
	     * <p> Erase elements. </p>
	     *
	     * <p> Removes from the {@link List} container a range of elements. </p>
	     *
	     * <p> This effectively reduces the container {@link size} by the number of elements removed. </p>
	     *
	     * <p> Unlike other standard sequence containers, {@link List} objects are specifically designed to be
	     * efficient inserting and removing elements in any position, even in the middle of the sequence. </p>
	     *
	     * @param begin An iterator specifying a range of beginning to erase.
	     * @param end An iterator specifying a range of end to erase.
	     *
	     * @return An iterator pointing to the element that followed the last element erased by the function call.
	     *		   This is the {@link end end()} if the operation erased the last element in the sequence.
	     */
	    erase(begin: BidirectionalIterator, end: BidirectionalIterator): BidirectionalIterator;
	    /**
	     * @hidden
	     */
	    protected _Erase_by_range(first: BidirectionalIterator, last: BidirectionalIterator): BidirectionalIterator;
	    /**
	     * <p> Swap content. </p>
	     *
	     * <p> Exchanges the content of the container by the content of <i>obj</i>, which is another
	     * {@link List container} object with same type of elements. Sizes and container type may differ. </p>
	     *
	     * <p> After the call to this member function, the elements in this container are those which were in <i>obj</i>
	     * before the call, and the elements of <i>obj</i> are those which were in this. All iterators, references and
	     * pointers remain valid for the swapped objects. </p>
	     *
	     * <p> Notice that a non-member function exists with the same name, {@link std.swap swap}, overloading that
	     * algorithm with an optimization that behaves like this member function. </p>
	     *
	     * @param obj Another {@link List container} of the same type of elements (i.e., instantiated
	     *			  with the same template parameter, <b>T</b>) whose content is swapped with that of this
	     *			  {@link container List}.
	     */
	    swap(obj: ListContainer<T, BidirectionalIterator>): void;
	    /**
	     * @inheritdoc
	     */
	    swap(obj: Container<T>): void;
	}
	/**
	 * An iterator, node of a List-based container.
	 *
	 * <a href="http://samchon.github.io/tstl/images/design/class_diagram/linear_containers.png" target="_blank">
	 *	<img src="http://samchon.github.io/tstl/images/design/class_diagram/linear_containers.png" style="max-width: 100%" />
	 * </a>
	 *
	 * @author Jeongho Nam <http://samchon.org>
	 */
	export abstract class ListIteratorBase<T> extends Iterator<T> {
	    /**
	     * @hidden
	     */
	    private prev_;
	    /**
	     * @hidden
	     */
	    private next_;
	    /**
	     * @hidden
	     */
	    protected value_: T;
	    /**
	     * Initializer Constructor.
	     *
	     * @param source The source {@link Container} to reference.
	     * @param prev A refenrece of previous node ({@link ListIterator iterator}).
	     * @param next A refenrece of next node ({@link ListIterator iterator}).
	     * @param value Value to be stored in the node (iterator).
	     */
	    protected constructor(source: Container<T>, prev: ListIteratorBase<T>, next: ListIteratorBase<T>, value: T);
	    /**
	     * @inheritdoc
	     */
	    prev(): ListIteratorBase<T>;
	    /**
	     * @inheritdoc
	     */
	    next(): ListIteratorBase<T>;
	    /**
	     * @inheritdoc
	     */
	    advance(step: number): ListIteratorBase<T>;
	    /**
	     * @inheritdoc
	     */
	    readonly value: T;
	    /**
	     * @inheritdoc
	     */
	    equals(obj: ListIteratorBase<T>): boolean;
	    /**
	     * @inheritdoc
	     */
	    swap(obj: ListIteratorBase<T>): void;
	}

}
declare module 'tstl/deque' {
	import { Container, IArrayContainer, IDequeContainer } from 'tstl/base/Container';
	import { Iterator, ReverseIterator, IArrayIterator } from 'tstl/iterator';
	/**
	 * <p> Double ended queue. </p>
	 *
	 * <p> {@link Deque} (usually pronounced like "<i>deck</i>") is an irregular acronym of
	 * <b>d</b>ouble-<b>e</b>nded <b>q</b>ueue. Double-ended queues are sequence containers with dynamic sizes that can be
	 * expanded or contracted on both ends (either its front or its back). </p>
	 *
	 * <p> Specific libraries may implement deques in different ways, generally as some form of dynamic array. But in any
	 * case, they allow for the individual elements to be accessed directly through random access iterators, with storage
	 * handled automatically by expanding and contracting the container as needed. </p>
	 *
	 * <p> Therefore, they provide a functionality similar to vectors, but with efficient insertion and deletion of
	 * elements also at the beginning of the sequence, and not only at its end. But, unlike {@link Vector Vectors},
	 * {@link Deque Deques} are not guaranteed to store all its elements in contiguous storage locations: accessing
	 * elements in a <u>deque</u> by offsetting a pointer to another element causes undefined behavior. </p>
	 *
	 * <p> Both {@link Vector}s and {@link Deque}s provide a very similar interface and can be used for similar purposes,
	 * but internally both work in quite different ways: While {@link Vector}s use a single array that needs to be
	 * occasionally reallocated for growth, the elements of a {@link Deque} can be scattered in different chunks of
	 * storage, with the container keeping the necessary information internally to provide direct access to any of its
	 * elements in constant time and with a uniform sequential interface (through iterators). Therefore,
	 * {@link Deque Deques} are a little more complex internally than {@link Vector}s, but this allows them to grow more
	 * efficiently under certain circumstances, especially with very long sequences, where reallocations become more
	 * expensive. </p>
	 *
	 * <p> For operations that involve frequent insertion or removals of elements at positions other than the beginning or
	 * the end, {@link Deque Deques} perform worse and have less consistent iterators and references than
	 * {@link List Lists}. </p>
	 *
	 * <p> <a href="http://samchon.github.io/tstl/images/design/class_diagram/linear_containers.png" target="_blank">
	 * <img src="http://samchon.github.io/tstl/images/design/class_diagram/linear_containers.png" style="max-width: 100%" /> </a>
	 * </p>
	 *
	 * <h3> Container properties </h3>
	 * <dl>
	 *	<dt> Sequence </dt>
	 *	<dd> Elements in sequence containers are ordered in a strict linear sequence. Individual elements
	 *		 are accessed by their position in this sequence. </dd>
	 *
	 *	<dt> Dynamic array </dt>
	 *	<dd> Generally implemented as a dynamic array, it allows direct access to any element in the
	 *		 sequence and provides relatively fast addition/removal of elements at the beginning or the end
	 *		 of the sequence. </dd>
	 * </dl>
	 *
	 * @param <T> Type of the elements.
	 *
	 * @reference http://www.cplusplus.com/reference/deque/deque/
	 * @author Jeongho Nam <http://samchon.org>
	 */
	export class Deque<T> extends Container<T> implements IArrayContainer<T>, IDequeContainer<T> {
	    /**
	     * @hidden
	     */
	    private static readonly ROW;
	    /**
	     * @hidden
	     */
	    private static readonly MIN_CAPACITY;
	    /**
	     * @hidden
	     */
	    private matrix_;
	    /**
	     * @hidden
	     */
	    private size_;
	    /**
	     * @hidden
	     */
	    private capacity_;
	    /**
	     * @hidden
	     */
	    private _Get_col_size();
	    /**
	     * @hidden
	     */
	    private begin_;
	    /**
	     * @hidden
	     */
	    private end_;
	    /**
	     * @hidden
	     */
	    private rend_;
	    /**
	     * <p> Default Constructor. </p>
	     *
	     * <p> Constructs an empty container, with no elements. </p>
	     */
	    constructor();
	    /**
	     * <p> Initializer list Constructor. </p>
	     *
	     * <p> Constructs a container with a copy of each of the elements in <i>array</i>, in the same order. </p>
	     *
	     * @param array An array containing elements to be copied and contained.
	     */
	    constructor(items: Array<T>);
	    /**
	     * <p> Fill Constructor. </p>
	     *
	     * <p> Constructs a container with <i>n</i> elements. Each element is a copy of <i>val</i> (if provided). </p>
	     *
	     * @param n Initial container size (i.e., the number of elements in the container at construction).
	     * @param val Value to fill the container with. Each of the <i>n</i> elements in the container is
	     *			  initialized to a copy of this value.
	     */
	    constructor(size: number, val: T);
	    /**
	     * <p> Copy Constructor. </p>
	     *
	     * <p> Constructs a container with a copy of each of the elements in <i>container</i>, in the same order. </p>
	     *
	     * @param container Another container object of the same type (with the same class template
	     *					arguments <i>T</i>), whose contents are either copied or acquired.
	     */
	    constructor(container: Deque<T>);
	    /**
	     * <p> Range Constructor. </p>
	     *
	     * <p> Constructs a container with as many elements as the range (<i>begin</i>, <i>end<i>), with each
	     * element emplace-constructed from its corresponding element in that range, in the same order. </p>
	     *
	     * @param begin Input interator of the initial position in a sequence.
	     * @param end Input interator of the final position in a sequence.
	     */
	    constructor(begin: Iterator<T>, end: Iterator<T>);
	    /**
	     * @inheritdoc
	     */
	    assign<U extends T, InputIterator extends Iterator<U>>(begin: InputIterator, end: InputIterator): void;
	    /**
	     * @inheritdoc
	     */
	    assign(n: number, val: T): void;
	    /**
	     * <p> Request a change in capacity. </p>
	     *
	     * <p> Requests that the {@link Deque container} {@link capacity} be at least enough to contain
	     * <i>n</i> elements. </p>
	     *
	     * <p> If <i>n</i> is greater than the current {@link Deque container} {@link capacity}, the
	     * function causes the {@link Deque container} to reallocate its storage increasing its
	     * {@link capacity} to <i>n</i> (or greater). </p>
	     *
	     * <p> In all other cases, the function call does not cause a reallocation and the
	     * {@link Deque container} {@link capacity} is not affected. </p>
	     *
	     * <p> This function has no effect on the {@link Deque container} {@link size} and cannot alter
	     * its elements. </p>
	     *
	     * @param n Minimum {@link capacity} for the {@link Deque container}.
	     *			Note that the resulting {@link capacity} may be equal or greater than <i>n</i>.
	     */
	    reserve(capacity: number): void;
	    /**
	     * @inheritdoc
	     */
	    clear(): void;
	    /**
	     * @inheritdoc
	     */
	    begin(): DequeIterator<T>;
	    /**
	     * @inheritdoc
	     */
	    end(): DequeIterator<T>;
	    /**
	     * @inheritdoc
	     */
	    rbegin(): DequeReverseIterator<T>;
	    /**
	     * @inheritdoc
	     */
	    rend(): DequeReverseIterator<T>;
	    /**
	     * @inheritdoc
	     */
	    size(): number;
	    /**
	     * @inheritdoc
	     */
	    empty(): boolean;
	    /**
	     * <p> Return size of allocated storage capacity. </p>
	     *
	     * <p> Returns the size of the storage space currently allocated for the {@link Deque container},
	     * expressed in terms of elements. </p>
	     *
	     * <p> This {@link capacity} is not necessarily equal to the {@link Deque container} {@link size}.
	     * It can be equal or greater, with the extra space allowing to accommodate for growth without the
	     * need to reallocate on each insertion. </p>
	     *
	     * <p> Notice that this {@link capacity} does not suppose a limit on the {@link size} of the
	     * {@link Deque container}. When this {@link capacity} is exhausted and more is needed, it is
	     * automatically expanded by the {@link Deque container} (reallocating it storage space).
	     * The theoretical limit on the {@link size} of a {@link Deque container} is given by member
	     * {@link max_size}. </p>
	     *
	     * <p> The {@link capacity} of a {@link Deque container} can be explicitly altered by calling member
	     * {@link Deque.reserve}. </p>
	     *
	     * @return The size of the currently allocated storage capacity in the {@link Deque container},
	     *		   measured in terms of the number elements it can hold.
	     */
	    capacity(): number;
	    /**
	     * @inheritdoc
	     */
	    at(index: number): T;
	    /**
	     * @inheritdoc
	     */
	    set(index: number, val: T): void;
	    /**
	     * @inheritdoc
	     */
	    front(): T;
	    /**
	     * @inheritdoc
	     */
	    back(): T;
	    /**
	     * @hidden
	     */
	    private _Fetch_index(index);
	    /**
	     * @inheritdoc
	     */
	    push(...items: T[]): number;
	    /**
	     * @inheritdoc
	     */
	    push_front(val: T): void;
	    /**
	     * @inheritdoc
	     */
	    push_back(val: T): void;
	    /**
	     * @inheritdoc
	     */
	    pop_front(): void;
	    /**
	     * @inheritdoc
	     */
	    pop_back(): void;
	    /**
	     * @inheritdoc
	     */
	    insert(position: DequeIterator<T>, val: T): DequeIterator<T>;
	    /**
	     * @inheritdoc
	     */
	    insert(position: DequeIterator<T>, n: number, val: T): DequeIterator<T>;
	    /**
	     * @inheritdoc
	     */
	    insert<U extends T, InputIterator extends Iterator<U>>(position: DequeIterator<T>, begin: InputIterator, end: InputIterator): DequeIterator<T>;
	    /**
	     * @inheritdoc
	     */
	    insert(position: DequeReverseIterator<T>, val: T): DequeReverseIterator<T>;
	    /**
	     * @inheritdoc
	     */
	    insert(position: DequeReverseIterator<T>, n: number, val: T): DequeReverseIterator<T>;
	    /**
	     * @inheritdoc
	     */
	    insert<U extends T, InputIterator extends Iterator<U>>(position: DequeReverseIterator<T>, begin: InputIterator, end: InputIterator): DequeReverseIterator<T>;
	    /**
	     * @hidden
	     */
	    private _Insert_by_val(position, val);
	    /**
	     * @hidden
	     */
	    protected _Insert_by_repeating_val(position: DequeIterator<T>, n: number, val: T): DequeIterator<T>;
	    /**
	     * @hidden
	     */
	    protected _Insert_by_range<U extends T, InputIterator extends Iterator<U>>(position: DequeIterator<T>, begin: InputIterator, end: InputIterator): DequeIterator<T>;
	    /**
	     * @hidden
	     */
	    private _Insert_by_items(position, items);
	    /**
	     * @inheritdoc
	     */
	    erase(position: DequeIterator<T>): DequeIterator<T>;
	    /**
	     * @inheritdoc
	     */
	    erase(first: DequeIterator<T>, last: DequeIterator<T>): DequeIterator<T>;
	    /**
	     * @inheritdoc
	     */
	    erase(position: DequeReverseIterator<T>): DequeReverseIterator<T>;
	    /**
	     * @inheritdoc
	     */
	    erase(first: DequeReverseIterator<T>, last: DequeReverseIterator<T>): DequeReverseIterator<T>;
	    /**
	     * @hidden
	     */
	    protected _Erase_by_range(first: DequeIterator<T>, last: DequeIterator<T>): DequeIterator<T>;
	    /**
	     * <p> Swap content. </p>
	     *
	     * <p> Exchanges the content of the container by the content of <i>obj</i>, which is another
	     * {@link Deque container} object with same type of elements. Sizes and container type may differ. </p>
	     *
	     * <p> After the call to this member function, the elements in this container are those which were in <i>obj</i>
	     * before the call, and the elements of <i>obj</i> are those which were in this. All iterators, references and
	     * pointers remain valid for the swapped objects. </p>
	     *
	     * <p> Notice that a non-member function exists with the same name, {@link std.swap swap}, overloading that
	     * algorithm with an optimization that behaves like this member function. </p>
	     *
	     * @param obj Another {@link Deque container} of the same type of elements (i.e., instantiated
	     *			  with the same template parameter, <b>T</b>) whose content is swapped with that of this
	     *			  {@link container Deque}.
	     */
	    swap(obj: Deque<T>): void;
	    /**
	     * @inheritdoc
	     */
	    swap(obj: Container<T>): void;
	}
	/**
	 * <p> An iterator of {@link Deque}. </p>
	 *
	 * <p> <a href="http://samchon.github.io/tstl/images/design/class_diagram/linear_containers.png" target="_blank">
	 * <img src="http://samchon.github.io/tstl/images/design/class_diagram/linear_containers.png" style="max-width: 100%" /> </a>
	 * </p>
	 *
	 * @author Jeongho Nam <http://samchon.org>
	 */
	export class DequeIterator<T> extends Iterator<T> implements IArrayIterator<T> {
	    /**
	     * Sequence number of iterator in the source {@link Deque}.
	     */
	    private index_;
	    /**
	     * <p> Construct from the source {@link Deque container}. </p>
	     *
	     * <h4> Note </h4>
	     * <p> Do not create the iterator directly, by yourself. </p>
	     * <p> Use {@link Deque.begin begin()}, {@link Deque.end end()} in {@link Deque container} instead. </p>
	     *
	     * @param source The source {@link Deque container} to reference.
	     * @param index Sequence number of the element in the source {@link Deque}.
	     */
	    constructor(source: Deque<T>, index: number);
	    /**
	     * @inheritdoc
	     */
	    /**
	     * Set value of the iterator is pointing to.
	     *
	     * @param val Value to set.
	     */
	    value: T;
	    /**
	     * @inheritdoc
	     */
	    readonly index: number;
	    /**
	     * @inheritdoc
	     */
	    prev(): DequeIterator<T>;
	    /**
	     * @inheritdoc
	     */
	    next(): DequeIterator<T>;
	    /**
	     * @inheritdoc
	     */
	    advance(n: number): DequeIterator<T>;
	    /**
	     * @inheritdoc
	     */
	    equals(obj: DequeIterator<T>): boolean;
	    /**
	     * @inheritdoc
	     */
	    swap(obj: DequeIterator<T>): void;
	}
	/**
	 * <p> A reverse-iterator of Deque. </p>
	 *
	 * <p> <a href="http://samchon.github.io/tstl/images/design/class_diagram/linear_containers.png" target="_blank">
	 * <img src="http://samchon.github.io/tstl/images/design/class_diagram/linear_containers.png" style="max-width: 100%" /> </a>
	 * </p>
	 *
	 * @param <T> Type of the elements.
	 *
	 * @author Jeongho Nam <http://samchon.org>
	 */
	export class DequeReverseIterator<T> extends ReverseIterator<T, DequeIterator<T>, DequeReverseIterator<T>> implements IArrayIterator<T> {
	    /**
	     * Construct from base iterator.
	     *
	     * @param base A reference of the base iterator, which iterates in the opposite direction.
	     */
	    constructor(base: DequeIterator<T>);
	    /**
	     * @hidden
	     */
	    protected _Create_neighbor(base: DequeIterator<T>): DequeReverseIterator<T>;
	    /**
	     * @inheritdoc
	     */
	    /**
	     * Set value of the iterator is pointing to.
	     *
	     * @param val Value to set.
	     */
	    value: T;
	    /**
	     * Get index.
	     */
	    readonly index: number;
	}

}
declare module 'tstl/list' {
	import { ListContainer, ListIteratorBase } from 'tstl/base/ListContainer';
	import { Container } from 'tstl/base/Container';
	import { Iterator, ReverseIterator, ILinearIterator } from 'tstl/iterator';
	/**
	 * <p> Doubly linked list. </p>
	 *
	 * <p> {@link List}s are sequence containers that allow constant time insert and erase operations anywhere within the
	 * sequence, and iteration in both directions. </p>
	 *
	 * <p> List containers are implemented as doubly-linked lists; Doubly linked lists can store each of the elements they
	 * contain in different and unrelated storage locations. The ordering is kept internally by the association to each
	 * element of a link to the element preceding it and a link to the element following it. </p>
	 *
	 * <p> Compared to other base standard sequence containers (array, vector and deque), lists perform generally better
	 * in inserting, extracting and moving elements in any position within the container for which an iterator has already
	 * been obtained, and therefore also in algorithms that make intensive use of these, like sorting algorithms. </p>
	 *
	 * <p> The main drawback of lists and forward_lists compared to these other sequence containers is that they lack
	 * direct access to the elements by their position; For example, to access the sixth element in a list, one has to
	 * iterate from a known position (like the beginning or the end) to that position, which takes linear time in the
	 * distance between these. They also consume some extra memory to keep the linking information associated to each
	 * element (which may be an important factor for large lists of small-sized elements). </p>
	 *
	 * <p> <a href="http://samchon.github.io/tstl/images/design/class_diagram/linear_containers.png" target="_blank">
	 * <img src="http://samchon.github.io/tstl/images/design/class_diagram/linear_containers.png" style="max-width: 100%" /></a>
	 * </p>
	 *
	 * <h3> Container properties </h3>
	 * <dl>
	 * 	<dt> Sequence </dt>
	 * 	<dd> Elements in sequence containers are ordered in a strict linear sequence. Individual elements are accessed by
	 *		 their position in this sequence. </dd>
	 *
	 * 	<dt> Doubly-linked list </dt>
	 *	<dd> Each element keeps information on how to locate the next and the previous elements, allowing constant time
	 *		 insert and erase operations before or after a specific element (even of entire ranges), but no direct random
	 *		 access. </dd>
	 * </dl>
	 *
	 * @param <T> Type of the elements.
	 *
	 * @reference http://www.cplusplus.com/reference/list/list/
	 * @author Jeongho Nam <http://samchon.org>
	 */
	export class List<T> extends ListContainer<T, ListIterator<T>> {
	    private rend_;
	    /**
	     * <p> Default Constructor. </p>
	     *
	     * <p> Constructs an empty container, with no elements. </p>
	     */
	    constructor();
	    /**
	     * <p> Initializer list Constructor. </p>
	     *
	     * <p> Constructs a container with a copy of each of the elements in <i>array</i>, in the same order. </p>
	     *
	     * @param array An array containing elements to be copied and contained.
	     */
	    constructor(items: Array<T>);
	    /**
	     * <p> Fill Constructor. </p>
	     *
	     * <p> Constructs a container with <i>n</i> elements. Each element is a copy of <i>val</i> (if provided). </p>
	     *
	     * @param n Initial container size (i.e., the number of elements in the container at construction).
	     * @param val Value to fill the container with. Each of the <i>n</i> elements in the container is
	     *			  initialized to a copy of this value.
	     */
	    constructor(size: number, val: T);
	    /**
	     * <p> Copy Constructor. </p>
	     *
	     * <p> Constructs a container with a copy of each of the elements in <i>container</i>, in the same order. </p>
	     *
	     * @param container Another container object of the same type (with the same class template
	     *					arguments <i>T</i>), whose contents are either copied or acquired.
	     */
	    constructor(container: List<T>);
	    /**
	     * <p> Range Constructor. </p>
	     *
	     * <p> Constructs a container with as many elements as the range (<i>begin</i>, <i>end<i>), with each
	     * element emplace-constructed from its corresponding element in that range, in the same order. </p>
	     *
	     * @param begin Input interator of the initial position in a sequence.
	     * @param end Input interator of the final position in a sequence.
	     */
	    constructor(begin: Iterator<T>, end: Iterator<T>);
	    /**
	     * @hidden
	     */
	    protected _Create_iterator(prev: ListIterator<T>, next: ListIterator<T>, val: T): ListIterator<T>;
	    /**
	     * @hidden
	     */
	    protected _Set_begin(it: ListIterator<T>): void;
	    /**
	     * @inheritdoc
	     */
	    assign(n: number, val: T): void;
	    /**
	     * @inheritdoc
	     */
	    assign<U extends T, InputIterator extends Iterator<U>>(begin: InputIterator, end: InputIterator): void;
	    /**
	     * @inheritdoc
	     */
	    rbegin(): ListReverseIterator<T>;
	    /**
	     * @inheritdoc
	     */
	    rend(): ListReverseIterator<T>;
	    /**
	     * @inheritdoc
	     */
	    front(): T;
	    /**
	     * @inheritdoc
	     */
	    back(): T;
	    /**
	     * <p> Insert an element. </p>
	     *
	     * <p> The container is extended by inserting a new element before the element at the specified
	     * <i>position</i>. This effectively increases the {@link List.size List size} by the amount of elements
	     * inserted. </p>
	     *
	     * <p> Unlike other standard sequence containers, {@link List} is specifically designed to be efficient
	     * inserting and removing elements in any position, even in the middle of the sequence. </p>
	     *
	     * @param position Position in the container where the new element is inserted.
	     *				   {@link iterator}> is a member type, defined as a
	     *				   {@link ListIterator bidirectional iterator} type that points to elements.
	     * @param val Value to be inserted as an element.
	     *
	     * @return An iterator that points to the newly inserted element; <i>val</i>.
	     */
	    insert(position: ListIterator<T>, val: T): ListIterator<T>;
	    /**
	     * <p> Insert elements by repeated filling. </p>
	     *
	     * <p> The container is extended by inserting a new element before the element at the specified
	     * <i>position</i>. This effectively increases the {@link List.size List size} by the amount of elements
	     * inserted. </p>
	     *
	     * <p> Unlike other standard sequence containers, {@link List} is specifically designed to be efficient
	     * inserting and removing elements in any position, even in the middle of the sequence. </p>
	     *
	     * @param position Position in the container where the new elements are inserted. The {@link iterator} is a
	     *				   member type, defined as a {@link ListIterator bidirectional iterator} type that points to
	     *				   elements.
	     * @param size Number of elements to insert.
	     * @param val Value to be inserted as an element.
	     *
	     * @return An iterator that points to the first of the newly inserted elements.
	     */
	    insert(position: ListIterator<T>, size: number, val: T): ListIterator<T>;
	    /**
	     * <p> Insert elements by range iterators. </p>
	     *
	     * <p> The container is extended by inserting a new element before the element at the specified
	     * <i>position</i>. This effectively increases the {@link List.size List size} by the amount of elements
	     * inserted. </p>
	     *
	     * <p> Unlike other standard sequence containers, {@link List} is specifically designed to be efficient
	     * inserting and removing elements in any position, even in the middle of the sequence. </p>
	     *
	     * @param position Position in the container where the new elements are inserted. The {@link iterator} is a
	     *				   member type, defined as a {@link ListIterator bidirectional iterator} type that points to
	     *				   elements.
	     * @param begin An iterator specifying range of the begining element.
	     * @param end An iterator specifying range of the ending element.
	     *
	     * @return An iterator that points to the first of the newly inserted elements.
	     */
	    insert<U extends T, InputIterator extends Iterator<U>>(position: ListIterator<T>, begin: InputIterator, end: InputIterator): ListIterator<T>;
	    /**
	     * <p> Insert an element. </p>
	     *
	     * <p> The container is extended by inserting a new element before the element at the specified
	     * <i>position</i>. This effectively increases the {@link List.size List size} by the amount of elements
	     * inserted. </p>
	     *
	     * <p> Unlike other standard sequence containers, {@link List} is specifically designed to be efficient
	     * inserting and removing elements in any position, even in the middle of the sequence. </p>
	     *
	     * @param position Position in the container where the new element is inserted.
	     *				   {@link iterator}> is a member type, defined as a
	     *				   {@link ListReverseIterator bidirectional iterator} type that points to elements.
	     * @param val Value to be inserted as an element.
	     *
	     * @return An iterator that points to the newly inserted element; <i>val</i>.
	     */
	    insert(position: ListReverseIterator<T>, val: T): ListReverseIterator<T>;
	    /**
	     * <p> Insert elements by repeated filling. </p>
	     *
	     * <p> The container is extended by inserting a new element before the element at the specified
	     * <i>position</i>. This effectively increases the {@link List.size List size} by the amount of elements
	     * inserted. </p>
	     *
	     * <p> Unlike other standard sequence containers, {@link List} is specifically designed to be efficient
	     * inserting and removing elements in any position, even in the middle of the sequence. </p>
	     *
	     * @param position Position in the container where the new elements are inserted. The {@link iterator} is a
	     *				   member type, defined as a {@link ListReverseIterator bidirectional iterator} type that points to
	     *				   elements.
	     * @param size Number of elements to insert.
	     * @param val Value to be inserted as an element.
	     *
	     * @return An iterator that points to the first of the newly inserted elements.
	     */
	    insert(position: ListReverseIterator<T>, size: number, val: T): ListReverseIterator<T>;
	    /**
	     * <p> Insert elements by range iterators. </p>
	     *
	     * <p> The container is extended by inserting a new element before the element at the specified
	     * <i>position</i>. This effectively increases the {@link List.size List size} by the amount of elements
	     * inserted. </p>
	     *
	     * <p> Unlike other standard sequence containers, {@link List} is specifically designed to be efficient
	     * inserting and removing elements in any position, even in the middle of the sequence. </p>
	     *
	     * @param position Position in the container where the new elements are inserted. The {@link iterator} is a
	     *				   member type, defined as a {@link ListReverseIterator bidirectional iterator} type that points to
	     *				   elements.
	     * @param begin An iterator specifying range of the begining element.
	     * @param end An iterator specifying range of the ending element.
	     *
	     * @return An iterator that points to the first of the newly inserted elements.
	     */
	    insert<U extends T, InputIterator extends Iterator<U>>(position: ListReverseIterator<T>, begin: InputIterator, end: InputIterator): ListReverseIterator<T>;
	    /**
	     * <p> Erase an element. </p>
	     *
	     * <p> Removes from the {@link List} either a single element; <i>position</i>. </p>
	     *
	     * <p> This effectively reduces the container size by the number of element removed. </p>
	     *
	     * <p> Unlike other standard sequence containers, {@link List} objects are specifically designed to be
	     * efficient inserting and removing elements in any position, even in the middle of the sequence. </p>
	     *
	     * @param position Iterator pointing to a single element to be removed from the {@link List}.
	     *
	     * @return An iterator pointing to the element that followed the last element erased by the function call.
	     *		   This is the {@link end end()} if the operation erased the last element in the sequence.
	     */
	    erase(position: ListIterator<T>): ListIterator<T>;
	    /**
	     * <p> Erase elements. </p>
	     *
	     * <p> Removes from the {@link List} container a range of elements. </p>
	     *
	     * <p> This effectively reduces the container {@link size} by the number of elements removed. </p>
	     *
	     * <p> Unlike other standard sequence containers, {@link List} objects are specifically designed to be
	     * efficient inserting and removing elements in any position, even in the middle of the sequence. </p>
	     *
	     * @param begin An iterator specifying a range of beginning to erase.
	     * @param end An iterator specifying a range of end to erase.
	     *
	     * @return An iterator pointing to the element that followed the last element erased by the function call.
	     *		   This is the {@link end end()} if the operation erased the last element in the sequence.
	     */
	    erase(begin: ListIterator<T>, end: ListIterator<T>): ListIterator<T>;
	    /**
	     * <p> Erase an element. </p>
	     *
	     * <p> Removes from the {@link List} either a single element; <i>position</i>. </p>
	     *
	     * <p> This effectively reduces the container size by the number of element removed. </p>
	     *
	     * <p> Unlike other standard sequence containers, {@link List} objects are specifically designed to be
	     * efficient inserting and removing elements in any position, even in the middle of the sequence. </p>
	     *
	     * @param position Iterator pointing to a single element to be removed from the {@link List}.
	     *
	     * @return An iterator pointing to the element that followed the last element erased by the function call.
	     *		   This is the {@link rend rend()} if the operation erased the last element in the sequence.
	     */
	    erase(position: ListReverseIterator<T>): ListReverseIterator<T>;
	    /**
	     * <p> Erase elements. </p>
	     *
	     * <p> Removes from the {@link List} container a range of elements. </p>
	     *
	     * <p> This effectively reduces the container {@link size} by the number of elements removed. </p>
	     *
	     * <p> Unlike other standard sequence containers, {@link List} objects are specifically designed to be
	     * efficient inserting and removing elements in any position, even in the middle of the sequence. </p>
	     *
	     * @param begin An iterator specifying a range of beginning to erase.
	     * @param end An iterator specifying a range of end to erase.
	     *
	     * @return An iterator pointing to the element that followed the last element erased by the function call.
	     *		   This is the {@link rend rend()} if the operation erased the last element in the sequence.
	     */
	    erase(begin: ListReverseIterator<T>, end: ListReverseIterator<T>): ListReverseIterator<T>;
	    /**
	     * <p> Remove duplicate values. </p>
	     *
	     * <p> Removes all but the first element from every consecutive group of equal elements in the  </p>
	     *
	     * <p> Notice that an element is only removed from the {@link List} container if it compares equal to the
	     * element immediately preceding it. Thus, this function is especially useful for sorted lists. </p>
	     */
	    unique(): void;
	    /**
	     * <p> Remove duplicate values. </p>
	     *
	     * <p> Removes all but the first element from every consecutive group of equal elements in the  </p>
	     *
	     * <p> The argument <i>binary_pred</i> is a specific comparison function that determine the <u>uniqueness</u>
	     * of an element. In fact, any behavior can be implemented (and not only an equality comparison), but notice
	     * that the function will call <code>binary_pred(it.value, it.prev().value)</code> for all pairs of elements
	     * (where <code>it</code> is an iterator to an element, starting from the second) and remove <code>it</code>
	     * from the {@link List} if the predicate returns <code>true</code>.
	     *
	     * <p> Notice that an element is only removed from the {@link List} container if it compares equal to the
	     * element immediately preceding it. Thus, this function is especially useful for sorted lists. </p>
	     *
	     * @param binary_pred Binary predicate that, taking two values of the same type than those contained in the
	     *					  {@link List}, returns <code>true</code> to remove the element passed as first argument
	     *					  from the container, and <code>false</code> otherwise. This shall be a function pointer
	     *					  or a function object.
	     */
	    unique(binary_pred: (left: T, right: T) => boolean): void;
	    /**
	     * <p> Remove elements with specific value. </p>
	     *
	     * <p> Removes from the container all the elements that compare equal to <i>val</i>. This calls the
	     * destructor of these objects and reduces the container {@link size} by the number of elements removed. </p>
	     *
	     * <p> Unlike member function {@link List.erase}, which erases elements by their position (using an
	     * iterator), this function ({@link List.remove}) removes elements by their value. </p>
	     *
	     * <p> A similar function, {@link List.remove_if}, exists, which allows for a condition other than an
	     * equality comparison to determine whether an element is removed. </p>
	     *
	     * @param val Value of the elements to be removed.
	     */
	    remove(val: T): void;
	    /**
	     * <p> Remove elements fulfilling condition. </p>
	     *
	     * <p> Removes from the container all the elements for which <i>pred</i> returns <code>true</code>. This
	     * calls the destructor of these objects and reduces the container {@link size} by the number of elements
	     * removed. </p>
	     *
	     * <p> The function calls <code>pred(it.value)</code> for each element (where <code>it</code> is an iterator
	     * to that element). Any of the elements in the list for which this returns <code>true</code>, are removed
	     * from the  </p>
	     *
	     * @param pred Unary predicate that, taking a value of the same type as those contained in the forward_list
	     *			   object, returns <code>true</code> for those values to be removed from the container, and
	     *			   <code>false</code> for those remaining. This can either be a function pointer or a function
	     *			   object.
	     */
	    remove_if(pred: (val: T) => boolean): void;
	    /**
	     * <p> Merge sorted {@link List Lists}. </p>
	     *
	     * <p> Merges <i>obj</i> into the {@link List} by transferring all of its elements at their respective
	     * ordered positions into the container (<font color='red'>both containers shall already be ordered</font>).
	     * </p>
	     *
	     * <p> This effectively removes all the elements in <i>obj</i> (which becomes {@link empty}), and inserts
	     * them into their ordered position within container (which expands in {@link size} by the number of elements
	     * transferred). The operation is performed without constructing nor destroying any element: they are
	     * transferred, no matter whether <i>obj</i> is an lvalue or an rvalue, or whether the value_type supports
	     * move-construction or not. </p>
	     *
	     * <p> This function requires that the {@link List} containers have their elements already ordered by value
	     * ({@link less}) before the call. For an alternative on unordered {@link List Lists}, see
	     * {@link List.splice}. </p>
	     *
	     * <p> Assuming such ordering, each element of <i>obj</i> is inserted at the position that corresponds to its
	     * value according to the strict weak ordering defined by {@link less}. The resulting order of equivalent
	     * elements is stable (i.e., equivalent elements preserve the relative order they had before the call, and
	     * existing elements precede those equivalent inserted from <i>obj</i>). </p>
	     *
	     * The function does nothing if <code>this == obj</code>.
	     *
	     * @param obj A {@link List} object of the same type (i.e., with the same template parameters, <b>T</b>).
	     * 			  Note that this function modifies <i>obj</i> no matter whether an lvalue or rvalue reference is
	     *			  passed.
	     */
	    merge<U extends T>(obj: List<U>): void;
	    /**
	     * <p> Merge sorted {@link List Lists}. </p>
	     *
	     * <p> Merges <i>obj</i> into the {@link List} by transferring all of its elements at their respective
	     * ordered positions into the container (<font color='red'>both containers shall already be ordered</font>).
	     * </p>
	     *
	     * <p> This effectively removes all the elements in <i>obj</i> (which becomes {@link empty}), and inserts
	     * them into their ordered position within container (which expands in {@link size} by the number of elements
	     * transferred). The operation is performed without constructing nor destroying any element: they are
	     * transferred, no matter whether <i>obj</i> is an lvalue or an rvalue, or whether the value_type supports
	     * move-construction or not. </p>
	     *
	     * <p> The argument <i>compare</i> is a specific predicate to perform the comparison operation between
	     * elements. This comparison shall produce a strict weak ordering of the elements (i.e., a consistent
	     * transitive comparison, without considering its reflexiveness).
	     *
	     * <p> This function requires that the {@link List} containers have their elements already ordered by
	     * <i>compare</i> before the call. For an alternative on unordered {@link List Lists}, see
	     * {@link List.splice}. </p>
	     *
	     * <p> Assuming such ordering, each element of <i>obj</i> is inserted at the position that corresponds to its
	     * value according to the strict weak ordering defined by <i>compare</i>. The resulting order of equivalent
	     * elements is stable (i.e., equivalent elements preserve the relative order they had before the call, and
	     * existing elements precede those equivalent inserted from <i>obj</i>). </p>
	     *
	     * The function does nothing if <code>this == obj</code>.
	     *
	     * @param obj A {@link List} object of the same type (i.e., with the same template parameters, <b>T</b>).
	     * 			  Note that this function modifies <i>obj</i> no matter whether an lvalue or rvalue reference is
	     *			  passed.
	     * @param compare Binary predicate that, taking two values of the same type than those contained in the
	     *				  {@link list}, returns <code>true</code> if the first argument is considered to go before
	     *				  the second in the strict weak ordering it defines, and <code>false</code> otherwise.
	     *				  This shall be a function pointer or a function object.
	     */
	    merge<U extends T>(obj: List<U>, compare: (left: T, right: T) => boolean): void;
	    /**
	     * <p> Transfer elements from {@link List} to {@link List}. </p>
	     *
	     * <p> Transfers elements from <i>obj</i> into the container, inserting them at <i>position</i>. </p>
	     *
	     * <p> This effectively inserts all elements into the container and removes them from <i>obj</i>, altering
	     * the sizes of both containers. The operation does not involve the construction or destruction of any
	     * element. They are transferred, no matter whether <i>obj</i> is an lvalue or an rvalue, or whether the
	     * value_type supports move-construction or not. </p>
	     *
	     * <p> This first version (1) transfers all the elements of <i>obj</i> into the  </p>
	     *
	     * @param position Position within the container where the elements of <i>obj</i> are inserted.
	     * @param obj A {@link List} object of the same type (i.e., with the same template parameters, <b>T</b>).
	     */
	    splice<U extends T>(position: ListIterator<T>, obj: List<U>): void;
	    /**
	     * <p> Transfer an element from {@link List} to {@link List}. </p>
	     *
	     * <p> Transfers an element from <i>obj</i>, which is pointed by an {@link ListIterator iterator} <i>it</i>,
	     * into the container, inserting the element at specified <i>position</i>. </p>
	     *
	     * <p> This effectively inserts an element into the container and removes it from <i>obj</i>, altering the
	     * sizes of both containers. The operation does not involve the construction or destruction of any element.
	     * They are transferred, no matter whether <i>obj</i> is an lvalue or an rvalue, or whether the value_type
	     * supports move-construction or not. </p>
	     *
	     * <p> This second version (2) transfers only the element pointed by <i>it</i> from <i>obj</i> into the
	     *  </p>
	     *
	     * @param position Position within the container where the element of <i>obj</i> is inserted.
	     * @param obj A {@link List} object of the same type (i.e., with the same template parameters, <b>T</b>).
	     *			  This parameter may be <code>this</code> if <i>position</i> points to an element not actually
	     *			  being spliced.
	     * @param it {@link ListIterator Iterator} to an element in <i>obj</i>. Only this single element is
	     *			 transferred.
	     */
	    splice<U extends T>(position: ListIterator<T>, obj: List<U>, it: ListIterator<U>): void;
	    /**
	     * <p> Transfer elements from {@link List} to {@link List}. </p>
	     *
	     * <p> Transfers elements from <i>obj</i> into the container, inserting them at <i>position</i>. </p>
	     *
	     * <p> This effectively inserts those elements into the container and removes them from <i>obj</i>, altering
	     * the sizes of both containers. The operation does not involve the construction or destruction of any
	     * element. They are transferred, no matter whether <i>obj</i> is an lvalue or an rvalue, or whether the
	     * value_type supports move-construction or not. </p>
	     *
	     * <p> This third version (3) transfers the range [<i>begin</i>, <i>end</i>) from <i>obj</i> into the
	     *  </p>
	     *
	     * @param position Position within the container where the elements of <i>obj</i> are inserted.
	     * @param obj A {@link List} object of the same type (i.e., with the same template parameters, <b>T</b>).
	     *			  This parameter may be <code>this</code> if <i>position</i> points to an element not actually
	     *			  being spliced.
	     * @param begin {@link ListIterator An Iterator} specifying initial position of a range of elements in
	     *				<i>obj</i>. Transfers the elements in the range [<b><i>begin</i></b>, <i>end</i>) to
	     *				<i>position</i>.
	     * @param end {@link ListIterator An Iterator} specifying final position of a range of elements in
	     *			  <i>obj</i>. Transfers the elements in the range [<i>begin</i>, <b><i>end</i></b>) to
	     *			  <i>position</i>. Notice that the range includes all the elements between <i>begin<i/> and
	     *			  <i>end</i>, including the element pointed by <i>begin</i> but not the one pointed by <i>end</i>.
	     */
	    splice<U extends T>(position: ListIterator<T>, obj: List<U>, begin: ListIterator<U>, end: ListIterator<U>): void;
	    /**
	     * <p> Sort elements in  </p>
	     *
	     * <p> Sorts the elements in the {@link List}, altering their position within the  </p>
	     *
	     * <p> The sorting is performed by applying an algorithm that uses {@link less}. This comparison shall
	     * produce a strict weak ordering of the elements (i.e., a consistent transitive comparison, without
	     * considering its reflexiveness). </p>
	     *
	     * <p> The resulting order of equivalent elements is stable: i.e., equivalent elements preserve the relative
	     * order they had before the call. </p>
	     *
	     * <p> The entire operation does not involve the construction, destruction or copy of any element object.
	     * Elements are moved within the  </p>
	     */
	    sort(): void;
	    /**
	     * <p> Sort elements in  </p>
	     *
	     * <p> Sorts the elements in the {@link List}, altering their position within the  </p>
	     *
	     * <p> The sorting is performed by applying an algorithm that uses <i>compare</i>. This comparison shall
	     * produce a strict weak ordering of the elements (i.e., a consistent transitive comparison, without
	     * considering its reflexiveness). </p>
	     *
	     * <p> The resulting order of equivalent elements is stable: i.e., equivalent elements preserve the relative
	     * order they had before the call. </p>
	     *
	     * <p> The entire operation does not involve the construction, destruction or copy of any element object.
	     * Elements are moved within the  </p>
	     *
	     * @param compare Binary predicate that, taking two values of the same type of those contained in the
	     *				  {@link List}, returns <code>true</code> if the first argument goes before the second
	     *				  argument in the strict weak ordering it defines, and <code>false</code> otherwise. This
	     *				  shall be a function pointer or a function object.
	     */
	    sort(compare: (left: T, right: T) => boolean): void;
	    /**
	     * @hidden
	     */
	    private _Quick_sort(first, last, compare);
	    /**
	     * @hidden
	     */
	    private _Quick_sort_partition(first, last, compare);
	    /**
	     * <p> Swap content. </p>
	     *
	     * <p> Exchanges the content of the container by the content of <i>obj</i>, which is another
	     * {@link List container} object with same type of elements. Sizes and container type may differ. </p>
	     *
	     * <p> After the call to this member function, the elements in this container are those which were in <i>obj</i>
	     * before the call, and the elements of <i>obj</i> are those which were in this. All iterators, references and
	     * pointers remain valid for the swapped objects. </p>
	     *
	     * <p> Notice that a non-member function exists with the same name, {@link swap swap}, overloading that
	     * algorithm with an optimization that behaves like this member function. </p>
	     *
	     * @param obj Another {@link List container} of the same type of elements (i.e., instantiated
	     *			  with the same template parameter, <b>T</b>) whose content is swapped with that of this
	     *			  {@link container List}.
	     */
	    swap(obj: List<T>): void;
	    /**
	     * @inheritdoc
	     */
	    swap(obj: Container<T>): void;
	}
	/**
	 * <p> An iterator, node of a List. </p>
	 *
	 * <p> <a href="http://samchon.github.io/tstl/images/design/class_diagram/linear_containers.png" target="_blank">
	 * <img src="http://samchon.github.io/tstl/images/design/class_diagram/linear_containers.png" style="max-width: 100%" /></a>
	 * </p>
	 *
	 * @author Jeongho Nam <http://samchon.org>
	 */
	export class ListIterator<T> extends ListIteratorBase<T> {
	    /**
	     * Initializer Constructor.
	     *
	     * #### Note
	     * Do not create the iterator directly, by yourself.
	     *
	     * Use {@link List.begin begin()}, {@link List.end end()} in {@link List container} instead.
	     *
	     * @param source The source {@link List container} to reference.
	     * @param prev A refenrece of previous node ({@link ListIterator iterator}).
	     * @param next A refenrece of next node ({@link ListIterator iterator}).
	     * @param value Value to be stored in the node (iterator).
	     */
	    constructor(source: List<T>, prev: ListIterator<T>, next: ListIterator<T>, value: T);
	    /**
	     * @inheritdoc
	     */
	    prev(): ListIterator<T>;
	    /**
	     * @inheritdoc
	     */
	    next(): ListIterator<T>;
	    /**
	     * @inheritdoc
	     */
	    advance(step: number): ListIterator<T>;
	    /**
	     * @inheritdoc
	     */
	    /**
	     * Set value of the iterator is pointing to.
	     *
	     * @param val Value to set.
	     */
	    value: T;
	    /**
	     * @inheritdoc
	     */
	    equals(obj: ListIterator<T>): boolean;
	    /**
	     * @inheritdoc
	     */
	    swap(obj: ListIterator<T>): void;
	}
	/**
	 * <p> A reverse-iterator of List. </p>
	 *
	 * <p> <a href="http://samchon.github.io/tstl/images/design/class_diagram/linear_containers.png" target="_blank">
	 * <img src="http://samchon.github.io/tstl/images/design/class_diagram/linear_containers.png" style="max-width: 100%" /></a>
	 * </p>
	 *
	 * @param <T> Type of the elements.
	 *
	 * @author Jeongho Nam <http://samchon.org>
	 */
	export class ListReverseIterator<T> extends ReverseIterator<T, ListIterator<T>, ListReverseIterator<T>> implements ILinearIterator<T> {
	    /**
	     * Construct from base iterator.
	     *
	     * @param base A reference of the base iterator, which iterates in the opposite direction.
	     */
	    constructor(base: ListIterator<T>);
	    /**
	     * @hidden
	     */
	    protected _Create_neighbor(base: ListIterator<T>): ListReverseIterator<T>;
	    /**
	     * @inheritdoc
	     */
	    /**
	     * Set value of the iterator is pointing to.
	     *
	     * @param val Value to set.
	     */
	    value: T;
	}

}
declare module 'tstl/queue' {
	/**
	 * <p> FIFO queue. </p>
	 *
	 * <p> {@link Queue}s are a type of container adaptor, specifically designed to operate in a FIFO context
	 * (first-in first-out), where elements are inserted into one end of the container and extracted from the other.
	 * </p>
	 *
	 * <p> {@link Queue}s are implemented as containers adaptors, which are classes that use an encapsulated object of
	 * a specific container class as its underlying container, providing a specific set of member functions to access
	 * its elements. Elements are pushed into the {@link IDeque.back back()} of the specific container and popped from
	 * its {@link IDeque.front front()}. </p>
	 *
	 * <p> {@link container_ The underlying container} may be one of the standard container class template or some
	 * other specifically designed container class. This underlying container shall support at least the following
	 * operations: </p>
	 *
	 * <ul>
	 *	<li> empty </li>
	 *	<li> size </li>
	 *	<li> front </li>
	 *	<li> back </li>
	 *	<li> push_back </li>
	 *	<li> pop_front </li>
	 * </ul>
	 *
	 * <p> The standard container classes {@link Deque} and {@link List} fulfill these requirements.
	 * By default, if no container class is specified for a particular {@link Queue} class instantiation, the standard
	 * container {@link List} is used. </p>
	 *
	 * <p> <a href="http://samchon.github.io/tstl/images/class_diagram/linear_containers.png" target="_blank">
	 * <img src="http://samchon.github.io/tstl/images/class_diagram/linear_containers.png" style="max-width: 100%" /></a>
	 * </p>
	 *
	 * @param <T> Type of elements.
	 *
	 * @reference http://www.cplusplus.com/reference/queue/queue
	 * @author Jeongho Nam <http://samchon.org>
	 */
	export class Queue<T> {
	    /**
	     * The <i>underlying object</i> for implementing the <i>FIFO</i>
	     */
	    private container_;
	    /**
	     * Default Constructor.
	     */
	    constructor();
	    /**
	     * Copy Constructor.
	     */
	    constructor(container: Queue<T>);
	    /**
	     * <p> Return size. </p>
	     * <p> Returns the number of elements in the {@link Queue}. </p>
	     *
	     * <p> This member function effectively calls member {@link IDeque.size size()} of the
	     * {@link container_ underlying container} object. </p>
	     *
	     * @return The number of elements in the {@link container_ underlying container}.
	     */
	    size(): number;
	    /**
	     * <p> Test whether container is empty. </p>
	     * <p> returns whether the {@link Queue} is empty: i.e. whether its <i>size</i> is zero. </p>
	     *
	     * <p> This member function efeectively calls member {@link IDeque.empty empty()} of the
	     * {@link container_ underlying container} object. </p>
	     *
	     * @return <code>true</code> if the {@link container_ underlying container}'s size is 0,
	     *		   <code>false</code> otherwise. </p>
	     */
	    empty(): boolean;
	    /**
	     * <p> Access next element. </p>
	     * <p> Returns a value of the next element in the {@link Queue}. </p>
	     *
	     * <p> The next element is the "oldest" element in the {@link Queue} and the same element that is popped out
	     * from the queue when {@link pop Queue.pop()} is called. </p>
	     *
	     * <p> This member function effectively calls member {@link IDeque.front front()} of the
	     * {@link container_ underlying container} object. </p>
	     *
	     * @return A value of the next element in the {@link Queue}.
	     */
	    front(): T;
	    /**
	     * <p> Access last element. </p>
	     *
	     * <p> Returns a vaue of the last element in the queue. This is the "newest" element in the queue (i.e. the
	     * last element pushed into the queue). </p>
	     *
	     * <p> This member function effectively calls the member function {@link IDeque.back back()} of the
	     * {@link container_ underlying container} object. </p>
	     *
	     * @return A value of the last element in the {@link Queue}.
	     */
	    back(): T;
	    /**
	     * <p> Insert element. </p>
	     *
	     * <p> Inserts a new element at the end of the {@link Queue}, after its current last element.
	     * The content of this new element is initialized to <i>val</i>. </p>
	     *
	     * <p> This member function effectively calls the member function {@link IDeque.push_back push_back()} of the
	     * {@link container_ underlying container} object. </p>
	     *
	     * @param val Value to which the inserted element is initialized.
	     */
	    push(val: T): void;
	    /**
	     * <p> Remove next element. </p>
	     *
	     * <p> Removes the next element in the {@link Queue}, effectively reducing its size by one. </p>
	     *
	     * <p> The element removed is the "oldest" element in the {@link Queue} whose value can be retrieved by calling
	     * member {@link front Queue.front()} </p>.
	     *
	     * <p> This member function effectively calls the member function {@link IDeque.pop_front pop_front()} of the
	     * {@link container_ underlying container} object. </p>
	     */
	    pop(): void;
	    /**
	     * <p> Swap contents. </p>
	     *
	     * <p> Exchanges the contents of the container adaptor (<i>this</i>) by those of <i>obj</i>. </p>
	     *
	     * <p> This member function calls the non-member function {@link IContainer.swap swap} (unqualified) to swap
	     * the {@link container_ underlying containers}. </p>
	     *
	     * @param obj Another {@link Queue} container adaptor of the same type (i.e., instantiated with the same
	     *			  template parameter, <b>T</b>). Sizes may differ. </p>
	     */
	    swap(obj: Queue<T>): void;
	}

}
declare module 'tstl/stack' {
	/**
	 * <p> LIFO stack. </p>
	 *
	 * <p> {@link Stack}s are a type of container adaptor, specifically designed to operate in a LIFO context
	 * (last-in first-out), where elements are inserted and extracted only from one end of the  </p>
	 *
	 * <p> {@link Stack}s are implemented as containers adaptors, which are classes that use an encapsulated object of
	 * a specific container class as its <i>underlying container</i>, providing a specific set of member functions to
	 * access its elements. Elements are pushed/popped from the {@link ILinearContainer.back back()} of the
	 * {@link ILinearContainer specific container}, which is known as the top of the {@link Stack}. </p>
	 *
	 * <p> {@link container_ The underlying container} may be any of the standard container class templates or some
	 * other specifically designed container class. The container shall support the following operations: </p>
	 *
	 * <ul>
	 *	<li> empty </li>
	 *	<li> size </li>
	 *	<li> front </li>
	 *	<li> back </li>
	 *	<li> push_back </li>
	 *	<li> pop_back </li>
	 * </ul>
	 *
	 * <p> The standard container classes {@link Vector}, {@link Deque} and {@link List} fulfill these requirements.
	 * By default, if no container class is specified for a particular {@link Stack} class instantiation, the standard
	 * container {@link List} is used. </p>
	 *
	 * <p> <a href="http://samchon.github.io/tstl/images/class_diagram/linear_containers.png" target="_blank">
	 * <img src="http://samchon.github.io/tstl/images/class_diagram/linear_containers.png" style="max-width: 100%" /></a>
	 * </p>
	 *
	 * @param <T> Type of elements.
	 *
	 * @reference http://www.cplusplus.com/reference/stack/stack
	 * @author Jeongho Nam <http://samchon.org>
	 */
	export class Stack<T> {
	    /**
	     * The <i>underlying object</i> for implementing the <i>LIFO</i>
	     */
	    private container_;
	    /**
	     * Default Constructor.
	     */
	    constructor();
	    /**
	     * Copy Constructor.
	     */
	    constructor(stack: Stack<T>);
	    /**
	     * <p> Return size. </p>
	     *
	     * <p> Returns the number of elements in the {@link Stack}. </p>
	     *
	     * <p> This member function effectively calls member {@link ILinearContainer.size size()} of the
	     * {@link container_ underlying container} object. </p>
	     *
	     * @return The number of elements in the {@link container_ underlying container}.
	     */
	    size(): number;
	    /**
	     * <p> Test whether container is empty. </p>
	     *
	     * <p> returns whether the {@link Stack} is empty: i.e. whether its <i>size</i> is zero. </p>
	     *
	     * <p> This member function effectively calls member {@link ILinearContainer.empty empty()} of the
	     * {@link container_ underlying container} object. </p>
	     *
	     * @return <code>true</code> if the <i>underlying container</i>'s size is 0,
	     *		   <code>false</code> otherwise. </p>
	     */
	    empty(): boolean;
	    /**
	     * <p> Access next element. </p>
	     *
	     * <p> Returns a value of the top element in the {@link Stack} </p>.
	     *
	     * <p> Since {@link Stack}s are last-in first-out containers, the top element is the last element inserted into
	     * the {@link Stack}. </p>
	     *
	     * <p> This member function effectively calls member {@link ILinearContainer.back back()} of the
	     * {@link container_ underlying container} object. </p>
	     *
	     * @return A value of the top element in the {@link Stack}.
	     */
	    top(): T;
	    /**
	     * <p> Insert element. </p>
	     *
	     * <p> Inserts a new element at the top of the {@link Stack}, above its current top element. </p>
	     *
	     * <p> This member function effectively calls the member function
	     * {@link ILinearContainer.push_back push_back()} of the {@link container_ underlying container} object. </p>
	     *
	     * @param val Value to which the inserted element is initialized.
	     */
	    push(val: T): void;
	    /**
	     * <p> Remove top element. </p>
	     *
	     * <p> Removes the element on top of the {@link Stack}, effectively reducing its size by one. </p>
	     *
	     * <p> The element removed is the latest element inserted into the {@link Stack}, whose value can be retrieved
	     * by calling member {@link top Stack.top()} </p>.
	     *
	     * <p> This member function effectively calls the member function {@link ILinearContainer.pop_back pop_back()}
	     * of the {@link container_ underlying container} object. </p>
	     */
	    pop(): void;
	    /**
	     * <p> Swap contents. </p>
	     *
	     * <p> Exchanges the contents of the container adaptor (<i>this</i>) by those of <i>obj</i>. </p>
	     *
	     * <p> This member function calls the non-member function {@link IContainer.swap swap} (unqualified) to swap
	     * the {@link container_ underlying containers}. </p>
	     *
	     * @param obj Another {@link Stack} container adaptor of the same type (i.e., instantiated with the same
	     *			  template parameter, <b>T</b>). Sizes may differ. </p>
	     */
	    swap(obj: Stack<T>): void;
	}

}
declare module 'tstl/index' {
	export * from 'tstl/iterator';
	export * from 'tstl/vector';
	export * from 'tstl/list';
	export * from 'tstl/deque';
	export * from 'tstl/queue';
	export * from 'tstl/stack';
	export * from 'tstl/algorithm';
	export * from 'tstl/functional';
	export * from 'tstl/utility';
	export * from 'tstl/exception';

}
