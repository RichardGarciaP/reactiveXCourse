import { fromEvent } from 'rxjs';
import { first, map, take, tap } from 'rxjs/operators';

const click$ = fromEvent<PointerEvent>(document, 'click');

click$
  .pipe(
    tap<PointerEvent>(console.log),
    map((clientX, clientY) => ({
      clientY,
      clientX,
    })),
    first((event) => event.clientY >= 150)
    // map((event) => ({ clientY: event.clientY, clientX: event.clientX }))
    // first<PointerEvent>((event) => event.clientY >= 150)
  )
  .subscribe({
    next: (val) => console.log('next: ', val),
    complete: () => console.log('complete'),
  });
