import { IRocket } from './types';

class Api_instance {
  private SpaceXDataApi: {
    rockets: string;
  };

  constructor() {
    const SpaceXDataApiBaseUrl = 'https://api.spacexdata.com/v3';

    this.SpaceXDataApi = {
      rockets: SpaceXDataApiBaseUrl + '/rockets',
    };
  }

  public async getRockets(): Promise<Response> {
    return fetch(this.SpaceXDataApi.rockets); //FIXME: clearly there's a better way to do this (without Axios?)
  }
}

export const API = new Api_instance();
