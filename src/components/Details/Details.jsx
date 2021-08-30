import {  useSelector } from "react-redux";
import DetailsItem from "../DetailsItem/DetailsItems";
function Details() {
  //calling my store reducer responsible for getting movie details and all genres 
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
        {/* mapping through the store reducer variable  */}
        {movieDetailsAndGenres.map((items, i) => (
          // calling my details page and passing item as prop
          <DetailsItem key={i} items={items} />
        ))}
      </div>
      <br />
      <br />
    </>
  );
}

export default Details;
