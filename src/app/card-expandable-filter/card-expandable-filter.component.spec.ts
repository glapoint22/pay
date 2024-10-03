import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardExpandableFilterComponent } from './card-expandable-filter.component';

describe('CardExpandableFilterComponent', () => {
  let component: CardExpandableFilterComponent;
  let fixture: ComponentFixture<CardExpandableFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardExpandableFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardExpandableFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
