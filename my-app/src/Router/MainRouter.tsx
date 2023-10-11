import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Block/Layout";
import { HomeScreen } from "../Pages/HomeScreen";
import { Registration } from "../Pages/Auth/Registration";

export const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
      {
        path: "/register",
        element: <Registration />,
      },
    ],
  },
]);
