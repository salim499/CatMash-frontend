import api from "./axios";

const fetcher = async (url: string) => {
  const res = await api.get(url);
  return res.data;
};

export default fetcher;
