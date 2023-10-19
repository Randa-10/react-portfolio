import React  from "react";
import 'bootstrap/dist/css/bootstrap.min.css' 
import './Protofolio.css'
import Link from "./Link";
export default class Protofolio extends React.Component{
constructor(){
    super()

}

render(){

return <>

<div className="container pt-5 pb-5 ">
 <h1 style={{ fontStyle:'italic',fontSize:'60px',textShadow: "0px  0px  5px  black"}}>Protfolio</h1>
  <div className="row " style={{justifyContent:'space-between'}}>
    <div className="col-md-3 p-5 col-sm-10 col1 mb-2">
    <Link name="MOBILE APP" href="http://www.google.com" /> 
    </div>
    <div className="col-md-3 p-5   col-sm-10 mb-2 col">
    <Link name="MOBILE APP"href="http://www.google.com" /> 
    </div>
    <div className="col-md-3 p-5   col-sm-10 mb-2 col1">
    <Link name="MOBILE APP"href="http://www.google.com"  /> 
    </div>
    </div>
    <div className="row mt-3"   style={{justifyContent:'space-between'}}  >
    <div className="col-md-3 p-5 col-sm-10 mb-2 col">
    <Link name="MOBILE APP" href="http://www.google.com" /> 
    </div>
    <div className="col-md-3 p-5  col-sm-10 col1 mb-2">
    <Link name="MOBILE APP"href="http://www.google.com"  /> 
    </div>
    <div className="col-md-3 p-5 col-sm-12 col mb-2">
    <Link name="MOBILE APP" href="http://www.google.com"  /> 
    </div>
    </div>
  </div>

</>
}
}