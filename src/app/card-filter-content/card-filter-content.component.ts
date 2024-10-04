import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormFieldComponent } from '../form-field/form-field.component';
import { InputFieldDirective } from '../input-field/input-field.directive';
import { PopupCloseDirective } from '../popup-close/popup-close.directive';

@Component({
  selector: 'card-filter-content',
  standalone: true,
  imports: [
    FormFieldComponent,
    FormsModule,
    InputFieldDirective
  ],
  templateUrl: './card-filter-content.component.html',
  styleUrl: './card-filter-content.component.scss'
})
export class CardFilterContentComponent {
  protected cardLast4!: number;

}
