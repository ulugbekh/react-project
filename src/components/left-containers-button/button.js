import './button.scss'



const Button = ({title, icon}) => {
    return ( 
        <button className="button-item">
            <span className="icon-span">{icon}</span>
            <span className="button-span">{title}</span>
        </button>
     );
}
 
export default Button;