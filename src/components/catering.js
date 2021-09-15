import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import Button from "./button";
import chutneyundmehrMenu from "../downloads/chutneyundmehr-menu.pdf";
import catering1 from "../images/catering1.jpg";
import catering2 from "../images/catering2.jpg";
import catering3 from "../images/catering3.jpg";
import catering4 from "../images/catering4.jpg";
import catering5 from "../images/catering5.jpg";
import catering6 from "../images/catering6.jpg";
import catering7 from "../images/catering7.jpg";
import catering8 from "../images/catering8.jpg";
import * as styles from "./catering.module.css";

const NARROW_SCREEN_THRESHOLD = 1200;

function getWindowWidth() {
  const { innerWidth: width } = window;
  return width;
}

const images = [
  {
    original: catering1,
  },
  {
    original: catering2,
  },
  {
    original: catering3,
  },
  {
    original: catering4,
  },
  {
    original: catering5,
  },
  {
    original: catering6,
  },
  {
    original: catering7,
  },
  {
    original: catering8,
  },
];

export default function Catering() {
  const [isNarrowScreen, setIsNarrowScreen] = useState();

  useEffect(() => {
    setIsNarrowScreen(getWindowWidth() <= NARROW_SCREEN_THRESHOLD);
  });

  return (
    <div id="catering" className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.header}>CATERING</div>
        <div className={styles.separator} />
        <div className={styles.textWrapper}>
          <p className={styles.textBlock}>
            Kochen ist meine Leidenschaft, die ich mit Ihnen teilen möchte. Ich
            lasse mich von Aromen inspirieren, die ich auf meinen Reisen um die
            Welt kennen gelernt habe, z. B. in Thailand, Kambodscha und Vietnam.
            Ich biete Ihnen eine Fusionsküche, die moderne internationale Küche
            mit regionalen, saisonalen Produkten kombiniert. Ich gehe jeden
            Auftrag mit dem größten Engagement an.
            <br />
            <br />
            Alle Gerichte werden nach meinen eigenen Rezepten zubereitet, die
            sich von denen der lokalen Catering-Unternehmen abheben. Wann immer
            möglich, komponiere ich sie mit meinen Original CHUTNEY UND MEHR
            Chutneys, deren Sortiment Sie auf der Homepage sehen können.
          </p>
          <p className={styles.textBlock}>
            Die höchste Qualität der lokalen Produkte und eine innovative,
            originelle und raffinierte Art des Servierens stellen auch die
            anspruchsvollsten Kunden zufrieden. Ich bemühe mich, dass alle meine
            Snacks und Gerichte perfekt zusammenpassen.
            <br />
            <br />
            Mein Motto lautet #enjoy the moment und genau das möchte ich Ihnen
            servieren: unglaubliche Geschmackserlebnisse und die Freude am
            Essen.
            <br />
            <br />
            Ich bin bereit, Ihnen jeden Catering-Traum zu erfüllen, von einer
            Gartenparty bis zu einem intimen Familientreffen.
          </p>
        </div>
      </div>
      {isNarrowScreen !== undefined && (
        <ImageGallery
          showFullscreenButton={false}
          additionalClass={styles.gallery}
          useTranslate3D={false}
          autoPlay={!isNarrowScreen}
          showPlayButton={false}
          slideDuration={0}
          slideInterval={3000}
          stopPropagation
          items={images}
          showNav={false}
          showBullets
        />
      )}
      <div className={styles.ctaWrapper}>
        <Button text="MENU" file={chutneyundmehrMenu} />
      </div>
    </div>
  );
}
