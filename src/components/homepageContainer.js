import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styles from "./homepageContainer.module.css";

export default function HomepageContainer() {
  const data = useStaticQuery(
    graphql`
      query {
        allPagesJson {
          edges {
            node {
              masthead {
                title
                subtitle
                text
              }
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

  const { masthead } = data.allPagesJson.edges.find((edge) => {
    return edge.node.parent.name === "homepage";
  }).node;

  return (
    <div>
      <main></main>
    </div>
  );
}
