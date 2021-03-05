import Sectionitem from '../../components/page-section1/section1Item'

import './section1-block.scss'

const Section1Block = () => {
    return (
        <div className="section1">
            <Sectionitem  title="Unresolved" text="60"/>
            <Sectionitem title="Overdue" text="16"/>
            <Sectionitem title="Open" text="43"/>
            <Sectionitem title="On hold" text="64" />
        </div>
    )
}

export default Section1Block;