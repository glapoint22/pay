import { Component } from '@angular/core';
import { PageHeaderComponent } from "../page-header/page-header.component";

@Component({
  selector: 'user-management',
  standalone: true,
  imports: [PageHeaderComponent],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.scss'
})
export class UserManagementComponent {

}
