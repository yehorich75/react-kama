import React from "react";
import iconSurf from "./../../../../img/nav-icon-surf.svg";
import iconTravel from "./../../../img/nav-icon-travel.svg";
import iconSleep from "./../../../img/nav-icon-sleep.svg";
import iconShop from "./../../../img/nav-icon-shop.svg";

const MenuItem = () => {
  let menuData = [
    { id: 1, href: "#surf", icon: iconSurf, alt: "Surf" },
    { id: 2, href: "#travel", icon: iconTravel, alt: "Travel" },
    { id: 3, href: "#sleep", icon: iconSleep, alt: "Sleep" },
    { id: 4, href: "#shop", icon: iconShop, alt: "Shop" }
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
