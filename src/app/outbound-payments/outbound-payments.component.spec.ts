import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutboundPaymentsComponent } from './outbound-payments.component';

describe('OutboundPaymentsComponent', () => {
  let component: OutboundPaymentsComponent;
  let fixture: ComponentFixture<OutboundPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutboundPaymentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutboundPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
