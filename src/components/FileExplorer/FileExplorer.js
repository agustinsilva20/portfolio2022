import React,{Component} from "react";
import "./FileExplorer.css"
import AboutMe from "../AboutMe/AboutMe"
import Studies from "../Studies/Studies"
import Skills from "../Skills/Skills"
import Experience from "../Experience/Experience";
import Settings from "../Settings/Settings";
/*xdd : https://agustinsilva20.github.io/portfolio2022/*/

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
                <div className="showingBody">
                {this.props.showing==="About Me"?<AboutMe/>:null}
                {this.props.showing==="Estudies"?<Studies addMenuOpenApp_showingFile={this.props.addMenuOpenApp_showingFile} changeShowingFile={this.props.changeShowingFile}/>:null}
                {this.props.showing==="Skills"?<Skills/>:null}
                {this.props.showing==="Experience"?<Experience/>:null}
                {this.props.showing==="Settings"?<Settings changeBackground={this.props.changeBackground} changeColor={this.props.changeColor}/>:null}
                </div>
           </div>
        )
    }
}
export default FileExplorer;