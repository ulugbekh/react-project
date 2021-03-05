import './left.scss'
import Button from '../../components/left-containers-button/button'
import {
    Overview,
    Tickets,
    Ideas,
    Contacts,
    Agents,
    Articles,
    Settings,
    Subscription
} from '../../assets/icones/Icones';

import Logotip from '../../images/logo.svg'
import { Link } from "react-router-dom";
const Left = () => {
    return (
        <div className="lee">
            <div className="left-block">
            <div className="logo-holder">
                <img src={Logotip} alt="Logo"/>
                <a href="javascript:void(0)" className="logo-text">Dashboard Kit</a>
            </div>
            <Link className="links" to="/overview">
                <Button title="Overview" icon={<Overview/>}/>
            </Link>
            <Link className="links" to="/ticket">
                <Button title="Tickets" icon={<Tickets/>}/>
            </Link>
            <Button title="Ideas" icon={<Ideas/>}/>
            <Button title="Contacts" icon={<Contacts/>}/>

            <Link  className="links"to="/Agents">
            <Button title="Agents" icon={<Agents/>}/>
            </Link>
            
            <Button title="Articles" icon={<Articles/>}/>
            <Button title="Settings" icon={<Settings/>}/>
            <Button title="Subscription" icon={<Subscription/>}/>
        </div>
        </div>
    )
}

export default Left;