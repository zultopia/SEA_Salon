import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/Logo.png';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogIn = (e) => {
    e.preventDefault();
    setMessage('');

    // Hardcoded login logic
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.email === email && password === 'hardcodedPassword') {
      setMessage('Login successful! Redirecting...');
      setTimeout(() => {
        navigate('/customer-dashboard');
      }, 2000);
    } else {
      setMessage('Invalid email or password.');
    }
  };

  return (
    <div className="form-container">
      <img src={logo} alt="SEA Salon Logo" className="logo" style={{ width: '80px', height: 'auto' }} />
      <h2>Login</h2>
      <form onSubmit={handleLogIn}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Log In</button>
      </form>
      {message && <p>{message}</p>}
      <p>Don't have an account? <Link to="/signup">Create an Account</Link></p>
    </div>
  );
};

export default LogIn;