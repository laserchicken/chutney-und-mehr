import React from "react";
import NutritionFacts from "./nutritionFacts";
import * as styles from "./tile.module.css";

export default function DescriptionTile({
  header,
  subheader,
  contents,
  nutritionFacts,
  bottomSubheader,
  backgroundColor,
  className,
}) {
  return (
    <div
      className={`${styles.tile} ${styles.description} ${styles[backgroundColor]} ${className}`}
    >
      <div className={styles.description}>
        <h3
          className={styles.uppercase}
          dangerouslySetInnerHTML={{ __html: subheader }}
        ></h3>
        <h2
          className={styles.uppercase}
          dangerouslySetInnerHTML={{ __html: header }}
        ></h2>
        <p dangerouslySetInnerHTML={{ __html: contents }}></p>
        <NutritionFacts
          className={styles.nutritionFacts}
          nutritionFacts={nutritionFacts}
        />
        <p
          className={styles.uppercase}
          dangerouslySetInnerHTML={{ __html: bottomSubheader }}
        ></p>
      </div>
    </div>
  );
}
