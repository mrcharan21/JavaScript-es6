import React from 'react';

const cardStyle = {
  border: '1px solid #ccc',
  borderRadius: '10px',
  padding: '20px',
  width: '250px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  margin: '10px',
  fontFamily: 'Arial, sans-serif',
  backgroundColor: '#f9f9f9'
};

const titleStyle = {
  fontSize: '1.5rem',
  marginBottom: '10px',
  color: '#333'
};

const textStyle = {
  margin: '5px 0',
  color: '#555'
};

export default function UserCard({ name, age, location }) {
  return (
    <div style={cardStyle}>
      <h2 style={titleStyle}>{name}</h2>
      <p style={textStyle}><strong>Age:</strong> {age}</p>
      <p style={textStyle}><strong>Location:</strong> {location}</p>
    </div>
  );
}
