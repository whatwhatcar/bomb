import { Directive } from '@angular/core';

@Directive({
  selector: '[nav-click]',
  host: {
    '(mouseenter)': 'enter()',
    '(mouseleave)': 'leave()',
  },
})
export class NavClick {
  constructor() {}
  enter() {}
  leave() {}
}
