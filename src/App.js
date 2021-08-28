import React from 'react'
import Navbar from './components/navbar'
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Container, Avatar, Typography } from '@material-ui/core';
import { Name, Title, aboutMeDescription } from './assets/data';
import { Facebook, LinkedIn, Twitter } from '@material-ui/icons';
import GitHubIcon from '@material-ui/icons/GitHub';
import {FacebookLink, GithubLink, LinkedInLink, TwitterLink} from './assets/socialLinks';
import './App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  description: {
    width: "100%",
    margin: "auto",
    marginTop: 15,
    textAlign: "justify",
    [theme.breakpoints.up('sm')]: {
      width: "80%",
    },
  },
  socialLinks: {
    display: "flex",
    width: 200,
    margin: "auto",
    justifyContent: "space-between",
    marginTop: 15
  }
}));

function App() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className="App">
      <Navbar />
      <div>
        <Container maxWidth="lg">
          <div style={{ marginTop: 20 }}>
            <Avatar alt={Name} style={{ width: 200, height: 200, margin: "auto" }} src="/image.jpg" />
          </div>
          <Typography variant="h3" style={{ marginTop: 10 }}>{Name}</Typography>
          <Typography variant="h4" style={{ marginTop: 10 }}>{Title}</Typography>
          <Typography variant="h6" className={classes.description}>{aboutMeDescription}</Typography>

          <div className={classes.socialLinks}>
            <a href={FacebookLink} style = {{color : "inherit"}}>
              <Facebook fontSize="large" color ="default"/>
            </a>
            <a href={TwitterLink} style = {{color : "inherit"}}> 
              <Twitter fontSize="large" />
            </a>
            <a href={LinkedInLink} style = {{color : "inherit"}}>
              <LinkedIn fontSize="large" />
            </a>
            <a href={GithubLink} style = {{color : "inherit"}}>
              <GitHubIcon fontSize="large" />
            </a>

          </div>
        </Container>
      </div>
    </div>
  );
}

export default App;
