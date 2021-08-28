import React from "react";
import { useHistory } from "react-router";
function DetailsItem  ({items}) {
  const history = useHistory();

  const goHome = () => {
    console.log('on go home button')
    history.push('/')

  }

    return (
      <>
        <button onClick={goHome}>HOME</button>
        <img src={items.poster} alt="" />
        <div>{items.genresname}</div>
        <p>{items.moviedescription}</p>
      </>
    );

}

export default DetailsItem