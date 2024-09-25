import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPopupHeaderComponent } from './modal-popup-header.component';

describe('ModalPopupHeaderComponent', () => {
  let component: ModalPopupHeaderComponent;
  let fixture: ComponentFixture<ModalPopupHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalPopupHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPopupHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
