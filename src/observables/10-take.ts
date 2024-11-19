import { of } from 'rxjs';
import { take, tap } from 'rxjs/operators';

const numeros$ = of(1, 2, 3, 4, 5).pipe(tap(console.log));

numeros$
  .pipe(
    tap((t) => console.log('tap ', t)),
    take(3)
  )
  .subscribe({
    next: (numero) => console.log('next: ', numero),
    complete: () => console.log('complete'),
  });
