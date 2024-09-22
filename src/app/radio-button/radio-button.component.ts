import { booleanAttribute, Component, inject, input } from '@angular/core';
import { RadioGroupComponent } from '../radio-group/radio-group.component';

@Component({
  selector: 'radio-button',
  standalone: true,
  imports: [],
  templateUrl: './radio-button.component.html',
  styleUrl: './radio-button.component.scss'
})
export class RadioButtonComponent {
  public disabled = input(false, { transform: booleanAttribute });
  public checked!: boolean;
  public value = input<any>();
  protected radioGroup: RadioGroupComponent = inject(RadioGroupComponent);

  protected onChange(): void {
    if (this.radioGroup.onChange)
      this.radioGroup.onChange(this.value());
  }
}