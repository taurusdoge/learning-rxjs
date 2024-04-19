import { of, take, fromEvent, map, first } from "rxjs";

const numbers$ = of(1, 2, 3, 4, 5);
const click$ = fromEvent(document, "click");

click$
  .pipe(
    map((event) => ({
      x: event.clientX,
      y: event.clientY,
    })),
    first(({ y }) => y > 200) // filter, take(1)
    // take(1)
  )
  .subscribe({
    next: console.log,
    complete: () => console.log("complete!"),
  });
