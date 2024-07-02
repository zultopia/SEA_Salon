import React from 'react';
import { Link } from 'react-router-dom';

const CustomerDashboard = () => {
  return (
    <div>
      <h1>Customer Dashboard</h1>
      <nav>
        <Link to="/reservation">Make a Reservation</Link>
        <Link to="/reviews">Review Us</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/logout">Sign Out</Link>
      </nav>
    </div>
  );
};

export default CustomerDashboard;