import React from 'react'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'
import './Sidebar.scss'

const Sidebar: React.FC = () => (
  <>
    <div className="sidebar" role="navigation">
      <div className="sidebar-nav navbar-collapse">
        <ul className="nav" id="side-menu">
          {/* <li>
            <NavLink to="/" className="material-ripple" activeClassName="selected">
              <i className="material-icons">home</i> Dashboard
            </NavLink>
          </li> */}

          <li>
            <a href="/" className="material-ripple">
              <i className="material-icons">home</i> Dashboard
            </a>
          </li>
          {/* <li>
            <NavLink to="/pricing" className="material-ripple" activeClassName="selected">
              <i className="material-icons">attach_money</i> Pricing
            </NavLink>
          </li> */}
          <li>
            <a href="/pricing" className="material-ripple">
              <i className="material-icons">attach_money</i> Pricing
            </a>
          </li>
          {/* <li>
            <NavLink to="/employment" className="material-ripple" activeClassName="selected">
              <i className="material-icons">work</i> Employment
            </NavLink>
          </li> */}
          <li>
            <a href="/employment" className="material-ripple">
              <i className="material-icons">work</i> Employment
            </a>
          </li>
          {/* <li>
            <NavLink to="/academic" className="material-ripple" activeClassName="selected">
              <i className="material-icons">school</i> Academic
            </NavLink>
          </li> */}
          <li>
            <a href="/academic" className="material-ripple">
              <i className="material-icons">school</i> Academic
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="control-sidebar-bg" />
  </>
)

export default Sidebar
