"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Rx = __importStar(require("rxjs"));
const Fs = __importStar(require("fs"));
function loadFile(path) {
    return Rx.Observable.create((observer) => {
        Fs.readFile(path, { encoding: "utf8" }, (error, data) => {
            if (error) {
                observer.error(new Error(`Could not read file ${error.path}: ${error.message}`));
            }
            else {
                observer.next(data);
            }
            observer.complete();
        });
    });
}
exports.loadFile = loadFile;
//# sourceMappingURL=loadFile.js.map