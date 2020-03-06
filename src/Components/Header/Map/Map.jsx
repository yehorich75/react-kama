import React from "react";
import { ReactComponent as MapSvg } from "./Map.svg";
import classes from "./Map.module.css";

const Map = () => {
  return (
    <div className={classes.map}>
      <MapSvg />
    </div>
  );
};

export default Map;
