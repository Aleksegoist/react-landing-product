import React from 'react';
import style from './Customer.module.css';
import Customer_img from '../../assets/customer_img.png';
import Orange from '../../assets/check_orange.png';
import Red from '../../assets/check_red.png';
import Blue from '../../assets/check_blue.png';

const Customer = () => {
  return (
    <div className={style.customer}>
      <div className='container'>
        <div className={style.box}>
          <div className={style.image}>
            <img src={Customer_img} alt='/' />
          </div>
          <div className={style.customer_content}>
            <h2>Easier decision making for</h2>
            <h1>Customer Support</h1>
            <p>
              The Myspace page defines the individual, his or her
              characteristics, traits, personal choices and the overall
              personality of the person.{' '}
            </p>
            <div className={style.content_blocs}>
              <img src={Orange} alt='/' />
              <p>Never worry about overpaying for your energy again. </p>
            </div>
            <div className={style.content_blocs}>
              <img src={Red} alt='/' />
              <p>
                We will only switch you to energy companies that we trust and
                will treat you right
              </p>
            </div>
            <div className={style.content_blocs}>
              <img src={Blue} alt='/' />
              <p>We track the markets daily and know where the savings are.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
