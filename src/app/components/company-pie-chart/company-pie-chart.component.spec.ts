import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyPieChartComponent } from './company-pie-chart.component';

describe('CompanyPieChartComponent', () => {
  let component: CompanyPieChartComponent;
  let fixture: ComponentFixture<CompanyPieChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyPieChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
