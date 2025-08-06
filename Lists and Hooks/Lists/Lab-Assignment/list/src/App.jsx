//Create a React component that renders a list of items (e.g., a list of fruit names). Use the map() function to render each item in the list. 

import React from 'react'


export default function App() {
  const fruits = ['Apple','Banana','Cherry'];

  return (
    <>
    <div>
      <h2>Student List</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
    </>
  )
}
