import React, { useState } from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Sticky from "react-stickynode";
import Logo from "../icons/logo-text.inline.svg";
import Facebook from "../icons/facebook.inline.svg";
import Instagram from "../icons/instagram.inline.svg";
import Envelope from "../icons/envelope.inline.svg";
import Burger from "../icons/burger.inline.svg";
import * as styles from "./header.module.css";

const Social = ({ className }) => (
  <div className={className}>
    <a target="_blank" href="https://instagram.com/chutney_und_mehr">
      <Instagram className={styles.icon} />
    </a>
    <a
      target="_blank"
      href="https://m.facebook.com/Chutney-und-mehr-Manufaktur-103186701958138/"
    >
      <Facebook className={styles.icon} />
    </a>
    <a href="mailto:hallo@chutneyundmehr.de">
      <Envelope className={styles.icon} />
    </a>
  </div>
);

const Navigation = ({ className }) => (
  <div className={`${styles.navigationCommon} ${className}`}>
    <Link className={styles.link} to="/">
      Manufaktur
    </Link>
    <Link className={styles.link} to="/catering">
      Catering
    </Link>
    <AnchorLink className={styles.link} to="/#about">
      About / Contact
    </AnchorLink>
  </div>
);

export default function Header() {
  const [burgerMenuExpanded, setBurgerMenuExpanded] = useState(false);

  return (
    <Sticky enabled={true}>
      <header className={styles.header}>
        <div className={styles.content}>
          <Navigation className={styles.navigationWrapper} />
          <div className={styles.logo}>
            <Logo />
          </div>
          <div className={styles.burger}>
            <Burger
              onClick={() => {
                setBurgerMenuExpanded(!burgerMenuExpanded);
              }}
              className={styles.icon}
            />
          </div>
          <Social className={styles.socialWrapper} />
        </div>
        <div
          className={burgerMenuExpanded ? styles.expanded : styles.collapsed}
        >
          <Navigation className={styles.navigationWrapperMobile} />
          <Social className={styles.socialWrapperMobile} />
        </div>
      </header>
    </Sticky>
  );
}
