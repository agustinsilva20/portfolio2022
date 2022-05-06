import React,{Component} from "react";
import "./FileExplorer.css"
import AboutMe from "../AboutMe/AboutMe"


class FileExplorer extends Component{
    close=(app)=>{
        this.props.removeMenuOpenApp(app)
        this.props.changeShowing("nothing")
    }
    render(){
        return(
            <div className="fileExplorer">
                <div className="header-fileexplorer">
                    <div className="showing"><p>{this.props.showing}</p></div>
                    <div className="actions">
                        <div onClick={this.props.changeShowing.bind(this,"nothing")}><p> - </p></div>
                        <div><p>▢</p></div>
                        <div onClick={this.close.bind(this,this.props.showing)}class="close"><p>✗</p></div>
                    </div>
                </div>
                <AboutMe/>

           </div>
        )
    }
}
export default FileExplorer;