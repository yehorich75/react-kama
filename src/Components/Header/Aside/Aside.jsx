import React from "react";
import Logo from '../../../img/logo.svg';
import iconSurf from '../../../img/nav-icon-surf.svg';
import classes from "./Aside.module.css";

const Aside = () => {
  return (
    <div className={classes.aside}>
      <div className="logo">
        <a href="#">
          <img src={Logo} alt="Logo" />
        </a>
      </div>
      <nav className={classes.menu}>
        <ul className="menu__list">
          <li className="menu__item">
            <a href="#">
              <img src={iconSurf} alt="Surf" />
            </a>
          </li>
          <li className="menu__item">
            <a href="#">
              <img src="../../img/nav-icon-travel.svg" alt="Travel" />
            </a>
          </li>
          <li className="menu__item">
            <a href="#">
              <img src="img/nav-icon-sleep.svg" alt="Sleep" />
            </a>
          </li>
          <li className="menu__item">
            <a href="#">
              <img src="img/nav-icon-shop.svg" alt="Shop" />
            </a>
          </li>
        </ul>
      </nav>
      <div className="header__search">
        <img src="img/search.svg" alt="Search" />
      </div>
      <div className="header__date">
        20<span>06 | 2018</span>
      </div>
      <div className="header__location">California</div>
    </div>
  );
};

export default Aside;
