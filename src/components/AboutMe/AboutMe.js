import React,{Component} from "react";
import "./AboutMe.css"

var lorem="Lorem ipsum dolor sit amet consectetur adipiscing elit imperdiet, a aptent auctor ac tortor nullam proin, augue parturient netus mauris tempor taciti natoque. Aenean nisi ad viverra potenti aptent morbi volutpat lobortis fringilla venenatis, commodo porttitor dapibus ligula nulla proin suscipit conubia fusce platea elementum, sagittis tincidunt interdum vitae laoreet mattis ullamcorper bibendum accumsan. Fermentum semper in torquent tortor natoque a nibh inceptos netus, felis mattis pharetra ante montes pretium bibendum scelerisque sollicitudin dictum, ac enim lacinia accumsan justo metus mauris aenean."
class AboutMe extends Component{
  

    render(){
        return(
           <div className="about-div">
               <div className="div-selfie"><img alt="yo" src="./images/yp.png" className="selfie"></img></div>
               <h1 className="name">👹​​Agustin Silva Bruzzone🤑​</h1>
               <div className="about-div-text"><p>{lorem}</p></div>
           </div>
        )
    }
}
export default AboutMe;