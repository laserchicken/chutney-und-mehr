import React from "react";
import Logo from "../icons/logo-text.inline.svg";

export default function TitleTile({ header, backgroundColor, styles }) {
  return (
    <div className={`${styles.tile} ${styles[backgroundColor]}`}>
      <div className={`${styles.textWrapper} ${styles.uppercase}`}>
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
