import { Component } from '@angular/core';
import { FormBaseComponent } from '../form/form-base/form-base.component';
import { FormHeaderComponent } from '../form/form-header/form-header.component';
import { FormContentComponent } from '../form/form-content/form-content.component';
import { FormsModule } from '@angular/forms';
import { FormFieldComponent } from '../form-field/form-field.component';
import { InputFieldDirective } from '../input-field/input-field.directive';
import { RouterModule } from '@angular/router';
import { FormFooterComponent } from '../form/form-footer/form-footer.component';

@Component({
  selector: 'sign-in',
  standalone: true,
  imports: [
    FormBaseComponent,
    FormHeaderComponent,
    FormContentComponent,
    FormsModule,
    FormFieldComponent,
    InputFieldDirective,
    RouterModule,
    FormFooterComponent
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {

}
