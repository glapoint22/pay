import { Component, input, output, viewChild } from '@angular/core';
import { FilterComponent } from '../filter/filter.component';
import { FilterType } from '../filter-type';
import { MultiFilterData } from '../models/multi-filter-data';

@Component({
  selector: 'multi-filter',
  standalone: true,
  imports: [FilterComponent],
  templateUrl: './multi-filter.component.html',
  styleUrl: './multi-filter.component.scss'
})
export class MultiFilterComponent {
  public cardFilter = input.required<number | null>();
  public onCardFilterUpdate = output<number | null>();
  private filter = viewChild(FilterComponent);

  protected async onClick(): Promise<void> {
    const { MultiFilterPopupComponent } = await import('../multi-filter-popup/multi-filter-popup.component');

    this.filter()?.openPopupFilter(MultiFilterPopupComponent, [{
      type: FilterType.CardFilter,
      value: this.cardFilter()
    }]);
  }

  protected onChange(multiFilterData: MultiFilterData[]): void {
    multiFilterData.forEach((filter: MultiFilterData) => {
      switch (filter.type) {
        case FilterType.CardFilter:
          this.onCardFilterUpdate.emit(filter.value);
          break;
      }
    });
  }
}