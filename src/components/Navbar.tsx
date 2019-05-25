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
      <a className="navbar-brand" href="index.html">
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
          <a
            href="http://bigjapps.com/resume/RESUME%20JERRY%20THIMOTHY%20J.pdf"
            target="_blank"
            className="btn-buy"
          >
            <i className="pe-7s-id" /> Download Resume
          </a>
        </li>
      </ul>
      <ul className="nav navbar-top-links navbar-right">
        <MessageNotification />
        <li className="dropdown">
          <a className="dropdown-toggle" data-toggle="dropdown" href="#">
            <i className="material-icons">add_alert</i>
            <div className="notify">
              {' '}
              <span className="heartbit" /> <span className="point" />{' '}
            </div>
          </a>
          <ul className="dropdown-menu dropdown-alerts">
            <li className="rad-dropmenu-header">
              <a href="#">Your Notifications</a>
            </li>
            <li>
              <a className="rad-content" href="#">
                <div className="pull-left">
                  <i className="fa fa-html5 fa-2x color-red" />
                </div>
                <div className="rad-notification-body">
                  <div className="lg-text">Introduction to fetch()</div>
                  <div className="sm-text">The fetch API</div>
                </div>
              </a>
            </li>
            <li>
              <a className="rad-content" href="#">
                <div className="pull-left">
                  <i className="fa fa-bitbucket fa-2x color-violet" />
                </div>
                <div className="rad-notification-body">
                  <div className="lg-text">Check your BitBucket</div>
                  <div className="sm-text">Last Chance</div>
                </div>
              </a>
            </li>
            <li>
              <a className="rad-content" href="#">
                <div className="pull-left">
                  <i className="fa fa-google fa-2x color-info" />
                </div>
                <div className="rad-notification-body">
                  <div className="lg-text">Google Account</div>
                  <div className="sm-text">example@gmail.com</div>
                </div>
              </a>
            </li>
            <li>
              <a className="rad-content" href="#">
                <div className="pull-left">
                  <i className="fa fa-amazon fa-2x color-green" />
                </div>
                <div className="rad-notification-body">
                  <div className="lg-text">Amazon Simple Notification ...</div>
                  <div className="sm-text">Lorem Ipsum is simply dummy text...</div>
                </div>
              </a>
            </li>
            <li className="rad-dropmenu-footer">
              <a href="#">See all notifications</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
)

export default Navbar
