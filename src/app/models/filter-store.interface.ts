import { Signal } from "@angular/core";
import { DateFilterData } from "./date-filter-data";

export interface IFilterStore {
    filters: { dateFilter: Signal<DateFilterData> };

    updateDateFilter(data: any): void;
}