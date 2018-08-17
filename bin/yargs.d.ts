import * as Yargs from "yargs";
interface Arguments extends Yargs.Arguments {
    path: string;
}
export declare function getArguments(): Arguments;
export {};
