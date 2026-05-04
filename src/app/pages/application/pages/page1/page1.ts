import { Component, inject } from '@angular/core';
import { FormField } from '@angular/forms/signals';

import { Title } from '../../template/title/title';
import { Section } from '../../template/section/section';

import { Countries } from './info/country';

import { Page1Service } from './page1-service';
import { ApplicationForm } from '../../form';

@Component({
  selector: 'app-page1',
  imports: [FormField, Title, Section],
  templateUrl: './page1.html',
  styleUrls: ['./page1.css', '../../template/input.css'],
})
export class Page1 {
  country_info = Countries;
  page_service = inject(Page1Service);
  app_form = inject(ApplicationForm);
}
