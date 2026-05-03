import { Injectable, signal } from '@angular/core';
import { form } from '@angular/forms/signals';

import { JobInfo, job_default } from './job-info';

interface Felony {
  felony: string;
}

interface Fruit {
  apple: boolean;
  banana: boolean;
}

interface Country {
  country: string;
}

@Injectable({
  providedIn: 'root',
})
export class JobForm {
  message = 'please enter passsword';

  felony_default = {
    felony: '',
  };

  fruit_default = {
    apple: false,
    banana: false,
  };

  ok = false;

  country_default = {
    country: '',
  };

  job_application = signal<JobInfo>(job_default);
  application_form = form(this.job_application);

  felony_model = signal<Felony>(this.felony_default);
  felony_form = form(this.felony_model);

  fruit_model = signal<Fruit>(this.fruit_default);
  fruit_form = form(this.fruit_model);

  country_model = signal<Country>(this.country_default);
  country_form = form(this.country_model);

  reset() {
    this.message = 'please enter password';
    this.application_form().reset(job_default);
  }

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
