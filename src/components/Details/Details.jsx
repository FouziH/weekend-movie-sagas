import {  useSelector } from "react-redux";
import { useHistory } from "react-router";
import DetailsItem from "../DetailsItem/DetailsItems";
function Details() {
    const history = useHistory()
    const movieDetailsAndGenres = useSelector(
      (store) => store.getMovieDetailsAndGenres
    );
    console.log('movie details and genres is', movieDetailsAndGenres)
   
  return (
    <>
      <h1>Movie Details</h1>
      <br />
      <br />
      <div>
        {movieDetailsAndGenres.map((items, i) => (
          <DetailsItem key={i} items={items} />
        ))}
      </div>
      <br />
      <br />
    </>
  );
}

export default Details;
