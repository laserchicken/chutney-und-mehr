import React from "react";
import Logo from "../icons/logo-text.inline.svg";
import * as styles from "./tile.module.css";

export default function TextTile({ header, backgroundColor }) {
  return (
    <div className={`${styles.tile} ${styles[backgroundColor]}`}>
      <div className={styles.textWrapper}>
        <h1
          className={styles.header}
          dangerouslySetInnerHTML={{ __html: header }}
        ></h1>
        <div className={styles.separator}></div>
        <Logo className={styles.logo} />
      </div>
    </div>
  );
}
