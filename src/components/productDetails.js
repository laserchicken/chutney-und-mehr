import React from "react";
import DescriptionTile from "./descriptionTile";
import ImageTile from "./imageTile";
import * as styles from "./productDetails.module.css";

export default function ProductDetails({
  header,
  subheader,
  contents,
  nutritionFacts,
  bottomSubheader,
  backgroundColor,
  image,
}) {
  return (
    <div className={styles.tiles}>
      <DescriptionTile
        header={header}
        subheader={subheader}
        contents={contents}
        nutritionFacts={nutritionFacts}
        bottomSubheader={bottomSubheader}
        backgroundColor={backgroundColor}
        className={`${styles.oneHalf} ${styles.fullHeight}`}
      />
      <ImageTile image={image} className={styles.oneHalf} />
    </div>
  );
}
