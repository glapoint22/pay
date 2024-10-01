import { Component, contentChild } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'filter',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  protected icon = contentChild(IconComponent);
  protected value!: string | null;

  protected onClick(): void {
    
  }
}