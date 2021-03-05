import './list-info.scss'
import ListInfo from '../../../components/page2-list/page2-list2/list2'
// import ListItem from '../../../components/ListItem/ListItem';
import Person from '../../../components/page2-list/page2-person/person'

import one from '../../../images/person/table/ticket/avatar/man/one.png'
// import five from '../../../images/person/table/ticket/avatar/woman/five'
// import four from '../../../images/person/table/ticket/avatar/woman/four.svg'
// import there from '../../../images/person/table/ticket/avatar/man/there.png'
// import two from '../../../images/person/table/ticket/avatar/man/two.svg'

const ListInfoBlock = () => {
    const personArr = [
        {
            contact:'Contact Email not Linked',
            names:"Tom Cruise",
            vaqt:"on 24.05.2019",
            dates:"May 26, 2019",
            time:"6:30 PM",
            links:"High",
            photo: one
        },
        {
            contact:'Adding Images to Featured Posts',
            names:'Matt Damon',
            vaqt:'on 24.05.2019',
            dates:'May 26, 2019',
            time:'8:00 AM',
            links:'Low',
            photo: one
        },
        {
            contact:'Adding Images to Featured Posts',
            names:'Matt Damon',
            vaqt:'on 24.05.2019',
            dates:'May 26, 2019',
            time:'8:00 AM',
            links:'Low',
            photo: one
        },
        {
            contact:'Adding Images to Featured Posts',
            names:'Matt Damon',
            vaqt:'on 24.05.2019',
            dates:'May 26, 2019',
            time:'8:00 AM',
            links:'Normol',
            photo: one
        },
        {
            contact:'Adding Images to Featured Posts',
            names:'Matt Damon',
            vaqt:'on 24.05.2019',
            dates:'May 26, 2019',
            time:'8:00 AM',
            links:'Low',
            photo: one
        },
        {
            contact:'Adding Images to Featured Posts',
            names:'Matt Damon',
            vaqt:'on 24.05.2019',
            dates:'May 26, 2019',
            time:'8:00 AM',
            links:'High',
            photo: one
        },
        {
            contact:'Adding Images to Featured Posts',
            names:'Matt Damon',
            vaqt:'on 24.05.2019',
            dates:'May 26, 2019',
            time:'8:00 AM',
            links:'Low',
            photo: one
        },
        {
            contact:'Adding Images to Featured Posts',
            names:'Matt Damon',
            vaqt:'on 24.05.2019',
            dates:'May 26, 2019',
            time:'8:00 AM',
            links:'Normol',
            photo: one
        },
    ]
    return ( 
        <div className="list-info"> 
           <ListInfo
                    ticked="Ticket details"
                    customer="Customer name"
                    date="date"
                    Priority="Priority"
                 />
            {
                personArr.map(item => (
                    <Person
                        contact={item.contact}
                        names={item.names}
                        vaqt={item.vaqt}
                        dates={item.dates}
                        time={item.time}
                        links={item.links}
                        photo={one}
                    />
                )
            )}

        </div>
     );
}


 
export default ListInfoBlock;