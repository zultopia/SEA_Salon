import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Reviews from './components/Reviews';
import Header from './components/Header';
import ServicesCarousel from './components/ServicesCarousel';
import SignUp from './components/SignUp';
import Login from './components/LogIn';
import Footer from './components/Footer';
import AdminDashboard from './components/AdminDashboard';
import CustomerDashboard from './components/CustomerDashboard';
import ReservationForm from './components/ReservationForm';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<HomepageSection />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/admin-dashboard" element={<AdminDashboard />} />
                    <Route path="/customer-dashboard" element={<CustomerDashboard />} />
                    <Route path="/reservation" element={<ReservationForm />} />
                    <Route path="/reviews" element={<Reviews />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

const HomepageSection = () => (
    <>
        <div className="homepage-section">
            <Homepage />
        </div>
        <div className="services-section">
            <ServicesCarousel />
        </div>
        <div className="reviews-section">
            <Reviews />
        </div>
    </>
);

export default App;