/// <reference path="API.ts" />

namespace std.filesystem
{
	export function equivalent(x: string, y: string): Promise<boolean>
	{
		return new Promise<boolean>(resolve =>
		{
			fs.stat(x, function (xErr: NodeJS.ErrnoException, xStats: fs.Stats): void
			{
				fs.stat(y, function (yErr: NodeJS.ErrnoException, yStats: fs.Stats): void
				{
					resolve(xStats.uid == yStats.uid);
				});
			});
		});
	}

	export function exists(path: string): Promise<boolean>
	{
		return new Promise<boolean>(resolve =>
		{
			fs.exists(path, resolve);
		});
	}

	export function is_block_file(path: string): Promise<boolean>
	{
		return new Promise<boolean>(resolve =>
		{
			fs.stat(path, function (err: NodeJS.ErrnoException, stats: fs.Stats): void
			{
				resolve(stats.isBlockDevice());
			});
		});
	}

	export function is_character_file(path: string): Promise<boolean>
	{
		return new Promise<boolean>(resolve =>
		{
			fs.stat(path, function (err: NodeJS.ErrnoException, stats: fs.Stats): void
			{
				resolve(stats.isCharacterDevice());
			});
		});
	}

	export function is_directory(path: string): Promise<boolean>
	{
		return new Promise<boolean>(resolve =>
		{
			fs.stat(path, function (err: NodeJS.ErrnoException, stats: fs.Stats): void
			{
				resolve(stats.isDirectory());
			});
		});
	}

	export function is_fifo(path: string): Promise<boolean>
	{
		return new Promise<boolean>(resolve =>
		{
			fs.stat(path, function (err: NodeJS.ErrnoException, stats: fs.Stats): void
			{
				resolve(stats.isFIFO());
			});
		});
	}

	export function is_socket(path: string): Promise<boolean>
	{
		return new Promise<boolean>(resolve =>
		{
			fs.stat(path, function (err: NodeJS.ErrnoException, stats: fs.Stats): void
			{
				resolve(stats.isSocket());
			});
		});
	}

	export function is_symlink(path: string): Promise<boolean>
	{
		return new Promise<boolean>(resolve =>
		{
			fs.stat(path, function (err: NodeJS.ErrnoException, stats: fs.Stats): void
			{
				resolve(stats.isSymbolicLink());
			});
		});
	}

	export function create_directory(path: string): Promise<boolean>
	{
		return new Promise<boolean>(resolve =>
		{
			fs.mkdir(path, function (err?: NodeJS.ErrnoException): void
			{
				let ret: boolean = (err) ? false : true;
				resolve(ret);
			});
		});
	}

	export async function create_directories(path: string): Promise<boolean>
	{
		let directories: string[];
		let ret: boolean = true;

		for (let i: number = 0; i < directories.length; i++)
			if (await create_directory(directories[i]) == false)
				return false;

		return true;
	}

	export function file_size(path: string): Promise<number>
	{
		return new Promise<number>(resolve =>
		{
			fs.stat(path, function (err: NodeJS.ErrnoException, stats: fs.Stats): void
			{
				resolve(stats.size);
			});
		});
	}

	export function remove(path: string): Promise<boolean>
	{
		return new Promise<boolean>(resolve =>
		{
			fs.unlink(path, function (err?: NodeJS.ErrnoException): void
			{
				let ret: boolean = (err) ? false : true;
				resolve(ret);
			});
		});
	}

	export function rename(oldPath: string, newPath: string): Promise<boolean>
	{
		return new Promise<boolean>(resolve =>
		{
			fs.rename(oldPath, newPath, function (err?: NodeJS.ErrnoException): void
			{
				let ret: boolean = (err) ? false : true;
				resolve(ret);
			});
		});
	}
}