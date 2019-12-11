import React, {Component} from "react";

class UserHome extends Component {
    signOut=()=>{
        localStorage.removeItem("loggedUser");
        window.location.reload(true);
    }
    render(){
        return(
            <div>
                On construction ... <br/>
                <ul>
                    <li>
                        <button onClick={this.signOut}>
                            Sign Out
                        </button>
                    </li>
                </ul>
                Welcome User : <span>{JSON.parse(localStorage.getItem("loggedUser")).name}</span>
            </div>
        )
    }
}
export default UserHome;