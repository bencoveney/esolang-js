#!/usr/bin/env node
"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const loadFile_1 = require("./loadFile");
const yargs_1 = require("./yargs");
const Operators = __importStar(require("rxjs/operators"));
const languages_1 = require("./languages");
const args = yargs_1.getArguments();
const interpreter = languages_1.getInterpreter(args.language, args.path);
const file = loadFile_1.loadFile(args.path);
file.pipe(Operators.flatMap(interpreter)).subscribe(console.log, console.error, () => console.log("Done"));
//# sourceMappingURL=index.js.map