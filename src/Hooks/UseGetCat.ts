import useSWR from "swr";
import fetcher from "../Lib/fetcher";

type Params = {
  ids: string[]; // IDs to exclude
  limit: number; // How many cats to fetch
};

const UseGetCat = (url: string, { ids, limit }: Params) => {
  // Construct query parameters for the URL
  const query = [
    ...ids.map((id) => `exclude=${id}`), // Add exclusion filters for each id
    `limit=${limit}`, // Set the limit for number of cats
  ].join("&");

  // Fetch data using SWR
  const { data, error, isValidating } = useSWR(`${url}?${query}`, fetcher);

  // Determine what we return based on limit
  const cat = limit === 1 ? data?.[0] : null; // Single cat if limit is 1, else null
  const cats = limit > 1 ? data : null; // Array of cats if limit > 1, else null

  // isLoading is true when data is not loaded and not erroring out
  const isLoading = !data && !error && isValidating;

  return { cat, cats, error, isLoading };
};

export default UseGetCat;
