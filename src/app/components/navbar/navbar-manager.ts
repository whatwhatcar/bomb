import { Injectable, signal } from '@angular/core';
import { Router, UrlTree, NavigationEnd } from '@angular/router';
import { Navinfo } from './navinfo';

@Injectable({
  providedIn: 'root',
})
export class NavbarManager {
  current_url = signal<Navinfo[]>([]);

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.current_url.set(this.buildBreadcrumbs());
      }
    });
  }

  private buildBreadcrumbs(): Navinfo[] {
    const tree: UrlTree = this.router.parseUrl(this.router.url);
    const segments = tree.root.children['primary']?.segments.map((s) => s.path) ?? [];
    const items: Navinfo[] = [{ label: '/', url: '/' }];

    let accumulated = '';

    for (const segment of segments) {
      accumulated += '/' + segment;

      items.push({
        label: segment,
        // If on an "application" segment, keep the user on the current page
        // instead of navigating back to /application (e.g. stays on page2)
        url: segment === 'application' ? this.router.url : accumulated,
      });

      // Stop breadcrumb trail at "application" — don't expose sub-pages
      // e.g. show /hire/application, not /hire/application/page2
      if (segment === 'application') break;
    }

    return items;
  }
}
