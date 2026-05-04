import { Component, inject, input } from '@angular/core';
import { FormField } from '@angular/forms/signals';

import { Title } from '../../template/title/title';
import { Section } from '../../template/section/section';

import { Page2Service } from './page2-service';
import { ApplicationForm } from '../../form';

@Component({
  selector: 'app-page2',
  imports: [FormField, Title, Section],
  templateUrl: './page2.html',
  styleUrl: './page2.css',
})
export class Page2 {
  page_service = inject(Page2Service);
  app_form = inject(ApplicationForm);
}
