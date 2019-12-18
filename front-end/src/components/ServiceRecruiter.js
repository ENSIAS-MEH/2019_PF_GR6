import React, {Component} from "react";
import NavBar from "./PrimarySearchAppBar";
import OnConstruction from "./OnConstruction";
class ServiceRecruiter extends Component {
    render(){
        return(
            <div>
                <NavBar />
                <OnConstruction userName={JSON.parse(localStorage.getItem("loggedUser")).name} />
            </div>
        )
    }
}
export default ServiceRecruiter;