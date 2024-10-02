import { Component, contentChild, ElementRef, inject, output, signal, Type } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { PopupService } from '../popup/popup.service';
import { PopupRef } from '../models/popup-ref';

@Component({
  selector: 'filter',
  standalone: true,
  imports: [
    IconComponent
  ],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent<T> {
  public onChange = output<any>();
  protected icon = contentChild(IconComponent);
  protected value = signal<string | null>(null);
  private popupService = inject(PopupService);
  private popupRef!: PopupRef<T>;
  private elementRef = inject(ElementRef);
  private isPopupOpen!: boolean;

  public togglePopupFilter(popupFilter: Type<T>, data: any): void {
    if (this.isPopupOpen) {
      this.popupRef.close();
      return;
    }

    this.popupRef = this.popupService.open(popupFilter, {
      origin: this.elementRef.nativeElement,
      repositionOnScroll: true,
      data: data
    });

    this.isPopupOpen = true;

    const onCloseSubscription = this.popupRef
      .onClose()
      .subscribe((value: any) => {
        if (value)
          this.onChange.emit(value);

        this.isPopupOpen = false;
        onCloseSubscription.unsubscribe();
      });
  }

  protected clear(): void {
    this.popupRef.close();
    this.setValue(null);
    this.onChange.emit(null);
  }


  public setValue(value: string | null): void {
    this.value.set(value);
  }
}