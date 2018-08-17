import * as Yargs from "yargs";

interface Arguments extends Yargs.Arguments {
	path: string;
}

export function getArguments(): Arguments {
	return Yargs
		.usage(
			"$0 <path>",
			"Interpret the specified file",
			(yargs) => yargs.positional("path", {
				describe: "The path to the file that you want to execute",
				type: "string",
				normalize: true
			})
		).argv as Arguments;
}