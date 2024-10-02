import { Directive, ElementRef, forwardRef, HostListener, inject, input, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CalendarComponent } from '../components/calendar/calendar.component';
import { PopupService } from '../../popup/popup.service';
import { PopupRef } from '../../models/popup-ref';

@Directive({
  selector: '[datePicker]',
  standalone: true,
  exportAs: 'datePicker',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DatePickerDirective),
    multi: true
  }]
})
export class DatePickerDirective implements ControlValueAccessor {
  private elementRef: ElementRef<HTMLInputElement> = inject(ElementRef<HTMLInputElement>);
  private renderer = inject(Renderer2);
  private popupService = inject(PopupService);
  private removeWindowClickListener!: () => void;
  private removeElementRefClickListener!: () => void;
  private onChange!: (value: Date) => void;
  protected onTouched!: () => void;
  private isCalendarOpen: boolean = false;
  private popupRef!: PopupRef<CalendarComponent>;


  public async toggleCalendar(): Promise<void> {
    if (this.isCalendarOpen) {
      this.popupRef.close();
      return;
    }

    const calendar = await this.openCalendar();

    calendar.onDateChange.subscribe((date: Date) => this.onDateChange(date));
    this.createListeners();
  }




  private async openCalendar(): Promise<CalendarComponent> {
    const { CalendarComponent } = await import('../components/calendar/calendar.component');

    this.popupRef = this.popupService.open(CalendarComponent, {
      origin: this.elementRef.nativeElement.parentElement!,
      data: this.elementRef.nativeElement.value ? new Date(this.elementRef.nativeElement.value) : undefined,
      repositionOnScroll: true
    });

    const onCloseSubscription = this.popupRef.onClose().subscribe(() => {
      this.removeListeners();
      this.isCalendarOpen = false;
      onCloseSubscription.unsubscribe();
    });

    this.isCalendarOpen = true;
    return this.popupRef.instance;
  }




  private onDateChange(date: Date): void {
    this.elementRef.nativeElement.value = this.formatDate(date);
    if (this.onChange) this.onChange(date);
    this.popupRef.close();
  }




  private createListeners(): void {
    this.removeWindowClickListener = this.renderer.listen('window', 'click', () => this.popupRef.close());
    this.removeElementRefClickListener = this.renderer.listen(this.elementRef.nativeElement, 'click', (event: MouseEvent) => event.stopPropagation());
  }




  private removeListeners(): void {
    this.removeWindowClickListener();
    this.removeElementRefClickListener();
  }




  private formatDate(value: any): string {
    const date = value instanceof Date ? value : new Date(value);

    return date.toLocaleDateString('en-US', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  }




  @HostListener('blur')
  public onBlur(): void {
    if (this.elementRef.nativeElement.value === '' ||
      this.elementRef.nativeElement.value === null ||
      this.elementRef.nativeElement.value === undefined) return;

    this.elementRef.nativeElement.value = this.formatDate(this.elementRef.nativeElement.value);

    if (this.onChange) this.onChange(new Date(this.elementRef.nativeElement.value));
  }




  public writeValue(value: any): void {
    if (!value) return;

    this.elementRef.nativeElement.value = this.formatDate(value);
  }




  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }




  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}