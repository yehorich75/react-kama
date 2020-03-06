import React from "react";
import classes from "./Menu.module.css";
import iconSurf from './../../../../img/nav-icon-surf.svg';
import iconTravel from './../../../../img/nav-icon-travel.svg';
import iconSleep from './../../../../img/nav-icon-sleep.svg';
import iconShop from './../../../../img/nav-icon-shop.svg';

function Menu(props) {
  return (
    <nav className={classes.menu}>
      <ul className={classes.list}>
        <li className={classes.item}>
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
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
