import { Component, inject, computed, signal } from '@angular/core';
import { Router, RouterLink, RouterOutlet, NavigationEnd } from '@angular/router';
import { ApplicationRoutes } from './application.routes';

@Component({
  selector: 'app-application',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './application.html',
})
export class Application {
  private router = inject(Router);

  pages = ApplicationRoutes.filter((r) => r.path && r.path !== '**' && r.path !== '').map(
    (r) => r.path as string,
  );

  private currentUrl = signal(this.router.url);

  constructor() {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.currentUrl.set(this.router.url);
      }
    });
  }

  currentPage = computed(() => {
    const segments = this.currentUrl().split('/');
    return segments[segments.length - 1];
  });

  prevPage = computed(() => {
    const idx = this.pages.indexOf(this.currentPage());
    return idx > 0 ? this.pages[idx - 1] : null;
  });

  nextPage = computed(() => {
    const idx = this.pages.indexOf(this.currentPage());
    return idx < this.pages.length - 1 ? this.pages[idx + 1] : null;
  });
}
