import React from "react";
import * as styles from "./productMasthead.module.css";

export default function ProductMasthead({ theme }) {
  return <div className={`${styles.masthead} ${styles[theme]}`} />;
}
