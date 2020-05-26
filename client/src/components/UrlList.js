import React, { useContext, useEffect } from 'react';
import { Url } from './Url';

import { GlobalContext } from '../context/GlobalState';

export const UrlList = () => {
  const { urls, getUrls } = useContext(GlobalContext);

  useEffect(() => {
    getUrls();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h3>Current websites</h3>
      <ul className="list">
        {urls.map(url => (<Url key={url._id} url={url} />))}
      </ul>
    </>
  )
}
