import { Injectable, signal } from '@angular/core';

import { Location } from '@angular/common';

import { Navinfo } from './navinfo';

import { NavigationEnd } from '@angular/router';
import { Router, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavbarManager {
  current_url = signal<Navinfo[]>([]);

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const tree: UrlTree = this.router.parseUrl(this.router.url);

        const segments = tree.root.children['primary']?.segments.map((s) => s.path) || [];

        const items: Array<Navinfo> = [];

        let accumulated = '';

        // root
        items.push({ label: '/', url: '/' });

        for (const segment of segments) {
          accumulated += '/' + segment;

          // url path: /hire/application/page

          //prevent it from going anywhere, stays on the same application page
          // example: if on page 2 will stay on page 2, does not go back to page 1 or /application
          if (segment === 'application') {
            items.push({
              label: segment,
              url: this.router.url,
            });
          }
          //default behavior
          else {
            items.push({
              label: segment,
              url: accumulated,
            });
          }

          if (segment === 'application') {
            break; // stop adding more
          }
        }

        console.log(items);

        this.current_url.set(items);
      }
    });
  }
}
