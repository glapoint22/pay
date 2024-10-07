import { Component, contentChild, contentChildren, output, TemplateRef, Type, ViewContainerRef } from '@angular/core';
import { DateFilterComponent } from '../date-filter/date-filter.component';
import { DateRangeOption } from '../models/date-range-option';

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
  private templateRefs = contentChildren(TemplateIdentifierDirective, { read: TemplateRef });
  private ids = contentChildren(TemplateIdentifierDirective);
  private foo: any[] = [];

  // ngOnInit(): void {
  //   this.foo = this.templateRefs().map((value: any, index: number) => {
  //     return {  id: this.ids()[index].id, template: value }; 
  //   });

  //   console.log(this.foo);
  // }




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


  public createFilter(templateRef: any): void {
    this.viewContainerRef()?.createEmbeddedView(templateRef);
  }
}

import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[templateIdentifier]',
  standalone: true
})
export class TemplateIdentifierDirective {
  @Input('templateIdentifier') id!: string;
}