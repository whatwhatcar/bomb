import { Component, inject } from '@angular/core';
import { FormField } from '@angular/forms/signals';

import { JobForm } from '../../form/job-form';

import { Submit } from './submit-button';

@Component({
  selector: 'app-page1',
  imports: [FormField, Submit],
  templateUrl: './page1.html',
  styleUrl: './page1.css',
})
export class Page1 {
  job_form = inject(JobForm);
}
