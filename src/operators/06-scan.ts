import { from } from 'rxjs';
import { map, reduce, scan } from 'rxjs/operators';

const numbers = [1, 2, 3, 4, 5];

// const totalAcumulador = (acc, cur) => {
//   return acc + cur;
// };
const totalAcumulador = (acc, cur) => acc + cur;

//Reduce
from(numbers).pipe(reduce(totalAcumulador, 0)).subscribe(console.log);

//Scan
from(numbers).pipe(scan(totalAcumulador, 0)).subscribe(console.log);

// Redux
interface User {
  id?: string;
  isAutenticated?: boolean;
  token?: string;
  edad?: number;
}

const user: User[] = [
  { id: 'fher', isAutenticated: false, token: null },
  { id: 'fher', isAutenticated: true, token: 'ABC' },
  { id: 'fher', isAutenticated: true, token: 'ABC123' },
];

const state$ = from<User[]>(user).pipe(
  scan(
    (acc, cur) => {
      return { ...acc, ...cur };
    },
    { edad: 33, isAutenticated: false, token: null, id: 'fher' }
  )
);

const id$ = state$.pipe(map((state) => state.id));

id$.subscribe(console.log);
