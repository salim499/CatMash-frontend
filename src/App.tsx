// Import React Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import pages
import ShowCatsP from "./Pages/ShowCatsP";
import VoteCatsP from "./Pages/VoteCatsP";

// Import layouts
import Layout from "./Layout/";

// Import components
import ErrorMessageC from "./Components/ErrorMessageC";

// Main App component
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <ShowCatsP />,
          errorElement: <ErrorMessageC />,
        },
        {
          path: "/show-cats",
          element: <ShowCatsP />,
          errorElement: <ErrorMessageC />,
        },
        {
          path: "/vote-cats",
          element: <VoteCatsP />,
          errorElement: <ErrorMessageC />,
        },
      ],
      errorElement: <ErrorMessageC />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
