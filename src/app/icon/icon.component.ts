import { Component, input } from '@angular/core';

@Component({
  selector: 'icon',
  standalone: true,
  imports: [],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class IconComponent {
  public name = input.required<string>();
  public width = input.required<number>();
  public height = input.required<number>();
}