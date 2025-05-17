import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalDashboardComponent } from './final-dashboard.component';

describe('FinalDashboardComponent', () => {
  let component: FinalDashboardComponent;
  let fixture: ComponentFixture<FinalDashboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FinalDashboardComponent],
      imports: [
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
