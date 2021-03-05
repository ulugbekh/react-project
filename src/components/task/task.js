import './task.scss'

const Task = ({id, number, text,  linkText}) => {
    return ( 
        <div className="task">
            <div className="task-left">
                <div className="in">
                    <input type="checkbox" id={id} className="inpute"/>
                    <label className="lable" htmlFor={number}>{text}</label>
                </div>
                
            </div>
            <div className="task-right">
                    <a href="#" className={`task-link ${linkText}`}>{linkText}</a>
                </div>
        </div>
     );
}
 
export default Task;