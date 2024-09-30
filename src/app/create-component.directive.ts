import { Directive, inject, Injector, input, ViewContainerRef } from '@angular/core';
import { COMPONENT_PARAMS, ComponentData } from './data-grid/models/component';

@Directive({
  selector: '[createComponent]',
  standalone: true
})
export class CreateComponentDirective {
  public createComponent = input.required<ComponentData>();
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

    this.viewContainerRef.createComponent(this.createComponent().component, { injector: injector });
  }
}