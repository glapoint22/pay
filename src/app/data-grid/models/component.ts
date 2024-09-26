import { InjectionToken } from "@angular/core";
import { ICellParams } from "./cell-params";

export const COMPONENT_PARAMS = new InjectionToken('ComponentParams');

export interface ComponentFunc {
    (params: ICellParams): ComponentResult | undefined
}

export interface ComponentResult {
    component?: any;
    params?: any;
}