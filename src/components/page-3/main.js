import './main.scss'

const Agents = ({images, name, text }) => {
    return ( 
        <>
            <div className="agents">
                <div className="agent-top">
                    <img src={images} alt="rasm" className="agent-img"/>
                </div>
                <div className="agent-block">
                    <h2 className="agent-name">
                        {name}
                    </h2>
                    <p className="agent-text">
                        {text}
                    </p>
                </div>
            </div>
        </>
     );
}
 
export default Agents;