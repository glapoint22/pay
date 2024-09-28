import { Component, inject, model } from '@angular/core';
import { IconComponent } from "../icon/icon.component";
import { CommonModule } from '@angular/common';
import { COMPONENT_PARAMS } from '../data-grid/models/component';

@Component({
  selector: 'tag',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.scss'
})
export class TagComponent {
  public cssClass = model<string>();
  public label = model<string>();
  public icon = model<string>();

  private params = inject(COMPONENT_PARAMS, { optional: true }) as any;

  ngOnInit() {
    if (this.params) {
      this.cssClass.set(this.params.cssClass);
      this.label.set(this.params.label);
      this.icon.set(this.params.icon);
    }
  }
}