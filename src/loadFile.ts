import * as Rx from "rxjs";
import * as Fs from "fs";

interface Observer<Value> {
	error: (error: Error) => void;
	next: (data: Value) => void;
	complete: () => void;
}

export function loadFile(path: string): Rx.Observable<string> {
	return Rx.Observable.create(
		(observer: Observer<string>) => {
			Fs.readFile(
				path,
				{ encoding: "utf8" },
				(error, data) => {
					if (error) {
						observer.error(new Error(`Could not read file ${error.path}: ${error.message}`));
					} else {
						observer.next(data);
					}
					observer.complete();
				}
			);
		}
	);
}