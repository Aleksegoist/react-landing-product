import React from 'react';
import style from './Header.module.css';
import LogoLogo from '../../assets/logo_logo.png';
import LogoText from '../../assets/logo_product.png';

const Header = () => {
  return (
    <div className={style.header}>
      <div className='container'>
        <div className={style.header_box}>
          <div className={style.header_logo}>
            <img src={LogoLogo} alt='/' />
            <img src={LogoText} alt='/' />
          </div>
          <div className={style.header_menu}>
            <ul className={style.menu_items}>
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
      </div>
    </div>
  );
};

export default Header;
