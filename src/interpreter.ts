import * as Rx from "rxjs";

/**
 * An interpreter for a language.
 */
export interface Interpreter {
	/**
	 * Interprets the source file and returns an observable of the output.
	 * @param sourceFile The content of the source file to interpret.
	 * @returns An observable stream of output from the program's execution.
	 */
	(sourceFile: string): Rx.Observable<string>;
}