import { Component } from '@angular/core';
import { FilterPopupComponent } from '../filter-popup/filter-popup.component';

@Component({
  selector: 'card-filter-popup',
  standalone: true,
  imports: [
    FilterPopupComponent
  ],
  templateUrl: './card-filter-popup.component.html',
  styleUrl: './card-filter-popup.component.scss'
})
export class CardFilterPopupComponent { }