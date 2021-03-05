import search from '../../images/search.svg'
import kala from '../../images/kala.svg'
import person from '../../images/photo.png'

import ListBlock from '../../containers/page2/page-list/list'
import ListInfo from '../../containers/page2/list-info/list-info'


import './page2.scss'


const PageTwo = () => {
    return ( 
        <div className="page2">
            <div className="header-top">
                <a href="#" className="header-left">Overview</a>
                <div className="header-right">
                    <div className="header-right-left">
                        <a href="" className="poisk"><img src={search} alt=""/></a>
                        <a href="" className="kala"><img src={kala} alt=""/></a>
                    </div>
                    <div className="header-right-right">
                        <span className="person-name">Jones Ferdinand</span>
                        <img src={person} alt="person" className="person-photo"/>
                    </div>
                </div>
            </div>
            <div className="listBlock">
                <ListBlock/>
                <ListInfo/>
            </div>
        </div>
     );
}
 
export default PageTwo;