import { Directive, output, viewChild } from "@angular/core";
import { ExpandableFilterComponent } from "./expandable-filter/expandable-filter.component";
import { FilterType } from "./filter-type";

@Directive()
export abstract class ExpandableFilter {
    public onChange = output<any>();
    public abstract type: FilterType;
    public value: any;
    private expandableFilter = viewChild(ExpandableFilterComponent);

    public setValue(value: any): void {
        this.value = value;
        this.expandableFilter()?.setValue(value);
        this.onChange.emit({
            type: this.type,
            value: value
        });
    }

    protected clear(): void {
        this.value = null;
        this.setValue(null);
    }
}