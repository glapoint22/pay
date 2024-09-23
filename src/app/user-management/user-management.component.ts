import { Component } from '@angular/core';
import { DividerComponent } from '../divider/divider.component';

@Component({
  selector: 'user-management',
  standalone: true,
  imports: [DividerComponent],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.scss'
})
export class UserManagementComponent {

}
