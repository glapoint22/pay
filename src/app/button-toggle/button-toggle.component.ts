import { Component, HostBinding, inject, input } from '@angular/core';
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
  

  protected onClick(): void {
    if (this.buttonToggleGroup.onChange)
      this.buttonToggleGroup.onChange(this.value());
  }

  @HostBinding('class.button-toggle')
  protected get applyButtonToggle() {
    return true;
  }


  @HostBinding('class.button-toggle-selected')
  protected get applyButtonToggleSelected() {
    return this.selected;
  }
}