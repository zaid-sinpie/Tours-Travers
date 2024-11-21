import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./components/pages/Root";
import Hero from "./components/pages/Hero";
import Login from "./components/pages/Login";
import Signup from "./components/pages/SignUp";
import HomePage from "./components/pages/HomePage";

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
        },
        {
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "/home",
          element: <HomePage />,
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
