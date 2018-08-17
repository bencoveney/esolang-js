import * as Yargs from "yargs";
import { languages } from "./languages";

interface Arguments extends Yargs.Arguments {
	path: string;
	language?: string;
}

/**
 * Configure and resolve the command line arguments used to launch the application.
 * @returns The resolved command line arguments.
 */
export function getArguments(): Arguments {
	return Yargs
		.usage(
			"$0 <path> [options]",
			"Interpret the specified file",
			(yargs) => yargs.positional("path", {
				describe: "The path to the file that you want to execute",
				type: "string",
				normalize: true
			})
		)
		.option("language", {
			alias: "l",
			describe: "The programming language that the code is in. If not provided this will be inferred from the file type.",
			type: "string",
			choices: Object.keys(languages)
		}).argv as Arguments;
}