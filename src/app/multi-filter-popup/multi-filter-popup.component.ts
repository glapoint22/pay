import { Component, inject, viewChildren } from '@angular/core';
import { FilterPopupComponent } from '../filter-popup/filter-popup.component';
import { CardExpandableFilterComponent } from '../card-expandable-filter/card-expandable-filter.component';
import { PopupCloseDirective } from '../popup-close/popup-close.directive';
import { ExpandableFilter } from '../models/expandable-filter';
import { POPUP_DATA } from '../types/popup-data';

@Component({
  selector: 'multi-filter-popup',
  standalone: true,
  imports: [FilterPopupComponent, CardExpandableFilterComponent, PopupCloseDirective],
  templateUrl: './multi-filter-popup.component.html',
  styleUrl: './multi-filter-popup.component.scss'
})
export class MultiFilterPopupComponent {
  private expandableFilters = viewChildren<ExpandableFilter>('expandableFilter');
  private multiFilterData = inject(POPUP_DATA) as any[];

  ngOnInit(): void {
    this.expandableFilters().forEach((expandableFilter: ExpandableFilter) => {
      const value = this.multiFilterData.find((filter: any) => filter.type === expandableFilter.filterType)?.value;
      expandableFilter.setValue(value);
    });
  }



  onApplyClick(): any {
    const filters: any[] = [];

    this.expandableFilters().forEach((expandableFilter: ExpandableFilter) => {
      filters.push({
        type: expandableFilter.filterType,
        value: expandableFilter.value
      });
    });

    return filters;

  }
}