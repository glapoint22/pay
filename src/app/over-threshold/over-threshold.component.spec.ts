import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverThresholdComponent } from './over-threshold.component';

describe('OverThresholdComponent', () => {
  let component: OverThresholdComponent;
  let fixture: ComponentFixture<OverThresholdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverThresholdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverThresholdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
