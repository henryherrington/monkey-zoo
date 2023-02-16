import React, { useState, useEffect } from 'react';
import Landing from "./Landing";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./Dashboard";

function App() {

  // Followed react router tutorial here: https://reactrouter.com/en/main/start/tutorial
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard/>,
    },{
      path: "/login",
      element: <Landing/>,
    },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
