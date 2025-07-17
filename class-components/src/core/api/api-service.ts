import { endpoints } from '../global/data';
import type { IEndpoint } from '../global/type/type';

interface IData {
  alternateReality: boolean;
  bloodType: null;
  dayOfBirth: null;
  dayOfDeath: null;
  deceased: null;
  fictionalCharacter: false;
  gender: null;
  height: null;
  hologram: false;
  hologramActivationDate: null;
  hologramDateStatus: null;
  hologramStatus: null;
  maritalStatus: null;
  mirror: boolean;
  monthOfBirth: null;
  monthOfDeath: null;
  name: string;
  placeOfBirth: null;
  placeOfDeath: null;
  serialNumber: null;
  uid: string;
  weight: null;
  yearOfBirth: null;
  yearOfDeath: null;
}

type OptionalIData = Partial<IData>;

export const get = async () => {
  const url = 'http://stapi.co/api/v1/rest/book/search?';
  try {
    const response = await fetch(url, { method: 'POST' });
    if (!response.ok) {
      throw new Error('responce hasn`t been got');
    }
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

class ApiService {
  queryEndpoint:string
  url:string | undefined
  data: OptionalIData | undefined

  constructor(_queryEndpoint:string) {
    this.queryEndpoint = _queryEndpoint
    this.url = undefined
    this.data = undefined
  }

  public initResponce = async ():Promise<void> => {
    this.request()
  }


  private createUrl = async ():Promise<string> => {
    this.url = `http://stapi.co/api/v1/rest/book/search?title=${this.queryEndpoint}`
    return this.url
  }


  private request = async ():Promise<void> => {
    const url = await this.createUrl()
    try {
      const responce = await fetch (url, {method: 'POST'})
      if (!responce.ok) { 
         throw new Error('responce is field')
      }

      this.data = await responce.json()
      console.log(this.data)
    }catch {
      console.error('failed responce')
    }
  }


  public dataDraft = async():Promise<OptionalIData | undefined> => {
     return this.data
  }

}



export const initApiService = (query:string) => {
  const apiService = new ApiService(query)
        apiService.initResponce()
}