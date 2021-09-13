import React from "react";
import * as styles from "./button.module.css";

export default function ProductSubpageContainer({ text, file }) {
  return file ? (
    <a className={styles.button} href={file} target="_blank">
      {text}
    </a>
  ) : (
    <div className={styles.button}>{text}</div>
  );
}
