import React from "react";
import { useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Button, MenuItem } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import {Select} from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Paper } from "@material-ui/core";

function addMovie() {
    let history = useHistory()
  //assigning history to dispatch to useDispatch from react-redux
  const dispatch = useDispatch();
  let [title, setTitle] = useState("");
  let [imageUrl, setImageUrl] = useState("");
  let [description, setDescription] = useState("");
  let [selectGenre, setSelectGenre] = useState('');
  let payloadObject = {
    title: title,
    poster: imageUrl,
    description: description,
    genre_id: selectGenre,
  };
  //calling fetch genre 
    useEffect(() => {
      dispatch({
        type: "FETCH_GENRE",
      });
    }, []);
    //calling my genre store reducer 
  const genres = useSelector(store => store.genres)
  console.log(genres)

  //on save movie 
  const onSaveMovie = () => {
    console.log("on save movie button");
    //we will dispatch the payloadObject and type to saga 
    dispatch({
      type: "ADD_NEW_MOVIE",
      payload: payloadObject,
    });
     console.log("on cancel button");
     //and we will redirect the user to the home page 
     history.push("/");
  };
   const onCancel = () => {
     console.log("on cancel button");
     //when the cancel button is pressed
     //user will be routed to the homepage
     history.push("/");
   };
  return (
    <>
      <Container>
        <Grid
          item
          xs={2}
          md={9}
          spacing={10}
          container
          style={{
            margin: "auto",
            padding: 40,
            display: "block",
          }}
          direction="row"
        >
          <Grid>
            {/* this will get the movie name/title */}
            <TextField
              variant="outlined"
              label="Name"
              placeholder="Enter movie name"
              style={{ width: 500, margin: 5 }}
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
            {/* this will get the movie image/url */}
            <TextField
              variant="outlined"
              label="Image"
              placeholder="Enter movie url"
              type="url"
              value={imageUrl}
              style={{ width: 500, margin: 5 }}
              onChange={(event) => setImageUrl(event.target.value)}
            />
            {/* This will get the movie description  */}
            <TextField
              placeholder="Enter movie description"
              variant="outlined"
              label="Movie description"
              name="movie_description"
              rows="4"
              style={{ width: 500, margin: 5 }}
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              cols="50"
            />
            {/* User will be able to select movie genre from the dropdown option  */}
            <Select
              variant="outlined"
              placeholder="Select genre"
              value={selectGenre}
              style={{ width: 500, margin: 5 }}
              placeholder="Choose a genre"
              onChange={(event) => setSelectGenre(event.target.value)}
            >
              {/* mapping throught our genre reducer tp get genres as option dropdown */}
              {genres.map((genreName, i) => (
                <MenuItem style={{ width: 150 }} value={genreName.id} key={i}>
                  {genreName.name}
                </MenuItem>
              ))}
            </Select>
            <div className="mainAddMovie">
              <div className="addMovie">
                {/* save movie button */}
                <Button
                  variant="contained"
                  color="primary"
                  onClick={onSaveMovie}
                >
                  Save
                </Button>
              </div>
              <div className="addMovie">
                {/* cancel movie button */}
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={onCancel}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default addMovie;
