import { Component, input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { PopupCloseDirective } from '../popup-close/popup-close.directive';

@Component({
  selector: 'filter-popup',
  standalone: true,
  imports: [IconComponent, PopupCloseDirective],
  templateUrl: './filter-popup.component.html',
  styleUrl: './filter-popup.component.scss'
})
export class FilterPopupComponent {
  public title = input.required<string>();
}
