//Fetching API(by promise chain)
import React, { useEffect, useState } from 'react'
import { data } from 'react-router-dom';

export default function Fetch() {

const [users,setUsers] = useState([]);
const [showUsers,setShowUsers] = useState(false);

useEffect(() => {
    fetch("https://api.github.com/users")
    .then(response => response.json())
    .then(data => setUsers(data))
    .catch(error=> console.error("Error Fetching Users :",error)
    )
},[])

const handleClick = () => {
    setShowUsers(true)
}

  return (
    <div>
        <h1>User List</h1>
        <button onClick={handleClick}>Get Users</button>
        {showUsers && (
            <ul>
            {
                users.map(user => {
                    return <li key={user.id}>
                            <a href={user.html_url}>
                                {user.login}
                            </a>                        
                        </li>;
                })
            }
            </ul>
            )
        } 
    </div>
  )
}
