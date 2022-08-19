import React from 'react';
import style from './Company.module.css';
import CompanyImage from '../../assets/company.png';

const Company = () => {
  return (
    <div className={style.company}>
      <div className={style.container}>
        <div className={style.box}>
          <div className={style.title}>
            <h1>Join 100 Companies who boost their business with Product</h1>
            <button>Get This</button>
          </div>
          <div className={style.image}>
            <img src={CompanyImage} alt='/' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
