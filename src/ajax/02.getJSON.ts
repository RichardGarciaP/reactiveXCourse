import { catchError, of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';

// const url = 'https://api.github.com/users?per_page=5';
const url = 'https://httpbxxin.org/delay/1';

const handleError = (res: AjaxError) => {
  console.warn('error:', res.message);
  return of({ ok: false, users: [] });
};

// const obs$ = ajax.getJSON(url, {
//   'Content-Type': 'application/json',
//   token: 'abc123',
// });

const obs$ = ajax.getJSON(url).pipe(catchError(handleError));
const obs2$ = ajax(url).pipe(catchError(handleError));

obs$.subscribe((data) => console.log('Json', data));
obs2$.subscribe((data) => console.log('Ajax', data));
