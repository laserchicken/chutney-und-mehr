import React from "react";
import * as styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <a className={styles.homepageLink} href="/"></a>
      </div>
    </header>
  );
}
