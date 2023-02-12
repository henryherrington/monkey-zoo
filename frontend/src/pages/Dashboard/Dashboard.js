import React,{useState} from 'react'
import Login from '../Login/Login'

const Dashboard = () => {
    const [token, setToken] = useState()
    if(!token){
        {return <Login setToken={setToken}/>}
    }
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard