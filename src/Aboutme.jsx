import React  from "react";
import 'bootstrap/dist/css/bootstrap.min.css' 
import cv from '../public/assets/Randa Hammam cv.pdf'
export default class About extends React.Component{
constructor(){
    super()
    console.log("from constractor");//1
}

render(){

return <> 
<div className="container">
<div className="row mt-5 ">
<div className="col-sm-4">
<h1  style={{ textshadow:'10px 10px #ff0000',fontStyle:'italic',fontSize:'60px',textShadow: "0px  0px  5px  black"}}>About Me</h1>
</div>
<div className="col-sm-8 ">
<p style={{fontSize:'22px'}}>Lorem, ipsum dolor sit amet consectetur adipisicing
     elit. Nemo quaerat magni cum consectetur laborum explicabo, dolores s
    int laboriosam, suscipit distinctio, at aut. Ex sunt vel numquam modi nihLorem, ipsum dolor sit amet consectetur adipisicing
     elit. Nemo quaerat magni cum consectetur laborum explicabo, dolores s
    int laboriosam, suscipit distinctio, at aut. Ex sunt vel numquam modi nihil iure vero?il iure vero?</p>

<button className=" mt-3 bg-dark" style={{borderRadius:'5px'
,padding:'10px 40px',fontSize:'20px'}}><a style={{textDecoration:'none',color:'white'}} href={cv} download>Download CV </a></button>
</div>
</div>
 </div>   
  </>
}
}