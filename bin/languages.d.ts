import { Interpreter } from "./interpreter";
interface Language {
    extension: string;
    interpreter: Interpreter;
}
export declare const languages: {
    [name: string]: Language;
};
/**
 * Gets the interpreter for the corresponding language or file.
 * @param language The name of the language, if known.
 * @param file The name of the file.
 * @returns The found interpreter.
 */
export declare function getInterpreter(language: string | undefined, file: string): Interpreter;
export {};
