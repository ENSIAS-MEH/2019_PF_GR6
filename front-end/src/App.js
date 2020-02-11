import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect,useState } from "react";
import ServiceRecruiter from "./components/ServiceRecruiter"
import Collector from "./components/Collector"
import SignUp from "./modules/SignUp"
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import {createNotification} from "./components/PopUpMessage"
import ChatBot from "./components/ChatBot"
import Maintainer from './components/Maintainer';
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
}));


export default function App() {
  const classes = useStyles();
  ///
  const [login,setLogin] = useState();
  const [password,setPassword] = useState();
  const [userType,setUserType] = useState();
  const [logged,setLogged] = useState();
  ///
  const [tosignUp,setToSignUp]=useState(false);
  ///
  const [users,setUsers]=useState([
    
  ])
  
  useEffect(()=>{
      axios.get("http://localhost:1029/users")
      .then(function(response){
        let dataAux=users;
        for(let i in response.data)
          dataAux.push(response.data[i])
        setUsers(dataAux)
        //console.log("we got you "+response.data[0].login);
        /*setLogin(response.data[0].login);
        setPassword(response.data[0].password);
        setUserType(response.data[0].type);*/
      })
      .catch(function(error){
        console.log(error);
      });
  });
  ///
  const findIt=(login,password)=> {
    let exists=null;
    for(let i in users){
      if(login===users[i].login && password===users[i].password){
        //setUserType("provider");
        console.log("type gotten from findIt : "+users[i].type)
        exists=users[i].type;
      }
    }
    return exists;
  }
  ///
  /* We don't need to use these cuz we got that from the form
  const loginRef=React.createRef();
  const passwordRef=React.createRef();
  */
  const submitIt=(e)=>{
    e.preventDefault();
    /**
        e.target.childNodes : 
        * 0 : the Login zone
        * 1 : the password zone 
        * 2 : the "remember me" zone
        * 3 : "Sign In" zone
        * 4 : "Forget password" & "Don't have an account? Sign Up" zone
        * 5 : "Copyright .." zone
    */
    const inLogin=e.target.childNodes[0].lastChild.childNodes[0].value;
    const inPassword=e.target.childNodes[1].lastChild.childNodes[0].value;
    /*if(inLogin===login && inPassword===password){
      setLogged(true);
      localStorage.setItem("loggedUser",JSON.stringify({
        "name":inLogin,
        "password":inPassword,
        "usertype":"provider",
      }));
      
      console.log("well typed");
    }*/
    if(findIt(inLogin,inPassword)!=null){
      setLogged(true);
      localStorage.setItem("loggedUser",JSON.stringify({
        "name":inLogin,
        "password":inPassword,
        "usertype":findIt(inLogin,inPassword),
      }));
      //console.log("well typed and type : "+userType)
    }
    else{
      NotificationManager.error("please enter a valid combinaison", "bad typed", 5000, () => {
        alert('bad information');
      });
      console.log(users)
      console.log("bad typed, sorry");
    }
    //console.log("Login : "+e.target.childNodes[0].lastChild.childNodes[0].value);
    //console.log("Password : "+e.target.childNodes[1].lastChild.childNodes[0].value)
  }
  // rendering :
  if(logged || localStorage.getItem("loggedUser")!=null){
    if(JSON.parse(localStorage.getItem("loggedUser")).usertype=="recruiter")
      return <ServiceRecruiter />;
    else if(JSON.parse(localStorage.getItem("loggedUser")).usertype=="provider"){
      console.log("type : "+JSON.parse(localStorage.getItem("loggedUser")).usertype)
      return <Collector />
    }else if(JSON.parse(localStorage.getItem("loggedUser")).usertype=="maintainer"){
      return <Maintainer />
    }
  }else if(tosignUp){
    return <SignUp />;
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
            Sign in
          </Typography>
          <form className={classes.form} noValidate onSubmit={submitIt}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="login"
              label="Login"
              name="login"
              autoComplete="login"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" onClick={()=>{setToSignUp(true)}}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
      <ChatBot />
      <NotificationContainer />
    </Grid>
  );
}