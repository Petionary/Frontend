import { useQuery } from 'react-query';
import ApiService from '../service/api';
import useQueryKey from './useQueryKey';

const useFetch = (url: string, params?: object) => {
  const fetchApi = new ApiService(url);
  const queryKey = useQueryKey(url);

  return useQuery(queryKey, () => fetchApi.get(params));
};

export default useFetch;
