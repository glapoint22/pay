import { Component } from '@angular/core';
import { DividerComponent } from '../divider/divider.component';

@Component({
  selector: 'transactions',
  standalone: true,
  imports: [DividerComponent],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss'
})
export class TransactionsComponent {

}
