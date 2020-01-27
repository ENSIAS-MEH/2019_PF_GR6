import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import SignIn from "../App";
import { useState } from "react";
import ServiceRecruiter from "../components/ServiceRecruiter"
import Collector from "../components/Collector";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

const axios = require("axios");

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/BLemine/">
        Clean Env, Easy Cash
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
      },
      image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
          theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      },
      paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
      formControl: {
        margin: theme.spacing(1),
        minWidth: "100%",
      }
}));

export default function SignUp() {
  const classes = useStyles();
  const [signed,setSigned]=useState(false);
  const [type,setType]=useState('');
  const firstRef=React.createRef();
  const lastRef=React.createRef();
  const emailRef=React.createRef();
  const passwordRef=React.createRef();
  const handleChange = event => {
    setType(event.target.value);
  };
  const submitIt=(e)=>{
    e.preventDefault();
    const inFirstname=firstRef.current.lastChild.firstChild.value;
    const inPassword=passwordRef.current.lastChild.firstChild.value;
    const inLastname=lastRef.current.lastChild.firstChild.value;
    const inEmail=emailRef.current.lastChild.firstChild.value;

       /* axios.get("http://localhost:1029/new/"+inFirstname+"/"+inPassword+"/recruiter/"+inEmail)
          .then(function(response){
            localStorage.setItem("loggedUser",JSON.stringify({
                "name":inFirstname,
                "password":inPassword,
                "usertype":"recruiter",
              }));
              setSigned(true)
            //alert(response.data);
          })
          .catch(function(error){
            console.log(error);
          });*/
    axios.post("http://localhost:1029/newUser",{
      "username":inFirstname,
      "password":inPassword,
      "type":type,
      "email":inEmail
    }).then(response=>{
      console.log(response.data);
    }).catch(err=>{
      console.log(err);
    })
    
    /*console.log("firstname :"+firstRef.current.lastChild.firstChild.value)
    console.log("lastname :"+lastRef.current.lastChild.firstChild.value)
    console.log("email :"+emailRef.current.lastChild.firstChild.value)
    console.log("password :"+passwordRef.current.lastChild.firstChild.value)*/
  }
  if(localStorage.getItem("loggedUser")!=null){
    if(JSON.parse(localStorage.getItem("loggedUser")).usertype=="recruiter")
    return <ServiceRecruiter />;
    else if(JSON.parse(localStorage.getItem("loggedUser")).usertype=="provider"){
      console.log("type : "+JSON.parse(localStorage.getItem("loggedUser")).usertype)
      return <Collector />
    }
  }
  else if(signed){
      return <SignIn />
  }
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <form className={classes.form} noValidate onSubmit={submitIt}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                ref={firstRef}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                ref={lastRef}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={type}
                  onChange={handleChange}
                >
                  <MenuItem value="recruiter">recruiter</MenuItem>
                  <MenuItem value="provider">provider</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                ref={emailRef}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                ref={passwordRef}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2" onClick={()=>{setSigned(true)}}>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
          <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}