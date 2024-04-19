import { interval, fromEvent, takeUntil } from "rxjs";

const counter$ = interval(1000);
const click$ = fromEvent(document, "click");

counter$.pipe(takeUntil(click$)).subscribe(console.log);
