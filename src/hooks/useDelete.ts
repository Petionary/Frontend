import { useMutation } from 'react-query';
import ApiService from '../service/api';

const useDelete = (url: string, successCallback?: () => void) => {
  const apiService = () => new ApiService(url).delete();
  return useMutation(apiService, { onSuccess: successCallback });
};

export default useDelete;
