import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPopupFooterComponent } from './modal-popup-footer.component';

describe('ModalPopupFooterComponent', () => {
  let component: ModalPopupFooterComponent;
  let fixture: ComponentFixture<ModalPopupFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalPopupFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPopupFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
