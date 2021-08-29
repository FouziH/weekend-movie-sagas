import React from "react";
import { useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

function addMovie() {
    let history = useHistory()
  //assigning history to dispatch to useDispatch from react-redux
  const dispatch = useDispatch();
  let [title, setTitle] = useState("");
  let [imageUrl, setImageUrl] = useState("");
  let [description, setDescription] = useState("");
  let [selectGenre, setSelectGenre] = useState();
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
      <h6>Movie title</h6>
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="url"
        value={imageUrl}
        onChange={(event) => setImageUrl(event.target.value)}
      />
      <textarea
        name="movie_description"
        rows="4"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        cols="50"
      />
      <label>Choose a genre:</label>
      <select
        value={selectGenre}
        onChange={(event) => setSelectGenre(event.target.value)}
      >
        {genres.map((genreName, i) => (
          <option value={genreName.id} key={i}>{genreName.name}</option>
        ))}
      </select>
      <button onClick={onSaveMovie}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </>
  );
}

export default addMovie;
