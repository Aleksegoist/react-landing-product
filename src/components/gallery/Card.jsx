import React from 'react';
import style from './Gallery.module.css';

const Card = ({ image, make, title }) => {
  return (
    <div className={style.card}>
      <div className={style.card}>
        <img src={image} alt='/' />
        <p>{make}</p>
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default Card;
