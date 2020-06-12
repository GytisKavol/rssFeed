import React from "react";
import { ReactTinyLink } from "react-tiny-link";

export const Article = ({ article }) => {
  return (
    <li>
      <ReactTinyLink
        cardSize="small"
        showGraphic={true}
        maxLine={1}
        minLine={1}
        url={article.link}
        width={60}
        proxyUrl="https://cors-anywhere.herokuapp.com"
      />
    </li>
  );
};
