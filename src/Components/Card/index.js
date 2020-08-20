import React from 'react';
import './index.css';
const Card = ({ kitten }) => {
  return (
    <div className='Card'>
      <div className='Card-inner'>
        <div key={kitten.id}>
          <div className='Card-front'>
            <img
              src={`https://robohash.org/${kitten.id}?set=set4&size=200x200`}
              alt=''
            />
            <h2>{kitten.name}</h2>
          </div>
          <div className='Card-back'>
            <p>{kitten.email}</p>
            <p>{kitten.phone}</p>
            <p>{kitten.website}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
