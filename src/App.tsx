import React from 'react'
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'
import MessageNotificationModal from './components/MessageNotificationModal'
import Sidebar from './components/Sidebar/Sidebar'
import Dashboard from './components/Dashboard'
import Pricing from './components/Pricing'
import Employment from './components/Employment'
import Academic from './components/Academic'
import Blog from './components/Blog/Blog'
import Navbar from './components/Navbar'
import Career from './components/Career/Career'
import Technology from './components/Technology/Technology'
import Learning from './components/Learning'

class App extends React.Component {
  render() {
    return (
      <div id="wrapper" className="wrapper animsition">
        <Navbar />
        <Router>
          <Sidebar />
          {/* <Route exact path="/" component={Dashboard} /> */}
          <Route exact path="/pricing" component={Pricing} />
          <Route exact path="/employment" component={Employment} />
          <Route exact path="/academic" component={Academic} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/technology" component={Technology} />
          <Route exact path="/learning" component={Learning} />
          <Route exact path="/" component={Career} />
        </Router>
        <MessageNotificationModal />
      </div>
    )
  }
}

export default App
