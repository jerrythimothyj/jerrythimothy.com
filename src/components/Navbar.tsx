import React from 'react'
import MessageNotification from './MessageNotification'

const Navbar: React.FC = () => (
  <nav className="navbar navbar-fixed-top">
    <div className="navbar-header">
      <button
        type="button"
        className="navbar-toggle"
        data-toggle="collapse"
        data-target=".navbar-collapse"
      >
        <span className="sr-only">Toggle navigation</span>
        <i className="material-icons">apps</i>
      </button>
      <a className="navbar-brand" href="/">
        <img className="main-logo" src="assets/dist/img/JLOGO.png" id="bg" alt="" />
      </a>
    </div>
    <div className="nav-container">
      <ul className="nav navbar-nav hidden-xs">
        <li>
          <a id="fullscreen" href="#">
            <i className="material-icons">fullscreen</i>{' '}
          </a>
        </li>
      </ul>
      <ul className="nav navbar-nav">
        <li>
          <a href="assets/RESUME.JERRY.THIMOTHY.J.pdf" target="_blank" className="btn-buy">
            <i className="pe-7s-id" /> Download Resume
          </a>
        </li>
      </ul>
      <ul className="nav navbar-top-links navbar-right">
        <MessageNotification />
      </ul>
    </div>
  </nav>
)

export default Navbar
