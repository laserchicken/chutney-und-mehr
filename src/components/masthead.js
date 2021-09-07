import React from "react";
import ArtworkManufaktur from "../icons/artworkManufaktur.inline.svg";
import * as styles from "./masthead.module.css";

export default function Masthead() {
  return (
    <div className={styles.masthead}>
      <ArtworkManufaktur className={styles.artwork} />
    </div>
  );
}
