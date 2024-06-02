import useSWR from "swr";
import axios from "axios";
const useFetch = (url) => {
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error, isLoading } = useSWR(url, fetcher);

  return { data, isLoading, error };
};

export default useFetch;
