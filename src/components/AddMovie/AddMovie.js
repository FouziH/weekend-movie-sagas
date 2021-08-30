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
    useEffect(() => {
      dispatch({
        type: "FETCH_GENRE",
      });
    }, []);
  const genres = useSelector(store => store.genres)
  console.log(genres)

  const onSaveMovie = () => {
    console.log("on save movie button");
    dispatch({
      type: "ADD_NEW_MOVIE",
      payload: payloadObject,
    });
     console.log("on cancel button");
     history.push("/");
  };
   const onCancel = () => {
     console.log("on cancel button");
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
            <TextField
              variant="outlined"
              label="Name"
              placeholder="Enter movie name"
              style={{ width: 500, margin: 5 }}
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
            <TextField
              variant="outlined"
              label="Image"
              placeholder="Enter movie url"
              type="url"
              value={imageUrl}
              style={{ width: 500, margin: 5 }}
              onChange={(event) => setImageUrl(event.target.value)}
            />
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
            <Select
              variant="outlined"
              placeholder="Select genre"
              value={selectGenre}
              style={{ width: 500, margin: 5 }}
              placeholder="Choose a genre"
              onChange={(event) => setSelectGenre(event.target.value)}
            >
              {genres.map((genreName, i) => (
                <MenuItem style={{ width: 150 }} value={genreName.id} key={i}>
                  {genreName.name}
                </MenuItem>
              ))}
            </Select>
            <div className="mainAddMovie">
              <div className="addMovie">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={onSaveMovie}
                >
                  Save
                </Button>
              </div>
              <div className="addMovie">
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
