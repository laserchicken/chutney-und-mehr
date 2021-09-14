import React from "react";
import Logo from "../icons/logo-text.inline.svg";

export default function TitleTile({
  header,
  subheader,
  backgroundColor,
  hovered,
  className,
  button,
  styles,
}) {
  return (
    <div className={`${styles.tile} ${styles[backgroundColor]} ${className}`}>
      <div className={`${styles.textWrapper} `}>
        <h1
          className={`${styles.header} ${styles.spread} ${styles.uppercase}`}
          dangerouslySetInnerHTML={{ __html: header }}
        ></h1>
        <div className={styles.separator}></div>
        <div
          className={styles.subheader}
          dangerouslySetInnerHTML={{ __html: subheader }}
        ></div>
        {button ? (
          <div
            className={`${styles.button} ${styles.uppercase} ${
              hovered ? styles.hovered : ""
            }`}
          >
            {button}
          </div>
        ) : (
          <Logo className={styles.logo} />
        )}
      </div>
    </div>
  );
}
