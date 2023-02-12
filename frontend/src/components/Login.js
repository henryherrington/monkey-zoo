import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const Auth = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/login", {
        username: username,
        password: password,
      });
    } catch (error) {
      if (error.response) {
        setErrorMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={Auth}>
        <p>Username</p>
        <div>
          <input
            type="text"
            required
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <p>Password</p>
        <div>
          <input
            type="password"
            required
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <button>Login</button>
        </div>
      </form>
      {errorMsg}
    </div>
  );
};

export default Login;
