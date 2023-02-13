import React,{useState} from 'react'
import {Navigate} from 'react-router-dom'

function Dashboard() {
  const [token] = useState()

  if(!token){
    return <Navigate to="/login"></Navigate>
  }

  return (
    <div>Welcome to MONKEY ZOO.</div>
  )
}

export default Dashboard