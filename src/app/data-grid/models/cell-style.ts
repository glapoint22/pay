import { ICellParams } from "./cell-params";

export interface CellStyle {
    [cssProperty: string]: string | number;
}

export interface CellStyleFunc {
    (params: ICellParams): CellStyle | null | undefined
  }