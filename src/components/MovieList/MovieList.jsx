import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import MovieItem from '../MovieItem/MovieItem';
import { Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Paper } from "@material-ui/core";

function MovieList() {
      useEffect(() => {
        dispatch({ type: "FETCH_MOVIES" });
      }, []);
      
    const dispatch = useDispatch();
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
            {movies.map((movie) => (
              <Paper key={movie.id}>
                <MovieItem movie={movie} />
              </Paper>
            ))}
          </Grid>
        </Grid>
      </Container>
    );
}

export default MovieList;
