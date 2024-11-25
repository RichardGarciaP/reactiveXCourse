import { catchError, map, of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';

const url = 'https://api.github.com/users?per_page=5';

const handleError = (response: Response) => {
  if (!response.ok) throw new Error(response.statusText);

  return response;
};

const catchesError = (err: AjaxError) => {
  console.warn('Error en:  ', err.message);
  return of([]);
};

const fetchPromesa = fetch(url);

// fetchPromesa
//   .then((response) => response.json())
//   .then((data) => console.log('data: ', data))
//   .catch((err) => console.warn('Error en usuarios ', err));

// fetchPromesa
//   .then(handleError)
//   .then((response) => response.json())
//   .then((data) => console.log('data: ', data))
//   .catch((err) => console.warn('Error en usuarios ', err));

ajax(url)
  .pipe(
    map((res) => res.response),
    catchError(catchesError)
  )
  .subscribe((users) => console.log('usuarios: ', users));
