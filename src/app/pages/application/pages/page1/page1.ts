import { Component, inject } from '@angular/core';
import { FormField } from '@angular/forms/signals';

import { Section } from '../../page-template/section/section';
import { JobForm } from '../../job-form';

@Component({
  selector: 'app-page1',
  imports: [FormField, Section],
  templateUrl: './page1.html',
  styleUrls: ['./page1.css', '../../page-template/input.css'],
})
export class Page1 {
  job_form = inject(JobForm);
}
