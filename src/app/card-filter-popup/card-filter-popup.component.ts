import { Component, inject } from '@angular/core';
import { FilterPopupComponent } from '../filter-popup/filter-popup.component';
import { FormsModule } from '@angular/forms';
import { FormFieldComponent } from '../form-field/form-field.component';
import { PopupCloseDirective } from '../popup-close/popup-close.directive';
import { InputFieldDirective } from '../input-field/input-field.directive';
import { POPUP_DATA } from '../types/popup-data';
import { TransactionsStore } from '../stores/transactions.store';

@Component({
  selector: 'card-filter-popup',
  standalone: true,
  imports: [
    FilterPopupComponent,
    FormsModule,
    FormFieldComponent,
    PopupCloseDirective,
    InputFieldDirective
  ],
  templateUrl: './card-filter-popup.component.html',
  styleUrl: './card-filter-popup.component.scss'
})
export class CardFilterPopupComponent { 
  protected value!: number;
  private data = inject(POPUP_DATA) as number;
  protected store = inject(TransactionsStore);

  public ngOnInit(): void {
    this.value = this.data;
  }
}