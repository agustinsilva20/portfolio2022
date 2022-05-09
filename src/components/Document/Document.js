import React,{Component} from "react";
import "./Document.css"

import Uade from "../../studies/UADEComponent/Uade";

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
                </div>
           </div>
        )
    }
}
export default Document;