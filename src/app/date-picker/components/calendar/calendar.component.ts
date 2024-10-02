import { Component, ElementRef, inject, output, OutputEmitterRef, viewChild } from '@angular/core';
import { CalendarView } from '../../models/calendar-view';
import { CommonModule, DatePipe } from '@angular/common';
import { DayViewComponent } from '../day-view/day-view.component';
import { MonthViewComponent } from '../month-view/month-view.component';
import { YearViewComponent } from '../year-view/year-view.component';
import { POPUP_DATA } from '../../../types/popup-data';

@Component({
  selector: 'calendar',
  standalone: true,
  imports: [CommonModule, DayViewComponent, MonthViewComponent, YearViewComponent],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {
  public onDateChange: OutputEmitterRef<Date> = output<Date>();
  protected date = new Date();
  protected selectedDate: Date | undefined;
  protected selectedMonth!: number;
  protected selectedYear!: number;
  protected currentCalendarView = CalendarView.Day;
  protected calendarView = CalendarView;
  private calendarBase = viewChild<ElementRef>('calendarBase');
  private calendarData = inject(POPUP_DATA) as Date | undefined;


  public ngOnInit(): void {
    this.initialize();
    setTimeout(() => this.calendarBase()?.nativeElement.focus());
  }




  private initialize(): void {
    this.selectedDate = this.calendarData;

    if (!this.selectedDate || isNaN(this.selectedDate.getTime())) this.selectedDate = new Date();
    this.date = this.selectedDate;
    this.selectedMonth = this.selectedDate.getMonth();
    this.selectedYear = this.selectedDate.getFullYear();
  }




  protected updateMonth(month: number): void {
    const JANUARY = 0;
    const DECEMBER = 11;

    this.selectedMonth = this.selectedMonth + month;

    if (this.selectedMonth < JANUARY) {
      this.selectedMonth = DECEMBER;
      this.updateYear(-1);
    } else if (this.selectedMonth > DECEMBER) {
      this.selectedMonth = JANUARY;
      this.updateYear(1);
    }

    this.date = new Date(this.date.getFullYear(), this.selectedMonth, this.date.getDate());
    this.changeView(CalendarView.Day);
  }




  protected updateYear(yearOffset: number): void {
    this.selectedYear = this.selectedYear + yearOffset;
    this.date =  new Date(this.selectedYear, this.date.getMonth(), this.date.getDate());
    this.changeView(CalendarView.Day);
  }




  protected updateDateToToday(): void {
    this.onDateSelect(new Date());
  }




  protected changeView(view: CalendarView): void {
    this.currentCalendarView = view;
  }




  protected toggleView(view: CalendarView): void {
    this.changeView(this.currentCalendarView === view ? CalendarView.Day : view);
  }




  protected onDateSelect(date: Date): void {
    this.onDateChange.emit(date);
  }




  protected onMonthSelect(month: number): void {
    this.selectedMonth = month;
    this.date = new Date(this.date.getFullYear(), this.selectedMonth, this.date.getDate());
    this.changeView(CalendarView.Day);
  }




  protected onYearSelect(year: number): void {
    this.selectedYear = year;
    this.date = new Date(this.selectedYear, this.date.getMonth(), this.date.getDate());
    this.changeView(CalendarView.Day);
  }




  protected getMonthName(month: number): string {
    const date = new Date(this.selectedYear, month, 1);
    return new DatePipe('en-US').transform(date, 'MMM')!;
  }
}