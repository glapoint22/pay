import { InjectionToken } from "@angular/core";

export interface ColDef {
    field: string;
    width: number;
    component?: unknown | ComponentFunc;
    cellRendererParams?: any;
    cellStyle?: CellStyle | CellStyleFunc;
}



export const COMPONENT_PARAMS = new InjectionToken('ComponentParams');

interface ComponentFunc {
    (params: ICellParams) : ComponentResult | undefined
}


interface CellStyle {
    [cssProperty: string]: string  |  number;
  }
  
  interface CellStyleFunc {
      (params: ICellParams) : CellStyle | null | undefined
  }
  

  export interface ComponentResult {
    component?: any;
    params?: any;
  }
  

  export interface ICellParams {
    value: any;
    rowData: any;
    column: ColDef;
  }