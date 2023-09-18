import { IPet, IPlace, IUser } from '../utils/type';
import instance from './http';

interface IApiService {
  path: string;
  // eslint-disable-next-line no-unused-vars
  get: (param?: object) => Promise<IUser[] | IPlace[] | IPet[] | IUser | IPlace | IPet>;
  // eslint-disable-next-line no-unused-vars
  post: (item: IUser | IPet) => void;
  // eslint-disable-next-line no-unused-vars
  patch: (item: IUser | IPet) => void;
  delete: () => void;
}

class ApiService implements IApiService {
  path: string;

  constructor(path: string) {
    this.path = path;
  }

  // eslint-disable-next-line no-unused-vars
  get: (params?: object) => Promise<IUser[] | IPlace[] | IPet[] | IUser | IPlace | IPet> =
    async params => {
      const { data } = await instance.get(this.path, { params: params });
      return data;
    };

  // eslint-disable-next-line no-unused-vars
  post: (item: IUser | IPet) => void = async item => {
    await instance.post(this.path, item);
  };

  // eslint-disable-next-line no-unused-vars
  patch: (item: IUser | IPet) => void = async item => {
    await instance.patch(this.path, item);
  };

  delete: () => void = async () => {
    await instance.delete(this.path);
  };
}

export default ApiService;
