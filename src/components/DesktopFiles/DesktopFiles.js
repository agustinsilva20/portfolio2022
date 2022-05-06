import React,{Component} from "react";
import "./DesktopFiles.css"

class DesktopFiles extends Component{
  

    render(){
        return(
           <div className="desktop-file">
               <img alt="item" src={`./images/${this.props.img}`} className={this.props.classNew}></img>
               <p className="notselect">{this.props.name}</p>
           </div>
        )
    }
}
export default DesktopFiles;