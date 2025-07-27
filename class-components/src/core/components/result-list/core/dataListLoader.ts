import type { IState, SetState } from '../type/type';
import type { IBooksResponse } from '../../../api/type/type';
import { ApiService } from '../../../api/api-service';

export class DataListLoader {
  fetchedData: IBooksResponse | undefined;
  state: IState | undefined;
  setState: SetState | undefined;
  constructor(_state: IState, _setState: SetState) {
    this.fetchedData = undefined;
    this.setState = _setState;
    this.state = _state;
  }

  public initDefoultState = async () => {
    await this.getData('');
    await this.setData();
  };

  public initStateByQuery = async (query: string | undefined) => {
    await this.getData(query || '');
    await this.setData();
  };

  private getData = async (query: string) => {
    const service = new ApiService(query);
    await service.initResponce();
    this.fetchedData = await service.dataDraft();
  };

  private setData = async () => {
    if (this.setState) {
      this.setState({
        data: this.fetchedData,
        totalPages: this.setTotalPages(),
      });
    }
  };

  private setTotalPages = (): number | undefined => {
    if (this.fetchedData) {
      return Math.ceil(this.fetchedData.books.length / 10);
    }
  };
}
