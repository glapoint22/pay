import { Component, contentChild, output, Type, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'filters-group',
  standalone: true,
  imports: [],
  templateUrl: './filters-group.component.html',
  styleUrl: './filters-group.component.scss'
})
export class FiltersGroupComponent {
  // public onChange = output<any>();
  private viewContainerRef = contentChild('viewContainerRef', { read: ViewContainerRef });
  // private multiFilters: any[] = [];


  // public setMultiFilters(multiFilterData: any[]): void {
  //   for (const data of multiFilterData) {
  //     const index = this.multiFilters.findIndex((x: any) => x instanceof data.type);
  //     let multiFilter: any;

  //     if (index === -1) {
  //       multiFilter = this.createFilter(data.type);
  //       this.multiFilters.push(multiFilter);
  //     } else {
  //       if (data.value === null) {
  //         this.multiFilters.splice(index, 1);
  //         this.viewContainerRef()?.remove(index);
  //         continue;
  //       }

  //       multiFilter = this.multiFilters[index];
  //     }

  //     multiFilter.setValue(data.value);
  //   }
  //   this.onChange.emit(multiFilterData);
  // }


  // public setFilterChange(filter: any): void {
  //   this.onChange.emit(filter);
  // }


  private createFilter<T>(componentType: Type<T>): T | undefined {
    const componentRef = this.viewContainerRef()?.createComponent(componentType);
    const component = componentRef?.instance;

    return component;
  }
}