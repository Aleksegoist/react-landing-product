import React from 'react';
import style from './Hero.module.css';
import Play from '../../assets/play.png';
import HeroBg from '../../assets/amico.png';

const Hero = () => {
  return (
    <div className={style.hero}>
      <div className='container'>
        <div className={style.hero_box}>
          <div className={style.hero_left}>
            <div>
              <h1>Work at the speed of thought</h1>
              <p>
                Tools, tutorials, design and innovation experts, all in one
                place! The most intuitive way to imagine your next user
                experience.
              </p>
            </div>
            <div className={style.hero_btn}>
              <button>Get started</button>
              <div className={style.hero_btn_video}>
                <img src={Play} alt='' />
                <a href='/'>Watch the Video</a>
              </div>
            </div>
          </div>
          <div className={style.hero_image_bg}>
            <img src={HeroBg} alt='/' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
