import { useMutation } from 'react-query';
import ApiService from '../service/api';
import { IPet, IUser } from '../utils/type';

const usePatch = (url: string, item: IUser | IPet, successCallback?: () => void) => {
  const apiService = () => new ApiService(url).patch(item);
  return useMutation(apiService, { onSuccess: successCallback });
};

export default usePatch;
