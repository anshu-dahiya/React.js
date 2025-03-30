//Fetching API(by async await) and Multiple Returns in a single code 
import React, { useEffect, useState } from 'react'

export default function MutipleReturn() {

    const [users,setUsers] = useState([]);
    const [isLoading,setIsLoding] = useState(true);
    const [error,setError] = useState(null);

    useEffect(() => {
        async function fetchUsers() {
            try{
                const response = await fetch("https://api.github.com/users");
                const data = await response.json();
                setUsers(data);
                setIsLoding(false);
            }
            catch(error){
                setError(error);
                setIsLoding(false);
            }    
        }

        fetchUsers();
    },[])

    if(isLoading){
        return <p> Loading... </p>
    }

    if(error){
        return <p> Error : {error.message}</p>
    }


  return (
    <div>
        <h1>Users List</h1>
        <ul>
            {users.map(user => {
                return <li key={user.id}>
                    {user.login}
                </li>
            })}
        </ul>
    </div>
  )
}
