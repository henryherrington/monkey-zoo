import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

import "./LoginSignupBox.css";

function LoginSignupBox() {

const [isLoginScreen, setIsLoginScreen] = useState(true);
  return (
    <div className="login-signup-box">
        {isLoginScreen ?
            <Login/>
        : <Signup/>
        }
        {isLoginScreen ?
            <p>Don't have an account? <span className="switch-screen-link"
                onClick={() => setIsLoginScreen(!isLoginScreen)}>
                    Sign up
                </span>
            </p>
        :   <p>Already have an account? <span className="switch-screen-link"
                onClick={() => setIsLoginScreen(!isLoginScreen)}>
                    Login
                </span>
            </p>
        }
    </div>
  );
};

export default LoginSignupBox;
