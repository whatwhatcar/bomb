import { Injectable, signal } from '@angular/core';
import { form } from '@angular/forms/signals';

import { JobInfo } from './job-info';

@Injectable({
  providedIn: 'root',
})
export class JobForm {
  message = 'please enter passsword';

  job_application = signal<JobInfo>({
    username: '',
    password: '',
  });

  application_form = form(this.job_application);

  click() {
    switch (this.application_form.password().value()) {
      case 'password':
        break;
      case 'incorrect':
        this.message = 'try again';
        break;
      case 'again':
        this.message = 'try again later';
        break;
      case 'again later':
        this.message = 'access code 1234';
        break;
      default:
        this.message = 'password is incorrect';
    }
  }
}
