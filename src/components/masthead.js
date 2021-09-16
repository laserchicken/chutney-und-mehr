import React from "react";
import LogoCombined from "../icons/logo-combined.inline.svg";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./masthead.module.css";

export default function Masthead() {
  return (
    <div className={styles.masthead}>
      <StaticImage
        className={styles.image}
        quality={100}
        loading={"eager"}
        src="../images/bg.png"
        alt="chutney und mehr"
      />
      <LogoCombined className={styles.artwork} />
    </div>
  );
}
