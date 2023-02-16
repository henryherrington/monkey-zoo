import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
// import axios from "axios";

function Login() {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [errorMsg] = useState("");
  const [, setCookie] = useCookies(['username']);
  
  // const Auth = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.post("http://localhost:8080/login", {
  //       username: username,
  //       password: password,
  //     });
  //   } catch (error) {
  //     if (error.response) {
  //       setErrorMsg(error.response.data.msg);
  //     }
  //   }
  // };

  const navigate = useNavigate();

  function login(e) {
    e.preventDefault()
    setCookie('username', usernameInput, { path: '/' });
    navigate("/")
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
      {errorMsg}
    </div>
  );
};

export default Login;
