import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as styles from "./productMasthead.module.css";

export default function ProductMasthead({ image }) {
  return (
    <GatsbyImage loading="eager" className={styles.masthead} image={image} />
  );
}
