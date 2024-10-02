import { Component, viewChild } from '@angular/core';
import { FilterComponent } from '../filter/filter.component';
import { IconComponent } from '../icon/icon.component';
import { DatePipe } from '@angular/common';
import { DateRangeOption } from '../date-filter-popup/models/date-range-option';

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
  protected dateRangeOption!: number;

  protected async onClick(): Promise<void> {
    const { DateFilterPopupComponent } = await import('../date-filter-popup/date-filter-popup.component');

    this.filter()?.togglePopupFilter(DateFilterPopupComponent, {
      fromDate: this.fromDate,
      toDate: this.toDate,
      dateRangeOption: this.dateRangeOption
    });
  }

  protected onChange(value: any): void {
    if (!value) {
      
      return;
    }

    this.fromDate = value.fromDate;
    this.toDate = value.toDate;
    this.dateRangeOption = value.selectedOption;

    let result: string | null;
    const datePipe = new DatePipe('en-US');

    if (this.dateRangeOption === DateRangeOption.DateRange) {
      const startFormatted = datePipe.transform(this.fromDate, 'MMM d');
      const endFormatted = datePipe.transform(this.toDate, 'MMM d, y');

      result = `${startFormatted} - ${endFormatted}`;
    } else {
      result = datePipe.transform(value.fromDate, 'MMM d, y');
    }

    this.filter()?.setValue(result);
  }
}