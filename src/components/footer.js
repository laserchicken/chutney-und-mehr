import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import * as styles from "./footer.module.css";

export default function Footer() {
  const data = useStaticQuery(
    graphql`
      query {
        allComponentsJson {
          edges {
            node {
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

  const { rights, author } = data.allComponentsJson.edges.find((edge) => {
    return edge.node.parent.name === "footer";
  }).node;

  return (
    <footer>
      <div className={styles.content}>
        <div className={styles.wrapper}>
          <div dangerouslySetInnerHTML={{ __html: rights }} />
        </div>
        <div>{author}</div>
      </div>
    </footer>
  );
}
