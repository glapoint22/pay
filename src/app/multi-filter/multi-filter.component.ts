import { Component, viewChild } from '@angular/core';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'multi-filter',
  standalone: true,
  imports: [FilterComponent],
  templateUrl: './multi-filter.component.html',
  styleUrl: './multi-filter.component.scss'
})
export class MultiFilterComponent {
  private filter = viewChild(FilterComponent);

  protected async onClick(): Promise<void> {
    const { MultiFilterPopupComponent } = await import('../multi-filter-popup/multi-filter-popup.component');

    this.filter()?.togglePopupFilter(MultiFilterPopupComponent);
  }
}