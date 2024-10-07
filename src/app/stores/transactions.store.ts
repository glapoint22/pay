import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";
import { DateFilterData } from "../models/date-filter-data";
import { DateRangeOption } from "../models/date-range-option";
import { computed } from "@angular/core";

type TransactionsState = {
    filters: {
        dateFilter: DateFilterData,
        cardFilter: number | null
    };
};

const initialState: TransactionsState = {
    filters: {
        dateFilter: {
            fromDate: null,
            toDate: null,
            dateRangeOption: DateRangeOption.SingleDate
        },
        cardFilter: null
    },
};

export const TransactionsStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withComputed(({filters}) => ({
        cardFilterVisible: computed(() => filters.cardFilter() !== null ? true : false)
      })),
    withMethods((store) => ({

        updateDateFilter(dateFilter: DateFilterData) {
            patchState(store, (state) => {
                return ({ filters: { ...state.filters, dateFilter } })
            });
        },

        updateCardFilter(cardFilter: number | null) {
            patchState(store, (state) => {
                return ({ filters: { ...state.filters, cardFilter } })
            });
        }
    }))
);