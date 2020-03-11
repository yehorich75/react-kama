import React from "react";
import iconSurf from './../../../../../img/nav-icon-surf.svg';
// import iconTravel from './../../../../img/nav-icon-travel.svg';
// import iconSleep from './../../../../img/nav-icon-sleep.svg';
// import iconShop from './../../../../img/nav-icon-shop.svg';
import styles from "./MenuItem.module.css";
import menuData from './menuData';

const MenuItem = ({ items }) => {
  return (
    <li className={styles.item}>
      <a href="#surf">
        <img src={iconSurf} alt="Surf" />
      </a>
    </li>
  );
};

export default MenuItem;
