import React from "react";
import Logo from '../../../img/logo.svg';
import iconSearch from '../../../img/search.svg';
import classes from "./Aside.module.css";
import Menu from "./Menu/Menu";


const Aside = () => {

  return (
    <div className={classes.aside}>
      <div className="logo">
        <a href="#">
          <img src={Logo} alt="Logo" />
        </a>
      </div>
      <Menu />
      <div className="header__search">
        <img src={iconSearch} alt="Search" />
      </div>
      <div className={classes.date}>
        20<span>06 | 2018</span>
      </div>
      <div className={classes.location}>California</div>
    </div>
  );
};

export default Aside;
