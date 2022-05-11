import React,{Component} from "react";
import "./Experience.css"
class Experience extends Component{
  
    render(){
        return(
           <div className="exp">
              <img alt="accenture" src="./images/accenture.jpg" className="accenture-logo"></img>
              <h2>Application Development</h2>
              <p>Since 09/2021</p>
              <p>Technologies I work with: <span>.NET, .NET Core, SQL, Amazon Web Services, Google Cloud Platform, C# Unit Test with MOQ, Python, Javascript, CSS, HTML, Git</span></p>
              
           </div>
        )
    }
}
export default Experience;