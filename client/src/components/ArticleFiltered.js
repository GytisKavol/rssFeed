import React from "react";
import { ArticleFilteredDeep } from "./ArticleFilteredDeep";

export const ArticleFiltered = ({ filter, array }) => {
  return (
    <>
    <br/>
     <h2> {array.length > 0
        ? `Keyword name is - ${filter} and there are ${array.length} articles that use it`
        : " "}</h2>
        <br/>
      {array.map((item) => (
        <ArticleFilteredDeep link={item.link} />
      ))}
    </>
  );
};
