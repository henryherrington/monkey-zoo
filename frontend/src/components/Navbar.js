import React from "react";
import axios from "axios";

function Navbar() {

  async function Logout() {
    try {
      await axios.delete("http://localhost:8080/logout");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="navbar">
      <div>
        <a href="/">Monkey Zoo</a>
        <ul>
          <li>
            <a href="/login">Log In</a>
          </li>
          <li>
            <a href="/signup">Sign Up</a>
          </li>
          <li>
            <button onClick={Logout}>Log out</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
