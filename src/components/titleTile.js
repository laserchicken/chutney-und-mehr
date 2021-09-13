import React from "react";
import Logo from "../icons/logo-text.inline.svg";

export default function TitleTile({
  header,
  subheader,
  backgroundColor,
  hovered,
  className,
  button = true,
  styles,
}) {
  return (
    <div className={`${styles.tile} ${styles[backgroundColor]} ${className}`}>
      <div className={`${styles.textWrapper} ${styles.uppercase}`}>
        <h1
          className={`${styles.header} ${styles.spread}`}
          dangerouslySetInnerHTML={{ __html: header }}
        ></h1>
        <div className={styles.separator}></div>
        {button ? (
          <div className={`${styles.button} ${hovered ? styles.hovered : ""}`}>
            aussehen
          </div>
        ) : (
          <Logo />
        )}
      </div>
    </div>
  );
}
