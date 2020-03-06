import React from "react";
import { ReactComponent as MapSvg } from "./Map.svg";
import styles from "./Map.module.css";

const Map = () => {
  return (
    <div className={styles.map}>
      <MapSvg />
    </div>
  );
};

export default Map;
