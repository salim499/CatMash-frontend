// Import styles
import { LoaderWrapperS, SpinnerS } from "../Styles/LoaderC.style";

// Loader component to show a loading spinner during data fetching
const Loader = () => {
  return (
    // Wrapper for centering or styling the loader
    <LoaderWrapperS>
      {/* Spinner animation element */}
      <SpinnerS />
    </LoaderWrapperS>
  );
};

export default Loader;
