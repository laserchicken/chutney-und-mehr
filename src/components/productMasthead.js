import React from "react";
import { Background } from "react-imgix";
import lazySizes from "lazysizes";
import "lazysizes/plugins/attrchange/ls.attrchange";
import * as styles from "./productMasthead.module.css";

export default function ProductMasthead({ image }) {
  return (
    <Background
      className={`${styles.masthead} lazyload`}
      src={`https://chutney-und-mehr.imgix.net${image.images.fallback.src}`}
      sizes="100vw"
      attributeConfig={{
        src: "data-src",
        srcSet: "data-srcset",
        sizes: "data-sizes",
      }}
    />
  );
}
