import React, { useEffect, useState } from 'react';
import axios from 'axios';

function HotelList() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:8000/api/hotels/')
      .then((response) => {
        setHotels(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch hotels:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading hotels...</p>;

  return (
    <div>
      <h2>Available Hotels</h2>
      <ul>
        {hotels.map((hotel) => (
          <li key={hotel.id}>{hotel.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default HotelList;
