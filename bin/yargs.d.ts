import * as Yargs from "yargs";
interface Arguments extends Yargs.Arguments {
    path: string;
    language?: string;
}
export declare function getArguments(): Arguments;
export {};
