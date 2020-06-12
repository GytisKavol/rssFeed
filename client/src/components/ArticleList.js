import React, { useContext, useEffect } from "react";
import { Article } from "./Article";
import { ArticleFiltered } from "./ArticleFiltered";
import spinner from "../utils/spinner.svg";
import { GlobalContext } from "../context/GlobalState";

export const ArticleList = () => {
  const {
    articles,
    clickFilterBtn,
    clickFilter,
    getArticles,
    articlesFiltered,
    getArticlesFiltered,
    loading,
  } = useContext(GlobalContext);

  useEffect(() => {
    getArticles();
    getArticlesFiltered();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const unfilteredItems = articles.map((article, index) => (
    <Article key={index} article={article} />
  ));

  function compare(a, b) {
    if (a.filterArray < b.filterArray) {
      return 1;
    }
    if (a.filterArray > b.filterArray) {
      return -1;
    }
    return 0;
  }

  const sortedArticlesFiltered = articlesFiltered.sort(compare);
  const filteredItems = sortedArticlesFiltered.map((articleFiltered, index) => (
    <ArticleFiltered
      key={index}
      filter={articleFiltered.filter}
      array={articleFiltered.filterArray}
    />
  ));
  if (loading) {
    return <img className="loader" src={spinner} alt="loading..."></img>;
  }

  return (
    <>
      <button className="btn" onClick={clickFilter}>
        {clickFilterBtn ? `Filter articles` : `Unfilter articles`}
      </button>

      {clickFilterBtn ? (
        <div>
          {" "}
          <h3>Current feed</h3>
          <ul className="list">{unfilteredItems}</ul>
        </div>
      ) : (
        <div>
          {" "}
          <h3>Filtered feed</h3>
          <ul className="list">{filteredItems}</ul>
        </div>
      )}
    </>
  );
};
