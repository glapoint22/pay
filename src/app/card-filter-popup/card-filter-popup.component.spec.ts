import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFilterPopupComponent } from './card-filter-popup.component';

describe('CardFilterPopupComponent', () => {
  let component: CardFilterPopupComponent;
  let fixture: ComponentFixture<CardFilterPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardFilterPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardFilterPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
