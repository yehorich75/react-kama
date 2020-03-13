import React from "react";
import styles from "./Menu.module.css";
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
