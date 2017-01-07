/* ---------------------------------------------------------
	CONTAINERS
--------------------------------------------------------- */
// LINEAR CONTAINERS
export * from "./iterator";
export * from "./vector";
export * from "./list";
export * from "./deque";

// ASSOCIATIVE CONTAINERS
export * from "./map";
export * from "./set";
export * from "./unordered_map";
export * from "./unordered_set";

// ADAPTOR CONTAINERS
export * from "./queue";
export * from "./stack";

// BASE CONTAINERS
import * as _cont from "./base/Container";

export namespace base
{
	// CONTAINERS
	export import Container = _cont.Container;
	export import ILinearContainer = _cont.ILinearContainer;
	export import IArrayContainer = _cont.IArrayContainer;
	export import IDequeContainer = _cont.IDequeContainer;

	// SET CONTAINERS

	// MAP CONTAINERS
}

/* ---------------------------------------------------------
	MISCELLANEOUS
--------------------------------------------------------- */
// GLOBAL FUNCTIONS
export * from "./algorithm";
export * from "./functional";

// GLOBAL CLASSES
export * from "./utility";
export * from "./exception";
export * from "./system_error";