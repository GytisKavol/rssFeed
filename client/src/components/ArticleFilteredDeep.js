import React from "react";
import { ReactTinyLink } from "react-tiny-link";

export const ArticleFilteredDeep = ({ link }) => {
  return (
    <li>
      <ReactTinyLink
        cardSize="small"
        showGraphic={true}
        maxLine={2}
        minLine={1}
        url={link}
        width={60}
      />
    </li>
  );
};
