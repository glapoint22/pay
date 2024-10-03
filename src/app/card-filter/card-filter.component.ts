import { Component, viewChild } from '@angular/core';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'card-filter',
  standalone: true,
  imports: [FilterComponent],
  templateUrl: './card-filter.component.html',
  styleUrl: './card-filter.component.scss'
})
export class CardFilterComponent {
  private filter = viewChild(FilterComponent);
  private cardLast4!: number;

  protected async onClick(): Promise<void> {
    const { CardFilterPopupComponent } = await import('../card-filter-popup/card-filter-popup.component');

    this.filter()?.togglePopupFilter(CardFilterPopupComponent, this.cardLast4);
  }

  protected onChange(cardLast4: number): void {
    this.cardLast4 = cardLast4;
  }

}