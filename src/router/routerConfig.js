import React from "react";
import Login from "../components/auth/login";
import Home from "../components/home";
import Register from "../components/auth/register";

const routesArray = [
  {
    path: "*",
    element: <Login/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },
];

export default routesArray;
