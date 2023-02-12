import React,{useState} from 'react'
import Login from './Login'
import Landing from './Landing'

function Dashboard() {
    const [token, setToken] = useState()
    if(!token){
        {return <Landing />}
    }
  return (
    <div>Welcome to MONKEY ZOO.</div>
  )
}

export default Dashboard