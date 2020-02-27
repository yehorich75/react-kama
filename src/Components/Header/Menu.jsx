import React from "react";

const Menu = () => {
  return (
    <nav className="menu">
      <ul className="menu__list">
        <li className="menu__item">
          <a href="#">
            <img src="./img/nav-icon-surf.svg" alt="Surf" />
          </a>
        </li>
        <li className="menu__item">
          <a href="#">
            <img src="./img/nav-icon-travel.svg" alt="Travel" />
          </a>
        </li>
        <li className="menu__item">
          <a href="#">
            <img src="./img/nav-icon-sleep.svg" alt="Sleep" />
          </a>
        </li>
        <li className="menu__item">
          <a href="#">
            <img src="./img/nav-icon-shop.svg" alt="Shop" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
