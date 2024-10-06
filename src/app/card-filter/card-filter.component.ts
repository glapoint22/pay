import { Component, inject, viewChild } from '@angular/core';
import { FilterComponent } from '../filter/filter.component';
import { FiltersGroupComponent } from '../filters-group/filters-group.component';

@Component({
  selector: 'card-filter',
  standalone: true,
  imports: [FilterComponent],
  templateUrl: './card-filter.component.html',
  styleUrl: './card-filter.component.scss'
})
export class CardFilterComponent {
  private filter = viewChild(FilterComponent);
  protected cardLast4!: string | null;
  private filterGroups = inject(FiltersGroupComponent);

  protected async onClick(): Promise<void> {
    const { CardFilterPopupComponent } = await import('../card-filter-popup/card-filter-popup.component');

    this.filter()?.openPopupFilter(CardFilterPopupComponent, this.cardLast4);
  }

  protected onChange(cardLast4: string): void {
    this.cardLast4 = cardLast4;
    if (this.cardLast4) this.filter()?.setValue(this.cardLast4);

    // this.filterGroups.setMultiFilters([{ value: cardLast4, type: CardFilterComponent }]);
  }

  protected clear(): void {
    this.cardLast4 = null;
    // this.filterGroups.setMultiFilters([{ value: null, type: CardFilterComponent }]);
  }


  public setValue(value: string | null): void {
    this.cardLast4 = value;
  }
}