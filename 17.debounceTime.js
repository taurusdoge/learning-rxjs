import { fromEvent, debounceTime, map, distinctUntilChanged } from "rxjs";

const inputBox = document.getElementById("text-input");

const click$ = fromEvent(document, "click");
const input$ = fromEvent(inputBox, "keyup");

input$
  .pipe(
    // debounceTime(1000),
    debounce(() => interval(1000)),
    map((event) => event?.target?.value),
    distinctUntilChanged()
  )
  .subscribe(console.log);
