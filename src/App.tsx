// Import React Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import style
import { DivContainerS } from "./Styles/App.style";

// Import pages
import ShowCatsP from "./Pages/ShowCatsP";
import VoteCatsP from "./Pages/VoteCatsP";

// Import components
import ErrorP from "./Components/ErrorMessage";

// Main App component
const App = () => {
  console.log(process.env.REACT_APP_API_URL);
  // Define routes
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ShowCatsP />,
      // Shows ErrorP component if there's an error with this route
      errorElement: <ErrorP />,
    },
    {
      path: "/show-cats",
      element: <ShowCatsP />,
      // Case error
      errorElement: <ErrorP />,
    },
    {
      path: "/vote-cats",
      element: <VoteCatsP />,
      // Case error
      errorElement: <ErrorP />,
    },
  ]);

  // Render the router
  return (
    <DivContainerS>
      <RouterProvider router={router} />
    </DivContainerS>
  );
};

export default App;
