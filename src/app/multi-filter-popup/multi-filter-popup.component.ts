import { Component } from '@angular/core';
import { FilterPopupComponent } from '../filter-popup/filter-popup.component';
import { CardExpandableFilterComponent } from '../card-expandable-filter/card-expandable-filter.component';

@Component({
  selector: 'multi-filter-popup',
  standalone: true,
  imports: [FilterPopupComponent, CardExpandableFilterComponent],
  templateUrl: './multi-filter-popup.component.html',
  styleUrl: './multi-filter-popup.component.scss'
})
export class MultiFilterPopupComponent {

}
