import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log(`next: ${value}`),
  error: (error) => console.warn(`error: ${error}`),
  complete: () => console.info("completed"),
};

const interval$ = new Observable<number>((subscriber) => {
  const intervalId = setInterval(() => subscriber.next(Math.random()), 1000);

  return () => {
    clearInterval(intervalId);
    console.log("Intervalo destruido");
  };
});

/**
 * 1- Casteo múltiple
 * 2- También es un observer
 * 3- Next, error y complete
 */

const subject$ = new Subject();
const intervalSubject$ = interval$.subscribe(subject$);

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

// const subs1 = interval$.subscribe((rnd) =>
//   console.log("Subscription 1: ", rnd)
// );
// const subs2 = interval$.subscribe((rnd) =>
//   console.log("Subscription 2: ", rnd)
// );

setTimeout(() => {
  subject$.next(10);
  subject$.complete();
  intervalSubject$.unsubscribe();
}, 3500);
