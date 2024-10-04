import { Component, viewChildren } from '@angular/core';
import { FilterPopupComponent } from '../filter-popup/filter-popup.component';
import { CardExpandableFilterComponent } from '../card-expandable-filter/card-expandable-filter.component';
import { PopupCloseDirective } from '../popup-close/popup-close.directive';
import { IExpandableFilter } from '../models/expandable-filter';

@Component({
  selector: 'multi-filter-popup',
  standalone: true,
  imports: [FilterPopupComponent, CardExpandableFilterComponent, PopupCloseDirective],
  templateUrl: './multi-filter-popup.component.html',
  styleUrl: './multi-filter-popup.component.scss'
})
export class MultiFilterPopupComponent {
  private expandableFilters = viewChildren<IExpandableFilter>('expandableFilter');



  onApplyClick(): any {
    const filters: any[] = [];

    this.expandableFilters().forEach((expandableFilter: IExpandableFilter) => {
      if (!expandableFilter.value) return;

      filters.push({
        type: expandableFilter.filterType,
        value: expandableFilter.value
      });
    });

    return filters;

  }
}