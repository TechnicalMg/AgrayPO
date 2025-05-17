import { TestBed } from '@angular/core/testing';

import { AdminDashboardHomeService } from './admin-dashboard-home.service';

describe('AdminDashboardHomeService', () => {
  let service: AdminDashboardHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminDashboardHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
