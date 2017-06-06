const fs = require("fs");
const process = require('child_process');

compile();
attach_header();
remove_dynamics("../index.js");
remove_dynamics("../filesystem.js");
distribute();
test();

function compile()
{
	const STD_FILES = 
	[
		__dirname + "/../src/std/tsconfig.json",
		__dirname + "/../src/std.filesystem/tsconfig.json"
	];
	const TEST_FILE = __dirname + "/../src/test/tsconfig.json";

	// KEEP COMMENTS ONLY IN THE DECLARATION
	for (let file of STD_FILES)
	{
		process.execSync("tsc -p " + file);
		process.execSync("tsc -p " + file + " --removeComments --declaration false");
	}

	// TESTING UNIT
	process.execSync("tsc -p " + TEST_FILE);
}

function attach_header()
{
	const TITLE_FILE = __dirname + "/../src/std/typings/tstl/tstl.d.ts";
	const HEADER_FILE = __dirname + "/../index.d.ts";

	var text = fs.readFileSync(TITLE_FILE, "utf8");
	text += fs.readFileSync(HEADER_FILE, "utf8");

	fs.writeFileSync(HEADER_FILE, text, "utf8");
}

function remove_dynamics(file)
{
	const JS_FILE = __dirname + "/../index.js";
	
	var text = fs.readFileSync(JS_FILE, "utf8");
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

function distribute()
{
	if (!fs.existsSync(__dirname + "/../dist"))
		fs.mkdirSync(__dirname + "/../dist");

	process.execSync("minify " + __dirname + "/../index.js --output ../dist/tstl.min.js");
}

function test()
{
	process.execSync("node " + __dirname + "/../src/test/test");
}