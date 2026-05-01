import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navitem',
  imports: [RouterLink],
  templateUrl: './navitem.html',
  styleUrl: './navitem.css',
})
export class Navitem {
  label = input<string>();
  url = input<string>();
}
