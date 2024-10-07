import { Component, inject, viewChildren } from '@angular/core';
import { FilterPopupComponent } from '../filter-popup/filter-popup.component';
import { CardExpandableFilterComponent } from '../card-expandable-filter/card-expandable-filter.component';
import { PopupCloseDirective } from '../popup-close/popup-close.directive';
import { ExpandableFilter } from '../expandable-filter';
import { POPUP_DATA } from '../types/popup-data';
import { MultiFilterData } from '../models/multi-filter-data';

@Component({
  selector: 'multi-filter-popup',
  standalone: true,
  imports: [FilterPopupComponent, CardExpandableFilterComponent, PopupCloseDirective],
  templateUrl: './multi-filter-popup.component.html',
  styleUrl: './multi-filter-popup.component.scss'
})
export class MultiFilterPopupComponent {
  private expandableFilters = viewChildren<ExpandableFilter>('expandableFilter');
  private multiFilterData = inject(POPUP_DATA) as MultiFilterData[];
  protected filters: any[] = [];

  ngOnInit(): void {
    this.expandableFilters().forEach((expandableFilter: ExpandableFilter) => {
      const multiFilter = this.multiFilterData.find((filter: MultiFilterData) => filter.type === expandableFilter.type);

      if (!multiFilter) {
        return;
      }
      expandableFilter.setValue(multiFilter.value);
    });
  }

  onChange(value: any): void {
    const index = this.filters.findIndex((filter: any) => filter.type === value.type);

    if (index === -1) {
      this.filters.push(value);
    } else {
      this.filters[index] = value;
    }
  }
}