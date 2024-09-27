import { Component, input } from '@angular/core';
import { IconComponent } from "../icon/icon.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tag',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.scss'
})
export class TagComponent {
  public cssClass = input<string>();
  public label = input<string>();
  public icon = input<string>();
}