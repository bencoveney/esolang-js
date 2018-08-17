import * as Rx from "rxjs";
export interface Interpreter {
    (sourceFile: string): Rx.Observable<string>;
}
