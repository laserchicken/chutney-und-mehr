import React, { useState } from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Sticky from "react-stickynode";
import Logo from "../icons/logo-text.inline.svg";
import Burger from "../icons/burger.inline.svg";
import Social from "./social";
import * as styles from "./header.module.css";

const Navigation = ({ className }) => (
  <div className={`${styles.navigationCommon} ${className}`}>
    <Link className={styles.link} to="/">
      Manufaktur
    </Link>
    <AnchorLink className={styles.link} to="/#catering">
      Catering
    </AnchorLink>
    <AnchorLink className={styles.link} to="/#about">
      Kontakt
    </AnchorLink>
  </div>
);

export default function Header() {
  const [burgerMenuExpanded, setBurgerMenuExpanded] = useState(false);

  return (
    <Sticky innerZ={500} enabled={true}>
      <header className={styles.header}>
        <div className={styles.content}>
          <Navigation className={styles.navigationWrapper} />
          <div className={styles.logo}>
            <Link to="/">
              <Logo />
            </Link>
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
