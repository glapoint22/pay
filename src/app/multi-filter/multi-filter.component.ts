import { Component, inject, viewChild } from '@angular/core';
import { FilterComponent } from '../filter/filter.component';
import { FiltersGroupComponent } from '../filters-group/filters-group.component';

@Component({
  selector: 'multi-filter',
  standalone: true,
  imports: [FilterComponent],
  templateUrl: './multi-filter.component.html',
  styleUrl: './multi-filter.component.scss'
})
export class MultiFilterComponent {
  private filter = viewChild(FilterComponent);
  private filterGroup = inject(FiltersGroupComponent);

  protected async onClick(): Promise<void> {
    const { MultiFilterPopupComponent } = await import('../multi-filter-popup/multi-filter-popup.component');

    this.filter()?.togglePopupFilter(MultiFilterPopupComponent);
  }

  protected onChange(value: any): void {
    value.forEach((filter: any) => {
      const x: any = this.filterGroup.createFilter(filter.type);
      x.filter().setValue(filter.value);
    });
  }
}