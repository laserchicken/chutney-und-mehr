import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import ProductSubpageContainer from "../components/productSubpageContainer";

export default function ApfelChutneyMitSesam() {
  return (
    <Layout>
      <Seo />
      <ProductSubpageContainer theme="apples" />
    </Layout>
  );
}
