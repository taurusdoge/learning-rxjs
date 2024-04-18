import { from } from "rxjs";

function* hello() {
  yield "Hello";
  yield "World";
}

const observer = {
  next: (val) => console.log("next", val),
  error: (err) => console.log("error", err),
  complete: () => console.log("complete!"),
};

// const source$ = from([1, 2, 3, 4, 5]);
// const source$ = from("Hello");
// const source$ = from(fetch("https://api.github.com/users/octocat"));
const source$ = from(hello());

source$.subscribe(observer);
