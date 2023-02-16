import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { useNavigate } from "react-router-dom";
import './Dashboard.css'

function Dashboard(props) {
  const navigate = useNavigate();

  useEffect (() => {
    if (!props.username) {
      navigate("/login")
    }
  }, [props.username, navigate])

  console.log(props.username)

  return (
    <div>
      <Navbar/>
      <h1>Welcome to MONKEY ZOO.</h1>
      <p>Hello, {props.username}</p>
    </div>
  )
}

export default Dashboard