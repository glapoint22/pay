import { Component, ElementRef, inject, input, output, Renderer2, viewChild } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'expandable-filter',
  standalone: true,
  imports: [
    CommonModule,
    IconComponent
  ],
  templateUrl: './expandable-filter.component.html',
  styleUrl: './expandable-filter.component.scss'
})
export class ExpandableFilterComponent {
  public title = input.required<string>();
  public onExpanded = output();
  protected value: any;
  protected expanded: boolean = false;
  protected panelContent = viewChild<ElementRef<HTMLElement>>('panelContent');
  private renderer = inject(Renderer2);

  public setValue(value: any): void {
    this.value = value;
    this.toggle();
  }


  protected toggle() {
    this.expanded = !this.expanded;
    this.updateMaxHeight();

    if (this.expanded) this.onExpanded.emit();
  }


  private updateMaxHeight() {
    if (this.expanded) {
      const contentHeight = this.panelContent()!.nativeElement.scrollHeight;
      this.renderer.setStyle(this.panelContent()!.nativeElement, 'max-height', `${contentHeight + 20}px`);
    } else {
      this.renderer.setStyle(this.panelContent()!.nativeElement, 'max-height', '0px');
    }
  }
}