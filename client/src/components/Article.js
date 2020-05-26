import React from "react";
import { ReactTinyLink } from "react-tiny-link";

export const Article = ({ article }) => {
  return (
    <li>
      <ReactTinyLink
        cardSize="small"
        showGraphic={true}
        maxLine={2}
        minLine={1}
        url={article.link}
      />
    </li>
  );
};
