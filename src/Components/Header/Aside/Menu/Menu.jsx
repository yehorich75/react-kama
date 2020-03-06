import React from "react";
import styles from "./Menu.module.css";
// import iconSurf from './../../../../img/nav-icon-surf.svg';
// import iconTravel from './../../../../img/nav-icon-travel.svg';
// import iconSleep from './../../../../img/nav-icon-sleep.svg';
// import iconShop from './../../../../img/nav-icon-shop.svg';
// import menuData from "./menuData";
import MenuItem from "./../MenuItem/MenuItem";

function Menu({ items }) {
  return (
    <nav className={styles.menu}>
      <ul className={styles.list}>
        <MenuItem />
        {/* <li className={styles.item}>
          <a href="#surf">
            <img src={iconSurf} alt="Surf" />
          </a>
        </li>
        <li className={styles.item}>
          <a href="#travel">
            <img src={iconTravel} alt="Travel" />
          </a>
        </li>
        <li className={styles.item}>
          <a href="#sleep">
            <img src={iconSleep} alt="Sleep" />
          </a>
        </li>
        <li className={styles.item}>
          <a href="#shop">
            <img src={iconShop} alt="Shop" />
          </a>
        </li> */}
      </ul>
    </nav>
  );
}

export default Menu;
