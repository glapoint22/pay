import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateFilterPopupComponent } from './date-filter-popup.component';

describe('DateFilterPopupComponent', () => {
  let component: DateFilterPopupComponent;
  let fixture: ComponentFixture<DateFilterPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateFilterPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateFilterPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
