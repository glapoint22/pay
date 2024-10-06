import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownItemComponent } from '../dropdown-item/dropdown-item.component';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { FilterPopupComponent } from '../filter-popup/filter-popup.component';
import { FormFieldComponent } from '../form-field/form-field.component';
import { PopupCloseDirective } from '../popup-close/popup-close.directive';
import { InputFieldDirective } from '../input-field/input-field.directive';
import { DatePickerDirective } from '../date-picker/directives/date-picker.directive';
import { POPUP_DATA } from '../types/popup-data';
import { KeyValue } from '@angular/common';
import { PrefixDirective } from '../prefix/prefix.directive';
import { DateRangeOption } from '../models/date-range-option';
import { IconComponent } from '../icon/icon.component';
import { DateFilterData } from '../models/date-filter-data';

@Component({
  selector: 'date-filter-popup',
  standalone: true,
  imports: [
    FilterPopupComponent,
    FormFieldComponent,
    FormsModule,
    DropdownComponent,
    DropdownItemComponent,
    PopupCloseDirective,
    InputFieldDirective,
    DatePickerDirective,
    IconComponent,
    PrefixDirective
  ],
  templateUrl: './date-filter-popup.component.html',
  styleUrl: './date-filter-popup.component.scss'
})
export class DateFilterPopupComponent {
  protected fromDate!: Date;
  protected toDate!: Date;
  protected selectedDateRange!: DateRangeOption;
  protected DateRangeOption = DateRangeOption;
  private data = inject<DateFilterData>(POPUP_DATA);

  protected options: KeyValue<string, number>[] = [
    {
      key: 'is on date',
      value: DateRangeOption.SingleDate
    },
    {
      key: 'is between dates',
      value: DateRangeOption.DateRange
    }
  ]

  public ngOnInit(): void {
    this.selectedDateRange = this.options[0].value;
    this.selectedDateRange = this.data.dateRangeOption;
    this.fromDate = this.data.fromDate ? this.data.fromDate : new Date();
    this.toDate = this.data.toDate ? this.data.toDate : new Date();
  }


  protected getValues(): DateFilterData {
    return {
      fromDate: this.fromDate,
      toDate: this.toDate,
      dateRangeOption: this.selectedDateRange
    }
  }
}