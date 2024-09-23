import { Component } from '@angular/core';
import { DividerComponent } from '../divider/divider.component';

@Component({
  selector: 'outbound-payments',
  standalone: true,
  imports: [DividerComponent],
  templateUrl: './outbound-payments.component.html',
  styleUrl: './outbound-payments.component.scss'
})
export class OutboundPaymentsComponent {

}
