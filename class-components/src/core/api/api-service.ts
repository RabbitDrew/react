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
  

}
