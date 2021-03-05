import './list.scss'
import sort from '../../images/sort.svg'
import vector from '../../images/Vector.svg'

const List = ({text, firsttext, lasttext}) => {
    return ( 
        <div className="list-item">
            <div className="list-left">
                <h2 className="left-text">{text}</h2>
            </div>
            <list className="right">
                <div className="right-left">
                    <a href="" className="left-link"><img src={sort} alt=""/></a>
                    <p className="link-text">{firsttext}</p>
                </div>
                <div className="right-right">
                    <a href="" className="left-link"><img src={vector} alt=""/></a>
                    <p className="link-text">{lasttext}</p>
                </div>
            </list>
        </div>
     );
}
 
export default List;