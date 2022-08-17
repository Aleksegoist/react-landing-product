import React from 'react';
import style from './Product.module.css';
import Arrow from '../../assets/icon_arrow.png';
import Design from '../../assets/icon_design.png';
import Heart from '../../assets/icon_heart.png';
import Clock from '../../assets/icon_clock.png';

const Product = () => {
  return (
    <div className={style.product}>
      <div className='container'>
        <div className={style.product_title}>
          <h1>Product was Built Specifically for You</h1>
        </div>
        <div className={style.card_box}>
          <div>
            <img src={Arrow} alt='/' />
            <h2>First click tests</h2>
            <p>While most people enjoy casino gambling</p>
          </div>
          <div>
            <img src={Design} alt='/' />
            <h2>Design surveys</h2>
            <p>Sports betting, lottery and bingo playing for the fun</p>
          </div>
          <div>
            <img src={Heart} alt='/' />
            <h2>Preference tests</h2>
            <p>The Myspace page defines the individual.</p>
          </div>
          <div>
            <img src={Clock} alt='/' />
            <h2>Five second tests</h2>
            <p>Personal choices and the overall personality of the person. </p>
          </div>
        </div>
        <div className={style.product_btn}>
          <button>SIGN UP NOW</button>
        </div>
      </div>
      <div className={style.bg}> </div>
    </div>
  );
};

export default Product;
