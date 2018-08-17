#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loadFile_1 = require("./loadFile");
const yargs_1 = require("./yargs");
const args = yargs_1.getArguments();
const file = loadFile_1.loadFile(args.path);
file.subscribe(file => console.log(file.split("\n").slice(0, 5).join("\n")), error => console.error(error.message), () => console.log("Done!"));
//# sourceMappingURL=index.js.map