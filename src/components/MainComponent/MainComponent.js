import React,{Component} from "react";
import "./MainComponent.css"
import Navbar from "../Navbar/Navbar";
import Desktop from "../Desktop/Desktop"
import WindowsMenu from "../WindowsMenu/WindowsMenu"

class MainComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            screen:"desktop",
            WindowsMenu:false,
            menuOpenApps:[],
            showing:"nothing"
        } 
    }
    
    changeShowing=(state)=>{
        this.setState({
            showing:state
        })
    }

    toggleMenu=()=>{
        this.setState({WindowsMenu:!this.state.WindowsMenu})
    }

    addMenuOpenApp=(app)=>{
        let aux=this.state.menuOpenApps
        aux.push(app)
        console.log("xd",aux)
        this.setState({menuOpenApps:aux})
    }

    removeMenuOpenApp=(app)=>{
        let aux= this.state.menuOpenApps
        let index= aux.indexOf(app)
        aux.splice(index,1)
        this.setState({menuOpenApps:aux})
    }

    render(){
        return(
            <div>
                {this.state.screen==="desktop"?<Desktop changeShowing={this.changeShowing} showing={this.state.showing } addMenuOpenApp={this.addMenuOpenApp} menuOpenApps={this.state.menuOpenApps} removeMenuOpenApp={this.removeMenuOpenApp}/>:null}
            {this.state.WindowsMenu===true?<WindowsMenu/>:null}
            <Navbar toggleMenu={this.toggleMenu} menuOpenApps={this.state.menuOpenApps} changeShowing={this.changeShowing}/>
           </div>
        )
    }
}
export default MainComponent;