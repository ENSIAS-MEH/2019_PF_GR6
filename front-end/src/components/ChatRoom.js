import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import service_recruiter from "../media/service_recruiter.jpg"
import garbage_collector from "../media/garbage_collector.jpg"
import TextField from '@material-ui/core/TextField';
import {MessageContext} from "./Collector";
const axios = require("axios");

const useStyles = makeStyles(theme => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
    height:541,
    marginTop:30,
    overflow:'auto',
  },
  list: {
    marginBottom: 0,
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    position:"relative",
    top: '-64px',
    bottom: 0,
    width:'100%',
    left:'0%'
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: 5,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
}));
//
export default function SetChat(props) {
  const [chat,setChat]=useState(props.chat);
  const classes = useStyles();
  const mssgRef=React.createRef();
  const paperRef=React.createRef();
  useEffect(()=>{
    axios.get("http://localhost:1029/messages/Lemine/recruiter")
      .then(function(response){
        console.log("Gotten messages : "+response.data)
      })
      .catch(function(error){
        console.log(error);
      });
  })
  const addMessage = ()=>{
      //console.log(mssgRef.current.childNodes[1].firstChild.value);
      const idUnique=chat[chat.length-1].id+1
      let oldChat=chat.concat([{
        id: idUnique,
        primary: 'Collector',
        secondary: mssgRef.current.childNodes[1].firstChild.value,
        person: garbage_collector,
      }]);
      setChat(oldChat);
      mssgRef.current.childNodes[1].firstChild.focus();
      //paperRef.current.scrollIntoView({ behavior: 'smooth',block: 'start' })
    }
    const getChatRoom=(e)=>{
      /*console.log(e)
      console.log(e.target);*/
      if(e.target.children.length==2){
        const recruiter_name=e.target.children[0].firstChild.data;
        const recruiter_message=e.target.children[1].firstChild.data;
        console.log("clicked collector : "+recruiter_name);
        console.log("clicked message : "+recruiter_message);
        //console.log(e.target.children)
      }
      /*if(e.target.children.length<3){
        console.log("parent "+e.target.parentNode)
      }*/
    }
    
  return (
    <MessageContext.Consumer>
      {({ updateMessages }) => (
    <React.Fragment>
      <CssBaseline />
      <Paper square className={classes.paper} ref={paperRef}>
        <Typography className={classes.text} variant="h5" gutterBottom>
          Inbox
        </Typography>
        <List className={classes.list}>
          {chat.map(({ id, primary, secondary, person }) => (
            <React.Fragment key={id}>
              {id === 1 && <ListSubheader className={classes.subheader}>Today</ListSubheader>}
              {id === 3 && <ListSubheader className={classes.subheader}>Yesterday</ListSubheader>}
              
              <ListItem button >
                <ListItemAvatar >
                  <Avatar alt="Profile Picture" src={person} />
                </ListItemAvatar>
                <ListItemText onClick={getChatRoom} primary={primary} secondary={secondary} />
              </ListItem>
              
            </React.Fragment>
          ))}
          <TextField
              ref={mssgRef}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="message"
              label="Message"
              name="message"
              autoComplete="message"
              autoFocus
            />
        </List>
      </Paper>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <Fab color="secondary" aria-label="add" className={classes.fabButton} onClick={()=>{updateMessages([1,32],addMessage,this)}}>
            <AddIcon />
          </Fab>
          <div className={classes.grow} />
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton edge="end" color="inherit">
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      </React.Fragment>
      )}
    </MessageContext.Consumer>
  );
}