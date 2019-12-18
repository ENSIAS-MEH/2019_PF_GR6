import React, {Component} from "react";
import NavBar from "./PrimarySearchAppBar"
import Post from "./Post";
import Chat from "./Chat";
export default class Collector extends Component {
    constructor(props){
        super(props);
        this.state={
            posts:[],
            noposts:"No posts available",
            postsAvailable:false,
            chatMode:false,
            notifMode:false
        }
    }
    render(){
       // let bodyContent=(this.state.postsAvailable?this.state.posts:this.state.noposts);
        return(
            <div className="root" style={{backgroundColor:"#D3D3D3",height:"100%"}}>
                <div className="footer">
                    <NavBar />
                </div>
                <div className="body" style={{textAlign:"center"}}>
                    <div style={{display:'inline-block'}}>
                        <Post />
                    </div>
                    <div style={{display:'inline-block'}}>
                        <Post />
                    </div>
                    <div style={{display:'inline-block'}}>
                        <Post />
                    </div>
                    <div style={{display:'inline-block'}}>
                        <Post />
                    </div>  
                </div>
                <div className="bottom" style={{textAlign:"center",width:"100%"}}>
                    <div style={{width:"50%",marginLeft:"25%"}}>
                        <Chat />
                    </div>
                </div>
            </div>
        )
    }
}