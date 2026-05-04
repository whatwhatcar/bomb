import { Injectable, inject } from '@angular/core';
import { Page1Service } from './pages/page1/page1-service';

@Injectable({
  providedIn: 'root',
})
export class ApplicationForm {
  page1 = inject(Page1Service);

  submit() {
    alert(this.page1.account_form.username().value());
  }
}
