import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCompanyManagementComponent } from './view-company-management.component';

describe('ViewCompanyManagementComponent', () => {
  let component: ViewCompanyManagementComponent;
  let fixture: ComponentFixture<ViewCompanyManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewCompanyManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCompanyManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
