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
  const url = 'http://stapi.co/api/v1/rest/character/search?title=0413';
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
  categoryEndpont: string;
  searchEndpoint: string;
  endpoints: IEndpoint[];
  key: string;
  constructor(
    _categoryEndpont: string,
    _searchEndpoint: string,
    _endpoint: IEndpoint[]
  ) {
    this.categoryEndpont = _categoryEndpont;
    this.searchEndpoint = _searchEndpoint;
    this.endpoints = _endpoint;
    this.key = '';
  }

  private createUrl = async (key: string): Promise<string> => {
    const endpoint = this.endpoints.find(
      (obj) => this.categoryEndpont === obj.title
    );
    const query = encodeURIComponent(key);
    const url = `https://stapi.co/api/${endpoint?.version}/rest/${endpoint?.endpoint}/serch?title=`;
    return url;
  };

  private requestData = async (url: string) => {
    try {
      const responce = await fetch(url, { method: 'POST' });
      if (!responce.ok) {
        throw new Error(`responce hasn't been got`);
      }
      const dataJson = await responce.json();
    } catch {
        
    }
  };

  private checkKey = async (callback: () => string) => {};
}
