import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandableFilterComponent } from './expandable-filter.component';

describe('ExpandableFilterComponent', () => {
  let component: ExpandableFilterComponent;
  let fixture: ComponentFixture<ExpandableFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpandableFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpandableFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
