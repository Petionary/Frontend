import { useMutation } from 'react-query';
import ApiService from '../service/api';

// any 타입 추후 수정
const usePost = (url: string, item: any, successCallback?: () => void) => {
  const apiService = () => new ApiService(url).post(item);
  return useMutation(apiService, { onSuccess: successCallback });
};

export default usePost;
