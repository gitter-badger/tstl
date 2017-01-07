import * as std from "./../index";

main();

function main(): void
{
	test_algorithm();
	test_deque();
	test_list();

	test_reverse_iterator();
	test_tree_set();
	test_tree_map();
}

function test_algorithm(): void
{
	let array: std.Vector<number> = new std.Vector<number>();
	for (let i: number = 1; i <= 15; i++)
		array.push_back(i);

	console.log(array.data());
	std.shuffle(array.begin(), array.end());
	console.log(array.data());
}

function test_deque(): void
{
	let deque: std.Deque<number> = new std.Deque<number>();
	for (let i: number = 0; i < 10; i++)
		deque.push_back(i);

	let it = deque.begin().advance(3);
	it = deque.erase(it); // erase 3
	console.log(it.value); // print 4

	it = deque.begin().advance(2);
	it = deque.insert(it, -1); // insert -1
	console.log(it.next().value); // print 2

	it = deque.begin().advance(6);
	it = deque.erase(it, it.advance(3)); // erase from 6 to 9
	console.log(it.value); // print 9
	
	console.log("-------------------------------------");
	for (let it = deque.begin(); !it.equals(deque.end()); it = it.next())
		console.log(it.value);
}

function test_list(): void
{
	let list: std.List<number> = new std.List<number>();
	for (let i: number = 0; i < 10; i++)
		list.push_back(i);

	let it = list.begin().advance(3);
	it = list.erase(it); // erase 3
	console.log(it.value); // print 4

	it = list.begin().advance(2);
	it = list.insert(it, -1); // insert -1
	console.log(it.next().value); // print 2

	it = list.begin().advance(6);
	it = list.erase(it, it.advance(3)); // erase from 6 to 9
	//console.log(it.value); // print 9
	console.log(it.equals(list.end()));

	console.log("-------------------------------------");
	for (let it = list.begin(); !it.equals(list.end()); it = it.next())
		console.log(it.value);
}

function test_reverse_iterator(): void
{
	console.log("Test Reverse Iterator");
	let vec: std.Vector<number> = new std.Vector<number>([0, 1, 2, 3, 4]);
	let list: std.List<number> = new std.List(vec.begin(), vec.end());
	let deque: std.Deque<number> = new std.Deque<number>(vec.begin(), vec.end());

	let set: std.HashSet<number> = new std.HashSet<number>(vec.begin(), vec.end());
	let map: std.HashMap<number, number> = new std.HashMap([[1, 1], [2, 2], [3, 3], [4, 4], [5, 5]]);

	console.log(vec.rbegin().advance(2).value, vec.end().advance(-3).value);

	console.log("Vector's Reverse Iterator");
	reverse_iterate(vec);

	console.log("List's Reverse Iterator");
	reverse_iterate(list);

	console.log("Deque's Reverse Iterator");
	reverse_iterate(deque);

	console.log("HashSet's Reverse Iterator");
	reverse_iterate(set);

	console.log("HashMap's Reverse Iterator");
	reverse_iterate<std.Pair<number, number>>(map);
}

function reverse_iterate<T>(container: std.base.Container<T>): void
{
	for (let it = container.rbegin(); !it.equals(container.rend()); it = it.next())
		console.log(it.value);
}

function test_tree_set(): void
{
	let set: std.TreeMultiSet<number> = new std.TreeMultiSet<number>();

	// INSERTS EVEN NUMBERS
	for (let i = 0; i <= 10; i += 2)
		for (let j = 0; j < 3; j++)
			set.insert(i);

	// FIND 4 -> HAS
	console.log("Matched node: 4");
	console.log("	lower bound: " + set.lower_bound(4).value);
	console.log("	upper bound: " + set.upper_bound(4).value);
	console.log(" ");

	// FIND ODD NUMBERS -> NOT EXIST
	for (let i = 1; i <= 10; i += 2)
	{
		console.log("Mis-matched node: " + i);
		console.log("	lower bound: " + set.lower_bound(i).value);
		console.log("	upper bound: " + set.upper_bound(i).value);
		console.log(" ");
	}
}

function test_tree_map(): void
{
	let map: std.TreeMap<string, number> = new std.TreeMap<string, number>();
	map.insert(["first", 1]);
	map.insert(["second", 2]);

	map.erase(map.begin());

	for (let it = map.begin(); !it.equals(map.end()); it = it.next())
		console.log(it.first, it.second);
}