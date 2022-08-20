import React from 'react';
import style from './Footer.module.css';
import Logo from '../../assets/logo_logo.png';
import LogoText from '../../assets/logo_product.png';
import Insta from '../../assets/instagram.png';
import Face from '../../assets/facebook.png';
import Twi from '../../assets/twi.png';

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className='container'>
        <div className={style.box}>
          <div className={style.left_block}>
            <div className={style.logo_img}>
              <img src={Logo} alt='' />
              <img src={LogoText} alt='' />
            </div>
            <div className={style.social}>
              <div className={style.bg_social}>
                <img src={Insta} alt='/' />
              </div>
              <div className={style.bg_social}>
                <img src={Face} alt='/' />
              </div>
              <div className={style.bg_social}>
                <img src={Twi} alt='/' />
              </div>
            </div>
          </div>

          <div className={style.central_block}>
            <div>
              <h1>Resource</h1>
              <ul>
                <li>
                  <a href='/'>About Us</a>
                </li>
                <li>
                  <a href='/'>Blog</a>
                </li>
                <li>
                  <a href='/'>Contact</a>
                </li>
                <li>
                  <a href='/'>FAQ</a>
                </li>
              </ul>
            </div>

            <div>
              <h1>Legal Stuff</h1>
              <ul>
                <li>
                  <a href='/'>Disclaimer</a>
                </li>
                <li>
                  <a href='/'>Financing</a>
                </li>
                <li>
                  <a href='/'>Privacy Policy</a>
                </li>
                <li>
                  <a href='/'>Terms of Service</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={style.right_block}>
            <h1>knowing you're always on the best energy deal.</h1>
            <input type='text' />
            <button>Sign up Now</button>
          </div>
        </div>
        <div className={style.footer_text}>
          <p>Made With Love By AYDev. 2022 All Right Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
