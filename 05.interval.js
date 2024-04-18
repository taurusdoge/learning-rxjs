import { interval, timer } from "rxjs";

const interval$ = interval(1000);
const timer$ = timer(2000, 500);

// timer$.subscribe(console.log);
// interval$.subscribe(console.log);
