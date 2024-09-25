import { Component } from '@angular/core';
import { DividerComponent } from '../divider/divider.component';
import { ButtonToggleGroupComponent } from '../button-toggle/button-toggle-group/button-toggle-group.component';
import { ButtonToggleComponent } from '../button-toggle/button-toggle.component';

@Component({
  selector: 'dashboard',
  standalone: true,
  imports: [
    DividerComponent,
    ButtonToggleGroupComponent,
    ButtonToggleComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
