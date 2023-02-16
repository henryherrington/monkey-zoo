import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';

function Dashboard() {
  const [cookies] = useCookies(['username']);
  const [username, setUsername] = useState('');

  useEffect(() => {
    console.log(cookies)
    setUsername(cookies.username)
  }, [cookies]);


  return (
    <div>
      <h1>Welcome to MONKEY ZOO.</h1>
      <p>Hello, {username}</p>
      </div>
  )
}

export default Dashboard