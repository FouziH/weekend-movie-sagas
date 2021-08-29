import React from "react";
import { useHistory } from "react-router";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
function DetailsItem  ({items}) {
  const history = useHistory();
  

  const goHome = () => {
    console.log('on go home button')
    history.push('/')
  }
    return (
      <>
        <div>
          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={goHome}
          >
            Home
          </Button>
          <div>
            <Button size="small" variant="contained" color="primary">
              Add Movie
            </Button>
          </div>
        </div>
        <img src={items.movieimage} alt="" />
        <br />
        <br />
        <div>Genre: {items.moviegenres.join(", ")}</div>
        <br />
        <br />
        <div>Movie Description</div>
        <p>{items.moviedescription}</p>
      </>
    );

}

export default DetailsItem