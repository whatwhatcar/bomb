import { Directive, inject } from '@angular/core';
import { JobForm } from '../../form/job-form';

@Directive({
  selector: '[submit-button]',
  host: {
    '(click)': 'job_form.click()',
  },
})
export class Submit {
  job_form = inject(JobForm);
}
