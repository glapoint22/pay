import { ComponentRef, Directive, inject, Injector, input, ViewContainerRef } from '@angular/core';
import { COMPONENT_PARAMS } from './data-grid/models/col-def';

@Directive({
  selector: '[createComponent]',
  standalone: true
})
export class CreateComponentDirective<T> {
  public createComponent = input.required<any>();
  private viewContainerRef = inject(ViewContainerRef);
  private injector = inject(Injector);

  ngOnInit() {
    this.viewContainerRef.clear();

    const injector = Injector.create({
      providers: [
        { provide: COMPONENT_PARAMS, useValue: this.createComponent().params }
      ],
      parent: this.injector
    });

    const componentRef: ComponentRef<T> = this.viewContainerRef.createComponent(this.createComponent().component, { injector: injector });
    const component: T = componentRef.instance;
  }
  
}