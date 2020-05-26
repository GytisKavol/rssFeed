import React, { useContext, useEffect } from 'react';
import { Article } from './Article';

import { GlobalContext } from '../context/GlobalState';

export const ArticleList = () => {
  const { articles, getArticles } = useContext(GlobalContext);

  useEffect(() => {
    getArticles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h3>Current feeds</h3>
      <ul className="list">
        {articles.map((article,index) => (<Article key={index} article={article} />))}
      </ul>
    </>
  )
}
