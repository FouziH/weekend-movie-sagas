import {  useSelector } from "react-redux";
function Details() {
    const movieDescription = useSelector(
      store => store.movieDescriptionReducer
    );
  return (
    <>
      <h1>Movie Details</h1>
      <img src={movieDescription.image} alt="" />
      <br />
      <br />
      <div>{movieDescription.description}</div>
    </>
  );
}

export default Details;
