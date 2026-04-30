import { Component } from '@angular/core';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterLink],
  //templateUrl: './root.html',
  styleUrl: './root.css',
  template: `
    <div class="flex border border-green-50 w-full h-screen">
      <a [routerLink]="['/home']" class="text-white">
        <img src="folder.svg" />
        <p>home</p>
      </a>
      <a [routerLink]="['/about']" class="text-white">
        <img src="folder.svg" />
        <p>about</p>
      </a>
      <a [routerLink]="['/hire/page1']" class="text-white">
        <img src="folder.svg" />
        <p>hire</p>
      </a>
    </div>
  `,
})
export class Root {}

//hello
