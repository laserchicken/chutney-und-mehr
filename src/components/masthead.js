import React from "react";
import LogoCombined from "../icons/logo-combined.inline.svg";
import * as styles from "./masthead.module.css";

export default function Masthead() {
  return (
    <div className={styles.masthead}>
      <LogoCombined className={styles.artwork} />
    </div>
  );
}
