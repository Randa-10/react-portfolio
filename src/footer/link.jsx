export default function Link(props){
    // eslint-disable-next-line react/prop-types
    return<a href={props.href} className={props.x} style={{textDecoration:'none',color:'white' ,fontSize:'16px'}}>{props.name}<i className={props.y}></i></a>

 
 
}