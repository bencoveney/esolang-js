#!/usr/bin/env node

import { loadFile } from "./loadFile";
import { getArguments } from "./yargs";

const args = getArguments();
const file = loadFile(args.path);
file.subscribe(
	file => console.log(file.split("\n").slice(0, 5).join("\n")),
	error => console.error(error.message),
	() => console.log("Done!")
);
