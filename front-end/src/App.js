import React, { createRef } from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import styles from './App.module.css'; 
import earth from "./Beautiful_mother_earth.mp4";
const axios = require("axios");

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      login:"grego",
      password:"098"
    };
    this.loginRef=createRef();
    this.passwordRef=createRef();
  }
  moveOn=(el)=>{
    el.target.style.opacity="1";
  }
  moveOut=(el)=>{
    el.target.style.opacity="0.3"
  }
  componentDidMount(){
    const self=this;
    axios.get("http://localhost:1029/users")
    .then(function(response){
      console.log("we got you "+response.data[0].login);
      self.setState({
        login:response.data[0].login,
        password:response.data[0].password
      });
    })
    .catch(function(error){
      console.log(error+"gregooooz")
    })
  }
  signIn=()=>{
    if((this.loginRef.current.childNodes[1].firstChild.value===this.state.login) && (this.passwordRef.current.childNodes[1].firstChild.value===this.state.password)){
      console.log("Accepted mate");
    }else{
      console.log("Nope, one of those is incorrect");
      console.log(this.passwordRef.current.childNodes[1].firstChild.value);
      console.log(this.state.login)
    }
  }
  render(){
    return(
      <div className="App" style={{textAlign:"center",margin:50}}>
        <h3>Welcome to <span style={{color:"green"}}>Clean Evn, Easy Cash</span> App</h3><br/>
        <video autoPlay loop muted className={styles.backVideo}>
          <source src={earth} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <Card className={styles.cardDefault} onMouseOver={this.moveOn} onMouseLeave={this.moveOut}>
        <br/>
          <form noValidate autoComplete="off" onSubmit={this.submitForm} >
              <span>
                <TextField id="standard-basic" variant="outlined" label="Name" ref={this.loginRef} />
              </span><br/><br/>
              <span style={{marginTop:40}}>
                <TextField id="standard-basic" variant="outlined" label="Password" ref={this.passwordRef} />
              </span><br/><br/>
              <Button variant="contained" color="primary" onClick={this.signIn}>
                Sign-In
              </Button>
          </form>
          <br/>
        </Card>
      </div>
    )
  }
}

export default App;
