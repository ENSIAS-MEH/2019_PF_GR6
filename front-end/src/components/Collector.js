import React, {Component} from "react";
import NavBar from "./PrimarySearchAppBar";
import Post from "./Post";
import Chat from "./SetChat";
import Garbage1 from "../media/garbage1.jpeg";
import Garbage2 from "../media/garbage2.jpeg";
import Garbage3 from "../media/garbage3.jpg";
import Garbage4 from "../media/garbage4.jpeg";
import Garbage5 from "../media/garbage5.jpeg";
import Garbage6 from "../media/garbage6.jpg";
import PostDetails from "./PostDetails";

const MessageContext = React.createContext({
    messages: "Messages or ?",
    updateMessages: () => {}
});
let postInfo={
    recruiter:"",
    avatar:null
};
export default class Collector extends Component {
    constructor(props){
        super(props);
        this.state={
            posts:[],
            noposts:"No posts available",
            postsAvailable:false,
            chatMode:false,
            notifMode:false,
            messages: [1,2,3,4],
            updateMessages: this.updateMessages,
            postDetails:{
                open:false,
                avatar:"",
                price:"",
                city:"",
                description:""
            }
        }
    }
    updateMessages = (newMessages,addMessage,event) => {
        addMessage(event);
        this.setState({ messages: newMessages });
    };
    chat=()=>{
        let chatMode=!this.state.chatMode;
        this.setState({
            chatMode:chatMode
        })
    } 
    showDetails=(e)=>{
        let postDetails=!this.state.postDetails.open;
        this.setState({
            postDetails:{open:postDetails},
        })
        /*axios.get("http://localhost:1029/newApply/"+e.target.children[0].firstChild.data)
          .then(function(response){
            console.log(response.data);
          })
          .catch(function(error){
            console.log(error);
          });*/
        if(typeof(e.target.children[0])=="undefined")
            this.getAvatar("IBIS")
        else this.getAvatar(e.target.children[0].firstChild.data)
        //console.log("City : "+e.target.children[0].firstChild.data);
        console.log(e.target.children)
    }
    getAvatar=(name)=>{
        if(name==="IBIS"){
            postInfo={
                recruiter:"IBIS",
                avatar:Garbage1
            }
        }
        else if(name==="Alaoui"){
            postInfo={
                recruiter:"Alaoui",
                avatar:Garbage2
            }
        }else if(name==="Sherlock"){
            postInfo={
                recruiter:"Sherlock",
                avatar:Garbage3
            }
        }else if(name==="Jean"){
            postInfo={
                recruiter:"Jean",
                avatar:Garbage4
            }
        }else if(name==="ATLAS Hotel"){
            postInfo={
                recruiter:"ATLAS Hotel",
                avatar:Garbage5
            }
        }else if(name==="Zouhair"){
            postInfo={
                recruiter:"Zouhair",
                avatar:Garbage6
            }
        }
    }
    render(){
       // let bodyContent=(this.state.postsAvailable?this.state.posts:this.state.noposts);        
       return(
        <MessageContext.Provider value={this.state}>
            <div className="root" style={{backgroundColor:"#D3D3D3",height:"100%"}}>
                <div className="footer">
                    <NavBar goChat={this.chat} />
                </div>
                {!this.state.chatMode && !this.state.postDetails.open && <div className="body" style={{textAlign:"center"}}>
                    <div style={{display:'inline-block'}} onClick={this.showDetails}>
                        <Post logo={Garbage1} title="IBIS" />
                    </div>
                    <div style={{display:'inline-block'}} onClick={this.showDetails}>
                        <Post logo={Garbage2} title="Alaoui" />
                    </div>
                    <div style={{display:'inline-block'}} onClick={this.showDetails}>
                        <Post logo={Garbage3} title="Sherlock" />
                    </div>
                    <div style={{display:'inline-block'}} onClick={this.showDetails}>
                        <Post logo={Garbage4} title="Jean" />
                    </div>  
                    <div style={{display:'inline-block'}} onClick={this.showDetails}>
                        <Post logo={Garbage5} title="ATLAS Hotel" />
                    </div> 
                    <div style={{display:'inline-block'}}  onClick={this.showDetails}>
                        <Post logo={Garbage6} title="Zouhair" />
                    </div> 
                </div>}

                {this.state.chatMode && <div className="bottom" style={{textAlign:"center",width:"100%"}}>
                    <div style={{width:"50%",marginLeft:"25%"}}>
                        <Chat />
                    </div>
                </div>}
                {this.state.postDetails.open && <div>
                        <PostDetails clickBack={()=>{this.setState({
                            postDetails:{open:false}
                        })}} postDetails={postInfo} />
                    </div>}
            </div>

        </MessageContext.Provider>
        )
    }
}
export {MessageContext}