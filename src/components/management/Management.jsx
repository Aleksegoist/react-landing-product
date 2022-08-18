import React from 'react';
import style from './Management.module.css';
import Manager from '../../assets/management_img.png';

const Management = () => {
  return (
    <div className={style.manage}>
      <div className='container'>
        <div className={style.box}>
          <div className={style.content}>
            <h2>Effortless Validation for</h2>
            <h1>Management</h1>
            <p>
              The Myspace page defines the individual, his or her
              characteristics, traits, personal choices and the overall
              personality of the person.
            </p>
            <div className={style.content_text}>
              <h3>Accessory makers</h3>
              <p>
                While most people enjoy casino gambling, sports betting, lottery
                and bingo playing for the fun
              </p>
            </div>
            <div className={style.content_text}>
              <h3>Alterationists</h3>
              <p>
                If you are looking for a new way to promote your business that
                won’t cost you more money.
              </p>
            </div>
          </div>
          <div className={style.image}>
            <img src={Manager} alt='/' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Management;
