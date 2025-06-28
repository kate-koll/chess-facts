import React from 'react';
import {useState, useEffect} from 'react';

import {IoIosStar, IoIosStarOutline} from 'react-icons/io';


const Rating = ({ factId, onFilterChange }) => {
  const [rating, setRating] = useState(false);

  // Load rating from sessionStorage when component mounts
  useEffect(() => {
    const saved = JSON.parse(sessionStorage.getItem('favorites') || '[]');
    if (saved.includes(factId)) {
      setRating(true);
    }
  }, [factId]);

  // Toggle rating and update sessionStorage
  const toggleRating = () => {
    const saved = JSON.parse(sessionStorage.getItem('favorites') || '[]');
    let updated;
    

    if (rating) {
      console.log('setting to false');
      updated = saved.filter((id) => id !== factId);
      console.log('updated', updated);
      if (onFilterChange) onFilterChange();
      setRating(false);
    } else {
      updated = [...saved, factId];
      setRating(true);
    }

    sessionStorage.setItem('favorites', JSON.stringify(updated));

  };

  return (
    <div onClick={toggleRating} style={{ cursor: 'pointer' }}>
      {rating ? <IoIosStar color='#1976d2'/> : <IoIosStarOutline />}
    </div>
  );
};

export default Rating