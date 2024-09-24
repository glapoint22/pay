import { Component } from '@angular/core';
import { DividerComponent } from '../divider/divider.component';
import { CardComponent } from '../card/card.component';
import { CardHeaderComponent } from '../card-header/card-header.component';
import { CardContentComponent } from '../card-content/card-content.component';
import { CardFooterComponent } from '../card-footer/card-footer.component';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'dashboard',
  standalone: true,
  imports: [
    DividerComponent,
    CardComponent,
    CardHeaderComponent,
    CardContentComponent,
    CardFooterComponent,
    IconComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
