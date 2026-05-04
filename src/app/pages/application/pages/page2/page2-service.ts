import { Injectable, signal } from '@angular/core';
import { form } from '@angular/forms/signals';

import { WorkPressureInfo, WorkPressureDefault } from './info/work-pressure';
import { AlphaMaleInfo, AlphaMaleDefault } from './info/alpha-male';

@Injectable({
  providedIn: 'root',
})
export class Page2Service {
  work_pressure_model = signal<WorkPressureInfo>(WorkPressureDefault);
  work_pressure_form = form(this.work_pressure_model);

  alpha_male_model = signal<AlphaMaleInfo>(AlphaMaleDefault);
  alpha_male_form = form(this.alpha_male_model);
}
