import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Keyword = ({ keyword }) => {
  const { deleteKeyword } = useContext(GlobalContext);

  return (
    <li>
      {keyword.keywordText}{" "}
      <button onClick={() => deleteKeyword(keyword._id)} className="delete-btn">
        x
      </button>
    </li>
  );
};
