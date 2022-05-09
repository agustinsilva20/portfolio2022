import React,{Component} from "react";
import "./Studies.css"
import DesktopFiles from "../DesktopFiles/DesktopFiles"

class Studies extends Component{
    close=(app)=>{
        this.props.removeMenuOpenApp(app)
        this.props.changeShowing("nothing")
    }
    render(){
        return(

            <div className="Studies">
               <div className="category-line"><p class="category-text">University</p><div className="line"></div></div>
                <div className="category-div">
                    <div className="file" onClick={this.props.addMenuOpenApp_showingFile.bind(this,"pdf")}><DesktopFiles name="Software Engineering" img="pdf.png" classNew="pdf"/></div>
                </div>

               <div className="category-line"><p class="category-text">English</p><div className="line"></div></div>
               <div className="category-div">
                <div className="file"><DesktopFiles name="Cambridge CAE" img="pdf.png" classNew="pdf"/></div>
                <div className="file"><DesktopFiles name="Cambridge FCE" img="pdf.png" classNew="pdf"/></div>
                </div>

                <div className="category-line"><p class="category-text">Certifications</p><div className="line"></div></div>
                <div className="category-div">
                <div className="file"><DesktopFiles name="Web FullStack NodeJS" img="utn.png" classNew="pdf"/></div>
                    <div className="file"><DesktopFiles name="API Web Services NodeJS" img="eit.png" classNew="pdf"/></div>
                    <div className="file"><DesktopFiles name="ASP.NET Core MVC" img="eit.png" classNew="pdf"/></div>
                    <div className="file"><DesktopFiles name="Angular 11" img="eit.png" classNew="pdf"/></div>
                    <div className="file"><DesktopFiles name="Web C# .NET" img="eit.png" classNew="pdf"/></div>
                    <div className="file"><DesktopFiles name="Web API .NET Core" img="eit.png" classNew="pdf"/></div>
                    <div className="file"><DesktopFiles name="HTML5 and CSS" img="eit.png" classNew="pdf"/></div>
                </div>

           </div>
        )
    }
}
export default Studies;