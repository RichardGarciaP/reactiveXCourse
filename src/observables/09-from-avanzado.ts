import { of, from } from "rxjs";

/**
 * of = toma argumentos y genera una secuencia
 * from = array, promise, iterable, observable
 */

const observer = {
  next: (value) => console.log("next:", value),
  complete: () => console.log("complete"),
};

const miGenerador = function* () {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
};

const miIterable = miGenerador();

// for (const id of miIterable) {
//   console.log(id);
// }

from(miIterable).subscribe(observer);

// const source$ = from([1, 2, 3, 4, 5]);
// const source$ = of(...[1, 2, 3, 4, 5]);
// const source$ = from("Ragnar");

const source$ = from<Promise<Response>>(
  fetch("https://api.github.com/users/klerith")
);

// source$.subscribe(async (res) => {
//   console.log(res);
//   const data = await res.json();
//   console.log(data);
// });

// source$.subscribe(observer);
