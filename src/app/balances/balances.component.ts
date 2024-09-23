import { Component } from '@angular/core';
import { DividerComponent } from '../divider/divider.component';

@Component({
  selector: 'balances',
  standalone: true,
  imports: [DividerComponent],
  templateUrl: './balances.component.html',
  styleUrl: './balances.component.scss'
})
export class BalancesComponent {

}
