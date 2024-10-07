import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";
import { DateFilterData } from "../models/date-filter-data";
import { DateRangeOption } from "../models/date-range-option";
import { computed } from "@angular/core";

type TransactionsState = {
    filters: {
        dateFilter: DateFilterData,
        cardFilter: number
    };
};

const initialState: TransactionsState = {
    filters: {
        dateFilter: {
            fromDate: null,
            toDate: null,
            dateRangeOption: DateRangeOption.SingleDate
        },
        cardFilter: 0
    },
};

export const TransactionsStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withComputed(({filters}) => ({
        cardFilterVisible: computed(() => filters.cardFilter() > 0 ? true : false)
      })),
    withMethods((store) => ({

        updateDateFilter(dateFilter: DateFilterData) {
            patchState(store, (state) => {
                return ({ filters: { ...state.filters, dateFilter } })
            });
        },

        updateCardFilter(cardFilter: number) {
            patchState(store, (state) => {
                return ({ filters: { ...state.filters, cardFilter } })
            });
        }
    }))
);