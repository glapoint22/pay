import { Component, inject, output, viewChild } from '@angular/core';
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
  // private filterGroup = inject(FiltersGroupComponent);
  private multiFilterData: any[] = [];
  public onUpdate = output<any[]>();

  protected async onClick(): Promise<void> {
    const { MultiFilterPopupComponent } = await import('../multi-filter-popup/multi-filter-popup.component');

    this.filter()?.openPopupFilter(MultiFilterPopupComponent, this.multiFilterData);
  }

  protected onChange(multiFilterData: any[]): void {
    this.multiFilterData = multiFilterData;
    this.onUpdate.emit(multiFilterData);
  }

  
}