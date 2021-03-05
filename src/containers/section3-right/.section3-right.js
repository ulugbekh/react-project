import './.section3-right.scss'
import Top from '../../components/sectionthere/section3-top/top'
import Item from '../../components/sectionthere/sectionthere'
import Task from '../../components/task/task'
import Creat from '../../components/creat/creat'

const Section3Right = () => {
    return ( 
        <div className="section3-rightBlock">
            <div className="section3-inner">
            <div className="top"><Item title="Tasks" text="View details"/></div>
            <div className="bottom"><Top  text="Today"/></div>
            <Creat creatText="Create new task"/>
            <div className="task-block"> <Task text="Finish ticket update" id="one" number="one" linkText="high"/></div>
            <div className="task-block"> <Task text="Finish ticket update" id="two" number="two" linkText="low"/></div>
            <div className="task-block"> <Task text="Finish ticket update" id="there" number="there" linkText="normal"/></div>
            
            </div>
        </div>
     );
}
 
export default Section3Right;