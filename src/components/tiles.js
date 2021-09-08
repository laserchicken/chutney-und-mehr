import React from "react";
import TitleTile from "./titleTile";
import ImageTile from "./imageTile";
import { Link } from "gatsby";
import * as styles from "./tiles.module.css";
import * as tileStyles from "./tile.module.css";

export default function Tiles() {
  return (
    <div className={styles.tiles}>
      <Link
        className={`${styles.row} ${styles.rowReverse}`}
        to="/pflaumen-chutney-mit-walnussen"
      >
        <ImageTile image={"plums"} className={styles.hiddenOnMobile} />
        <ImageTile image={"plumsChutney"} />
        <TitleTile
          header={"pflaumen<br>chutney<br>mit walnüssen"}
          backgroundColor={"plum"}
          styles={tileStyles}
        />
      </Link>
      <Link
        className={`${styles.row} ${styles.rowReverse}`}
        to="/tomaten-mango-chutney"
      >
        <ImageTile image={"tomatenMangoChutney"} />
        <TitleTile
          header={"tomaten<br>mango<br>chutney"}
          backgroundColor={"tomatenMango"}
          styles={tileStyles}
        />
        <ImageTile image={"mango"} className={styles.hiddenOnMobile} />
      </Link>
      <Link className={styles.row} to="/rote-zwiebel-chutney-mit-haselnussen">
        <TitleTile
          header={"rote zwiebel<br>chutney<br>mit haselnüssen"}
          backgroundColor={"redOnion"}
          styles={tileStyles}
        />
        <ImageTile image={"redOnions"} className={styles.hiddenOnMobile} />
        <ImageTile image={"redOnionsChutney"} />
      </Link>
      <Link
        className={`${styles.row} ${styles.rowReverse}`}
        to="/chili-marmelade"
      >
        <ImageTile image={"chilies"} className={styles.hiddenOnMobile} />
        <ImageTile image={"chilyMarmelade"} />
        <TitleTile
          header={"chili<br>marmelade"}
          backgroundColor={"chily"}
          styles={tileStyles}
        />
      </Link>
      <Link
        className={`${styles.row} ${styles.rowReverse}`}
        to="/apfel-chutney-mit-sesam"
      >
        <ImageTile image={"appleChutney"} />
        <TitleTile
          header={"apfel-chutney<br>mit sesam"}
          backgroundColor={"apple"}
          styles={tileStyles}
        />
        <ImageTile image={"apples"} className={styles.hiddenOnMobile} />
      </Link>
      <Link
        className={styles.row}
        to="/schatten-morellen-chutney-mit-meerrettich"
      >
        <TitleTile
          header={"schatten-<br>morellen<br>chutney<br>mit meerrettich"}
          backgroundColor={"cherry"}
          styles={tileStyles}
        />
        <ImageTile image={"cherries"} className={styles.hiddenOnMobile} />
        <ImageTile image={"cherryChutney"} />
      </Link>
    </div>
  );
}
