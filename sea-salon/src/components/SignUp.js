import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/Logo.png';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    setMessage('');
    
    // Hardcoded signup logic
    if (email && password && fullName && phoneNumber) {
      // Here you can store the user details in localStorage or a variable if needed
      localStorage.setItem('user', JSON.stringify({ email, fullName, phoneNumber }));
      setMessage('Sign up successful! Redirecting...');
      setTimeout(() => {
        navigate('/customer-dashboard');
      }, 2000);
    } else {
      setMessage('All fields are required.');
    }
  };

  return (
    <div className="form-container">
      <img src={logo} alt="SEA Salon Logo" className="logo" style={{ width: '80px', height: 'auto' }} />
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <input type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="tel" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Sign Up</button>
      </form>
      {message && <p>{message}</p>}
      <p>Already have an account? <Link to="/login">Log in</Link></p>
    </div>
  );
};

export default SignUp;