// components/BasicAuthComponent.js

import { useState } from 'react';

const BasicAuthComponent = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'username' && password === 'password') {
      setAuthenticated(true);
    } else {
      alert('Invalid credentials');
    }
  };

  if (!authenticated) {
    return (
      <div>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }

  // Render your protected content here
  return <div>Welcome! You are authenticated.</div>;
};

export default BasicAuthComponent;
