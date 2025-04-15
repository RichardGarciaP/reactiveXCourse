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

// const obs$ = ajax.getJSON(url).pipe(catchError(handleError));
// const obs2$ = ajax(url).pipe(catchError(handleError));

const obs$ = ajax.getJSON(url);
const obs2$ = ajax(url);

obs$.pipe(catchError(handleError)).subscribe({
  next: (val) => console.log('next', val),
  error: (error) => console.log('error en subs', error),
  complete: () => console.log('complete'),
});

// obs2$.subscribe((data) => console.log('Ajax', data));
