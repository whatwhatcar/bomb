import { Component, inject } from '@angular/core';

import { NavbarManager } from './navbar-manager';
import { Navitem } from './navitem/navitem';

@Component({
  selector: 'app-navbar',
  imports: [Navitem],
  //templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  template: `<nav class="flex flex-row items-center w-full h-10 border border-green-900">
    @for (item of navbar_manager.current_url(); track $index) {
      <app-navitem [label]="item.label" [url]="item.url"></app-navitem>
    }
  </nav>`,
})
export class Navbar {
  navbar_manager = inject(NavbarManager);
}

/*


@empty {

}

<nav>
  <ul class="flex">
    <li>
      <a highlight routerLink="/home" routerLinkActive="is-active" class="nav-item">Home</a>
    </li>
    <li>
      <a highlight routerLink="/about" routerLinkActive="is-active" class="nav-item">About</a>
    </li>
    <li>
      <a highlight routerLink="/hire" routerLinkActive="is-active" class="nav-item">Hire</a>
    </li>
  </ul>
</nav>

@import "tailwindcss";

.nav-item {
    top: 0;
    padding: 10px;
    display: grid;

    background-color: black;
    color: var(--accent-color);
    border: 1px solid var(--accent-color);
}

.is-active {
    background-color: var(--accent-color);
    color: black;
}
*/
