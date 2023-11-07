

import React, { useState } from 'react';

function Login({ onLogin, onError }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === 'usuario' && password === 'contraseña') {
      onLogin();
    } else {
      setError(true);
      onError(); // Llamada a la función de error pasada como prop
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        {error && <p className="error">Usuario o contraseña incorrectos</p>}
        <div className="form-group">
          <label htmlFor="username">Usuario:</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
}

export default Login;
