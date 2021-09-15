import React, { useState, useEffect } from "react";
import TitleTile from "./titleTile";
import ImageTile from "./imageTile";
import Button from "./button";
import { Link } from "gatsby";
import chutneyundmehrDarstellung from "../downloads/chutneyundmehr-darstellung.pdf";
import * as styles from "./tiles.module.css";
import * as tileStyles from "./tile.module.css";

export default function Tiles() {
  const [hovered, setHovered] = useState();

  return (
    <div className={styles.tiles}>
      <Link
        className={`${styles.row} ${styles.rowReverse}`}
        to="/pflaumen-chutney-mit-walnussen"
        onMouseEnter={(_) => {
          setHovered("plum");
        }}
        onMouseLeave={(_) => {
          setHovered(null);
        }}
      >
        <ImageTile image={"plums"} className={styles.hiddenOnMobile} />
        <ImageTile image={"plumsChutney"} />
        <TitleTile
          header={"pflaumen-<br>chutney<br>mit walnüssen"}
          backgroundColor={"plum"}
          hovered={hovered === "plum"}
          styles={tileStyles}
          button={"aussehen"}
        />
      </Link>
      <Link
        className={`${styles.row} ${styles.rowReverse}`}
        to="/tomaten-mango-chutney"
        onMouseEnter={(_) => {
          setHovered("tomatenMango");
        }}
        onMouseLeave={(_) => {
          setHovered(null);
        }}
      >
        <ImageTile image={"tomatenMangoChutney"} />
        <TitleTile
          header={"tomaten-<br>mango<br>chutney"}
          backgroundColor={"tomatenMango"}
          hovered={hovered === "tomatenMango"}
          styles={tileStyles}
          button={"aussehen"}
        />
        <ImageTile image={"mango"} className={styles.hiddenOnMobile} />
      </Link>
      <Link
        className={styles.row}
        to="/rote-zwiebel-chutney-mit-haselnussen"
        onMouseEnter={(_) => {
          setHovered("redOnion");
        }}
        onMouseLeave={(_) => {
          setHovered(null);
        }}
      >
        <TitleTile
          header={"rote zwiebel-<br>chutney<br>mit haselnüssen"}
          backgroundColor={"redOnion"}
          hovered={hovered === "redOnion"}
          styles={tileStyles}
          button={"aussehen"}
        />
        <ImageTile image={"redOnions"} className={styles.hiddenOnMobile} />
        <ImageTile image={"redOnionsChutney"} />
      </Link>
      <Link
        className={`${styles.row} ${styles.rowReverse}`}
        to="/chili-marmelade"
        onMouseEnter={(_) => {
          setHovered("chily");
        }}
        onMouseLeave={(_) => {
          setHovered(null);
        }}
      >
        <ImageTile image={"chilies"} className={styles.hiddenOnMobile} />
        <ImageTile image={"chilyMarmelade"} />
        <TitleTile
          header={"chili-<br>marmelade"}
          hovered={hovered === "chily"}
          backgroundColor={"chily"}
          styles={tileStyles}
          button={"aussehen"}
        />
      </Link>
      <Link
        className={`${styles.row} ${styles.rowReverse}`}
        to="/apfel-chutney-mit-sesam"
        onMouseEnter={(_) => {
          setHovered("apple");
        }}
        onMouseLeave={(_) => {
          setHovered(null);
        }}
      >
        <ImageTile image={"appleChutney"} />
        <TitleTile
          header={"apfel-chutney<br>mit sesam"}
          hovered={hovered === "apple"}
          backgroundColor={"apple"}
          styles={tileStyles}
          button={"aussehen"}
        />
        <ImageTile image={"apples"} className={styles.hiddenOnMobile} />
      </Link>
      <Link
        className={styles.row}
        to="/schatten-morellen-chutney-mit-meerrettich"
        onMouseEnter={(_) => {
          setHovered("cherry");
        }}
        onMouseLeave={(_) => {
          setHovered(null);
        }}
      >
        <TitleTile
          header={"schatten-<br>morellen-<br>chutney<br>mit meerrettich"}
          hovered={hovered === "cherry"}
          backgroundColor={"cherry"}
          styles={tileStyles}
          button={"aussehen"}
        />
        <ImageTile image={"cherries"} className={styles.hiddenOnMobile} />
        <ImageTile image={"cherryChutney"} />
      </Link>
      <div className={styles.ctaWrapper}>
        <Button text="CHUTNEY DARSTELLUNG" file={chutneyundmehrDarstellung} />
      </div>
    </div>
  );
}
