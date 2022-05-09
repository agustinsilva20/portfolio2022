import React,{Component} from "react";
import "./Skills.css"
import DesktopFiles from "../DesktopFiles/DesktopFiles"

class Studies extends Component{
    close=(app)=>{
        this.props.removeMenuOpenApp(app)
        this.props.changeShowing("nothing")
    }
    render(){
        return(

            <div className="Studies">
               <div className="category-line"><p class="category-text ct2">Front End</p><div className="line"></div></div>
                <div className="category-div">
                    <div className="file"><DesktopFiles name="HTML" img="html.png" classNew="pdf"/></div>
                    <div className="file"><DesktopFiles name="CSS" img="css.svg" classNew="css"/></div>
                    <div className="file"><DesktopFiles name="Javascript" img="js.png" classNew="pdf"/></div>
                    <div className="file"><DesktopFiles name="Bootstrap" img="boot.webp" classNew="pdf"/></div>
                    <div className="file"><DesktopFiles name="SASS" img="sass.png" classNew="pdf"/></div>
                    <div className="file"><DesktopFiles name="REACT" img="react.webp" classNew="pdf"/></div>

                </div>

                <div className="category-line"><p class="category-text ct2">Back End</p><div className="line"></div></div>
                <div className="category-div">
                    <div className="file"><DesktopFiles name="Javascript" img="js.png" classNew="pdf"/></div>
                    <div className="file"><DesktopFiles name="Node JS" img="node.webp" classNew="pdf"/></div>
                    <div className="file"><DesktopFiles name="Express JS" img="express.png" classNew="pdf"/></div>
                    <div className="file"><DesktopFiles name="Socket.io" img="socket.png" classNew="pdf"/></div>
                    <div className="file"><DesktopFiles name="ASP .NET" img="asp.png" classNew="net"/></div>
                </div>

                <div className="category-line"><p class="category-text ct2">Programing</p><div className="line"></div></div>
                <div className="category-div">
                    <div className="file"><DesktopFiles name="Javascript" img="js.png" classNew="pdf"/></div>
                    <div className="file"><DesktopFiles name="C#" img="c.png" classNew="pdf"/></div>
                    <div className="file"><DesktopFiles name="Python" img="python.png" classNew="pdf"/></div>
                    <div className="file"><DesktopFiles name="SQL" img="sql.png" classNew="pdf"/></div>
                    <div className="file"><DesktopFiles name="Git" img="gitt.png" classNew="pdf"/></div>

                    
                </div>


           </div>
        )
    }
}
export default Studies;