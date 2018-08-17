#!/usr/bin/env node

import * as Rx from "rxjs";

export function Init() {
	const observable = Rx.of("Hello World");
	observable.subscribe(console.log);
}

Init();