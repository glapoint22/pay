import { CellStyle, CellStyleFunc } from "./cell-style";
import { ComponentFunc } from "./component";

export interface ColDef {
  field: string;
  width: number;
  component?: ComponentFunc;
  cellStyle?: CellStyle | CellStyleFunc;
}