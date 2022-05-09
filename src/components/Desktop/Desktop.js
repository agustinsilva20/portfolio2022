import React,{Component} from "react";
import "./Desktop.css"
import DesktopFiles from "../DesktopFiles/DesktopFiles";
import FileExplorer from "../FileExplorer/FileExplorer";
import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import Document from "../Document/Document";


class Desktop extends Component{
    open=(app)=>{
        this.props.changeShowing(app)
        let found=0
        for (let i=0; i< this.props.menuOpenApps.length;i++){
            if( this.props.menuOpenApps[i].openApp==app){
                found=found+1;
            }   
        }
        if (found==0){
            this.props.addMenuOpenApp(app)
        }

        
    }
    render(){
        return(
            <div className="desktop">
            <div className="files">
                <div onClick={this.open.bind(this,"About Me")}><DesktopFiles name="About Me" img="me.webp" classNew="am" /></div>
                <div onClick={this.open.bind(this,"GitHub")}><DesktopFiles name="GitHub" img="git.jpg" classNew="am"/></div>
                <div onClick={this.open.bind(this,"Studies")}><DesktopFiles name="Studies" img="folder.png"/></div>
                <div onClick={this.open.bind(this,"Skills")}><DesktopFiles name="Skills" img="folder.png"/></div>
                <div onClick={this.open.bind(this,"Experience")}><DesktopFiles name="Experience" img="folder.png" /></div>
                <div onClick={this.open.bind(this,"Projects")}><DesktopFiles name="Some proyects" img="proyects.png" classNew="am2"/></div>
               

            </div>
            <div className="screenSize">
            {this.props.showing==="nothing"?null:
                <FileExplorer changeShowing={this.props.changeShowing} showing={this.props.showing} removeMenuOpenApp={this.props.removeMenuOpenApp} 
                addMenuOpenApp_showingFile={this.props.addMenuOpenApp_showingFile} changeShowingFile={this.props.changeShowingFile}/>
            }
            {this.props.showingFile==="nothing"?null:
                <Document changeShowing={this.props.changeShowingFile} showing={this.props.showingFile} removeMenuOpenApp_showingFile={this.props.removeMenuOpenApp}/>}
            </div>
            
           </div>
        )
    }
}
export default Desktop;