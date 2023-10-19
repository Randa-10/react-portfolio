export default function Link(props){
    // eslint-disable-next-line react/prop-types
    return     <a href={props.href} style={{textDecoration:'none',color:'white' ,fontSize:'22px',borderBottom:'1px solid white'}}>{props.name}</a>

 
 
}