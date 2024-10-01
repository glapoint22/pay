import { Component } from '@angular/core';
import { FilterComponent } from '../filter/filter.component';
import { IconComponent } from '../icon/icon.component';

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


}
