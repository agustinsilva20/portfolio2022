import React,{Component} from "react";
import "./AboutMe.css"
import English from "./English"
import Spanish from "./Spanish";

var lorem="Lorem ipsum dolor sit amet consectetur adipiscing elit imperdiet, a aptent auctor ac tortor nullam proin, augue parturient netus mauris tempor taciti natoque. Aenean nisi ad viverra potenti aptent morbi volutpat lobortis fringilla venenatis, commodo porttitor dapibus ligula nulla proin suscipit conubia fusce platea elementum, sagittis tincidunt interdum vitae laoreet mattis ullamcorper bibendum accumsan. Fermentum semper in torquent tortor natoque a nibh inceptos netus, felis mattis pharetra ante montes pretium bibendum scelerisque sollicitudin dictum, ac enim lacinia accumsan justo metus mauris aenean."
class AboutMe extends Component{
    constructor(props){
        super(props)
        this.state={
            languaje:"english"

        } 
    }

    toggleLanguaje=()=>{
        let idiom=""
        if (this.state.languaje==="english"){
            idiom="spanish"
        }
        else{
            idiom="english"
        }
        this.setState({
            languaje:idiom
        })
    }

    render(){
        return(
           <div className="about-div">
               <div className="languaje"><span onClick={this.toggleLanguaje}>Change to {this.state.languaje==="english"?"Spanish":"English"}</span></div>
               <div className="div-selfie"><img alt="yo" src="./images/yp.png" className="selfie"></img></div>
               <h1 className="name">​​Agustin Silva Bruzzone</h1>
               <br></br>
               <div className="about-div-text">
                   {this.state.languaje==="english"?<English/>:<Spanish/>}
                <br></br>
                <p><strong>Phone:</strong> +54 11 5622-3610</p>
                <p><strong>Mail:</strong> agustinsilvab@hotmail.com</p>
                <p><strong>Languajes:</strong> Spanish (native) , English (CEFR Level: C1 )</p>
                </div>
                
           </div>
        )
    }
}
export default AboutMe;