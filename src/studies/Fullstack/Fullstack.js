import React, {Component} from "react";
import "./Fullstack.css"

class Fullstack extends Component{
    render(){
       return(
       <div className="uade-div">
           <img alt="titulo" className="utnfull" src="./images/untfull.jpg"></img>
           <h2>Duration: <span>75hs</span></h2>
           <h2>Front end: <span>HTML, CSS, JAVASCRIPT</span></h2>
           <h2>Back end: <span>NodeJS, ExpressJS, SQL, HandlebarsJS</span></h2>
           <h2>Validation code: <span>CER-PEHF0CUI-56763</span></h2>
           <a href="https://sysgestion.frba.utn.edu.ar/alumnos/validar_certificado" target="_blank"><div className="btnUrl">Validar cerficiado</div></a>

       </div>
       )
    }
}

export default Fullstack