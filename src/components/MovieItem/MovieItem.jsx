import React from "react"
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
function MovieItem ({movie}) {
  //assigning history to useHistory from react-router
  const history = useHistory();
  //assigning history to dispatch to useDispatch from react-redux
  const dispatch = useDispatch();

  const getMovieDetails = () => {
      //onclick, the movie.id is being logged to the console
    console.log("movie id is", movie.id);
    //using dispatch to send the type and movie id to saga redux 
    dispatch({
        type: 'GET_MOVIE_DETAILS_ALL_GENRES',
        payload: movie.id 
    })
    history.push('/details')
  };
  return (
    <>
      <h3>{movie.title}</h3>
      <img onClick={getMovieDetails} src={movie.poster} alt={movie.title} />
    </>
  );
}

export default MovieItem