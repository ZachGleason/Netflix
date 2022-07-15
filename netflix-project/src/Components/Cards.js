import React from 'react';
import '../Assets/Cards.css';

function Cards({image}) {
  return (
    <div className='cards'>
        <img 
        src={image}
        alt='img'
        className='cards'
        />
    </div>
  )
}

export default Cards