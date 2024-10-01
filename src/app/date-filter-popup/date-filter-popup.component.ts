import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownItemComponent } from '../dropdown-item/dropdown-item.component';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { FilterPopupComponent } from '../filter-popup/filter-popup.component';
import { FormFieldComponent } from '../form-field/form-field.component';

@Component({
  selector: 'date-filter-popup',
  standalone: true,
  imports: [FilterPopupComponent, FormFieldComponent, FormsModule, DropdownComponent, DropdownItemComponent],
  templateUrl: './date-filter-popup.component.html',
  styleUrl: './date-filter-popup.component.scss'
})
export class DateFilterPopupComponent {
  protected options = [
    {
      label: 'is between dates',
      value: 'between'
    },
    {
      label: 'is equal to',
      value: 'equal'
    }
  ]

  protected selectedOption = this.options[0].label;
}
