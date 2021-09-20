import React from "react";
import { Background } from "react-imgix";
import * as styles from "./productMasthead.module.css";

export default function ProductMasthead({ image }) {
  return (
    <Background
      className={styles.masthead}
      src={`https://chutney-und-mehr.imgix.net${image.images.fallback.src}`}
      sizes="100vw"
    />
  );
}
