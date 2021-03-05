import Item from '../../components/sectionthere/sectionthere'
import './sectionthere.scss'
import Top from '../../components/sectionthere/section3-top/top'
import Bottom from '../../components/section3-bottom/section3-bottom'

const SectionBlock = () => {
    return ( 
        <div className="section-3">
            <div className="div3">
                <div className="top"><Item title="Unresolved tickets" text="View details"/></div>
                <div className="bottom"><Top title="Group:" text="Support"/></div>
                <Bottom leftText="Waiting on Feature Request" rightText="4238"/>
                <Bottom leftText="Awaiting Customer Response" rightText="1005"/>
                <Bottom leftText="Awaiting Developer Fix" rightText="914"/>
                <Bottom leftText="Pending" rightText="281"/>
             </div>
             {/* <div className="div-3">
                 <Item/>
             </div> */}
        </div>
     );
}
 
export default SectionBlock;