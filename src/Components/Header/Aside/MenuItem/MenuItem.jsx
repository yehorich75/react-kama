import React from "react";
import iconSurf from "./../../../../img/nav-icon-surf.svg";
import iconTravel from "./../../../img/nav-icon-travel.svg";
import iconSleep from "./../../../img/nav-icon-sleep.svg";
import iconShop from "./../../../img/nav-icon-shop.svg";

const MenuItem = () => {
  let menuData = [
    { href: "#surf", icon: iconSurf, alt: "Surf" },
    { href: "#travel", icon: iconTravel, alt: "Travel" },
    { href: "#sleep", icon: iconSleep, alt: "Sleep" },
    { href: "#shop", icon: iconShop, alt: "Shop" }
  ]

  let newMenu = menuData.map(item => {
    return (
    <li className="item">{item.href}</li>
    )
    // <MenuItem href={item.href} icon={item.icon} alt={item.alt} />
  })

  return (
    {newMenu}
  )
};

export default MenuItem;
