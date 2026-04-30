import { Directive } from '@angular/core';

@Directive({
  selector: '[highlight]',
  host: {
    '(mouseenter)': 'enter()',
    '(mouseleave)': 'leave()',
  }
})
export class Highlight {
  enter() {

  }

  leave() {

  }
}
