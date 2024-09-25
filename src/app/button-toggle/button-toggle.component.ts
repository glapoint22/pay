import { Component, inject, input } from '@angular/core';
import { ButtonToggleGroupComponent } from './button-toggle-group/button-toggle-group.component';

@Component({
  selector: 'button-toggle',
  standalone: true,
  imports: [],
  templateUrl: './button-toggle.component.html',
  styleUrl: './button-toggle.component.scss'
})
export class ButtonToggleComponent {
  public selected!: boolean;
  public value = input<any>();
  protected buttonToggleGroup: ButtonToggleGroupComponent = inject(ButtonToggleGroupComponent);

  protected onChange(): void {
    if (this.buttonToggleGroup.onChange)
      this.buttonToggleGroup.onChange(this.value());
  }
}
