import React from 'react'
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom'
import Academic from './components/Academic'
import Blog from './components/Blog/Blog'
import Career from './components/Career/Career'
import Dashboard from './components/Dashboard'
import Employment from './components/Employment'
import Learning from './components/Learning'
import MessageNotificationModal from './components/MessageNotificationModal'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing'
import Sidebar from './components/Sidebar/Sidebar'
import Technology from './components/Technology/Technology'

import { checkAndSetMessageNotificationCount, setMessageNotificationCount } from './services'

checkAndSetMessageNotificationCount(1)

class App extends React.Component {
  public render() {
    return (
      <div id="wrapper" className="wrapper animsition">
        <Navbar />
        <Router>
          <Sidebar />

          <Route exact={true} path="/pricing" component={Pricing} />
          <Route exact={true} path="/employment" component={Employment} />
          <Route exact={true} path="/academic" component={Academic} />
          <Route exact={true} path="/blog" component={Blog} />
          <Route exact={true} path="/technology" component={Technology} />
          <Route exact={true} path="/learning" component={Learning} />
          <Route exact={true} path="/career" component={Career} />
          <Route exact={true} path="/" component={Dashboard} />
        </Router>
        <MessageNotificationModal />
      </div>
    )
  }
}

export default App
