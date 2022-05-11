import React,{Component} from "react";
import "./Document.css"

import Uade from "../../studies/UADEComponent/Uade";
import Fullstack from "../../studies/Fullstack/Fullstack"
import Api from "../../studies/Api/Api";
import Net from "../../studies/Net/Net";
import Angular from "../../studies/Angular/Angular";
import WebNet from "../../studies/WebNet/WebNet";
import ApiCore from "../../studies/ApiCore/ApiCore";
import HC from "../../studies/HC/HC";

/*xdd : https://agustinsilva20.github.io/portfolio2022/*/

class Document extends Component{
    close=(app)=>{
        this.props.removeMenuOpenApp_showingFile(app)
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
                    {this.props.showing==="UADE"?<Uade/>:null}
                    {this.props.showing==="Fullstack UTN"?<Fullstack/>:null}
                    {this.props.showing==="API Web Services"?<Api/>:null}
                    {this.props.showing==="ASP.NET Core MVC"?<Net/>:null}
                    {this.props.showing==="Angular 11"?<Angular/>:null}
                    {this.props.showing==="Web C# .NET"?<WebNet/>:null}
                    {this.props.showing==="Web API .NET Core"?<ApiCore/>:null}
                    {this.props.showing==="HTML and CSS"?<HC/>:null}

                </div>
           </div>
        )
    }
}
export default Document;