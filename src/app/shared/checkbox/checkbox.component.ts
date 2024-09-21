import { booleanAttribute, Component, forwardRef, input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'checkbox',
  standalone: true,
  imports: [],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CheckboxComponent),
    multi: true
  }]
})
export class CheckboxComponent implements ControlValueAccessor {
  public disabled = input(false, { transform: booleanAttribute });
  public checked!: boolean;
  protected onChange!: (value: boolean) => void;
  protected onTouched!: (value: any) => void;

  public writeValue(checked: boolean): void {
    this.checked = checked;
  }




  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }




  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }




  protected onClick(checked: boolean): void {
    if (this.onChange)
      this.onChange(checked);
  }
}