import { Component, contentChild, ElementRef, inject, output, signal, Type } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { PopupService } from '../popup/popup.service';
import { PopupRef } from '../models/popup-ref';
import { PopupConfig } from '../models/popup-config';

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
  public onClick = output();
  public onChange = output<any>();
  public onClear = output();
  protected icon = contentChild(IconComponent);
  protected value = signal<string | null>(null);
  private popupService = inject(PopupService);
  private popupRef!: PopupRef<T>;
  private elementRef = inject(ElementRef);
  private isPopupOpen!: boolean;

  public openPopupFilter(popupFilter: Type<T>, data?: any): void {
    this.popupRef = this.popupService.open(popupFilter, {
      origin: this.elementRef.nativeElement,
      repositionOnScroll: true,
      data: data
    } as PopupConfig);

    this.isPopupOpen = true;

    const onCloseSubscription = this.popupRef
      .onClose()
      .subscribe((value: any) => {
        if (value) this.onChange.emit(value);
        this.isPopupOpen = false;
        onCloseSubscription.unsubscribe();
      });
  }

  protected togglePopupFilter() {
    if (this.isPopupOpen) {
      this.popupRef.close();
      return;
    }

    this.onClick.emit();
  }

  protected clear(): void {
    if (this.popupRef) this.popupRef.close();
    this.setValue(null);
    this.onClear.emit();
  }


  public setValue(value: any): void {
    this.value.set(value);
  }

  ngOnDestroy() {
    if (this.popupRef) this.popupRef.dispose();
  }
}