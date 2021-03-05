import './PageOne.scss'
import search from '../../images/search.svg'
import kala from '../../images/kala.svg'
import person from '../../images/photo.png'

import SectionOne from '../../containers/right-section1/section1-block'
import SectionTwo from '../../containers/right-section2/sectiontwo'
import Sectionthere from '../../containers/right-section3/sectionthere'
import Section3Right from '../../containers/section3-right/.section3-right'



const PageOne = () => {
    return ( 
        <div className="page-one">
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
            <div className="sectionOne">
                <SectionOne/>
            </div>
            <div className="sectionTwo">
                <div className="divo"></div>
                <SectionTwo/>
            </div>
            <div className="sectionthere">
                <Sectionthere/>
                <Section3Right/>
            </div>
        </div>
     );
}
 
export default PageOne;