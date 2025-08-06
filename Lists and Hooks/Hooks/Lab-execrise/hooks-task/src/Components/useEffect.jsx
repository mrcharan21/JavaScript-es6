import React, {useEffect, useState} from 'react'

export default function UseEffect() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);

  return (
    <>
        <h2>User List</h2>
        <ul>
            {users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
    </>
  )
}
