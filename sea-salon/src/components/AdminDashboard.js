import React, { useState, useEffect } from 'react';
import { db } from '../firebase';

const AdminDashboard = () => {
  const [branches, setBranches] = useState([]);
  const [services, setServices] = useState([]);
  const [branchName, setBranchName] = useState('');
  const [branchLocation, setBranchLocation] = useState('');
  const [openingTime, setOpeningTime] = useState('');
  const [closingTime, setClosingTime] = useState('');
  const [serviceName, setServiceName] = useState('');
  const [serviceDuration, setServiceDuration] = useState('');

  useEffect(() => {
    const unsubscribeBranches = db.collection('branches').onSnapshot(snapshot => {
      setBranches(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    const unsubscribeServices = db.collection('services').onSnapshot(snapshot => {
      setServices(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return () => {
      unsubscribeBranches();
      unsubscribeServices();
    };
  }, []);

  const handleAddBranch = (e) => {
    e.preventDefault();
    db.collection('branches').add({
      name: branchName,
      location: branchLocation,
      openingTime,
      closingTime,
    })
    .then(() => {
      setBranchName('');
      setBranchLocation('');
      setOpeningTime('');
      setClosingTime('');
    })
    .catch((error) => {
      console.error(error);
    });
  };

  const handleAddService = (e) => {
    e.preventDefault();
    db.collection('services').add({
      name: serviceName,
      duration: serviceDuration,
    })
    .then(() => {
      setServiceName('');
      setServiceDuration('');
    })
    .catch((error) => {
      console.error(error);
    });
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <h2>Add Branch</h2>
      <form onSubmit={handleAddBranch}>
        <input type="text" placeholder="Branch Name" value={branchName} onChange={(e) => setBranchName(e.target.value)} required />
        <input type="text" placeholder="Branch Location" value={branchLocation} onChange={(e) => setBranchLocation(e.target.value)} required />
        <input type="time" placeholder="Opening Time" value={openingTime} onChange={(e) => setOpeningTime(e.target.value)} required />
        <input type="time" placeholder="Closing Time" value={closingTime} onChange={(e) => setClosingTime(e.target.value)} required />
        <button type="submit">Add Branch</button>
      </form>
      <h2>Add Service</h2>
      <form onSubmit={handleAddService}>
        <input type="text" placeholder="Service Name" value={serviceName} onChange={(e) => setServiceName(e.target.value)} required />
        <input type="text" placeholder="Service Duration" value={serviceDuration} onChange={(e) => setServiceDuration(e.target.value)} required />
        <button type="submit">Add Service</button>
      </form>
      <h2>Branches</h2>
      <ul>
        {branches.map(branch => (
          <li key={branch.id}>
            {branch.name} - {branch.location} ({branch.openingTime} - {branch.closingTime})
          </li>
        ))}
      </ul>
      <h2>Services</h2>
      <ul>
        {services.map(service => (
          <li key={service.id}>
            {service.name} - {service.duration} minutes
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;