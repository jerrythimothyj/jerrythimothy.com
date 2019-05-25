import React from 'react'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'
import './Sidebar.scss'

const Sidebar: React.FC = () => (
  <>
    <div className="sidebar" role="navigation">
      <div className="sidebar-nav navbar-collapse">
        <ul className="nav" id="side-menu">
          <li>
            <NavLink to="/" className="material-ripple" activeClassName="selected">
              <i className="material-icons">home</i> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/pricing" className="material-ripple" activeClassName="selected">
              <i className="material-icons">attach_money</i> Pricing
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
    <div className="control-sidebar-bg" />
  </>
)

export default Sidebar
