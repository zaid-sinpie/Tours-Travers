import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./components/pages/Root";
import Hero from "./components/pages/Hero";
import Login, { action as loginAction } from "./components/pages/Login";
import Signup, { action as signupAction } from "./components/pages/Signup";
import HomePage, {
  homeLoader,
  actionForAddTour,
} from "./components/pages/HomePage";
import Place, {loader as placeLoader} from "./components/pages/Place";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Hero />,
        },
        {
          path: "/login",
          element: <Login />,
          action: loginAction,
        },
        {
          path: "/signup",
          element: <Signup />,
          action: signupAction,
        },
        {
          path: "/home",
          element: <HomePage />,
          action: actionForAddTour,
          loader: homeLoader,
        },
        {
          path: "place/:name",
          element: <Place />,
          loader:placeLoader
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
