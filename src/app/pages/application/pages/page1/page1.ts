import { Component, inject, input } from '@angular/core';
import { FormField } from '@angular/forms/signals';

import { Section } from '../../page-template/section/section';
import { JobForm } from '../../job-form';

import { Submit } from './submit-button';

@Component({
  selector: 'app-page1',
  imports: [FormField, Submit, Section],
  // templateUrl: './page1.html',
  styleUrl: './page1.css',
  template: `
    <h1 class="text-center">EMPLOYMENT / JOB APPLICATION</h1>

    <h2 class="flex justify-center items-center border-b border-black border bg-blue-200 h-10">
      ACCOUNT INFORMATION
    </h2>

    <form onsubmit="return false;" class="flex flex-col">
      <label for="username">Username:</label>
      <input
        type="text"
        id="username"
        [formField]="job_form.application_form.username"
        class="border-b border-black min-w-0 flex-1"
      />

      <label for="password">Password:</label>
      <input
        type="password"
        id="password"
        [formField]="job_form.application_form.password"
        class="border-b border-black min-w-0 flex-1"
      />

      <p>{{ job_form.message }}</p>
      <input submit-button type="submit" />
    </form>
    <app-section header="Hello"></app-section>
  `,
})
export class Page1 {
  job_form = inject(JobForm);
}
