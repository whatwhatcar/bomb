import { Injectable, signal, computed } from '@angular/core';
import { form, required } from '@angular/forms/signals';

import { AccountInfo, AccountDefault } from './form-info/account-info';
import { FelonyInfo, FelonyDefault } from './form-info/felony-info';
import { FruitInfo, FruitDefault } from './form-info/fruit-info';
import { CountryInfo, CountryDefault } from './form-info/country-info';

@Injectable({
  providedIn: 'root',
})
export class Page1Service {
  message = 'please enter password';

  account_model = signal<AccountInfo>(AccountDefault);
  account_form = form(this.account_model, (schemePath) => {
    required(schemePath.username, { message: 'username is required' });
    required(schemePath.password, { message: 'password is required' });
  });

  felony_model = signal<FelonyInfo>(FelonyDefault);
  felony_form = form(this.felony_model);

  fruit_model = signal<FruitInfo>(FruitDefault);
  fruit_form = form(this.fruit_model);

  country_model = signal<CountryInfo>(CountryDefault);
  country_form = form(this.country_model);

  ok = computed(() => this.account_form().valid() && this.account_form().dirty());

  reset() {
    this.account_form().reset(AccountDefault);
  }

  click() {}
}
