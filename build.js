const fs = require("fs");
const process = require('child_process');

const ROOT = __dirname + "\\";
const TS = ROOT + "ts\\";
const TYPINGS = TS + "src\\typings\\tstl\\";

main();

function main()
{
	//--------
	// TYPESCRIPT-STL
	//--------
	compile(TS + "index.json");
	concat(TYPINGS + "index.d.ts", ROOT + "index.d.ts");
	remove_dynamics(ROOT + "index.js");

	//--------
	// FILE-SYSTEM
	//--------
	compile(TS + "filesystem.json");
	concat(TYPINGS + "filesystem.d.ts", ROOT + "filesystem.d.ts");
	remove_dynamics(ROOT + "filesystem.js");
}

function compile(config)
{
	process.execSync("tsc -p \"" + config + "\"");
}

function concat(x, y, ret = y)
{
	var text = fs.readFileSync(x, "utf8");
	text += fs.readFileSync(y, "utf8");

	fs.writeFileSync(ret, text, "utf8");
}

function remove_dynamics(file)
{
	var text = fs.readFileSync(file, "utf8");
	if (text.indexOf('["') == -1)
		return;

	var dynamics = text.split('["');
	var used_keys = {};

	for (var i = 1; i < dynamics.length; i++)
	{
		if (dynamics[i].indexOf('"]') == -1)
			continue;
		
		var value = dynamics[i].substr(0, dynamics[i].indexOf('"]'));
		var org = '["' + value + '"]';
		var repl = '.' + value;

		if (value.indexOf(",") != -1)
			continue;
		else if (used_keys[value])
			continue;
		else
			used_keys[value] = true;
		
		text = text.split(org).join(repl);
	}
	fs.writeFileSync(file, text, "utf8");
}

function minify(file)
{
	process.execSync("minify " + file);
}
