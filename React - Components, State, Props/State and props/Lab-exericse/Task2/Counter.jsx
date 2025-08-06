import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0); // Initial count is 0

  const increment = () => {
    setCount(count + 1); // Update state
  };

  return (
    <div style={styles.container}>
      <h2>Counter</h2>
      <p style={styles.countText}>Current Count: {count}</p>
      <button style={styles.button} onClick={increment}>Increment</button>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f2f2f2',
    borderRadius: '10px',
    width: '200px',
    margin: '20px auto',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  countText: {
    fontSize: '1.5rem',
    margin: '10px 0',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    cursor: 'pointer',
    borderRadius: '5px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
  }
};
