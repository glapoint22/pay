import { Component, contentChildren, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ButtonToggleComponent } from '../button-toggle.component';

@Component({
  selector: 'button-toggle-group',
  standalone: true,
  imports: [],
  templateUrl: './button-toggle-group.component.html',
  styleUrl: './button-toggle-group.component.scss',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ButtonToggleGroupComponent),
    multi: true
  }]
})
export class ButtonToggleGroupComponent implements ControlValueAccessor {
  public onChange!: (value: any) => void;
  public onTouched!: (value: any) => void;
  private buttons = contentChildren(ButtonToggleComponent);

  public writeValue(value: any): void {
    this.setSelected(value);
  }
  
  
  private setSelected(value: any): void {
    this.buttons().forEach(x => x.selected = x.value() === value);
  }
  
  
  public registerOnChange(fn: any): void {
    this.onChange = (value: any) => {
      this.setSelected(value);
      fn(value);
    };
  }
  
  
  
  
  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
