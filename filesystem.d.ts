/// <reference path="index.d.ts" />
/**
 * @author Jeongho Nam <http://samchon.org>
 */
declare namespace std.filesystem {
}
declare namespace std.filesystem {
    function equivalent(x: string, y: string): Promise<boolean>;
    function exists(path: string): Promise<boolean>;
    function is_block_file(path: string): Promise<boolean>;
    function is_character_file(path: string): Promise<boolean>;
    function is_directory(path: string): Promise<boolean>;
    function is_fifo(path: string): Promise<boolean>;
    function is_socket(path: string): Promise<boolean>;
    function is_symlink(path: string): Promise<boolean>;
    function create_directory(path: string): Promise<boolean>;
    function create_directories(path: string): Promise<boolean>;
    function file_size(path: string): Promise<number>;
    function remove(path: string): Promise<boolean>;
    function rename(oldPath: string, newPath: string): Promise<boolean>;
}
