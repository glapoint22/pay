import { Component, contentChild, Type, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'filters-group',
  standalone: true,
  imports: [],
  templateUrl: './filters-group.component.html',
  styleUrl: './filters-group.component.scss'
})
export class FiltersGroupComponent {
  private viewContainerRef = contentChild('viewContainerRef', { read: ViewContainerRef });

  
  public createFilter<T>(componentType: Type<T>): T | undefined {
    const componentRef = this.viewContainerRef()?.createComponent(componentType);
    const component = componentRef?.instance;

    return component;
  }
}