import { from } from "rxjs";
import { reduce, scan, map } from "rxjs/operators";

const user = [
  {
    name: "Brian",
    loggedIn: false,
    token: null,
  },
  {
    name: "Sam",
    loggedIn: true,
    token: "abc",
  },
  {
    name: "John",
    loggedIn: true,
    token: "123",
  },
];

const state$ = from(user).pipe(
  scan((accumulator, currentValue) => {
    return { ...accumulator, ...currentValue };
  }, {})
);

const name$ = state$
  .pipe(map((state) => state.name))
  .subscribe({ next: console.log, complete: () => console.log("Complete!") });
