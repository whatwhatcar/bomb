import { TestBed } from '@angular/core/testing';

import { JobForm } from './job-form';

describe('JobForm', () => {
  let service: JobForm;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobForm);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
