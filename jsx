import React, { useEffect, useState } from 'react';
import PropertyCard from '../components/PropertyCard';
import axios from 'axios';

function Home() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/listings')
      .then(res => setListings(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
      {listings.map(prop => <PropertyCard key={prop.id} property={prop} />)}
    </div>
  );
}

export default Home;
