import { fromEvent, debounceTime, throttleTime } from "rxjs";

const click$ = fromEvent(document, "click");

click$.pipe(throttleTime(3000)).subscribe(console.log);
