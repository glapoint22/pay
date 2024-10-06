import { DateRangeOption } from "./date-range-option";

export interface DateFilterData {
    fromDate: Date | null;
    toDate: Date | null;
    dateRangeOption: DateRangeOption;
}