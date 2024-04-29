import { auditTime, fromEvent, interval, map, sample } from "rxjs";

const click$ = fromEvent(document, "click");

click$.pipe(auditTime(4000)).subscribe(console.log);
