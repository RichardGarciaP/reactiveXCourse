import { fromEvent, interval } from 'rxjs';
import { tap, skip, takeUntil } from 'rxjs/operators';

const boton = document.createElement('button');
boton.innerHTML = 'Detener Timer';
document.querySelector('body').append(boton);

const counter$ = interval(1000);
const clickBtn$ = fromEvent(boton, 'click').pipe(
  tap(() => console.log('tap antes de skip')),
  skip(1),
  tap(() => console.log('tap despues de skip'))
);

counter$.pipe(takeUntil(clickBtn$)).subscribe({
  next: (valor) => console.log('next: ', valor),
  complete: () => console.log('complete'),
});
