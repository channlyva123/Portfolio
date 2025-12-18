import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import MainLayoutComponent from "../components/layouts/MainLayoutComponent";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/home",
      element: <MainLayoutComponent />,
      children: [
        {
          index: true,
          element: <Home />, // default route
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "*",
          element: <Navigate to='/home' replace />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
