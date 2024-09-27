import { Component } from '@angular/core';
import { PageHeaderComponent } from '../page-header/page-header.component';

@Component({
  selector: 'outbound-payments',
  standalone: true,
  imports: [PageHeaderComponent],
  templateUrl: './outbound-payments.component.html',
  styleUrl: './outbound-payments.component.scss'
})
export class OutboundPaymentsComponent {

}
