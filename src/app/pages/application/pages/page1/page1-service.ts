import { Injectable, signal, computed } from '@angular/core';
import { form, required } from '@angular/forms/signals';

import { AccountInfo, AccountDefault } from './info/account';
import { FelonyInfo, FelonyDefault } from './info/felony';
import { FruitInfo, FruitDefault } from './info/fruit';
import { CountryInfo, CountryDefault } from './info/country';

@Injectable({
  providedIn: 'root',
})
export class Page1Service {
  message = 'please enter password';

  private account_model = signal<AccountInfo>(AccountDefault);
  public account_form = form(this.account_model, (schemePath) => {
    required(schemePath.username, { message: 'username is required' });
    required(schemePath.password, { message: 'password is required' });
  });

  private felony_model = signal<FelonyInfo>(FelonyDefault);
  public felony_form = form(this.felony_model);

  private fruit_model = signal<FruitInfo>(FruitDefault);
  public fruit_form = form(this.fruit_model);

  private country_model = signal<CountryInfo>(CountryDefault);
  public country_form = form(this.country_model);

  ok = computed(() => this.account_form().valid() && this.account_form().dirty());

  reset() {
    this.account_form().reset(AccountDefault);
  }

  click() {
    alert(this.account_form.username().value());
  }
}
