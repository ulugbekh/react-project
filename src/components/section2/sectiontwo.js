import './section2.scss'

const SectionTwo = ({title, text}) => {
    return ( 
        <div className="block">
            <h3 className="text">{title}</h3>
            <h3 className="mini-text">{text}</h3>
        </div>
     );
}
 
export default SectionTwo;