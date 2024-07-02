import React, { useState, useEffect } from 'react';
import { db } from '../firebase';

const ReservationForm = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [service, setService] = useState('Haircuts and Styling');
  const [dateTime, setDateTime] = useState('');
  const [branch, setBranch] = useState('');
  const [branches, setBranches] = useState([]);

  useEffect(() => {
    db.collection('branches').get()
      .then(snapshot => {
        setBranches(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleReservation = (e) => {
    e.preventDefault();
    db.collection('reservations').add({
      name,
      phoneNumber,
      service,
      dateTime,
      branch,
    })
    .then(() => {
      alert('Reservation made successfully!');
    })
    .catch((error) => {
      console.error(error);
    });
  };

  return (
    <form onSubmit={handleReservation}>
      <h1>Make a Reservation</h1>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="text" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
      <select value={service} onChange={(e) => setService(e.target.value)}>
        <option value="Haircuts and Styling">Haircuts and Styling</option>
        <option value="Manicure and Pedicure">Manicure and Pedicure</option>
        <option value="Facial Treatments">Facial Treatments</option>
      </select>
      <input type="datetime-local" value={dateTime} onChange={(e) => setDateTime(e.target.value)} required />
      <select value={branch} onChange={(e) => setBranch(e.target.value)} required>
        {branches.map(branch => (
          <option key={branch.id} value={branch.id}>{branch.name}</option>
        ))}
      </select>
      <button type="submit">Reserve</button>
    </form>
  );
};

export default ReservationForm;