#!/usr/bin/env node

import { loadFile } from "./loadFile";
import { getArguments } from "./yargs";
import * as Operators from "rxjs/operators";
import { getInterpreter } from "./languages";

const args = getArguments();
const interpreter = getInterpreter(args.language, args.path);
const file = loadFile(args.path);
file.pipe(Operators.flatMap(interpreter)).subscribe(console.log, console.error, () => console.log("Done"));
