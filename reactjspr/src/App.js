import React, { useState } from "react";
import Form from "./components/form";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import Root from "./components/root";
import Login from "./components/login";
import Auth from "./components/auth";
import ErrorPage from "./components/error";
import AdminHome from "./AdminHome";
import Appc from "./Appcopy";
import Candidate from "./candidate-name";
import AdminInsTime from "./admin-time";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "",
        element: <AdminHome />,
      },
      {
        path: "/admin/instime",
        element: <AdminInsTime />,
      },
      {
        path:"objectivetest/authenticate",
        element : <Auth/ >
      },
      {
        path: "admin",
        element: <AdminHome />,
      },
      {
        path: "candidate",
        element: <Candidate />,
      },
      {
        path: "*",
        element: <ErrorPage/>,
      },
    ],
  },
]);
export default function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}