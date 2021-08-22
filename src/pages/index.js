import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import HomepageContainer from "../components/homepageContainer";

export default function Home() {
  return (
    <Layout>
      <Seo />
      <HomepageContainer />
    </Layout>
  );
}
