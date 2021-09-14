import React from "react";
import Social from "./social";
import Logo from "../icons/logo-text.inline.svg";
import * as styles from "./about.module.css";

export default function About() {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.sectionHeader}>KONTAKT</div>
      <div className={styles.separator} />
      <div id="about" className={styles.wrapper}>
        <div className={styles.image}></div>
        <div className={styles.content}>
          <div>
            <div className={styles.header}>
              Hallo,
              <br />
              ich bin Jaroslaw.
            </div>
            <div>
              <div className={styles.aboutText}>Willkommen in meiner Welt.</div>
            </div>
          </div>
          <div className={styles.contact}>
            <Logo className={styles.logo} />
            <div className={styles.email}>
              <a href="mailto:hallo@chutneyundmehr.de">
                hallo@chutneyundmehr.de
              </a>
            </div>
            <div>
              <div className={styles.phoneWrapper}>
                <a href="tel:017 646 055 690">017 646 055 690</a>
              </div>
              <div className={styles.addressWrapper}>
                <a
                  target="_blank"
                  href="http://maps.google.com/?q=Fischerstr. 15, 16515 Oranienburg"
                >
                  Fischerstr. 15, 16515 Oranienburg
                </a>
              </div>
            </div>
          </div>
          <Social className={styles.social} />
        </div>
      </div>
    </div>
  );
}
