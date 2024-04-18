import { map, of, fromEvent, mapTo } from "rxjs";

// of(1, 2, 3, 4, 5)
//   .pipe(map((value) => value * 10))
//   .subscribe(console.log);

const keyup$ = fromEvent(document, "keyup").pipe(map((event) => event.code));
const pressed$ = keyup$.pipe(map((value) => "key pressed"));

keyup$.subscribe(console.log);
pressed$.subscribe(console.log);
