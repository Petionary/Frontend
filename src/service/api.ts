import { IPet, IUser } from '../utils/type';
import instance from './http';

interface IApiService {
  path: string;
  // eslint-disable-next-line no-unused-vars
  get: (param?: object) => Promise<any>;
  // get: (param?: object) => Promise<IUser[] | IPlace[] | IPet[] | IUser | IPlace | IPet>;
  // eslint-disable-next-line no-unused-vars
  post: (item: IUser | IPet) => Promise<any>;
  // eslint-disable-next-line no-unused-vars
  patch: (item: IUser | IPet) => Promise<any>;
  delete: () => Promise<any>;
}

class ApiService implements IApiService {
  path: string;

  constructor(path: string) {
    this.path = path;
  }

  // eslint-disable-next-line no-unused-vars
  get: (params?: object) => Promise<any> = async params => {
    const { data } = await instance.get(this.path, { params: params });
    return data;
  };

  // eslint-disable-next-line no-unused-vars
  post: (item: IUser | IPet) => Promise<any> = async item => {
    const { data } = await instance.post(this.path, item);
    return data;
  };

  // eslint-disable-next-line no-unused-vars
  patch: (item: IUser | IPet) => Promise<any> = async item => {
    const { data } = await instance.patch(this.path, item);
    return data;
  };

  delete: () => Promise<any> = async () => {
    const { data } = await instance.delete(this.path);
    return data;
  };
}

export default ApiService;
