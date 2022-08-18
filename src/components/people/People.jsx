import React from 'react';
import style from './People.module.css';
import Ava1 from '../../assets/avatar1.png';
import Ava2 from '../../assets/avatar2.png';
import Ava3 from '../../assets/avatar3.png';
import Ava4 from '../../assets/avatar4.png';

const People = () => {
  return (
    <div className={style.people}>
      <div className='container'>
        <div className={style.people_inner}>
          <div className={style.title}>
            <h1>Quick & Easy Process</h1>
            <p>
              Do you require some help for your project: Conception workshop,
              prototyping, marketing strategy, landing page, Ux/UI?
            </p>
          </div>
          <div className={style.box}>
            <div className={style.block}>
              <img src={Ava1} alt='/' />
              <div>
                <p>I can take care of your pitch</p>
              </div>
            </div>
            <div className={style.block}>
              <div>
                <p>I can take care of your pitch</p>
              </div>
              <img src={Ava4} alt='/' />
            </div>
            <div className={style.block}>
              <div>
                <p>I can take care of your pitch</p>
              </div>
              <img src={Ava2} alt='/' />
            </div>
            <div className={style.block}>
              <img src={Ava3} alt='/' />
              <div>
                <p>I can take care of your pitch</p>
              </div>
            </div>
          </div>
          <div className={style.btn}>
            <button>Contact our expert</button>
          </div>
        </div>
      </div>
      <div className={style.bg}></div>
    </div>
  );
};

export default People;
