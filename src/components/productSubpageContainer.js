import React from "react";
import ProductMasthead from "./productMasthead";
import ProductDetails from "./productDetails";
import DescriptionTile from "./descriptionTile";
import ProductsSelection from "./productsSelection";
import Button from "./button";
import chutneyundmehrDarstellung from "../downloads/chutneyundmehr-darstellung.pdf";
import ImageTile from "./imageTile";
import Footer from "./footer";
import * as styles from "./productSubpageContainer.module.css";

export default function ProductSubpageContainer({
  theme,
  backgroundColor,
  header,
  subheader,
  contents,
  nutritionFacts,
  bottomSubheader,
  image,
}) {
  return (
    <div>
      <ProductMasthead theme={theme} />
      <ProductDetails
        header={header}
        subheader={subheader}
        contents={contents}
        nutritionFacts={nutritionFacts}
        bottomSubheader={bottomSubheader}
        backgroundColor={backgroundColor}
        image={image}
      />
      <ProductsSelection />
      <div className={styles.ctaWrapper}>
        <Button text="CHUTNEY DARSTELLUNG" file={chutneyundmehrDarstellung} />
      </div>
      <Footer />
    </div>
  );
}
