import React from "react";
import { ReactTinyLink } from "react-tiny-link";

export const ArticleFiltered = ({ articleFiltered, keyword }) => {
  console.log(keyword.keywordText)
  return (
    <li>
      <ReactTinyLink
        cardSize="small"
        showGraphic={true}
        maxLine={2}
        minLine={1}
        url={articleFiltered.link}
      />
    </li>
  );
};
