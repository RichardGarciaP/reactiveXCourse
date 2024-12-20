import { from, of } from 'rxjs';
import { distinct, distinctUntilChanged } from 'rxjs/operators';

const numeros$ = of(1, '1', 1, 3, 3, 2, 2, 4, 4, 5, 3, '1');

numeros$.pipe(distinctUntilChanged()).subscribe(console.log);

interface Personaje {
  nombre: string;
}

const personajes: Personaje[] = [
  {
    nombre: 'Megaman',
  },
  {
    nombre: 'Megaman',
  },
  {
    nombre: 'X',
  },
  {
    nombre: 'Zero',
  },
  {
    nombre: 'Dr. wILLY',
  },
  {
    nombre: 'X',
  },
  {
    nombre: 'X',
  },
  {
    nombre: 'Megaman',
  },
  {
    nombre: 'Zero',
  },
];

from(personajes)
  .pipe(distinctUntilChanged((prev, cur) => prev.nombre === cur.nombre))
  .subscribe(console.log); // Distint solo funciona con valores primitivos, no con
