import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Url = ({ url }) => {
  const { deleteUrl } = useContext(GlobalContext);

  return (
    <li>
      {url.urlText}{" "}
      <button onClick={() => deleteUrl(url._id)} className="delete-btn">
        x
      </button>
    </li>
  );
};
