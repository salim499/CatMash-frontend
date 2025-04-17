// Import SWR for data fetching
import useSWR from "swr";
// Import the fetcher function used by SWR
import fetcher from "../Lib/fetcher";

// Custom hook to fetch the total number of cats from the API
const UseGetCatsCount = () => {
  // Fetch the data from the `/cats-count` endpoint
  const { data, error, isLoading } = useSWR(`/cats/count`, fetcher);

  // Return the count, error, and loading state with custom names
  return {
    numberOfCats: data?.count, // Total number of cats
    errorCount: error, // Error if the request fails
    isLoadingCount: isLoading, // Loading state for the request
  };
};

export default UseGetCatsCount;
