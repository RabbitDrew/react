import type { IState } from '../type/type';
import type { IBooksResponse } from '../../../api/type/type';
import { ApiService } from '../../../api/api-service';

type SetState = (state: object) => void;

export class SetDefoultDataList {
  fetchedData: IBooksResponse | undefined;
  state: IState | undefined;
  setState: SetState | undefined;
  constructor(_state:IState, _setState:SetState) {
    this.fetchedData = undefined;
    this.setState = _setState;
    this.state =_state;
  }


  public initDefoultState = async() => {
    await this.getData('')
    await this.setData()
  }

  private getData = async (query: string) => {
    const service = new ApiService(query);
    await service.initResponce();
    this.fetchedData = await service.dataDraft();
  };


  private setData = async () => {
    if (this.setState) {
      this.setState({
        data: this.fetchedData,
        page: 1,
        totalElements: this.fetchedData?.books.length, 
        totalPages: this.setTotalPages()
      });
    }
  };


  private setTotalPages = ():number |undefined => {
    if (this.fetchedData) {
        return Math.ceil(this.fetchedData.books.length/10)
    }
  }
}
/*
  state: IState = {
    data: undefined,
    page: undefined,
    totalPages: undefined
  };

  getData = async (query: string) => {
    const newInst = new ApiService(query);
    await newInst.initResponce();
    const data = await newInst.dataDraft();
    return data;
  };

  componentDidMount(): void {
    const updateState = async () => {
      const fetchedData = await this.getData('');
      this.setState({
        data: fetchedData,
        page: 1,
      });
    };
    updateState();
  }

*/