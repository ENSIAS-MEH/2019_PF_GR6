import React,{Component} from "react";
import under_construction from "../media/page-under-construction.png"
export default class OnConstruction extends Component {
    render(){
        return (
            <div style={{textAlign:"center"}}>
                <h3>
                    This page under Construction ..
                </h3>
                <div>
                    <img src={under_construction} />
                </div>
            </div>
        )
    }
}