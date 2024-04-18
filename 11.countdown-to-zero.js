import { interval, map, scan, filter } from "rxjs";

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
    }, 10),
    filter((value) => value >= 0)
  )
  .subscribe((value) => {
    countdown.innerHTML = value;

    if (!value) {
      message.innerHTML = "Liftoff!";
    }
  });
