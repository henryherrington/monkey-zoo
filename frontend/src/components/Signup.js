import React from "react";
import axios from "axios";
import { useState } from "react";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/users", {
        username: username,
        password: password,
        confPassword: confPassword,
      });
    } catch (error) {
      if (error.response) {
        setErrorMsg(error.response.data.msg);
      }
    }
  }

  return (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <p>Username</p>
        <div>
          <input
            type="text"
            required
            placeholder="enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <p>Password</p>
        <div>
          <input
            type="password"
            required
            placeholder="enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <p>Confirm Password</p>
        <div>
          <input
            type="password"
            required
            placeholder="reenter password"
            value={confPassword}
            onChange={(e) => setConfPassword(e.target.value)}
          />
        </div>
        <div>
          <button>Sign Up</button>
        </div>
      </form>
      {errorMsg}
    </>
  );
}

export default Signup;