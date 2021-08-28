import React from "react"
import {useState} from 'react'
function addMovie () {
    return (
      <>
        <form>
          <input />
          <input />
          <textarea name="movie_description" rows="4" cols="50"></textarea>
          <select>
            <option>Adventure</option>
            <option>Animated</option>
            <option>Biographical</option>
            <option>Comedy</option>
            <option>Disaster</option>
            <option>Drama</option>
            <option>Epic</option>
            <option>Fantasy</option>
            <option>Musical</option>
            <option>Romance</option>
            <option>Science Fiction</option>
            <option>Space-Opera</option>
            <option>Superhero</option>
          </select>
          <button>Save</button>
          <button>Cancel</button>
        </form>
      </>
    );


}

export default addMovie