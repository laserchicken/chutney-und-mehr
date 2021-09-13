import React from "react";
import * as styles from "./intro.module.css";

export default function Intro() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>MANUFAKTUR</div>
      <div className={styles.separator} />
      <div className={styles.subheader}>
        CHUTNEY UND MEHR MANUFAKTUR -
        <br /> eine Geschmacksfülle in einem kleinen Glas.
      </div>
      <div className={styles.textWrapper}>
        <p className={styles.textBlock}>
          Ich erinnere mich noch aus meiner Kindheit, wie meine Mutter Pflaumen-
          oder Erdbeermarmelade einige Tage einkochte. Ich erinnere mich an den
          Geruch von getrockneten Pilzen im Herbst und an den Duft von
          Bratäpfeln mit Zimt und Vanille im Winter. Ich möchte mit Ihnen diese
          Erinnerungen an den Geruch und Geschmack von echtem Obst und Gemüse
          ohne künstliche Aromen teilen.
          <br />
          <br />
          Ich bereite pikante, süße und saure Chutneys mit Obst - und
          Gemüsestücken nach meinen eigenen Rezepten zu, ohne künstliche
          Zusatzstoffe oder Konservierungsmittel. Warum in Gläsern? Denn sie
          sind haltbare und umweltfreundliche Verpackungen, die die Frische der
          Produkte perfekt bewahren.
        </p>
        <p className={styles.textBlock}>
          <b>
            ROTE ZWIEBEL-CHUTNEY MIT HASELNÜSSEN, TOMATEN-MANGO-CHUTNEY,
            SCHATTENMORELLEN-CHUTNEY MIT MEERRETTICH, PFLAUMEN-CHUTNEY MIT
            WALNÜSSEN:
          </b>{" "}
          das sind nur einige meiner Vorschläge, die perfekt zu Käse oder
          Pastete passen und Abwechslung in ein veganes Essen bringen.
          <br />
          <br />
          Wann immer es möglich ist, verwende ich lokale Produkte aus meiner
          Region Brandenburg, wie Pflaumen, Kirschen, Äpfel oder rote Zwiebeln.
        </p>
      </div>
    </div>
  );
}
