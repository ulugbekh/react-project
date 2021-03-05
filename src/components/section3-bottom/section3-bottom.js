import './main.scss'

const Section3Bottom = ({leftText,rightText }) => {
    return ( 
        <div className="section3-bottom">
            <h3 className="h2-section3-left">{leftText}</h3>
            <p className="h2-section3-right">{rightText}</p>
        </div>
     );
}
 
export default Section3Bottom;