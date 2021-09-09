import React, { useState } from "react";
import Facebook from "../icons/facebook.inline.svg";
import Instagram from "../icons/instagram.inline.svg";
import Envelope from "../icons/envelope.inline.svg";
import * as styles from "./header.module.css";

export default function Social({ className }) {
  return (
    <div className={className}>
      <a target="_blank" href="https://instagram.com/chutney_und_mehr">
        <Instagram className={styles.icon} />
      </a>
      <a
        target="_blank"
        href="https://m.facebook.com/Chutney-und-mehr-Manufaktur-103186701958138/"
      >
        <Facebook className={styles.icon} />
      </a>
      <a href="mailto:hallo@chutneyundmehr.de">
        <Envelope className={styles.icon} />
      </a>
    </div>
  );
}
