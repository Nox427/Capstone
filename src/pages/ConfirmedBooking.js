import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ConfirmedBooking = () => {
  const [booking, setBooking] = useState(null);
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('bookingData'));
    setBooking(data);
  }, []);

  const handleClose = () => {
    localStorage.removeItem('bookingData');
    localStorage.setItem('justClosed', 'true');
    setVisible(false);
    navigate('/'); // 🔁 Redirect to homepage
  };

  useEffect(() => {
    if (localStorage.getItem('justClosed') === 'true') {
      localStorage.removeItem('justClosed');
    }
  }, []);

  if (!visible || !booking) return null;

  return (
    <div className="booking-overlay">
      <div className="confirmation-popup">
        <button className="close-btn" onClick={handleClose}>&times;</button>
        <h2 className="text-2xl font-bold mb-2">Booking Confirmed!</h2>
        <p><strong>Date:</strong> {booking.date}</p>
        <p><strong>Time:</strong> {booking.time}</p>
        <p><strong>Guests:</strong> {booking.guests}</p>
        <p><strong>Occasion:</strong> {booking.occasion}</p>
        <p className="thank-you">We look forward to serving you! 🍽️</p>
      </div>
    </div>
  );
};

export default ConfirmedBooking;




