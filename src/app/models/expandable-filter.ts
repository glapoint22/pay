import { Directive, viewChild } from "@angular/core";
import { ExpandableFilterComponent } from "../expandable-filter/expandable-filter.component";

@Directive()
export abstract class ExpandableFilter {
    public abstract filterType: any;
    public value: any;
    private expandableFilter = viewChild(ExpandableFilterComponent);

    public setValue(value: any): void {
        this.value = value;
        this.expandableFilter()?.setValue(value);
    }

    protected clear(): void {
        this.value = null;
        this.setValue(null);
    }
}