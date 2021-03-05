import './creat.scss'
import Creatimg from '../../images/inactive.svg'
const Creat = ({creatText}) => {
    return ( 
        <div className="creat">
            <h2 className="creat-left">{creatText}</h2>
            <a href="javascript:void(0)" className="link"><img src={Creatimg} alt=""/></a>
        </div>
     );
}
 
export default Creat;