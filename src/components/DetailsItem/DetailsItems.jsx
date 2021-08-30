import React from "react";
import { useHistory } from "react-router";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core"
import {Container} from "@material-ui/core";
import { Paper } from "@material-ui/core";

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
        <br />
        <Container className={classes.root}>
          <Grid
            container
            item={true}
            xs={12}
            spacing={2}
            direction="column"
            alignItems="center"
            style={{
              margin: "auto",
              width: "80%",
              display: "inner-block",
              padding: 20,
            }}
          >
            <Grid item={true} xs={6} md={4}>
              <Paper
                style={{
                  padding: 20,
                }}
              >
                <img src={items.movieimage} alt="" />
                <br />
                <br />
                <div>Genre: {items.moviegenres.join(", ")} </div>
                <br />

                <div>{items.moviedescription}</div>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </>
    );

}

export default DetailsItem


          