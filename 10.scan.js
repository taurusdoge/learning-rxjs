import { from } from "rxjs";
import {
  reduce,
  scan,
  map,
  distinctUntilChanged,
  distinctUntilKeyChanged,
} from "rxjs/operators";

const user = [
  {
    name: "Brian",
    loggedIn: false,
    token: null,
  },
  {
    name: "Brian",
    loggedIn: true,
    token: "abc",
  },
  {
    name: "Brian",
    loggedIn: true,
    token: "123",
  },
];

const state$ = from(user).pipe(
  scan((accumulator, currentValue) => {
    return { ...accumulator, ...currentValue };
  }, {})
);

state$
  .pipe(
    // distinctUntilChanged((prev, curr) => {
    //   return prev.name === curr.name;
    // }),
    distinctUntilKeyChanged("name"),
    map((state) => state.name)
  )
  .subscribe({ next: console.log, complete: () => console.log("Complete!") });
