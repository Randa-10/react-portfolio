import React  from "react";
import 'bootstrap/dist/css/bootstrap.min.css' 
import './Header.css'
export default class Header extends React.Component{
constructor(){
    super()
    console.log("from constractor");//1
    this.state={
        name:'Randa Hammam',
        title:'Web Developer &Designer',
    }
}

render(){

return <> 

<div className="pt-5"  style={ {height:'400px',
backgroundImage:"url('https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80')",
backgroundRepeat:'no-repeat',backgroundSize:'100%' }} >     
<div className=" pt-5 container ">
<h1 style={{color:'white',fontSize:'40px' }} >{this.state.name}</h1>
<p style={{color:'white',fontSize:'25px',fontWeight:'lighter' }}>{this.state.title}</p>
<button className="butt mt-3" >Contact me</button>
</div>
</div>
    
  </>
}
}