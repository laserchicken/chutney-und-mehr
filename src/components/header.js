import React, { useState } from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Sticky from "react-stickynode";
import OutsideClickHandler from "react-outside-click-handler";
import Logo from "../icons/logo-text.inline.svg";
import Burger from "../icons/burger.inline.svg";
import Social from "./social";
import * as styles from "./header.module.css";

const Navigation = ({ className, onClick }) => (
  <div className={`${styles.navigationCommon} ${className}`}>
    <Link className={styles.link} to="/">
      Manufaktur
    </Link>
    <AnchorLink
      className={styles.link}
      to="/#catering"
      onAnchorLinkClick={onClick}
    >
      Catering
    </AnchorLink>
    <AnchorLink
      className={styles.link}
      to="/#kontakt"
      onAnchorLinkClick={onClick}
    >
      Kontakt
    </AnchorLink>
  </div>
);

export default function Header() {
  const [burgerMenuExpanded, setBurgerMenuExpanded] = useState(false);

  return (
    <Sticky innerZ={500} enabled={true}>
      <OutsideClickHandler
        onOutsideClick={() => {
          if (burgerMenuExpanded) {
            setBurgerMenuExpanded(false);
          }
        }}
      >
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
            <Navigation
              className={styles.navigationWrapperMobile}
              onClick={() => {
                setBurgerMenuExpanded(false);
              }}
            />
            <Social className={styles.socialWrapperMobile} />
          </div>
        </header>
      </OutsideClickHandler>
    </Sticky>
  );
}
