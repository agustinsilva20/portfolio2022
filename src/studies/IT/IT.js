import React, {Component} from "react";
import "./IT.css"

class IT extends Component{
    render(){
       return(
       <div>
          <img alt="certificate" className="cert" src={`./images/${this.props.img}`}></img>

       </div>
       )
    }
}

export default IT