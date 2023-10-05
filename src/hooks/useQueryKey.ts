const useQueryKey = (url: string) => {
  const temp = url.split('/').slice(1);
  const key = temp[0];
  const id = { id: temp[1] };

  return id.id ? [key, id] : [key];
};

export default useQueryKey;
