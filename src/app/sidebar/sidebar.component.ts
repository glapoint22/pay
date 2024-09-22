import { Component } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { RouterModule } from '@angular/router';
import { FormFieldComponent } from '../form-field/form-field.component';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { FormsModule } from '@angular/forms';
import { DropdownItemComponent } from '../dropdown-item/dropdown-item.component';

@Component({
  selector: 'sidebar',
  standalone: true,
  imports: [
    FormsModule,
    IconComponent,
    RouterModule,
    FormFieldComponent,
    DropdownComponent,
    DropdownItemComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  protected selectedClient: string = 'Tribal';
  protected clients: string[] = [
    'Tribal',
    'North Dakota',
  ];
}
