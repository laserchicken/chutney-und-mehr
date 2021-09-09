import React from "react";
import Masthead from "./masthead";
import Tiles from "./tiles";
import Insta from "./insta";
import Intro from "./intro";
import Footer from "./footer";
import styles from "./homepageContainer.module.css";

export default function HomepageContainer() {
  return (
    <div>
      <Masthead />
      <Intro />
      <Tiles />
      <Footer />
    </div>
  );
}
