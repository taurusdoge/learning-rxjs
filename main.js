import { interval, map, scan, filter, tap, takeWhile } from "rxjs";

// elem refs
const countdown = document.getElementById("countdown");
const message = document.getElementById("message");

// streams
const counter$ = interval(1000);

counter$
  .pipe(
    map(() => -1),
    scan((accumulator, current) => {
      return accumulator + current;
    }, 5),
    tap(console.log),
    // filter((value) => value >= 0)
    takeWhile((value) => value >= 0)
  )
  .subscribe((value) => {
    countdown.innerHTML = value;

    if (!value) {
      message.innerHTML = "Liftoff!";
    }
  });
