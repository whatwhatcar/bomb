import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-application',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './application.html',
  styleUrl: './application.css',
})
export class Application {}
