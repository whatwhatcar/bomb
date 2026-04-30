import { TestBed } from '@angular/core/testing';

import { NavbarManager } from './navbar-manager';

describe('NavbarManager', () => {
  let service: NavbarManager;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavbarManager);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
