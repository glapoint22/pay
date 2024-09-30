import { InjectionToken } from "@angular/core";
import { ICellParams } from "./cell-params";

export const COMPONENT_PARAMS = new InjectionToken('ComponentParams');

export interface ComponentFunc {
    (params: ICellParams): ComponentData
}

export interface ComponentData {
    component: any;
    params?: any;
}