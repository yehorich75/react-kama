import React from "react";
import styles from "./Menu.module.css";
// import iconSurf from './../../../../img/nav-icon-surf.svg';
// import iconTravel from './../../../../img/nav-icon-travel.svg';
// import iconSleep from './../../../../img/nav-icon-sleep.svg';
// import iconShop from './../../../../img/nav-icon-shop.svg';
// import menuData from "./menuData";
import MenuItems from "./MenuItems/MenuItems";

function Menu({ items }) {
  return (
    <nav className={styles.menu}>
      <ul className={styles.list}>
        {MenuItems}
      </ul>
    </nav>
  );
}

export default Menu;
