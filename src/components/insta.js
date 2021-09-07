import React, { useState, useEffect } from "react";
import styles from "./insta.module.css";

const instagramUrl = (userId) =>
  'https://instagram.com/graphql/query/?query_id=17888483320059182&variables={"id":"46290917709","first":12,"after":null}';

export default function Insta() {
  const [allInsta, setAllInsta] = useState([]);

  useEffect(() => {
    fetch(instagramUrl)
      .then((resonse) => resonse.json())
      .then(({ data }) => {
        const photos = [];
        data.user.edge_owner_to_timeline_media.edges.forEach((edge) => {
          if (edge.node) {
            photos.push({
              id: edge.node.id,
              thumbnail: edge.node.thumbnail_resources[2].src, // here I'm getting some data I need to display later, but more are contained in the response
              caption: edge.node.edge_media_to_caption.edges[0].node.text,
            });
          }
        });
        setAllInsta(photos);
      });
  }, []);

  return <div>{JSON.stringify(allInsta)}</div>;
}
