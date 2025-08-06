import React from 'react';
import UserCard from './UserCard'; // adjust path based on your file structure

function App() {
  return (
    <div>
      <UserCard name="Charan Guguloth" age={23} location="Telangana, India" />
      <UserCard name="Sita Reddy" age={25} location="Hyderabad" />
    </div>
  );
}

export default App;
