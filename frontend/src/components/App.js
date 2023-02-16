import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useCookies } from 'react-cookie';
import Dashboard from "./Dashboard";
import Landing from "./Landing";
import "./App.css"

function App() {
  const [cookies] = useCookies(['username']);

  // Followed react router tutorial here: https://reactrouter.com/en/main/start/tutorial
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard username={cookies.username}/>,
    },{
      path: "/login",
      element: <Landing username={cookies.username}/>,
    },
  ]);

  return (
    <React.StrictMode>
      <div className="app-container">
          <RouterProvider router={router} />
      </div>
    </React.StrictMode>
  );
}

export default App;
