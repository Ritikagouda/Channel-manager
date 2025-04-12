import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HotelList = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/hotels/')
      .then(res => {
        setHotels(res.data);
      })
      .catch(err => {
        console.error('Error fetching hotels:', err);
      });
  }, []);

  return (
    <div>
      <h2>Hotel List</h2>
      <ul>
        {hotels.map((hotel, index) => (
          <li key={index}>
            <strong>{hotel.name}</strong> — {hotel.location} ({hotel.total_rooms} rooms)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HotelList;
