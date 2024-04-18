import { fromEvent } from "rxjs";

const observer = {
  next: (val) => console.log("next", val),
  error: (err) => console.log("error", err),
  complete: () => console.log("complete"),
};
const source$ = fromEvent(document, "keyup");

const subOne = source$.subscribe(observer);
const subTwo = source$.subscribe(observer);

setTimeout(() => {
  console.log("unsubscribing");
  subOne.unsubscribe();
}, 3000);
