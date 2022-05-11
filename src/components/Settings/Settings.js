import React,{Component} from "react";
import "./Settings.css"

class Settings extends Component{
    
    
    render(){
        return(
           
           <div className="settings">
               <h3>Background Image:</h3>
               <div className="listBackgrounds">
                   <div className="bckimg" onClick={this.props.changeBackground.bind(this,"wallpaper")}><img alt="background" src="./images/wallpaper.jpg"></img></div>
                   <div className="bckimg" onClick={this.props.changeBackground.bind(this,"wallpaper2")}><img alt="background" src="./images/wallpaper2.jpg"></img></div>
                   <div className="bckimg" onClick={this.props.changeBackground.bind(this,"wallpaper3")}><img alt="background" src="./images/wallpaper3.webp"></img></div>
                   <div className="bckimg" onClick={this.props.changeBackground.bind(this,"wallpaper4")}><img alt="background" src="./images/wallpaper4.jpg"></img></div>
                   <div className="bckimg" onClick={this.props.changeBackground.bind(this,"wallpaper5")}><img alt="background" src="./images/wallpaper5.jpg"></img></div>
                   <div className="bckimg" onClick={this.props.changeBackground.bind(this,"wallpaper6")}><img alt="background" src="./images/wallpaper6.jpg"></img></div>
                   <div className="bckimg" onClick={this.props.changeBackground.bind(this,"wallpaper7")}><img alt="background" src="./images/wallpaper7.jpg"></img></div>
                   <div className="bckimg" onClick={this.props.changeBackground.bind(this,"wallpaper8")}><img alt="background" src="./images/wallpaper8.png"></img></div>
                   <div className="bckimg" onClick={this.props.changeBackground.bind(this,"wallpaper9")}><img alt="background" src="./images/wallpaper9.jpg"></img></div>
               </div>
               <h3>Theme Color:</h3>
               <div className="listBackgrounds">
                   <div className="bckimg color1" onClick={this.props.changeColor.bind(this,"color1")}></div>
                   <div className="bckimg color2" onClick={this.props.changeColor.bind(this,"color2")}></div>
                   <div className="bckimg color3" onClick={this.props.changeColor.bind(this,"color3")}></div>
                   <div className="bckimg color4" onClick={this.props.changeColor.bind(this,"color4")}></div>
                   <div className="bckimg color5" onClick={this.props.changeColor.bind(this,"color5")}></div>
               </div>

           </div>
        )
    }
}
export default Settings;