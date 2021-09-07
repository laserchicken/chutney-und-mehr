import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Logo from "../icons/logo-footer.inline.svg";
import * as styles from "./footer.module.css";

export default function Footer() {
  const data = useStaticQuery(
    graphql`
      query {
        allComponentsJson {
          edges {
            node {
              email
              address
              tel
              separator
              rights
              author
              parent {
                ... on File {
                  name
                }
              }
            }
          }
        }
      }
    `
  );

  const {
    email,
    address,
    tel,
    separator,
    rights,
    author,
  } = data.allComponentsJson.edges.find((edge) => {
    return edge.node.parent.name === "footer";
  }).node;

  return (
    <footer>
      <div className={styles.content}>
        <Logo className={styles.logo} />
        <div className={styles.contact}>
          <div
            className={styles.responsiveSpan}
            dangerouslySetInnerHTML={{ __html: email }}
          />
          <span className={`${styles.textSeparator} ${styles.desktopOnly}`}>
            {separator}
          </span>
          <span>{address}</span>
          <span className={styles.textSeparator}>{separator}</span>
          <span>{tel}</span>
        </div>
        <div className={styles.separator}></div>
        <div className={`${styles.rightsAuthor} ${styles.small}`}>
          <div
            className={styles.responsiveSpan}
            dangerouslySetInnerHTML={{ __html: rights }}
          />
          <span className={`${styles.textSeparator} ${styles.desktopOnly}`}>
            {separator}
          </span>
          <span
            className={styles.author}
            dangerouslySetInnerHTML={{ __html: author }}
          />
        </div>
      </div>
    </footer>
  );
}
