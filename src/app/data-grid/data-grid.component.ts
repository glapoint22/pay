import { Component, computed, ElementRef, inject, input, model, OnInit, Renderer2, signal, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { IconComponent } from '../icon/icon.component';
import { CreateComponentDirective } from '../create-component.directive';
import { ColDef } from './models/col-def';
import { ComponentData } from './models/component';
import { ICellParams } from './models/cell-params';
import { FormFieldComponent } from '../form-field/form-field.component';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { FormsModule } from '@angular/forms';
import { DropdownItemComponent } from '../dropdown-item/dropdown-item.component';

@Component({
  selector: 'data-grid',
  standalone: true,
  imports: [
    CommonModule,
    OverlayModule,
    IconComponent,
    CreateComponentDirective,
    FormFieldComponent,
    DropdownComponent,
    DropdownItemComponent,
    FormsModule
  ],
  templateUrl: './data-grid.component.html',
  styleUrl: './data-grid.component.scss'
})
export class DataGridComponent implements OnInit {
  public columnDefs = model.required<ColDef[]>();
  public rowData = input.required<any>();


  protected rows = computed(() => this.updatePage());
  protected currentPage = signal(0);
  protected borderResizerActive = signal(false);
  protected startRow: number = 0;
  protected endRow: number = 0;
  protected totalPages = computed(() => Math.ceil(this.tempRows().length / this.rowsPerPage));
  protected currentSortedColumnIndex: number | null = null;
  protected isAsc!: boolean;
  protected pageSizes: number[] = [10, 20, 50, 100];
  protected selectdRow: any;

  private renderer = inject(Renderer2);
  private header = viewChild<ElementRef<HTMLElement>>('header');
  private tempRows = signal<any[]>([]);

  private _rowsPerPage = signal(50);

  protected get rowsPerPage() {
    return this._rowsPerPage();
  }

  protected set rowsPerPage(value: number) {
    this._rowsPerPage.set(value);
    this.currentPage.set(0);
  }




  public ngOnInit(): void {
    this.tempRows.set(this.generateUniqueRowIds());
  }




  protected onRowScroll(event: Event): void {
    const scrollLeft = (event.target as HTMLElement).scrollLeft;

    this.header()?.nativeElement.setAttribute('style', `left: -${scrollLeft}px`);
  }




  protected onColumnResizerMouseDown(columnIndex: number): void {
    this.borderResizerActive.set(true);

    const removeMouseMoveListener = this.renderer.listen('window', 'mousemove', (mousemoveEvent: MouseEvent) => {
      this.columnDefs.update((columns: ColDef[]) => {
        columns[columnIndex].width += mousemoveEvent.movementX;

        // Return a new array instance to trigger change detection
        return [...columns];
      });
    });

    const removeMouseUpListener = this.renderer.listen('window', 'mouseup', () => {
      removeMouseMoveListener();
      removeMouseUpListener();
      this.borderResizerActive.set(false);
    });
  }




  protected sortColumn(columnIndex: number): void {
    if (this.currentSortedColumnIndex === columnIndex) {
      this.isAsc = !this.isAsc;
    } else {
      this.isAsc = true;
      this.currentSortedColumnIndex = columnIndex;
    }

    this.tempRows.set(this.computeSortedData());
  }




  protected getComponentData(column: ColDef, row: any): ComponentData | null {
    if (column.component) {
      const result = column.component(this.getCellParams(row, column));

      if (result) {
        return {
          component: result.component,
          params: result.params
        } as ComponentData;
      }
    }

    return null;
  }




  protected getCellStyle(column: ColDef, row: any): any {
    if (column.cellStyle) {
      if (typeof column.cellStyle === 'function') {
        return column.cellStyle(this.getCellParams(row, column));
      } else {
        return column.cellStyle;
      }
    }
    return null;
  }




  protected setFirstPage(): void {
    this.currentPage.set(0);
  }




  protected setNextPage(): void {
    this.currentPage.update(value => value + 1);
  }




  protected setPreviousPage(): void {
    this.currentPage.update(value => value - 1);
  }




  protected setLastPage(): void {
    this.currentPage.set(this.totalPages() - 1);
  }

  protected onRowClick(row: any): void {
    this.selectdRow = row;
  }


  private generateUniqueRowIds(): any[] {
    return [...this.rowData()].map((row, index) => ({
      ...row,
      dataGridUniqueRowId: index + 1
    }));
  }




  private updatePage(): any[] {
    this.startRow = this.currentPage() * this.rowsPerPage;
    this.endRow = Math.min(this.startRow + this.rowsPerPage, this.tempRows().length);
    return this.tempRows().slice(this.startRow, this.endRow);
  }




  private computeSortedData(): any[] {
    const rows = [...this.tempRows()];
    const sortIndex = this.currentSortedColumnIndex;
    const ascending = this.isAsc;

    if (sortIndex !== null) {
      const column = this.columnDefs()[sortIndex];
      return rows.sort((a: any, b: any) => {
        const valueA = a[column.field];
        const valueB = b[column.field];
        if (valueA < valueB) {
          return ascending ? -1 : 1;
        } else if (valueA > valueB) {
          return ascending ? 1 : -1;
        } else {
          return 0;
        }
      });
    }
    return rows;
  }




  private getCellParams(row: any, column: any): ICellParams {
    return {
      value: row[column.field],
      rowData: row,
      column: column
    }
  }
}