// eslint-disable-next-line no-unused-vars
type TuseQueryKey = (url: string, params: object) => [string, object];

const useQueryKey: TuseQueryKey = (url, params) => {
  const queryKey = url.split('/')[0];

  return [queryKey, params];
};

export default useQueryKey;
