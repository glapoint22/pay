import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { DateFilterData } from "../models/date-filter-data";
import { DateRangeOption } from "../models/date-range-option";

type TransactionsState = {
    filters: {
        dateFilter: DateFilterData
    };
};

const initialState: TransactionsState = {
    filters: {
        dateFilter: {
            fromDate: null,
            toDate: null,
            dateRangeOption: DateRangeOption.SingleDate
        }
    },
};

export const TransactionsStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withMethods((store) => ({

        updateDateFilter(dateFilter: DateFilterData) {
            patchState(store, (state) => {
                return ({ filters: { ...state.filters, dateFilter } })
            });
        }
    }))
);