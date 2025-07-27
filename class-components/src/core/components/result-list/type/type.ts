import type { IBooksResponse } from '../../../api/type/type';
export interface IResultInputs {
  inputVal: string | undefined;
  testError: (state: IState) => void;
}
export interface IState {
  data: IBooksResponse | undefined;
  page: number;
  totalPages: number | undefined;
  testError: boolean;
}

export type SetState = (state: object) => void;
