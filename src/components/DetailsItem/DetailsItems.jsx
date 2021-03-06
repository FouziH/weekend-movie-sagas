import React from "react";
import { useHistory } from "react-router";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core"
import {Container} from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { Menu } from "@material-ui/core";
import{useState} from 'react'
import ViewHeadlineTwoToneIcon from "@material-ui/icons/ViewHeadlineTwoTone";
function DetailsItem  ({items}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const history = useHistory();
  const useStyles = makeStyles({
    root: {
      minWidth: 60,
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
  const classes = useStyles();
  //on handle close function that will set the anchor element state to null
  const handleClose = () => {
    setAnchorEl(null);
  };
  //on handle close function that will set the anchor element state to event.currentTarget
  const openMenu = () => {
    console.log("on open menu button");
    setAnchorEl(event.currentTarget);
  };
  const goHome = () => {
    console.log("on go home button");
    history.push("/");
  };
  // When the add movie button is pressed, the user will be routed to /addmovie page 
  const addMovie = () => {
    history.push("/addmovie");
  };
  return (
    <>
      <ViewHeadlineTwoToneIcon onClick={openMenu}></ViewHeadlineTwoToneIcon>
      <Menu
        id="menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} onClick={goHome}>
          HOME
        </MenuItem>
        <MenuItem onClick={addMovie}>ADD MOVIE</MenuItem>
      </Menu>
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
            {/* Displaying the movie image */}
              <img src={items.movieimage} alt="" />
              <br />
              <br />
              {/* displaying the movie genre */}
              <div>Genre: {items.moviegenres.join(", ")} </div>
              <br />
              {/* displaying the movie description */}
              <div>{items.moviedescription}</div>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default DetailsItem


          