import React from "react";
import './Navbar.css';
import { useCookies } from 'react-cookie';
// import { useNavigate } from "react-router-dom";

// import axios from "axios";

function Navbar() {
  const [,, removeCookie] = useCookies(['username']);
  // const navigate = useNavigate();

  async function Logout() {
    removeCookie('username', { path:'/' });
    // navigate("/login")
    // try {
    //   await axios.delete("http://localhost:8080/logout");
    // } catch (error) {
    //   console.log(error);
    // }
  }
  return (
    <div className="navbar">
      <div className="navbar-left">
        <a href="/">Monkey Zoo</a>
      </div>
      <div className="navbar-right">
        <button onClick={Logout}>Log out</button>
      </div>
    </div>
  );
}

export default Navbar;
