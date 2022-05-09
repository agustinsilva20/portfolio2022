import React, {Component} from "react";
import "./Uade.css"

class Uade extends Component{
    render(){
       return(
       <div className="uade-div">
           <img alt="uade" src="./images/uade.jpg"></img>
           <h2>University: <span>Universidad Argentina de la Empresa</span></h2>
           <h2>Career: <span>Ingenieria Informatica</span></h2>
           <h2>Start Date: <span>March: 2021</span></h2>
           <h2>Expected End Date: <span>2026</span></h2>
           <a href="https://www.uade.edu.ar/facultad-de-ingenieria-y-ciencias-exactas/ingenieria-en-informatica/" target="_blank"><div className="btnUrl">UADE Site</div></a>
       </div>
       )
    }
}

export default Uade