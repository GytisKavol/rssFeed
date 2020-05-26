import React, { useContext, useEffect } from "react";
import { Article } from "./Article";
import { ArticleFiltered } from "./ArticleFiltered";

import { GlobalContext } from "../context/GlobalState";

export const ArticleList = () => {
  const {
    articles,
    clickFilterBtn,
    keywords,
    clickFilter,
    getArticles,
    articlesFiltered,
    getArticlesFiltered,
    getKeywords,
  } = useContext(GlobalContext);

  useEffect(() => {
    getArticles();
    getArticlesFiltered();
    getKeywords();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <button className="btn" onClick={clickFilter}>
        {clickFilterBtn ? `Filter articles` : `Unfilter articles`}
      </button>
      {clickFilterBtn ? (
        <div>
          {" "}
          <h3>Current feed</h3>
          <ul className="list">
            {articles.map((article, index) => (
              <Article key={index} article={article} />
            ))}
          </ul>
        </div>
      ) : (
        <div>
          {" "}
          <h3>Filtered feed</h3>
          <ul className="list">
            {articlesFiltered.map((articleFiltered, index) =>
  
                <ArticleFiltered
                  key={index}
                  articleFiltered={articleFiltered}
                  keyword={keyword}
                />
              
            )}
          </ul>
        </div>
      )}
    </>
  );
};
