import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NavClick } from './nav-click';

@Component({
  selector: 'app-navitem',
  imports: [RouterLink, NavClick],
  //templateUrl: './navitem.html',
  styleUrl: './navitem.css',
  template: `<a
    nav-click
    class="text-2xl top-0 pl-5 sticky text-green-600"
    [routerLink]="[url()]"
    >{{ label() }}</a
  > `,
})
export class Navitem {
  label = input<string>();
  url = input<string>();
}
