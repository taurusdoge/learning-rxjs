import { distinctUntilChanged, of } from "rxjs";

const numbers$ = of(1, "1", 1, 2, 3, 3, 3, 4, 5, 3);

numbers$.pipe(distinctUntilChanged()).subscribe(console.log);
