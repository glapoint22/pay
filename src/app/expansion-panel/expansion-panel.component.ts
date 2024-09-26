import { Component, ElementRef, inject, input, Renderer2, viewChild } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'expansion-panel',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './expansion-panel.component.html',
  styleUrl: './expansion-panel.component.scss'
})
export class ExpansionPanelComponent {
  public title = input<string>();
  public value = input<string>();
  public valueClass = input<any>();
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
      this.renderer.setStyle(this.panelContent()!.nativeElement, 'max-height', `${contentHeight}px`);
    } else {
      this.renderer.setStyle(this.panelContent()!.nativeElement, 'max-height', '0px');
    }
  }
}
