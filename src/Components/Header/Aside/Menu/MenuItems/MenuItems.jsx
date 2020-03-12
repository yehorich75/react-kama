import React from "react";
import iconSurf from './../../../../../img/nav-icon-surf.svg';
import iconTravel from './../../../../../img/nav-icon-travel.svg';
import iconSleep from './../../../../../img/nav-icon-sleep.svg';
import iconShop from './../../../../../img/nav-icon-shop.svg';
import styles from "./MenuItems.module.css";
// import { render } from "@testing-library/react";
// import menuData from './menuData';

const menuData = [
  { id: 1, href: "#surf", icon: iconSurf, alt: "Surf" },
  { id: 2, href: "#travel", icon: iconTravel, alt: "Travel" },
  { id: 3, href: "#sleep", icon: iconSleep, alt: "Sleep" },
  { id: 4, href: "#shop", icon: iconShop, alt: "Shop" }
]

const MenuItems = menuData.map(item => {
  return (
    <li className={styles.item}>
      <a href={item.href}>
        <img src={item.icon} alt={item.alt} />
      </a>
    </li>
  );
});

export default MenuItems;
