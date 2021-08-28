import React from "react";
import { useHistory } from "react-router";
function DetailsItem  ({items}) {
    return (
      <>
        <img  src={items.poster} alt="" />
        <div>{items.genresname}</div>
        <p >{items.moviedescription}</p>
      </>
    );

}

export default DetailsItem