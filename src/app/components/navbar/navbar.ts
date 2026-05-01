import { Component, inject } from '@angular/core';

import { NavbarManager } from './navbar-manager';
import { Navitem } from './navitem/navitem';

@Component({
  selector: 'app-navbar',
  imports: [Navitem],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  navbar_manager = inject(NavbarManager);
}
