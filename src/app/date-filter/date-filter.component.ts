import { Component, input, output, viewChild } from '@angular/core';
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
  public value = input.required<DateFilterData>();
  public onUpdate = output<DateFilterData>();
  private filter = viewChild(FilterComponent);

  public ngOnInit(): void {
    const formattedValue = this.setFormattedValue(this.value());
    this.filter()?.setValue(formattedValue);
  }

  protected async onClick(): Promise<void> {
    const { DateFilterPopupComponent } = await import('../date-filter-popup/date-filter-popup.component');

    this.filter()?.openPopupFilter(DateFilterPopupComponent, this.value());
  }

  protected onChange(dateFilterData: DateFilterData): void {
    const formattedValue = this.setFormattedValue(dateFilterData);
    this.filter()?.setValue(formattedValue);
    this.onUpdate.emit(dateFilterData);
  }

  protected setFormattedValue(dateFilterData: DateFilterData): string | null {
    const datePipe = new DatePipe('en-US');
    let formattedValue: string | null;

    if (dateFilterData.dateRangeOption === DateRangeOption.DateRange) {
      const startFormatted = datePipe.transform(dateFilterData.fromDate, 'MMM d');
      const endFormatted = datePipe.transform(dateFilterData.toDate, 'MMM d, y');

      formattedValue = `${startFormatted} - ${endFormatted}`;
    } else {
      formattedValue = datePipe.transform(dateFilterData.fromDate, 'MMM d, y');
    }

    return formattedValue;
  }

  protected clear(): void {
    this.onUpdate.emit({
      fromDate: null,
      toDate: null,
      dateRangeOption: DateRangeOption.SingleDate
    } as DateFilterData);
  }
}