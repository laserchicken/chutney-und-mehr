import React from "react";
import ImageGallery from "react-image-gallery";
import Button from "./button";
import chutneyundmehrMenu from "../downloads/chutneyundmehr-menu.pdf";
import salat from "../images/salat.jpg";
import fingerfood from "../images/fingerfood.jpg";
import glas from "../images/glas.jpg";
import * as styles from "./catering.module.css";

const images = [
  {
    original: glas,
  },
  {
    original: fingerfood,
  },
  {
    original: salat,
  },
];

export default function Catering() {
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
      <ImageGallery
        showFullscreenButton={false}
        additionalClass={styles.gallery}
        showPlayButton={false}
        slideDuration={0}
        slideInterval={2000}
        items={images}
      />
      <div className={styles.ctaWrapper}>
        <Button text="MENU" file={chutneyundmehrMenu} />
      </div>
    </div>
  );
}
