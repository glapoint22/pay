import { Component, ElementRef, inject, input, Renderer2, viewChild } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'expandable-filter',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './expandable-filter.component.html',
  styleUrl: './expandable-filter.component.scss'
})
export class ExpandableFilterComponent {
  public title = input.required<string>();
  protected expanded: boolean = false;
  protected panelContent = viewChild<ElementRef<HTMLElement>>('panelContent');
  private renderer = inject(Renderer2);

  toggle() {
    this.expanded = !this.expanded;
    this.updateMaxHeight();
  }


  updateMaxHeight() {
    if (this.expanded) {
      const contentHeight = this.panelContent()!.nativeElement.scrollHeight;
      this.renderer.setStyle(this.panelContent()!.nativeElement, 'max-height', `${contentHeight + 20}px`);
    } else {
      this.renderer.setStyle(this.panelContent()!.nativeElement, 'max-height', '0px');
    }
  }

}
