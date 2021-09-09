import React from "react";
import Social from "./social";
import Logo from "../icons/logo-text.inline.svg";
import * as styles from "./about.module.css";

export default function About() {
  return (
    <div id="about" className={styles.wrapper}>
      <div className={styles.image}></div>
      <div className={styles.content}>
        <div>
          <div className={styles.header}>ABOUT US</div>
          <div className={styles.aboutWrapper}>
            <div className={styles.aboutTextIntro}>
              <b>
                Lorem ipsum dolor sit amet, consetetur elitr, sed diam nonumy
                eirmod tempor invidunt.
              </b>
            </div>
            <div className={styles.aboutText}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            </div>
          </div>
        </div>
        <div className={styles.contact}>
          <div className={styles.header}>CONTACT</div>
          <Logo className={styles.logo} />
          <div className={styles.email}>
            <a href="mailto:hallo@chutneyundmehr.de">hallo@chutneyundmehr.de</a>
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
  );
}
