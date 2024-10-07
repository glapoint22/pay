import { CommonModule } from '@angular/common';
import { Component, contentChild, OnInit } from '@angular/core';
import { InputFieldDirective } from '../input-field/input-field.directive';
import { FormFieldErrorComponent } from '../form-field-error/form-field-error.component';
import { PrefixDirective } from '../prefix/prefix.directive';
import { SuffixDirective } from '../suffix/suffix.directive';
import { DropdownComponent } from '../dropdown/dropdown.component';

@Component({
  selector: 'form-field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.scss'
})
export class FormFieldComponent implements OnInit {
  protected inputField = contentChild(InputFieldDirective);
  protected formFieldError = contentChild(FormFieldErrorComponent);
  protected prefix = contentChild(PrefixDirective);
  protected suffix = contentChild(SuffixDirective);
  protected dropdown = contentChild(DropdownComponent);
  protected selected!: boolean;

  
  public ngOnInit(): void {
    this.inputField()?.onBlur.subscribe(() => this.selected = false);
    this.inputField()?.onFocus.subscribe(() => this.selected = true);
  }




  protected onFocus(): void {
    this.inputField()?.setFocus();
    this.dropdown()?.onFocus();
  }




  protected onBlur(): void {
    this.dropdown()?.onBlur();
  }




  protected onClick(): void {
    this.dropdown()?.toggleList();
  }




  protected isDisabled(): boolean | undefined {
    return this.inputField()?.isDisabled || this.dropdown()?.disabled();
  }
}