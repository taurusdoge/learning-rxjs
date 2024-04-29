import { fromEvent, interval, map, sample } from "rxjs";

const click$ = fromEvent(document, "click");
const timer$ = interval(1000);

timer$.pipe(sample(click$)).subscribe(console.log);
