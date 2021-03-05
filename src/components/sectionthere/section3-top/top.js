import './top.scss'

const Top = ({title, text}) => {
    return ( 
        <div className="top-div">
        <h2 className="top-text">{title}</h2>
         <span className="p-minitext">{text}</span> 
        </div>
     );
}
 
export default Top;