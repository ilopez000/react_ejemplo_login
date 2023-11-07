import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Login from './Login';
import Home from './Home';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (success) => {
    setIsAuthenticated(success);
  };

  return (
    <div>
      {!isAuthenticated ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Home />
      )}
    </div>
  );
}

export default App;

