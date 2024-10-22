import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log(`[Next]: ${value}`),
  error: (error) => console.warn(`[Error]: ${error}`),
  complete: () => console.info("[Completed]"),
};

const intervalo$ = new Observable<number>((subscriber) => {
  //Crear un contador
  let count = 0;
  const intervalId = setInterval(() => {
    subscriber.next(++count);
    console.log(count);
  }, 1000);

  setTimeout(() => {
    subscriber.complete();
  }, 2500);

  return () => {
    clearInterval(intervalId);
    console.log("Intervalo destruido");
  };
});

const subscription1 = intervalo$.subscribe(observer);
const subscription2 = intervalo$.subscribe(observer);
const subscription3 = intervalo$.subscribe(observer);

subscription1.add(subscription2);
subscription1.add(subscription3);

setTimeout(() => {
  subscription1.unsubscribe();
  // subscription2.unsubscribe();
  // subscription3.unsubscribe();
  console.log("Completed timeout");
}, 6000);
