import { asyncScheduler, fromEvent } from 'rxjs';
import { throttleTime, distinctUntilChanged, map } from 'rxjs/operators';

const click$ = fromEvent(document, 'click');

click$.pipe(throttleTime(3000));
// .subscribe(console.log);

//Ejemplo 2
const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');

input$
  .pipe(
    throttleTime(1000, asyncScheduler, { leading: true, trailing: true }),
    distinctUntilChanged(),
    map<KeyboardEvent, string>((val) => (val?.target as HTMLInputElement).value)
  )
  .subscribe(console.log);
