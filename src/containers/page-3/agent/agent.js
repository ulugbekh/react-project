import Agent from '../../../components/page-3/main'
import './agent.scss'
import photo from '../../../images/person/table/ticket/avatar/woman/five.svg'

const AgentContainers  = () => {
    return ( 
        <>
            <div className="agent-div">
                <Agent
                    name="Leonardo Dikabro"
                    images={photo}
                    text="When checking the text for uniqueness 
                    , the online anti-plagiarism system will find 
                    pages on the Internet containing full or partial copies
                     of it. The content of these pages will be compared against
                      the specified text to identify matches."
                />
            </div>
        </>
     );
}
 
export default AgentContainers;