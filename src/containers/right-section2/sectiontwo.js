import Sectionitem from '../../components/section2/sectiontwo'
import './sectiontwo.scss'

const SectiontwoBlock = () => {
    return ( 
        <div className="section2">
        <Sectionitem title="Resolved" text="449"/>
        <Sectionitem title="Received" text="426"/>
        <Sectionitem title="Average first response time" text="33m"/>
        <Sectionitem title="Average response time" text="3h 8m"/>
        <Sectionitem title="Resolution within SLA" text="94%"/>
        </div>
     );
}
 
export default SectiontwoBlock;