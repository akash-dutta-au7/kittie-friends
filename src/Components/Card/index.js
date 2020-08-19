import React from 'react';
import './index.css';
const Card = ({ monster }) => {
  return (
    <div className='Card'>
      <div key={monster.id}>
        <img
          src={`https://robohash.org/${monster.id}?set=set4&size=200x200`}
          alt=''
        />
        <h2>{monster.name}</h2>
        <p>{monster.email}</p>
        <p>{monster.phone}</p>
        <p>{monster.website}</p>
      </div>
    </div>
  );
};

export default Card;
