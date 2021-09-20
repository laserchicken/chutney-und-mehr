import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Seo from "../components/seo";
import ProductSubpageContainer from "../components/productSubpageContainer";

export default function RoteZwiebelChutneyMitHaselnussen({ data }) {
  const image = data.allFile.edges.find((image) => {
    return image.node.base.startsWith("red-onion");
  });

  return (
    <Layout>
      <Seo />
      <ProductSubpageContainer
        mastheadImage={getImage(image.node)}
        backgroundColor="redOnion"
        header="rote zwiebel-<br>chutney<br>mit haselnüssen"
        image="redOnionsChutney"
        subheader="<b>100% vegan | ℮ 145 gramm</b>"
        contents="<b>ZUTATEN</b>:<br/>Rote Zwiebeln 55%, Rotwein 11%, Rübenzucker 8,3% Getrocknete Pflaumen, Balsamico-Essig, Haselnüsse, Olivenöl, Tomatenmark, Steinsalz,  Pfeffer Schwarz, Thymian frisch, Kreuzkümmel, Chili."
        nutritionFacts={{
          headerColumns: ["DURCHSCHNITTLICHE NÄHRWERTE", "pro 100 g"],
          rows: [
            ["Energie", "139kcal"],
            ["Fett", "6.7g"],
            ["&nbsp;&nbsp;&nbsp;&nbsp;davon gesättigte Fettsäuren", "0.7g"],
            ["Ballaststoffe", "2.1g"],
            ["Kohlenhydrate", "16.7g"],
            ["&nbsp;&nbsp;&nbsp;&nbsp;davon Zucker", "13.9g"],
            ["Eiweiß", "2.0g"],
            ["Salz", "1.6g"],
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
