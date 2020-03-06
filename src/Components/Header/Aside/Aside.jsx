import React from "react";
import Logo from '../../../img/logo.svg';
import iconSurf from '../../../img/nav-icon-surf.svg';
import iconTravel from '../../../img/nav-icon-travel.svg';
import iconSleep from '../../../img/nav-icon-sleep.svg';
import iconShop from '../../../img/nav-icon-shop.svg';
import iconSearch from '../../../img/search.svg';
import classes from "./Aside.module.css";
import MenuItem from './MenuItem/MenuItem';

const Aside = () => {

  return (
    <div className={classes.aside}>
      <div className="logo">
        <a href="#">
          <img src={Logo} alt="Logo" />
        </a>
      </div>
      <nav className={classes.menu}>
        <ul className={classes.list}>
          <MenuItem />
          {/* <li className={classes.item}>
            <a href="#surf">
              <img src={iconSurf} alt="Surf" />
            </a>
          </li>
          <li className={classes.item}>
            <a href="#travel">
              <img src={iconTravel} alt="Travel" />
            </a>
          </li>
          <li className={classes.item}>
            <a href="#sleep">
              <img src={iconSleep} alt="Sleep" />
            </a>
          </li>
          <li className={classes.item}>
            <a href="#shop">
              <img src={iconShop} alt="Shop" />
            </a>
          </li> */}
        </ul>
      </nav>
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
