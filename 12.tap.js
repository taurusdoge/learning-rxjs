import { of, map, tap } from "rxjs";

const numbers$ = of(1, 2, 3, 4, 5);

numbers$
  .pipe(
    tap((value) => console.log("before", value)),
    map((value) => value * 10),
    tap({
      next: (value) => console.log("after", value),
      complete: () => console.log("done!"),
    })
  )
  .subscribe((value) => {
    console.log("from subscribe", value);
  });
