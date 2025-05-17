import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanDbSelectionComponent } from './compan-db-selection.component';

describe('CompanDbSelectionComponent', () => {
  let component: CompanDbSelectionComponent;
  let fixture: ComponentFixture<CompanDbSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanDbSelectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanDbSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
