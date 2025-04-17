// Import from react
import { useEffect, useState } from "react";
// Import Link for navigation
import { Link } from "react-router-dom";
// Import SWR to manage api interactions
import { mutate } from "swr";
// Import Axios for making HTTP requests
import axios from "axios";

// Import style
import { DivVoteContainerS, VSBadgeS } from "../Styles/VoteCatsP.style";

// Import components
import Header from "../Layout/HeaderL";
import Figure from "../Components/FigureC";
import Button from "../Components/ButtonC";
import Loader from "../Components/LoaderC";
import ErrorMessage from "../Components/ErrorMessage";

// Import custom hooks
import UseGetCat from "../Hooks/UseGetCat";

// Import types
import { CatT } from "../Types/CatT";

// Import constants
import { left, right } from "../Constants";

const VoteCatsP = () => {
  // States
  const [excludeIds, setExcludeIds] = useState<string[]>([]);
  const [catLeft, setCatLeft] = useState<CatT | null>(null);
  const [catRight, setCatRight] = useState<CatT | null>(null);

  // Get random cats
  const { cats, cat, error, isLoading } = UseGetCat("cats/random", {
    ids: excludeIds,
    limit:
      catLeft === null && catRight === null
        ? 2 // Initially get two cats if no cats are selected
        : catLeft === null || catRight === null
        ? 1 // If one cat is selected, get one more cat
        : 0, // If both cats are selected, stop fetching
  });

  // Side effect to update cats when the fetched data changes
  useEffect(() => {
    if (cats && cats.length === 2) {
      // Add the fetched cat IDs to the exclude list to avoid duplicates
      cats
        .map((e: CatT) => e.id)
        .forEach((element: string) => {
          setExcludeIds((excludeIds) => [...excludeIds, element]);
        });

      // Set the left and right cats to vote on
      setCatLeft(cats[0]);
      setCatRight(cats[1]);
    } else if (cat && catLeft === null) {
      // If only one cat is fetched and the left cat is null, set it as the left cat
      setExcludeIds((excludeIds) => [...excludeIds, cat.id]);
      setCatLeft(cat);
    } else if (cat && catRight === null) {
      // If only one cat is fetched and the right cat is null, set it as the right cat
      setExcludeIds((excludeIds) => [...excludeIds, cat.id]);
      setCatRight(cat);
    }
  }, [cats, cat]);

  // Function to handle voting for a cat (left or right)
  const handleVoteCat = async (direction: string) => {
    if (catLeft && catRight) {
      // case left
      if (direction === left) {
        // Increment score for the left cat
        await axios.put(
          `${process.env.REACT_APP_API_URL}/cats/${catLeft.id}/score`,
          {
            score: catLeft.score + 1,
          }
        );
        // Fetch the updated cat data
        const updatedCat = await axios.get(
          `${process.env.REACT_APP_API_URL}/cats/${catLeft.id}`
        );
        // Update the state with the new cat data
        setCatLeft(updatedCat.data);
        setCatRight(null); // Clear the right cat after voting
        // case right
      } else if (direction === right) {
        // Increment score for the right cat
        await axios.put(`http://localhost:5000/cats/${catRight.id}/score`, {
          score: catRight.score + 1,
        });
        // Fetch the updated cat data
        const updatedCat = await axios.get(
          `http://localhost:5000/cats/${catRight.id}`
        );
        // Update the state with the new cat data
        setCatRight(updatedCat.data);
        // Clear the left cat after voting
        setCatLeft(null);
      }
      // Fetch another random cat (not voted on)
      await mutate("catrandom", {
        ids: excludeIds,
        limit: 1,
      });
    }
  };
  // If data is still loading
  if (isLoading) return <Loader />;

  // If there is error
  if (error) return <ErrorMessage />;
  // Return the component's JSX structure
  return (
    <>
      {/* Header of the page */}
      <Header />

      {/* Container to hold the two cats and voting logic */}
      <DivVoteContainerS>
        {/* Display the left cat if available */}
        {catLeft ? (
          <Figure
            handleVoteCat={() => handleVoteCat(left)}
            cat={catLeft}
            rotateDirection={left}
          />
        ) : null}

        {/* Display the "VS" badge between the two cats */}
        {catLeft && catRight ? <VSBadgeS>VS</VSBadgeS> : null}

        {/* Display the right cat if available */}
        {catRight ? (
          <Figure
            handleVoteCat={() => handleVoteCat(right)}
            cat={catRight}
            rotateDirection={right}
          />
        ) : null}
      </DivVoteContainerS>

      {/* Button to view the cat ranking page */}
      <Link to="/show-cats">
        <Button>See the cat ranking</Button>
      </Link>
    </>
  );
};

export default VoteCatsP;
