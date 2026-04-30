import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-hire',
  imports: [RouterOutlet, RouterLink],
  //templateUrl: './hire.html',
  styleUrl: './hire.css',
  template:
    `
  
  <div class="m-auto max-w-5xl relative bg-white border-black border">

  <div class="mt-10 m-auto max-w-4xl h-screen">
        <router-outlet></router-outlet>
    </div>
    <a routerLink="/hire/page2">next</a>
</div>
  `
})
export class Hire { }
