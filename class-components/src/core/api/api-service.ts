import type { IBooksResponse } from './type/type';

export class ApiService {
  queryEndpoint: string;
  url: string | undefined;
  data: IBooksResponse | undefined;

  constructor(_queryEndpoint: string) {
    this.queryEndpoint = _queryEndpoint;
    this.url = undefined;
    this.data = undefined;
  }

  public initResponce = async (): Promise<void> => {
    await this.request();
  };

  private createUrl = async (): Promise<string> => {
    this.url = `https://stapi.co/api/v1/rest/book/search?title=${this.queryEndpoint}`;
    return this.url;
  };

  private request = async (): Promise<void> => {
    const url = await this.createUrl();
    try {
      const responce = await fetch(url, { method: 'POST' });
      if (!responce.ok) {
        throw new Error('responce is field');
      }

      this.data = await responce.json();
    } catch {
      console.error('failed responce');
    }
  };

  public dataDraft = async (): Promise<IBooksResponse | undefined> => {
    return this.data;
  };
}




