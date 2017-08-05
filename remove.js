const fs = require("fs");

function iterate(directory)
{
	let elements = fs.readdirSync(directory);

	for (let path of elements)
	{
		let stat = fs.lstatSync(directory + "/" + path);

		if (stat.isDirectory() == true)
			iterate(directory + "/" + path);
		else
			remove_comments(directory + "/" + path);
	}
}

function remove_comments(path)
{
	let str = fs.readFileSync(path, "utf8");
	str = str.split("\r\n").join("\n");

	let first = 0;

	while (true)
	{
		first = str.indexOf("/**", first);
		if (first == -1)
			break;

		first = str.lastIndexOf("\n", first) + 1;
		let last = str.indexOf("*/\n", first);

		if (str.substring(first, last).indexOf("@hidden") != -1)
		{
			first = last;
			continue;
		}
		
		str = str.substr(0, first) + str.substr(last + 3);
	}
	fs.writeFileSync(path, str, "utf8");
}

function main()
{
	iterate("src/std");
}
main();