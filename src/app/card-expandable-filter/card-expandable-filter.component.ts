import { Component } from '@angular/core';
import { ExpandableFilterComponent } from '../expandable-filter/expandable-filter.component';
import { CardFilterContentComponent } from "../card-filter-content/card-filter-content.component";

@Component({
  selector: 'card-expandable-filter',
  standalone: true,
  imports: [ExpandableFilterComponent, CardFilterContentComponent],
  templateUrl: './card-expandable-filter.component.html',
  styleUrl: './card-expandable-filter.component.scss'
})
export class CardExpandableFilterComponent {

}
