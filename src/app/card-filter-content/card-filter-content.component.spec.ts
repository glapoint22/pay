import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFilterContentComponent } from './card-filter-content.component';

describe('CardFilterContentComponent', () => {
  let component: CardFilterContentComponent;
  let fixture: ComponentFixture<CardFilterContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardFilterContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardFilterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
