import React from "react";
import ImageGallery from "react-image-gallery";
import salat from "../images/salat.jpg";
import fingerfood from "../images/fingerfood.jpg";
import glas from "../images/glas.jpg";
import * as styles from "./catering.module.css";

const images = [
  {
    original: glas,
  },
  {
    original: fingerfood,
  },
  {
    original: salat,
  },
];

export default function Catering() {
  return (
    <div id="catering" className={styles.wrapper}>
      <ImageGallery
        showFullscreenButton={false}
        showPlayButton={false}
        slideDuration={0}
        slideInterval={2000}
        items={images}
      />
    </div>
  );
}
