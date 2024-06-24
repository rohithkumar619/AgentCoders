import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Forgot from "./components/Forgot/Forgot";
import Reset from "./components/Reset/Reset";
import "./App.css";
import Root from "./components/Root/Root";
import About from "./components/About/About";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
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
      path: "/forgot",
      element: <Forgot />,
    },
    {
      path: "/reset-password",
      element: <Reset />,
    },
    {
      path: "/about",
      element: <About />,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
