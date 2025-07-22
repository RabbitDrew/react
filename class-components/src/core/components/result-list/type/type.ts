import type { IBooksResponse } from "../../../api/type/type";
export interface IResultInputs {
  inputVal: string | undefined;
}
export interface IState {
  data: IBooksResponse | undefined;
  page: number | undefined;
  totalElements: number | undefined
  totalPages: number | undefined
}
