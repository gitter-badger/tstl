var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/// <reference path="../../index.d.ts" />
eval("import std = require('./index')");
var std;
(function (std) {
    var filesystem;
    (function (filesystem) {
        function equivalent(x, y) {
            return new Promise(function (resolve) {
                fs.stat(x, function (xErr, xStats) {
                    fs.stat(y, function (yErr, yStats) {
                        resolve(xStats.uid == yStats.uid);
                    });
                });
            });
        }
        filesystem.equivalent = equivalent;
        function exists(path) {
            return new Promise(function (resolve) {
                fs.exists(path, resolve);
            });
        }
        filesystem.exists = exists;
        function is_block_file(path) {
            return new Promise(function (resolve) {
                fs.stat(path, function (err, stats) {
                    resolve(stats.isBlockDevice());
                });
            });
        }
        filesystem.is_block_file = is_block_file;
        function is_character_file(path) {
            return new Promise(function (resolve) {
                fs.stat(path, function (err, stats) {
                    resolve(stats.isCharacterDevice());
                });
            });
        }
        filesystem.is_character_file = is_character_file;
        function is_directory(path) {
            return new Promise(function (resolve) {
                fs.stat(path, function (err, stats) {
                    resolve(stats.isDirectory());
                });
            });
        }
        filesystem.is_directory = is_directory;
        function is_fifo(path) {
            return new Promise(function (resolve) {
                fs.stat(path, function (err, stats) {
                    resolve(stats.isFIFO());
                });
            });
        }
        filesystem.is_fifo = is_fifo;
        function is_socket(path) {
            return new Promise(function (resolve) {
                fs.stat(path, function (err, stats) {
                    resolve(stats.isSocket());
                });
            });
        }
        filesystem.is_socket = is_socket;
        function is_symlink(path) {
            return new Promise(function (resolve) {
                fs.stat(path, function (err, stats) {
                    resolve(stats.isSymbolicLink());
                });
            });
        }
        filesystem.is_symlink = is_symlink;
        function create_directory(path) {
            return new Promise(function (resolve) {
                fs.mkdir(path, function (err) {
                    var ret = (err) ? false : true;
                    resolve(ret);
                });
            });
        }
        filesystem.create_directory = create_directory;
        function create_directories(path) {
            return __awaiter(this, void 0, void 0, function () {
                var directories, ret, i;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            ret = true;
                            i = 0;
                            _a.label = 1;
                        case 1:
                            if (!(i < directories.length)) return [3 /*break*/, 4];
                            return [4 /*yield*/, create_directory(directories[i])];
                        case 2:
                            if ((_a.sent()) == false)
                                return [2 /*return*/, false];
                            _a.label = 3;
                        case 3:
                            i++;
                            return [3 /*break*/, 1];
                        case 4: return [2 /*return*/, true];
                    }
                });
            });
        }
        filesystem.create_directories = create_directories;
        function file_size(path) {
            return new Promise(function (resolve) {
                fs.stat(path, function (err, stats) {
                    resolve(stats.size);
                });
            });
        }
        filesystem.file_size = file_size;
        function remove(path) {
            return new Promise(function (resolve) {
                fs.unlink(path, function (err) {
                    var ret = (err) ? false : true;
                    resolve(ret);
                });
            });
        }
        filesystem.remove = remove;
        function rename(oldPath, newPath) {
            return new Promise(function (resolve) {
                fs.rename(oldPath, newPath, function (err) {
                    var ret = (err) ? false : true;
                    resolve(ret);
                });
            });
        }
        filesystem.rename = rename;
    })(filesystem = std.filesystem || (std.filesystem = {}));
})(std || (std = {}));
//# sourceMappingURL=filesystem.js.map