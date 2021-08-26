import React from "react";
import Instagram from "../icons/instagram.inline.svg";
import Logo from "../icons/logo.inline.svg";
import * as styles from "./comingSoon.module.css";

export default function ComingSoon() {
  return (
    <div className={styles.wrapper}>
      <div>
        <span className={styles.text}>coming soon...</span>
      </div>
      <div>
        <Logo className={styles.logo} />
      </div>
      <div>
        <a href="https://instagram.com/chutney_und_mehr">
          <Instagram className={styles.socialIcon} />
        </a>
      </div>
    </div>
  );
}
