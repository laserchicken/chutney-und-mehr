import React from "react";
import TextTile from "./textTile";
import ImageTile from "./imageTile";
import * as styles from "./tiles.module.css";

export default function Tiles() {
  return (
    <div className={styles.tiles}>
      <div className={`${styles.row} ${styles.rowReverse}`}>
        <ImageTile image={"plums"} className={styles.hiddenOnMobile} />
        <ImageTile image={"plumsChutney"} />
        <TextTile
          header={"pflaumen<br>chutney<br>mit walnüssen"}
          backgroundColor={"plum"}
        />
      </div>
      <div className={`${styles.row} ${styles.rowReverse}`}>
        <ImageTile image={"tomatenMangoChutney"} />
        <TextTile
          header={"tomaten<br>mango<br>chutney"}
          backgroundColor={"tomatenMango"}
        />
        <ImageTile image={"mango"} className={styles.hiddenOnMobile} />
      </div>
      <div className={styles.row}>
        <TextTile
          header={"rote zwiebel<br>chutney<br>mit haselnüssen"}
          backgroundColor={"redOnion"}
        />
        <ImageTile image={"redOnions"} className={styles.hiddenOnMobile} />
        <ImageTile image={"redOnionsChutney"} />
      </div>
      <div className={`${styles.row} ${styles.rowReverse}`}>
        <ImageTile image={"chilies"} className={styles.hiddenOnMobile} />
        <ImageTile image={"chilyMarmelade"} />
        <TextTile header={"chili<br>marmelade"} backgroundColor={"chily"} />
      </div>
      <div className={`${styles.row} ${styles.rowReverse}`}>
        <ImageTile image={"appleChutney"} />
        <TextTile
          header={"apfel-chutney<br>mit sesam"}
          backgroundColor={"apple"}
        />
        <ImageTile image={"apples"} className={styles.hiddenOnMobile} />
      </div>
      <div className={styles.row}>
        <TextTile
          header={"schatten-<br>morellen<br>chutney<br>mit meerrettich"}
          backgroundColor={"cherry"}
        />
        <ImageTile image={"cherries"} className={styles.hiddenOnMobile} />
        <ImageTile image={"cherryChutney"} />
      </div>
    </div>
  );
}
