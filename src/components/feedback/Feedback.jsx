import React from 'react';
import style from './Feedback.module.css';
import People1 from '../../assets/people1.png';
import People2 from '../../assets/people2.png';
import People3 from '../../assets/people3.png';
import Stars from '../../assets/stars.png';

const Feedback = () => {
  return (
    <div className={style.feedback}>
      <div className='container'>
        <div className={style.title_block}>
          <div className={style.title}>
            <h1>What Clients Say</h1>
            <p>
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics{' '}
            </p>
          </div>
        </div>
        <div className={style.box}>
          <div className={style.card}>
            <img src={Stars} alt='/' />
            <p>
              Product helps you see how many more days you need to work to reach
              your financial goal.
            </p>
            <div className={style.client}>
              <img src={People1} alt='/' />
              <div>
                <p>Wahid Ari</p>
                <p>Designer</p>
              </div>
            </div>
          </div>

          <div className={style.card}>
            <img src={Stars} alt='/' />
            <p>
              Product helps you see how many more days you need to work to reach
              your financial goal.
            </p>
            <div className={style.client}>
              <img src={People2} alt='/' />
              <div>
                <p>Wahid Ari</p>
                <p>Designer</p>
              </div>
            </div>
          </div>

          <div className={style.card}>
            <img src={Stars} alt='/' />
            <p>
              Product helps you see how many more days you need to work to reach
              your financial goal.
            </p>
            <div className={style.client}>
              <img src={People3} alt='/' />
              <div>
                <p>Wahid Ari</p>
                <p>Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
