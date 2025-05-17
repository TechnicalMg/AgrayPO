import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDesignComponent } from './test-design.component';

describe('TestDesignComponent', () => {
  let component: TestDesignComponent;
  let fixture: ComponentFixture<TestDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestDesignComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
