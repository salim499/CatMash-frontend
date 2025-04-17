// Import SWR for api interactions
import { mutate } from "swr";
// Import Link for navigation
import { Link } from "react-router-dom";

// Import style
import { DivShowCatsContainerS } from "../Styles/ShowCatsP.style";

// Import components
import Header from "../Layout/HeaderL";
import Figure from "../Components/FigureC";
import Button from "../Components/ButtonC";
import Loader from "../Components/LoaderC";
import ErrorMessage from "../Components/ErrorMessage";
import Pagination from "../Components/Pagination";

// Import types
import { CatT } from "../Types/CatT";

// Import custom hooks
import UseIsScreenWidthLessOrEqual from "../Hooks/UseIsScreenWidthLessOrEqual";
import UseGetCats from "../Hooks/UseGetCats";
import UseGetCatsCount from "../Hooks/UseGetCountCat";

// Import from react
import { useState, useEffect } from "react";

const ShowCatsP = () => {
  // State to manage the current pagination
  const [page, setPage] = useState(1);

  // Check if the screen width is less than or equal to 1024px
  const isScreenWidthLessOrEqual = UseIsScreenWidthLessOrEqual(1024);

  // Fetch the list of cats with pagination (9 cats per page)
  const { cats, error, isLoading } = UseGetCats({
    limit: 9,
    offset: (page - 1) * 9,
  });

  // Fetch the total number of cats for pagination management
  const { numberOfCats } = UseGetCatsCount();

  // When the pagination changes, update the SWR cache (forces data reload)
  useEffect(() => {
    mutate({ limit: 10, offset: page - 1 });
  }, [page]);

  // If data is still loading
  if (isLoading) return <Loader />;

  // If there is error
  if (error) return <ErrorMessage />;

  // If everything is fine
  return (
    <>
      {/* Header of the site */}
      <Header />

      {/* Main container for the cats cards */}
      <DivShowCatsContainerS>
        {cats.map((cat: CatT, index: number) => (
          <Figure
            key={cat.id}
            index={index}
            page={page}
            isScreenWidthLessOrEqual={isScreenWidthLessOrEqual}
            cat={cat}
          />
        ))}
      </DivShowCatsContainerS>

      {/* Pagination component */}
      <Pagination
        page={page}
        setPage={setPage}
        limitPages={Math.floor(numberOfCats / 9) + 1}
      />
      {/* Button to navigate to the vote page */}
      <Link to="/vote-cats">
        <Button>Choose my cat</Button>
      </Link>
    </>
  );
};

export default ShowCatsP;
