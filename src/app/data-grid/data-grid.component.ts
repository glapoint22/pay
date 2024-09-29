import { Component, computed, ElementRef, inject, input, model, Renderer2, signal, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { IconComponent } from '../icon/icon.component';
import { CreateComponentDirective } from '../create-component.directive';
import { ColDef } from './models/col-def';
import { ComponentResult } from './models/component';
import { ICellParams } from './models/cell-params';

@Component({
  selector: 'data-grid',
  standalone: true,
  imports: [CommonModule, OverlayModule, IconComponent, CreateComponentDirective],
  templateUrl: './data-grid.component.html',
  styleUrl: './data-grid.component.scss'
})
export class DataGridComponent {
  public columnDefs = model.required<ColDef[]>();
  public rowData = input<any>();
  public rowsPerPage = input(10);
  private rows = computed(() => {
    return [...this.rowData()].map((row, index) => ({
      ...row,
      dataGridUniqueRowId: index + 1
    }));
  });

  protected currentPage = signal(0);


  protected sortedData = computed(() => {
    const rows = [...this.rows()];
    const sortIndex = this.currentSortIndex();
    const ascending = this.isAsc();

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
  });

  protected start: number = 0;
  protected end: number = 0;

  protected paginatedRowData = computed(() => {
    this.start = this.currentPage() * this.rowsPerPage();
    this.end = Math.min(this.start + this.rowsPerPage(), this.rowData().length);
    return this.sortedData().slice(this.start, this.end); // Use sortedData for pagination
  });

  protected totalPages = computed(() => {
    return Math.ceil(this.rowData().length / this.rowsPerPage());
  });

  protected currentSortIndex = signal<number | null>(null);
  protected isAsc = signal(true);
  // protected selectdRow: any;
  protected borderResizerActive = signal(false);
  private renderer = inject(Renderer2);
  private header = viewChild<ElementRef<HTMLElement>>('header');


  protected onRowScroll(event: Event) {
    const scrollLeft = (event.target as HTMLElement).scrollLeft;

    this.header()?.nativeElement.setAttribute('style', `left: -${scrollLeft}px`);
  }

  protected onMouseDown(columnIndex: number) {
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
    if (this.currentSortIndex() === columnIndex) {
      this.isAsc.update(value => !value);
    } else {
      this.isAsc.set(true);
      this.currentSortIndex.set(columnIndex);
    }
  }


  // protected onRowClick(row: any): void {
  //   this.selectdRow = row;
  // }




  protected getComponent(column: ColDef, row: any, params: any): ComponentResult | null {
    if (column.component) {
      if (typeof column.component === 'function' && !this.isComponent(column.component)) {
        const result = column.component(this.getParams(params, row, column));

        if (result) {
          return {
            component: result.component,
            params: this.getParams(result.params, row, column)
          };
        }
      } else {
        return { component: column.component, params: this.getParams(params, row, column) };
      }
    }

    return null;
  }

  private getParams(params: any, row: any, column: any): ICellParams {
    if (params) {
      return params;
    }

    return {
      value: row[column.field],
      rowData: row,
      column: column
    }
  }


  protected getCellStyle(column: ColDef, row: any): any {
    if (column.cellStyle) {
      if (typeof column.cellStyle === 'function') {
        return column.cellStyle(this.getParams(null, row, column));
      } else {
        return column.cellStyle;
      }
    }
    return null;
  }


  private isComponent(component: any): boolean {
    return component instanceof Function && component.prototype && component.prototype.constructor === component;
  }



  protected firstPage() {
    this.currentPage.set(0);
  }

  protected nextPage() {
    if (this.currentPage() < this.totalPages() - 1) {
      this.currentPage.update(value => value + 1);
    }
  }

  protected previousPage() {
    if (this.currentPage() > 0) {
      this.currentPage.update(value => value - 1);
    }
  }

  protected lastPage() {
    this.currentPage.set(this.totalPages() - 1);
  }
}