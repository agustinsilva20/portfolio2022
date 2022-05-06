import React,{Component} from "react";
import "./Desktop.css"
import DesktopFiles from "../DesktopFiles/DesktopFiles";
import FileExplorer from "../FileExplorer/FileExplorer";


class Desktop extends Component{
    open=(app)=>{
        console.log("XDDDDDDDDDDDDD",this.props.menuOpenApps)
        console.log(app in this.props.menuOpenApps)
        this.props.changeShowing(app)
        if (this.props.menuOpenApps.includes(app)){
            var i =0;
        }else{
            console.log("XDD",app)
            this.props.addMenuOpenApp(app)
        }
        
    }
    render(){
        return(
            <div className="desktop">
            <div className="files">
                <div onClick={this.open.bind(this,"About Me")}><DesktopFiles name="About Me" img="me.webp" classNew="am" /></div>
                <div onClick={this.open.bind(this,"GitHub")}><DesktopFiles name="GitHub" img="git.jpg" classNew="am"/></div>
                <div onClick={this.open.bind(this,"Studies")}><DesktopFiles name="Studies" img="folder.png" /></div>
                <div onClick={this.open.bind(this,"Skills")}><DesktopFiles name="Skills" img="folder.png"/></div>
                <div onClick={this.open.bind(this,"Experience")}><DesktopFiles name="Experience" img="folder.png" /></div>
                <div onClick={this.open.bind(this,"Projects")}><DesktopFiles name="Some proyects" img="proyects.png" classNew="am2"/></div>
               

            </div>
            {this.props.showing==="nothing"?null:<div className="screenSize">
                <FileExplorer changeShowing={this.props.changeShowing} showing={this.props.showing} removeMenuOpenApp={this.props.removeMenuOpenApp}/>
            </div>}
            
           </div>
        )
    }
}
export default Desktop;