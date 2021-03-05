import './sectionthere.scss'

const Sectionitem = ({title, text}) => {
    return ( 
        <div className="div">
            <h2 className="text">{title}</h2>
            <p className="p-text">{text}</p>
        </div>
     );
}
 
export default Sectionitem;