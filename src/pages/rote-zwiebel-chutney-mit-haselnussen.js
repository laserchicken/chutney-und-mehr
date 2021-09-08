import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import ProductSubpageContainer from "../components/productSubpageContainer";

export default function RoteZwiebelChutneyMitHaselnussen() {
  return (
    <Layout>
      <Seo />
      <ProductSubpageContainer
        theme="redOnions"
        backgroundColor="redOnion"
        header="rote zwiebel<br>chutney<br>mit haselnüssen"
        image="redOnionsChutney"
      />
    </Layout>
  );
}
