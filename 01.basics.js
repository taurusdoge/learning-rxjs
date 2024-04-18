const { Observable } = require("rxjs");

const observer = {
  next: (next) => console.log(next),
};

const observable = new Observable((subscriber) => {
  let count = 0;

  const id = setInterval(() => {
    subscriber.next(count);
    // subscriber.complete(); // isn't called on .unsubscribe()
    count += 1;
  }, 1000);

  return () => {
    console.log("done");
    clearInterval(id);
  };
});

const subscription = observable.subscribe(observer);
const subscriptionTwo = observable.subscribe(observer);

// subscription.add(subscriptionTwo); // use if you want to .unsubscribe() once

setTimeout(() => {
  subscription.unsubscribe();
  subscriptionTwo.unsubscribe();
}, 3500);
