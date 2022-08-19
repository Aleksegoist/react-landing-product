import React from 'react';
import style from './Price.module.css';

const Price = () => {
  return (
    <div className={style.price}>
      <div className='container'>
        <div className={style.top_text}>
          <h1>Price Table</h1>
          <p>We offer competitive price</p>
        </div>
        <div className={style.card_box}>
          <div className={style.card}>
            <h2>Free</h2>
            <p>Brief price description</p>
            <div className={style.card_price}>
              <p className={style.number}>0</p>
              <div className={style.card_price_month}>
                <p className={style.dollar}>$</p>
                <p>Per / month</p>
              </div>
            </div>
            <div className={style.text_block}>
              <p>Only 2 Operators</p>
              <p>Notifications</p>
              <p>Landing Pages</p>
            </div>
            <button>Order Now</button>
          </div>

          <div className={style.card}>
            <h2>Standard</h2>
            <p>Brief price description</p>
            <div className={style.card_price}>
              <p className={style.number}>5</p>
              <div className={style.card_price_month}>
                <p className={style.dollar}>$</p>
                <p>Per / month</p>
              </div>
            </div>
            <div className={style.text_block}>
              <p>5+ Operators</p>
              <p>Notifications</p>
              <p>Notifications</p>
            </div>
            <button>Order Now</button>
          </div>

          <div className={style.card}>
            <h2>Premium</h2>
            <p>Brief price description</p>
            <div className={style.card_price}>
              <p className={style.number}>10</p>
              <div className={style.card_price_month}>
                <p className={style.dollar}>$</p>
                <p>Per / month</p>
              </div>
            </div>
            <div className={style.text_block}>
              <p>10+ Operators</p>
              <p>Notifications</p>
              <p>Landing Pages</p>
            </div>
            <button>Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
