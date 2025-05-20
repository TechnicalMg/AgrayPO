import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoGenerationComponent } from './po-generation.component';

describe('PoGenerationComponent', () => {
  let component: PoGenerationComponent;
  let fixture: ComponentFixture<PoGenerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoGenerationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
