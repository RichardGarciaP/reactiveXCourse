import { of } from "rxjs";

// const obs$ = of(1, 2, 3, 4, 5, 6);
// const obs$ = of(...[1, 2, 3, 4, 5, 6], 2,3,5);
const obs$ = of(
  [1, 2],
  { a: 1, b: 2 },
  function () {},
  true,
  Promise.resolve(true)
);

console.log("Inicio de Obs$");

obs$.subscribe({
  next: (value) => console.log("next", value),
  error: null,
  complete: () => console.log("Temrinamos la secuencia"),
});

console.log("Fin de Obs$");
