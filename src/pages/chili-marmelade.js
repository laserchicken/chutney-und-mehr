import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Seo from "../components/seo";
import ProductSubpageContainer from "../components/productSubpageContainer";

export default function ChiliMarmelade({ data }) {
  const image = data.allFile.edges.find((image) => {
    return image.node.base.startsWith("chili");
  });

  return (
    <Layout>
      <Seo />
      <ProductSubpageContainer
        mastheadImage={getImage(image.node)}
        backgroundColor="chily"
        header="chili-<br>marmelade"
        image="chilyMarmelade"
        subheader="<b>vegetarisch | ℮ 145 gramm</b>"
        contents="<b>ZUTATEN</b>:<br/>BIO-Gelierzucker 41%, Chili frisch 26%, Reisessig, Ingwer frisch, Limetten, Fischsoße, Knoblauch, Koriander, Limetten blätter."
        nutritionFacts={{
          headerColumns: ["DURCHSCHNITTLICHE NÄHRWERTE", "pro 100 g"],
          rows: [
            ["Energie", "181kcal"],
            ["Fett", "0.3g"],
            ["&nbsp;&nbsp;&nbsp;&nbsp;davon gesättigte Fettsäuren", "0.1g"],
            ["Ballaststoffe", "1.1g"],
            ["Kohlenhydrate", "42.5g"],
            ["&nbsp;&nbsp;&nbsp;&nbsp;davon Zucker", "39.9g"],
            ["Eiweiß", "1.4g"],
            ["Salz", "1.0g"],
          ],
          note:
            "*Referenzmenge für einen durchschnittlichen<br/>&nbsp;Erwachsenen (8.400 kJ/2000 kcal).",
        }}
        bottomSubheader="<b>hergestellt in deutschland.</b>"
      />
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "product" } }) {
      edges {
        node {
          base
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, quality: 100)
          }
        }
      }
    }
  }
`;
