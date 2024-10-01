import { Component } from '@angular/core';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { DateFilterComponent } from '../date-filter/date-filter.component';

@Component({
  selector: 'dashboard',
  standalone: true,
  imports: [
    PageHeaderComponent,
    DateFilterComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  
}
