import React from "react";
import Logo from "../icons/logo-text.inline.svg";

export default function TitleTile({
  header,
  backgroundColor,
  hovered,
  styles,
}) {
  return (
    <div className={`${styles.tile} ${styles[backgroundColor]}`}>
      <div className={`${styles.textWrapper} ${styles.uppercase}`}>
        <h1
          className={`${styles.header} ${styles.spread}`}
          dangerouslySetInnerHTML={{ __html: header }}
        ></h1>
        <div className={styles.separator}></div>
        <div className={`${styles.button} ${hovered ? styles.hovered : ""}`}>
          aussehen
        </div>
      </div>
    </div>
  );
}
