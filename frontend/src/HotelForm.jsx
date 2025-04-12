import React, { useState } from 'react';
import axios from 'axios';

const HotelForm = () => {
  const [hotelName, setHotelName] = useState('');
  const [hotelLocation, setHotelLocation] = useState('');
  const [totalRooms, setTotalRooms] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const hotelData = {
      name: hotelName,
      location: hotelLocation,
      total_rooms: totalRooms,
    };

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/hotels/', hotelData);
      alert('Hotel added successfully!');
      setHotelName('');
      setHotelLocation('');
      setTotalRooms('');
    } catch (error) {
      console.error('Error adding hotel:', error);
      alert('Error adding hotel.');
    }
  };

  return (
    <div>
      <h2>Add New Hotel</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Hotel Name"
          value={hotelName}
          onChange={(e) => setHotelName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Location"
          value={hotelLocation}
          onChange={(e) => setHotelLocation(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Total Rooms"
          value={totalRooms}
          onChange={(e) => setTotalRooms(e.target.value)}
          required
        />
        <button type="submit">Add Hotel</button>
      </form>
    </div>
  );
};

export default HotelForm;
