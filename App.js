import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Login from './Login';
import Home from './Home';
import Error from './Error';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginAttemptFailed, setLoginAttemptFailed] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    setLoginAttemptFailed(false);
  };

  const handleLoginFailure = () => {
    setLoginAttemptFailed(true);
  };

  return (
    <div>
      {!isAuthenticated && !loginAttemptFailed && (
        <Login onLogin={handleLoginSuccess} onError={handleLoginFailure} />
      )}
      {isAuthenticated && <Home />}
      {loginAttemptFailed && <Error />}
    </div>
  );
}

export default App;
