import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddUrl = () => {
  const [urlText, setText] = useState('');


  const { addUrl } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newUrl = {
      urlText
    }

    addUrl(newUrl);
  }

  return (
    <>
      <h3>Add new RSS feed</h3>
      <form onSubmit={onSubmit}>
        <div>
          <input type="urlText" value={urlText} onChange={(e) => setText(e.target.value)} placeholder="Enter url..." />
        </div>
        <button className="btn">Add url</button>
      </form>
    </>
  )
}
