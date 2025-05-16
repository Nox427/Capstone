import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookingModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '',
    occasion: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { date, time, guests, occasion } = formData;
    if (!date || !time || !guests || !occasion || guests < 1) {
      setError('Please fill all fields correctly.');
      return;
    }
    localStorage.setItem('bookingData', JSON.stringify(formData));
    onClose();
    navigate('/confirmation');
  };

  return (
    <>
      <div className="booking-overlay" onClick={onClose}></div>
      <div className="booking-popup">
        <button className="close-btn" onClick={onClose}>&times;</button>
        <h2>Reserve a Table</h2>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input type="date" name="date" onChange={handleChange} required />
          <input type="time" name="time" onChange={handleChange} required />
          <input type="number" name="guests" onChange={handleChange} min="1" required placeholder="Guests" />
          <select name="occasion" onChange={handleChange} required>
            <option value="">Select Occasion</option>
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Engagement</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default BookingModal;

