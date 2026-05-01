import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hire',
  imports: [RouterLink],
  //templateUrl: './hire.html',
  styleUrl: './hire.css',
  template: `
    <div class="border border-green-500 w-full h-screen">
      <p class="text-white text-4xl">
        "We here at the Generic Nuclear Reactor are thankful for your dedication for what the future
        could be. "
      </p>
      <p class="text-white text-center text-4xl">
        To being your application process, please click the link below.
      </p>

      <a routerLink="/hire/application" class="text-white">click here!</a>
    </div>
  `,
})
export class Hire {}

/*

<div class="m-auto max-w-5xl relative border-black border">
  <div class="mt-10 m-auto max-w-4xl h-screen">
    <router-outlet></router-outlet>
  </div>
  <a routerLink="/hire/page2">next</a>
</div>

<div class="mt-10 m-auto max-w-4xl h-screen">
  <p class="text-white text-4xl">
    "We here at the Generic Nuclear Reactor are thankful for your dedication for what the
    future could be. "
  </p>
  <p class="text-white text-center text-4xl">
    To being your application process, please click the link below.
  </p>

  <a routerLink="/hire/page2" class="text-white">next</a>

  <router-outlet></router-outlet>
</div>
<a routerLink="/hire/page2">next</a>
</div>

*/
