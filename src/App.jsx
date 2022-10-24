import React from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

const App = () => {
  const Layout = () => {
    return <div></div>;
  };

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
