import { interval, map, scan, filter, tap } from "rxjs";

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
    tap((value) => console.log(value)),
    filter((value) => value >= 0)
  )
  .subscribe((value) => {
    countdown.innerHTML = value;

    if (!value) {
      message.innerHTML = "Liftoff!";
    }
  });
