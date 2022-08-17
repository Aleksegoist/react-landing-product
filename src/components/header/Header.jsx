import React, { useState } from 'react';
import style from './Header.module.css';
import LogoLogo from '../../assets/logo_logo.png';
import LogoText from '../../assets/logo_product.png';
import Theme from '../../assets/theme.png';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Header = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className={style.header}>
      <div className='container'>
        <div className={style.header_box}>
          <div className={style.header_box2}>
            <div className={style.header_logo}>
              <img src={LogoLogo} alt='/' />
              <img src={LogoText} alt='/' />
            </div>
            <div className={style.header_menu}>
              <ul
                className={
                  nav ? [style.menu, style.active].join(' ') : [style.menu]
                }
              >
                <li>
                  <a href='/'>Product</a>
                </li>
                <li>
                  <a href='/'>Customers</a>
                </li>
                <li>
                  <a href='/'>Pricing</a>
                </li>
                <li>
                  <a href='/'>Resources</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={style.header_btn}>
            <button>Sign In</button>
            <button>Sign Up</button>
            <img src={Theme} alt='/' />
          </div>
        </div>
        <div onClick={() => setNav(!nav)} className={style.mobile_btn}>
          {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
      </div>
    </div>
  );
};

export default Header;
