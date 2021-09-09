import React from "react";
import * as styles from "./intro.module.css";

export default function Intro() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>MANUFAKTUR</div>
      <div className={styles.subheader}>
        CHUTNEY UND MEHR
        <br /> eine Geschmacksfülle in einem kleinen Glas.
      </div>
      <div className={`${styles.copyIntro} ${styles.separated}`}>
        Ich erinnere mich noch aus meiner Kindheit, wie meine Mutter Pflaumen-
        oder Erdbeermarmelade einige Tage einkochte. Ich erinnere mich an den
        Geruch von getrockneten Pilzen im Herbst und an den Duft von Bratäpfeln
        mit Zimt und Vanille im Winter.
      </div>
      <div className={`${styles.copySubintro} ${styles.separated}`}>
        Ich möchte mit Ihnen diese Erinnerungen an den Geruch und Geschmack von
        echtem Obst und Gemüse ohne künstliche Aromen teilen.
      </div>
      <div className={`${styles.copy} ${styles.separated}`}>
        Ich bereite pikante, süße und saure Chutneys mit Obst - und
        Gemüsestücken nach meinen eigenen Rezepten zu, ohne künstliche
        Zusatzstoffe oder Konservierungsmittel. Warum in Gläsern? Denn sie sind
        haltbare und umweltfreundliche Verpackungen, die die Frische der
        Produkte perfekt bewahren.
      </div>
      <div className={`${styles.separator} ${styles.separated}`}></div>
      <div className={styles.copyIntro}>
        ROTE ZWIEBEL-CHUTNEY MIT HASELNÜSSEN, TOMATEN-MANGO-CHUTNEY,
        SCHATTENMORELLEN-CHUTNEY MIT MEERRETTICH, PFLAUMEN-CHUTNEY MIT
        WALNÜSSEN:
      </div>
      <div className={`${styles.copy} ${styles.separated}`}>
        das sind nur einige meiner Vorschläge, die perfekt zu Käse oder Pastete
        passen und Abwechslung in ein veganes Essen bringen.
      </div>
      <div className={`${styles.copy} ${styles.separated}`}>
        Wann immer es möglich ist, verwende ich lokale Produkte aus meiner
        Region Brandenburg, wie Pflaumen, Kirschen, Äpfel oder rote Zwiebeln.
      </div>
    </div>
  );
}
