
import ListItem from '../../../components/page2-list/list'
import './list.scss'


const List = () => {
    return ( 
        <div className="List">
            <ListItem text="All tickets" firsttext="Sort" lasttext="Filter"/>
        </div>
     );
}
 
export default List;