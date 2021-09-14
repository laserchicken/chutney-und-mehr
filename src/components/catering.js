import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import ImageTile from "./imageTile";
import TitleTile from "./titleTile";
import chutneyundmehrMenu from "../downloads/chutneyundmehr-menu.pdf";
import * as styles from "./catering.module.css";
import * as tileStyles from "./tile.module.css";

export default function Catering() {
  const [hovered, setHovered] = useState();

  return (
    <div id="catering" className={styles.wrapper}>
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
          Alle Gerichte werden nach meinen eigenen Rezepten zubereitet, die sich
          von denen der lokalen Catering-Unternehmen abheben. Wann immer
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
          servieren: unglaubliche Geschmackserlebnisse und die Freude am Essen.
          <br />
          <br />
          Ich bin bereit, Ihnen jeden Catering-Traum zu erfüllen, von einer
          Gartenparty bis zu einem intimen Familientreffen.
        </p>
      </div>

      <div className={styles.tiles}>
        <Link
          className={`${styles.row}`}
          to="/pflaumen-chutney-mit-walnussen"
          onMouseEnter={(_) => {
            setHovered("glas");
          }}
          onMouseLeave={(_) => {
            setHovered(null);
          }}
        >
          <ImageTile image={"glas"} className={styles.oneHalf} />
          <TitleTile
            header={"glas"}
            subheader={
              "GRÜNES ERBSENMOUSSE I RÄUCHERLACHS<br/>griechischer joghurt I mandelblättchen I dill"
            }
            backgroundColor={"green"}
            hovered={hovered === "glas"}
            className={styles.oneHalf}
            styles={tileStyles}
            button={"menu"}
          />
        </Link>
        <Link
          className={`${styles.row} ${styles.rowReverse}}`}
          to="/tomaten-mango-chutney"
          onMouseEnter={(_) => {
            setHovered("fingerfood");
          }}
          onMouseLeave={(_) => {
            setHovered(null);
          }}
        >
          <TitleTile
            header={"fingerfood"}
            backgroundColor={"green"}
            subheader={
              "ROTE ZWIEBEL-CHUTNEY I FETA<br/> muffins aus filo-teig I schnittlauch"
            }
            hovered={hovered === "fingerfood"}
            styles={tileStyles}
            className={styles.oneHalf}
            button={"menu"}
          />
          <ImageTile image={"fingerfood"} className={styles.oneHalf} />
        </Link>
        <Link
          className={`${styles.row}`}
          to="/rote-zwiebel-chutney-mit-haselnussen"
          onMouseEnter={(_) => {
            setHovered("salad");
          }}
          onMouseLeave={(_) => {
            setHovered(null);
          }}
        >
          <ImageTile image={"salat"} className={styles.oneHalf} />
          <TitleTile
            header={"SALATSCHÜSSEL"}
            subheader={
              "ZUCCHINI I ROQUEFORT<br/>dunkle weintrauben I radieschen I walnüsse I petersilie"
            }
            backgroundColor={"green"}
            hovered={hovered === "salad"}
            className={styles.oneHalf}
            styles={tileStyles}
            button={"menu"}
          />
        </Link>
      </div>
    </div>
  );
}
