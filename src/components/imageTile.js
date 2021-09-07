import React from "react";
import * as styles from "./tile.module.css";

export default function ImageTile({ image, className }) {
  return (
    <div
      className={`${styles.tile} ${styles.image} ${styles[image]} ${className}`}
    ></div>
  );
}
