import type { IBooksResponse } from "../../../api/type/type";
export interface IResultInputs {
  inputVal: string | undefined;
}
export interface IState {
  data: IBooksResponse | undefined;
  page: number;
  totalPages: number | undefined;
}

export type SetState = (state: object) => void;