import React, { useContext, useEffect } from 'react';
import { Keyword } from './Keyword';

import { GlobalContext } from '../context/GlobalState';

export const KeywordList = () => {
  const { keywords, getKeywords } = useContext(GlobalContext);

  useEffect(() => {
    getKeywords();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h3>Current keywords</h3>
      <ul className="list">
        {keywords.map(keyword => (<Keyword key={keyword._id} keyword={keyword} />))}
      </ul>
    </>
  )
}
