import { Component, inject } from '@angular/core';
import { FilterPopupComponent } from '../filter-popup/filter-popup.component';
import { CardFilterContentComponent } from "../card-filter-content/card-filter-content.component";
import { PopupCloseDirective } from '../popup-close/popup-close.directive';
import { FormsModule } from '@angular/forms';
import { POPUP_DATA } from '../types/popup-data';

@Component({
  selector: 'card-filter-popup',
  standalone: true,
  imports: [
    FilterPopupComponent,
    CardFilterContentComponent,
    PopupCloseDirective,
    FormsModule
  ],
  templateUrl: './card-filter-popup.component.html',
  styleUrl: './card-filter-popup.component.scss'
})
export class CardFilterPopupComponent {
  private data = inject(POPUP_DATA) as number;
  protected cardLast4!: number;

  public ngOnInit(): void {
    if (this.data)
      this.cardLast4 = this.data;
  }

}
