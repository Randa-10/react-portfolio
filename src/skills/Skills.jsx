import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './skils.css'
// eslint-disable-next-line no-unused-vars
import Link from "./Link";
import { ProgressBar } from "react-bootstrap";
export default class Skills extends React.Component{
constructor(){
super()
console.log("from constractor");//1
}

render(){

return <>
  <div className=" mt-5 bg-dark pb-5">
    <div className="container">
      <h1 className="text-center pt-5 pb-5" style={{color:'white'}}>Skills</h1>
      <p style={{fontSize:'18px',color:'white'}}>Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Nemo quaerat magni cum cgonsectetur laborum explicabo, dolores s
        int laboriosam, suscipit distinctio, at aut. Ex sunt vel numquam modi nihLorem, ipsum dolor sit amet consectetur
        adipisicing
        elit. Nemo quaerat magni cum consectetur laborum explicabo, dolores s
        int laboriosam, suscipit distinctio, at aut. Ex sunt vel numquam modi nihil iure vero?il iure vero?</p>
      <div className="row mt-5 left">
        <div className="col-md-4 col-sm-12" style={{color:'white'}}>
          <h5 className="text-center pb-4">My Foucus</h5>
          <ul style={{listStyleType:'none' ,borderTop:'1px solid white',fontSize:'20px'}}>
            <Link name="Ui&UX Design" x='pt-4' />
            <Link name="Responsive Design" x='pt-4'/>
            <Link name="Web Design" x='pt-4'/>
            <Link name="Mobile App Design" x='pt-4'/>
          </ul>
        </div>
        <div className="col-md-6 col-sm-12  offset-1 ">
          <div className="row mt-3">
            <div className="col-3 dii" >
              HTML
            </div>
            <div className="col-8 ">
              <div >
                <ProgressBar variant="secondary" now={90} className="prog" />
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-3 dii" >
             CSS
            </div>
            <div className="col-8 ">
              <div>
                <ProgressBar  variant="secondary" now={80} className="prog"/>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-3 dii" >
             JavaScript
            </div>
            <div className="col-8 ">
              <div>
                <ProgressBar  variant="secondary" now={70} className="prog"/>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-3 dii" >
              React
            </div>
            <div className="col-8 h-200px">
                <ProgressBar  variant="secondary" now={80} className="prog" />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-3  dii">
              Angular
            </div>
            <div className="col-8 ">
                <ProgressBar  variant="secondary" now={90} className="prog" />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-3 dii" >
              NodeJs
            </div>
            <div className="col-8 ">
                <ProgressBar  variant="secondary" now={80} className="prog" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</>
}
}