import { Component } from '@angular/core';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterLink],
  //templateUrl: './root.html',
  styleUrl: './root.css',
  template: `
    <div class="border border-green-50 w-full h-screen">
      <a [routerLink]="['/home']" class="text-white"> home</a>
      <a [routerLink]="['/about']" class="text-white"> about</a>
      <a [routerLink]="['/hire/page1']" class="text-white"> hire</a>
    </div>
  `,
})
export class Root {}
