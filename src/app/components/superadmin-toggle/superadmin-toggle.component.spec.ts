import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminToggleComponent } from './superadmin-toggle.component';

describe('SuperadminToggleComponent', () => {
  let component: SuperadminToggleComponent;
  let fixture: ComponentFixture<SuperadminToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperadminToggleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperadminToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
