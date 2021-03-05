import './list2.scss'

const PersonItem = ({ticked, customer, date, Priority }) => {
    return ( 
        <div className="person-item">
            <div className="person-left">
                <p className="person-info0">{ticked}</p>
                
            </div>
            <div className="person-info2">
                <p className="person-info1">{customer}</p>
                <p className="person-info2">{date}</p>
                <p className="person-info3">{Priority}</p>
            </div>
        </div>
     );
}
 
export default PersonItem;