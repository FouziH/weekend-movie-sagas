import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import MovieItem from '../MovieItem/MovieItem';
import { Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Paper } from "@material-ui/core";

function MovieList() {
  //using the useEffect to fetch movies
      useEffect(() => {
        dispatch({ type: "FETCH_MOVIES" });
      }, []);
    //creating my dispatch variable 
    const dispatch = useDispatch();
    //calling my movie reducer from redux store 
    const movies = useSelector(store => store.movies);

    return (
      <Container
      >
        <Grid
          item
          xs={1}
          md={3}
          spacing={10}
          container
          style={{
            margin: "auto",
            display: "flex",
          }}
          direction="column"
        >
          <Grid item>
            {/* mapping through the movie */}
            {movies.map((movie) => (
              <Paper key={movie.id}>
                {/* calling movieItem and passing movie as a prop */}
                <MovieItem movie={movie} />
              </Paper>
            ))}
          </Grid>
        </Grid>
      </Container>
    );
}

export default MovieList;
