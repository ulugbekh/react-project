
import Left from './containers/left-block/left'
import PageOne from './page/pageOne/PageOne'
import PageTwo from './page/page2/page2'
import Page3 from './containers/page-3/agent/agent'

import React from 'react'
import './App.scss'

import { Switch , Route } from 'react-router-dom'

function App() {
  return (
    <div className='app'>
      <Left/>
      <Switch>
      <Route path="/overview">
          <PageOne />
        </Route>
        <Route path="/ticket">
          <PageTwo />
        </Route>
      </Switch>
      <Switch>
        <Route path="/Agents">
          <Page3/>
        </Route>
      </Switch>
     
    </div>
  );
}


export default App;