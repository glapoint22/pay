import { Component, input, output, viewChild } from '@angular/core';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'card-filter',
  standalone: true,
  imports: [FilterComponent],
  templateUrl: './card-filter.component.html',
  styleUrl: './card-filter.component.scss'
})
export class CardFilterComponent {
  public value = input<number>();
  public onUpdate = output<number>();
  private filter = viewChild(FilterComponent);

  public ngOnChanges(): void {
    this.filter()?.setValue(this.value());
  }

  protected async onClick(): Promise<void> {
    const { CardFilterPopupComponent } = await import('../card-filter-popup/card-filter-popup.component');

    this.filter()?.openPopupFilter(CardFilterPopupComponent, this.value());
  }

  protected onChange(value: number): void {
    this.filter()?.setValue(value);
    this.onUpdate.emit(value);

    
  }

  protected clear(): void {
    
  }
}