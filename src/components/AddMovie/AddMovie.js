import React from "react";
import { useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Button, MenuItem } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import {Select} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";




function addMovie() {
    let history = useHistory()
  //assigning history to dispatch to useDispatch from react-redux
  const dispatch = useDispatch();
  let [title, setTitle] = useState("");
  let [imageUrl, setImageUrl] = useState("");
  let [description, setDescription] = useState("");
  let [selectGenre, setSelectGenre] = useState(6);
  let payloadObject = {
    title: title,
    poster: imageUrl,
    description: description,
    genre_id: selectGenre,
  };
  useEffect(() => {
      dispatch({
          type: 'FETCH_GENRE'
      })
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
      <TextField
        variant="filled"
        label="Name"
        placeholder="Enter movie name"
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <TextField
        variant="filled"
        label="Image"
        placeholder="Enter movie url"
        type="url"
        value={imageUrl}
        onChange={(event) => setImageUrl(event.target.value)}
      />
      <TextField
        placeholder="Enter movie description"
        variant="filled"
        label="Movie description"
        name="movie_description"
        rows="4"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        cols="50"
      />
      <label>Choose a genre:</label>
      <Select
        value={selectGenre}
        onChange={(event) => setSelectGenre(event.target.value)} defaultValue="any" id={1}
      >
        {genres.map((genreName, i) => (
          <MenuItem value={genreName.id} key={i} selected={genreName[0]}>
            <em>{genreName.name}</em>
          </MenuItem>
        ))}
      </Select>
      <br />
      <div className="detailsButton">
        <Button variant="contained" color="primary" onClick={onSaveMovie}>
          Save
        </Button>
      </div>
      <div className="detailsButton">
        <Button variant="contained" color="secondary" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </>
  );
}

export default addMovie;
