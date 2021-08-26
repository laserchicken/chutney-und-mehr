import React from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Logo from "../icons/logo-text.inline.svg";
import Facebook from "../icons/facebook.inline.svg";
import Instagram from "../icons/instagram.inline.svg";
import Envelope from "../icons/envelope.inline.svg";
import * as styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.navigation}>
          <Link className={styles.link} to="/">
            Manufaktur
          </Link>
          <Link className={styles.link} href="/catering">
            Catering
          </Link>
          <AnchorLink className={styles.link} to="/#about">
            About / Contact
          </AnchorLink>
        </div>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.social}>
          <Instagram className={styles.socialIcon} />
          <Facebook className={styles.socialIcon} />
          <Envelope className={styles.socialIcon} />
        </div>
      </div>
    </header>
  );
}
