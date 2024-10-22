import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log(`[Next]: ${value}`),
  error: (error) => console.warn(`[Error]: ${error}`),
  complete: () => console.info("[Completed]"),
};

// const observable$ = Observable.create()
const observable$ = new Observable<string>((subscriber) => {
  subscriber.next("Hola");
  subscriber.next("Mundo");

  subscriber.next("Hola");
  subscriber.next("Mundo");

  //   Generar un error
  //   const a = undefined;
  //   a.nombre = "Ragnar";

  subscriber.complete();

  subscriber.next("Hola");
  subscriber.next("Mundo");
});

// observable$.subscribe(
//   (valor) => console.log("next: ", valor),
//   (error) => console.warn("error: ", error),
//   () => console.info("Completed")
// );

observable$.subscribe(observer);
