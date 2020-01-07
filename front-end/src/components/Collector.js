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
const MessageContext = React.createContext({
    messages: "Messages or ?",
    updateMessages: () => {}
});
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
            updateMessages: this.updateMessages
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
    render(){
       // let bodyContent=(this.state.postsAvailable?this.state.posts:this.state.noposts);        
       return(
        <MessageContext.Provider value={this.state}>

            <div className="root" style={{backgroundColor:"#D3D3D3",height:"100%"}}>
                <div className="footer">
                    <NavBar goChat={this.chat} />
                </div>
                {!this.state.chatMode && <div className="body" style={{textAlign:"center"}}>
                    <div style={{display:'inline-block'}}>
                        <Post logo={Garbage1} />
                    </div>
                    <div style={{display:'inline-block'}}>
                        <Post logo={Garbage2}/>
                    </div>
                    <div style={{display:'inline-block'}}>
                        <Post logo={Garbage3} />
                    </div>
                    <div style={{display:'inline-block'}}>
                        <Post logo={Garbage4} />
                    </div>  
                    <div style={{display:'inline-block'}}>
                        <Post logo={Garbage5} />
                    </div> 
                    <div style={{display:'inline-block'}}>
                        <Post logo={Garbage6} />
                    </div> 
                </div>}

                {this.state.chatMode && <div className="bottom" style={{textAlign:"center",width:"100%"}}>
                    <div style={{width:"50%",marginLeft:"25%"}}>
                        <Chat />
                    </div>
                </div>}
            </div>

        </MessageContext.Provider>
        )
    }
}
export {MessageContext}