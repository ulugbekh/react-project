import './person.scss'


const Person = ({contact, photo, names, dates, time, links, vaqt}) => {
    return ( 
        <div className="person">
            <div className="person-left">
                <div className="p-left">
                    <img src={photo} alt="" className="p-images"/>
                </div>
                <div className="p-right">
                    <p className="p-info">{contact}</p>
                    <span className="span-info">Updated 1 day ago</span>
                </div>
            </div>
            <div className="person-right">
                <div className="p-1">
                    <p className="p-name">{names}</p>
                    <p className="p-date">{vaqt}</p>
                </div>
                <div className="p-2">
                    <p className="person-date p-name">{dates}</p>
                    <p className="person-hour p-date">{time}</p>
                </div>
                <div className="p-3">
                    <a href="#" className={`person-link ${links}`}>{links}</a>
                </div>
                <div className="p-4">
                    <a href="" className="p-link"></a>
                    <a href="" className="p-link"></a>
                    <a href="" className="p-link"></a>
                </div>
            </div>

        </div>
     );
}
 
export default Person;