import React,{Component} from "react";
import NavBar from "./PrimarySearchAppBar";

export default class Maintainer extends Component{
    render(){
        return(
            <div>
                <NavBar maintainer={true} />
            </div>
        )
    }
}