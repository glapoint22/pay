import { Component, contentChildren, forwardRef, input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { RadioButtonComponent } from '../radio-button/radio-button.component';
import { CommonModule } from '@angular/common';
import { LayoutType } from '../../types/layout';

@Component({
  selector: 'radio-group',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './radio-group.component.html',
  styleUrl: './radio-group.component.scss',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RadioGroupComponent),
    multi: true
  }]
})
export class RadioGroupComponent implements ControlValueAccessor {
  public layout = input<LayoutType>('vertical');
  public disabled: boolean = false;
  public name: string = this.generateName();
  public onChange!: (value: any) => void;
  public onTouched!: (value: any) => void;
  private radioButtons = contentChildren(RadioButtonComponent);


  public writeValue(value: any): void {
    const radioButton = this.radioButtons().find(x => x.value() === value);

    if (radioButton)
      radioButton.checked = true;
  }
  
  
  
  
  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  
  
  
  
  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  
  
  
  
  public setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }




  private generateName(): string {
    return Math.random().toString(36).substring(2);
  }
}