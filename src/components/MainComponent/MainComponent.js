import React,{Component} from "react";
import "./MainComponent.css"
import Navbar from "../Navbar/Navbar";
import Desktop from "../Desktop/Desktop"
import WindowsMenu from "../WindowsMenu/WindowsMenu"
import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
/* "homepage": "https://agustinsilva20.github.io/portfolio2022",*/
class MainComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            screen:"desktop",
            WindowsMenu:false,
            menuOpenApps:[],
            showing:"nothing",
            showingFile:"nothing"
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
        let found=0
        for (let i=0; i< this.state.menuOpenApps.length;i++){
            if( this.state.menuOpenApps[i].openApp==app){
                found=found+1;
            }   
        }
        if (found==0){
            let aux=this.state.menuOpenApps
            aux.push({openApp:app,type:"folder"})
            this.setState({menuOpenApps:aux})
        }


        /*let aux=this.state.menuOpenApps
        aux.push({openApp:app,type:"folder"})
        this.setState({menuOpenApps:aux})*/

    }

    removeMenuOpenApp=(app)=>{
        /*let aux= this.state.menuOpenApps
        let index= aux.indexOf(app)
        aux.splice(index,1)
        this.setState({menuOpenApps:aux})*/
        let aux=this.state.menuOpenApps.filter(x => x.openApp != app)
        console.log(aux)
        this.setState(
           { menuOpenApps:aux}
            
        )


    }

    changeShowingFile=(state)=>{
        this.setState({
            showingFile:state
        })
    }

    addMenuOpenApp_showingFile=(app)=>{
    

        let found=0
        for (let i=0; i< this.state.menuOpenApps.length;i++){
            if( this.state.menuOpenApps[i].openApp==app){
                found=found+1;
            }   
        }
        if (found==0){
            let aux=this.state.menuOpenApps
            aux.push({openApp:app,type:"file"})

            this.setState({menuOpenApps:aux})
            this.setState({showingFile:app})
        }


    }

    removeMenuOpenApp_showingFile=(app)=>{
        let aux=this.state.menuOpenApps.filter(x => x.openApp != app)
        console.log(aux)
        this.setState(
           { menuOpenApps:aux}
            
        )
    }
    

    render(){
        return(
            <div>
                {this.state.screen==="desktop"?<Desktop changeShowing={this.changeShowing} showing={this.state.showing } 
                addMenuOpenApp={this.addMenuOpenApp} menuOpenApps={this.state.menuOpenApps} removeMenuOpenApp={this.removeMenuOpenApp} showingFile={this.state.showingFile}
                changeShowingFile={this.changeShowingFile} addMenuOpenApp_showingFile={this.addMenuOpenApp_showingFile} removeMenuOpenApp_showingFile={this.removeMenuOpenApp_showingFile}
                />
                :null}
            {this.state.WindowsMenu===true?<WindowsMenu/>:null}
            <Navbar toggleMenu={this.toggleMenu} menuOpenApps={this.state.menuOpenApps} changeShowing={this.changeShowing} changeShowingFile={this.changeShowingFile}/>
           </div>
        )
    }
}
export default MainComponent;