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
        <img src={items.movieimage} alt="" />
        <br />
        <br />
        <div>Genre: {items.moviegenres.join(', ')}</div>
        <br />
        <br />
        <div>Movie Description</div>
        <p>{items.moviedescription}</p>
        <button onClick={goHome}>⬅️</button>
      </>
    );

}

export default DetailsItem