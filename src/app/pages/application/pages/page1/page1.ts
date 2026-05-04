import { Component, inject } from '@angular/core';
import { FormField } from '@angular/forms/signals';

import { Title } from '../../page-template/title/title';
import { Section } from '../../page-template/section/section';

import { Page1Service } from './page1-service';

import { ApplicationForm } from '../../form';

@Component({
  selector: 'app-page1',
  imports: [Title, Section, FormField],
  templateUrl: './page1.html',
  styleUrls: ['./page1.css', '../../page-template/input.css'],
})
export class Page1 {
  page_signal = inject(Page1Service);
  app_form = inject(ApplicationForm);
}
