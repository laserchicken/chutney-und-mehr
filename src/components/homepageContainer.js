import React from "react";
import Masthead from "./masthead";
import Seo from "./seo";
import Tiles from "./tiles";
import Insta from "./insta";
import Intro from "./intro";
import About from "./about";
import Catering from "./catering";
import Footer from "./footer";
import styles from "./homepageContainer.module.css";

export default function HomepageContainer() {
  return (
    <div>
      <Seo />
      <Masthead />
      <Intro />
      <Tiles />
      <Catering />
      <About />
      <Footer />
    </div>
  );
}
