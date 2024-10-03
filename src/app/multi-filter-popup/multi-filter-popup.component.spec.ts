import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiFilterPopupComponent } from './multi-filter-popup.component';

describe('MultiFilterPopupComponent', () => {
  let component: MultiFilterPopupComponent;
  let fixture: ComponentFixture<MultiFilterPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiFilterPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiFilterPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
