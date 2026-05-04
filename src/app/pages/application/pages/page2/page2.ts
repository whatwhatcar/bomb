import { Component, inject, input } from '@angular/core';
import { FormField } from '@angular/forms/signals';

import { Section } from '../../page-template/section/section';
import { ApplicationForm } from '../../form';

@Component({
  selector: 'app-page2',
  imports: [Section],
  templateUrl: './page2.html',
  styleUrl: './page2.css',
})
export class Page2 {
  app_form = inject(ApplicationForm);
}
