import { of, range } from "rxjs";

function hello() {
  return "hello world";
}

const observer = {
  next: (val) => console.log("next", val),
  error: (err) => console.log("error", err),
  complete: () => console.log("complete!"),
};

// const source$ = of([1], 2, 3, 4, 5);
const source$ = range(1, 5);

source$.subscribe(observer);
console.log(hello());
