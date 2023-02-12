import React from "react";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./Dashboard";

// Followed react router tutorial here: https://reactrouter.com/en/main/start/tutorial
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
]);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
