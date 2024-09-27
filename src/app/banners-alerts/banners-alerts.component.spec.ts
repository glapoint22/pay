import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannersAlertsComponent } from './banners-alerts.component';

describe('BannersAlertsComponent', () => {
  let component: BannersAlertsComponent;
  let fixture: ComponentFixture<BannersAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannersAlertsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannersAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
