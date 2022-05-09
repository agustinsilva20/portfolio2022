import React,{Component} from "react";
import "./Navbar.css"

class Navbar extends Component{
    constructor(props){
        super(props)
        this.state={
            img:""
        }
    }
    
    render(){
        return(
        
           <div className="navbar">
               {}
                <div className="left-nav">
                        <div className="icon-navbar-div" onClick={this.props.toggleMenu}>
                        <img alt="windows" src="./images/windows.png" className="icon-nav"></img>
                        </div>
                        <div className="icon-navbar-div">
                        <img alt="windows" src="./images/file-icon.png" className="icon-nav"></img>
                        </div>
                        {/*Apps oppen*/}
                        {
                            this.props.menuOpenApps.map((app,i)=>{
                                if (app.type==="folder"){
                                    return(
                                    
                                        <div>
                                            <div onClick={this.props.changeShowing.bind(this,app.openApp)}className={`icon-navbar-div`}>
                                                <img alt="windows" src={`./images/${app.openApp}.png`} className="icon-nav"></img>
                                            </div>
                                        </div>
                                    )}
                                else{
                                    return(
                                    
                                        <div>
                                            <div onClick={this.props.changeShowingFile.bind(this,app.openApp)}className={`icon-navbar-div`}>
                                                <img alt="windows" src={`./images/${app.openApp}.png`} className="icon-nav"></img>
                                            </div>
                                        </div>
                                    )
                                }
                                }
                                
                                    
                            )
                                
                                

                        }
                        
               </div>
               <div className="right-nav">
               </div>
            
               


           </div>
        )
    }
}
export default Navbar;