const fs = require("fs");

function main()
{
	iterate_directory("./src/std");
}

function iterate_directory(path)
{
	let elements = fs.readdirSync(path);
	for (let elem of elements)
	{
		let my_path = path + "/" + elem;

		if (fs.lstatSync(my_path).isDirectory())
			iterate_directory(my_path);
		else if (elem.substr(-3) == ".ts")
			remove_comment(my_path);
	}
}
function remove_comment(path)
{
	console.log(path);
	let content = fs.readFileSync(path).toString("utf8");

	while (true)
	{
		let first_index = content.indexOf("/**");
		if (first_index == -1)
			break;

		let last_index = content.indexOf("*/", first_index + 1) + 2;

		first_index = content.lastIndexOf("\n", first_index) + 1;
		last_index = content.indexOf("\n", last_index) + 1;

		content = content.substring(0, first_index) + content.substr(last_index);
	}
	fs.writeFileSync(path, content, "utf8");
}
main();