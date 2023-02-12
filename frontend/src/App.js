import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Navbar from "./pages/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Navbar />
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
