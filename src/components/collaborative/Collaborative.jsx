import React from 'react';
import style from './Collaborative.module.css';
import Collabor from '../../assets/colloborative_img.png';

const Collaborative = () => {
  return (
    <div className={style.collaborative}>
      <div className='container'>
        <div className={style.box}>
          <div className={style.content}>
            <h2>Optimisation for</h2>
            <h1>Collaborative</h1>
            <p>
              Few would argue that, despite the advancements of feminism over
              the past three decades, women still face a double standard when it
              comes to their behavior.
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
            <img src={Collabor} alt='/' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaborative;
