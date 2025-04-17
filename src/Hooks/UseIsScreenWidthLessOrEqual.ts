import { useEffect, useState } from "react";

// Custom hook to check if the screen width is less than or equal to a given breakpoint
const UseIsScreenWidthLessOrEqual = (breakpoint: number) => {
  // State to track whether the screen is less than or equal to the breakpoint
  const [isScreenWidthLessOrEqual, setIsScreenWidthLessOrEqual] =
    useState(false);

  useEffect(() => {
    // Function to check screen width and update state
    const handleResize = () => {
      setIsScreenWidthLessOrEqual(window.innerWidth <= breakpoint);
    };

    // Run once on mount
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts or breakpoint changes
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  // Return the boolean result
  return isScreenWidthLessOrEqual;
};

export default UseIsScreenWidthLessOrEqual;
