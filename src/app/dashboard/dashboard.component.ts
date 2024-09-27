import { Component } from '@angular/core';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { TagComponent } from '../tag/tag.component';

@Component({
  selector: 'dashboard',
  standalone: true,
  imports: [
    PageHeaderComponent,
    TagComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
