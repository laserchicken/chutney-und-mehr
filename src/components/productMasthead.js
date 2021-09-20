import React from "react";
import { Background } from "react-imgix";
import * as styles from "./productMasthead.module.css";

export default function ProductMasthead({ image }) {
  console.log(image.images.fallback.src);

  return (
    <Background
      className={styles.masthead}
      src={`https://test-chutney.imgix.net${image.images.fallback.src}`}
      sizes="100vw"
    />
  );
}
