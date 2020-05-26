import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddKeyword = () => {
  const [keywordText, setText] = useState("");

  const { addKeyword } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newKeyword = {
      keywordText,
    };

    addKeyword(newKeyword);
  };

  return (
    <>
      <h3>Add new keyword</h3>
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="keywordText"
            value={keywordText}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter keyword..."
          />
        </div>
        <button className="btn">Add keyword</button>
      </form>
    </>
  );
};
