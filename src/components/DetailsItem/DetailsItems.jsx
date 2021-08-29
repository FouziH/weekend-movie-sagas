import React from "react";
import { useHistory } from "react-router";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles"
function DetailsItem  ({items}) {
  const history = useHistory();
  const useStyles = makeStyles({
    root: {
      minWidth: 60,
    },
    bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },

  });
   const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const goHome = () => {
    console.log('on go home button')
    history.push('/')
  }
  const addMovie = () => {
    history.push('/addmovie')
  }
    return (
      <>
        <div className="mainDetailsButtonDiv">
          <div className="detailsButton">
            <Button
              size="small"
              variant="contained"
              color="primary"
              onClick={goHome}
            >
              Home
            </Button>
          </div>
          <div className="detailsButton">
            <Button
              size="small"
              variant="contained"
              color="primary"
              onClick={addMovie}
            >
              Add Movie
            </Button>
          </div>
        </div>
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title} variant="body1" component="h1">
            MOVIE DETAILS
            </Typography>
            <br />
            <Typography color="textSecondary" gutterBottom>
              <img src={items.movieimage} alt="" />
            </Typography>
            <Typography variant="body2" component="h1">
              Ge{bull}n{bull}r{bull}es
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
             {items.moviegenres.join(", ")}
            </Typography>
            <Typography variant="body2" component="div">
              <div>{items.moviedescription}</div>
            </Typography>
          </CardContent>
          {/* <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions> */}
        </Card>
      </>
    );

}

export default DetailsItem