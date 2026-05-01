import { Component, computed, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet, NavigationEnd } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map } from 'rxjs';
import { ApplicationRoutes } from './application.routes';

@Component({
  selector: 'app-application',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './application.html',
})
export class Application {
  private router = inject(Router);

  private pages = ApplicationRoutes.filter((r) => r.path && r.path !== '**' && r.path !== '').map(
    (r) => r.path as string,
  );

  private currentUrl = toSignal(
    this.router.events.pipe(
      filter((e) => e instanceof NavigationEnd),
      map(() => this.router.url),
    ),
    { initialValue: this.router.url },
  );

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
