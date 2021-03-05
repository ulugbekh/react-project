import './section1.scss'
import UseState from 'react'

const Sectionitem = ({title, text}) => {
    
    return (
        <div className="section1-block">
            <h2 className="text">{title}</h2>
            <span className="span-text">{text}</span>
        </div>
    )
}

export default Sectionitem;
