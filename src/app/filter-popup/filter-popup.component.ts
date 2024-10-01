import { Component, input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'filter-popup',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './filter-popup.component.html',
  styleUrl: './filter-popup.component.scss'
})
export class FilterPopupComponent {
  public title = input.required<string>();
}
