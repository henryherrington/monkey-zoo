import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
import axios from "axios";
import "./Login.css";

function Login() {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [, setCookie] = useCookies(['username']);
  
  const navigate = useNavigate();

  async function login(e) {
    e.preventDefault()

    await axios.post("http://localhost:8080/login", {
      username: usernameInput,
      password: passwordInput,
    }).then((response) => {
      setCookie('username', usernameInput, { path: '/' });
      navigate("/")
    }).catch((error) => {
      if (error.response) {
        setErrorMessage(error.response.data.message);
      }
    })
  }
  
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={login}>
        <p>Username</p>
        <div>
          <input
            type="text"
            required
            placeholder="Username"
            value={usernameInput}
            autoComplete="username"
            onChange={(e) => setUsernameInput(e.target.value)}
          />
        </div>
        <p>Password</p>
        <div>
          <input
            type="password"
            required
            placeholder="Password"
            value={passwordInput}
            autoComplete="current-password"
            onChange={(e) => setPasswordInput(e.target.value)}
          />
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
      <span className="error-message">{errorMessage}</span>
    </div>
  );
};

export default Login;
