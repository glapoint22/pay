import { Component, inject } from '@angular/core';
import { ExpandableFilterComponent } from '../expandable-filter/expandable-filter.component';
import { FormFieldComponent } from '../form-field/form-field.component';
import { FormsModule } from '@angular/forms';
import { InputFieldDirective } from '../input-field/input-field.directive';
import { ExpandableFilter } from '../models/expandable-filter';
import { CardFilterComponent } from '../card-filter/card-filter.component';
import { TransactionsStore } from '../stores/transactions.store';

@Component({
  selector: 'card-expandable-filter',
  standalone: true,
  imports: [
    ExpandableFilterComponent,
    FormFieldComponent,
    FormsModule,
    InputFieldDirective
  ],
  templateUrl: './card-expandable-filter.component.html',
  styleUrl: './card-expandable-filter.component.scss'
})
export class CardExpandableFilterComponent extends ExpandableFilter {
  protected store = inject(TransactionsStore);
  public override filterType = 'card filter';

}