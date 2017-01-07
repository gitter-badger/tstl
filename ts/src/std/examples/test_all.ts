/// <reference path="../API.ts" />

/// <reference path="../Vector.ts" />

namespace std.examples
{
	export function test_all(): void
	{
		console.log("TEST ALL");
		
		for (let key in std.examples)
			if (key != "test_all" && (std.examples as any)[key] instanceof Function)
			{
				console.log("===================================================");
				console.log("	" + key);
				console.log("===================================================");

				(std.examples as any)[key]();
			}
	}
}