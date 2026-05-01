import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApplicationRoutes } from './application.routes';

@Injectable({ providedIn: 'root' })
export class NavigationService {
  private pages = ApplicationRoutes.filter((r) => r.path && r.path !== '').map(
    (r) => r.path as string,
  );

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  get currentIndex(): number {
    const current = this.router.url.split('/').at(-1)!;
    return this.pages.indexOf(current);
  }

  get hasPrev(): boolean {
    return this.currentIndex > 0;
  }
  get hasNext(): boolean {
    return this.currentIndex < this.pages.length - 1;
  }

  prev(): void {
    if (this.hasPrev)
      this.router.navigate([this.pages[this.currentIndex - 1]], { relativeTo: this.route });
  }

  next(): void {
    if (this.hasNext)
      this.router.navigate([this.pages[this.currentIndex + 1]], { relativeTo: this.route });
  }
}
