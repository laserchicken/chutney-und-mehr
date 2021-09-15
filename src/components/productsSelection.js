import React from "react";
import { Link } from "gatsby";
import ArtworkManufaktur from "../icons/artworkManufaktur.inline.svg";
import ProductTile from "./productTile";
import * as styles from "./productsSelection.module.css";

export default function ProductsSelection() {
  return (
    <div className={styles.wrapper}>
      <ArtworkManufaktur className={styles.logo} />
      <div className={styles.text}>Meine Wahl des Chutneys:</div>
      <div className={styles.tiles}>
        <div className={styles.row}>
          <Link className={styles.link} to="/pflaumen-chutney-mit-walnussen">
            <ProductTile
              image={"plumsChutney"}
              header={"pflaumen-<br>chutney<br>mit walnüssen"}
              backgroundColor={"plum"}
            />
          </Link>
          <Link className={styles.link} to="/tomaten-mango-chutney">
            <ProductTile
              image={"tomatenMangoChutney"}
              header={"tomaten-<br>mango<br>chutney"}
              backgroundColor={"tomatenMango"}
            />
          </Link>
          <Link
            className={styles.link}
            to="/rote-zwiebel-chutney-mit-haselnussen"
          >
            <ProductTile
              image={"redOnionsChutney"}
              header={"rote zwiebel-<br>chutney<br>mit haselnüssen"}
              backgroundColor={"redOnion"}
            />
          </Link>
          <Link className={styles.link} to="/chili-marmelade">
            <ProductTile
              image={"chilyMarmelade"}
              header={"chili-<br>marmelade"}
              backgroundColor={"chily"}
            />
          </Link>
          <Link className={styles.link} to="/apfel-chutney-mit-sesam">
            <ProductTile
              image={"appleChutney"}
              header={"apfel-chutney<br>mit sesam"}
              backgroundColor={"apple"}
            />
          </Link>
          <Link
            className={styles.link}
            to="/schatten-morellen-chutney-mit-meerrettich"
          >
            <ProductTile
              image={"cherryChutney"}
              header={"schatten-<br>morellen-<br>chutney<br>mit meerrettich"}
              backgroundColor={"cherry"}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
