import { TestBed } from '@angular/core/testing';

import { AdminUserLoginService } from './admin-user-login.service';

describe('AdminUserLoginService', () => {
  let service: AdminUserLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminUserLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
