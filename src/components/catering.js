import React from "react";
import Button from "./button";
import chutneyundmehrMenu from "../downloads/chutneyundmehr-menu.pdf";
import CateringLogo from "../icons/logo-catering.inline.svg";
import * as styles from "./catering.module.css";

export default function Catering() {
  return (
    <div id="catering" className={styles.wrapper}>
      <div className={styles.header}>CATERING</div>
      <CateringLogo className={styles.cateringLogo} />
      <div className={styles.imageWrapper}>
        <div className={styles.rectangle}></div>
        <div className={styles.image}></div>
      </div>
      <div className={styles.ctaWrapper}>
        <Button text="unsere menu" file={chutneyundmehrMenu} />
      </div>
    </div>
  );
}
