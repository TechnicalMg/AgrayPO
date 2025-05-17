import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignUserMenuComponent } from './assign-user-menu.component';

describe('AssignUserMenuComponent', () => {
  let component: AssignUserMenuComponent;
  let fixture: ComponentFixture<AssignUserMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignUserMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignUserMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
