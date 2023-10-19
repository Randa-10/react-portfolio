/* eslint-disable react/jsx-no-undef */
import React  from "react";
import 'bootstrap/dist/css/bootstrap.min.css' 
import { Row,Col } from "react-bootstrap";
import './footer.css'
import Link from "./link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
// import { FaFacebookF } from "react-icons/fa6";

export default class Footer extends React.Component{
constructor(){
    super()
    console.log("from constractor");//1
}

render(){

return <> 
<Row >
    <Col>
    <h3 className="pt-5" style={{textTransform:'upperCase',color:'white'}}>Get in touch</h3>
    <FontAwesomeIcon icon={faEnvelope} className="tt"/>
    <Link name="randa010011012@gmail.com" href="http://www.gnail.com" />
    <p></p> 
   <FontAwesomeIcon icon={faPhone} className=" tt"/>
    <Link name="01021188566" href="http://www.gnail.com" /> 
    </Col>
    <Col><button className="butt mt-5" style={{border:'1px solid white' ,backgroundColor:'inherit',color:'white',borderRadius:'5px',padding:'10px 30px',fontSize:'16px'}}>Contact Us</button>
</Col>
    <Col className="pt-5" >
    <FontAwesomeIcon icon={ faLinkedin} className="mx-3 tt" value={{ color: 'blue', size: '50px' }} />
    <FontAwesomeIcon icon={faFacebook }className="mx-3 tt" />
    <FontAwesomeIcon icon={ faTwitter} className="mx-3 tt" />
    <h6 style={{color:'white'}} className="mt-3">copyright@2023</h6>
    <Link name='' href='http://www.facebook.come' y={faFacebook} ></Link>
    </Col>
</Row>
  </>
}
}