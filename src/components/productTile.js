import React, { useState, useEffect } from "react";
import ImageTile from "./imageTile";
import TitleTile from "./titleTile";
import * as styles from "./productTile.module.css";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function ProductTile({ image, header, backgroundColor }) {
  const [hovered, setHovered] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState({});

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    setWindowDimensions(getWindowDimensions());

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      onMouseEnter={(_) => {
        setHovered(true);
      }}
      onMouseLeave={(_) => {
        setHovered(false);
      }}
    >
      {hovered && windowDimensions.width > 1200 ? (
        <TitleTile
          className={styles.tile}
          header={header}
          backgroundColor={backgroundColor}
          styles={styles}
          button={false}
        />
      ) : (
        <ImageTile className={styles.tile} image={image} />
      )}
    </div>
  );
}
