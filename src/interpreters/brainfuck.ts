import * as Rx from "rxjs";
import { Interpreter } from "../interpreter";

export const interpreter: Interpreter = (sourceFile: string) => {
	return Rx.from(sourceFile.split("\n"));
};