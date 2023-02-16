import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginSignupBox from "./LoginSignupBox";

function Landing(props) {
  const navigate = useNavigate();

  useEffect (() => {
    if (props.username) {
      navigate("/")
    }
  }, [props.username, navigate])

  return (
    <div>
      <p>You are about to enter a zoo like no other...</p>
      <LoginSignupBox/>
      {props.username}
    </div>
  );
};

export default Landing;
