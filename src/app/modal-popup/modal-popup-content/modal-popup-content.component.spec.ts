import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPopupContentComponent } from './modal-popup-content.component';

describe('ModalPopupContentComponent', () => {
  let component: ModalPopupContentComponent;
  let fixture: ComponentFixture<ModalPopupContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalPopupContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPopupContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
