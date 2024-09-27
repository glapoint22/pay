import { Component } from '@angular/core';
import { PageHeaderComponent } from "../page-header/page-header.component";

@Component({
  selector: 'balances',
  standalone: true,
  imports: [PageHeaderComponent],
  templateUrl: './balances.component.html',
  styleUrl: './balances.component.scss'
})
export class BalancesComponent {

}
