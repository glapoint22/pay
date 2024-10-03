import { Component, viewChild } from '@angular/core';
import { FilterComponent } from '../filter/filter.component';
import { IconComponent } from '../icon/icon.component';
import { DatePipe } from '@angular/common';
import { DateRangeOption } from '../models/date-range-option';
import { DateFilterData } from '../models/date-filter-data';

@Component({
  selector: 'date-filter',
  standalone: true,
  imports: [
    FilterComponent,
    IconComponent
  ],
  templateUrl: './date-filter.component.html',
  styleUrl: './date-filter.component.scss'
})
export class DateFilterComponent {
  private filter = viewChild(FilterComponent);
  protected fromDate!: Date;
  protected toDate!: Date;
  protected dateRangeOption!: DateRangeOption;

  protected async onClick(): Promise<void> {
    const { DateFilterPopupComponent } = await import('../date-filter-popup/date-filter-popup.component');

    this.filter()?.togglePopupFilter(DateFilterPopupComponent, {
      fromDate: this.fromDate,
      toDate: this.toDate,
      dateRangeOption: this.dateRangeOption
    } as DateFilterData);
  }

  protected onChange(dateFilterData: DateFilterData): void {
    if (!dateFilterData) {
      this.fromDate = new Date();
      this.toDate = new Date();
      this.dateRangeOption = DateRangeOption.SingleDate;
      return;
    }

    const datePipe = new DatePipe('en-US');

    this.fromDate = dateFilterData.fromDate;
    this.toDate = dateFilterData.toDate;
    this.dateRangeOption = dateFilterData.dateRangeOption;

    let value: string | null;

    if (this.dateRangeOption === DateRangeOption.DateRange) {
      const startFormatted = datePipe.transform(this.fromDate, 'MMM d');
      const endFormatted = datePipe.transform(this.toDate, 'MMM d, y');

      value = `${startFormatted} - ${endFormatted}`;
    } else {
      value = datePipe.transform(dateFilterData.fromDate, 'MMM d, y');
    }

    this.filter()?.setValue(value);
  }
}