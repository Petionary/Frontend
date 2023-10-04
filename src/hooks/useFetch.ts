import { useQuery } from 'react-query';
import ApiService from '../service/api';

const useFetch = async (url: string, params?: object) => {
  const fetchApi = async () => await new ApiService(url).get(params);
  return useQuery([url.slice(1)], fetchApi, { keepPreviousData: true });
};

export default useFetch;
