import React, {Component} from "react";

export default class PostDetails extends Component {
    render(){
        return(
            <div>
                <img src={this.props.logo} />
                <p>{this.props.description}</p>
            </div>
        )
    }
}