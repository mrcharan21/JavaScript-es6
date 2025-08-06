//Create a list of users where each user has a unique id. Render the user list using React and assign a unique key to each user. 

import React from 'react'

export default function Task() {
    const users = [
        {id: 1, name: 'Charan'},
        {id: 2, name: 'Rudra'},
        {id: 3, name: 'Nithin'},
        {id: 4, name: 'Vasu'}
    ];
  return (
    <>
    <h2>User List</h2>
     {users.map(user => (
        <li key={user.id}>
            {user.name} (ID: {user.id})

        </li>
     ))}
    </>
  )
}
