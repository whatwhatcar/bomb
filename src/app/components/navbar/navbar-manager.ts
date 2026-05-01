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

          items.push({
            label: segment,
            url: accumulated,
          });

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
