import React from 'react'

const App: React.FC = () => {
  return (
    <div id="wrapper" className="wrapper animsition">
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
            <img className="main-logo" src="assets/dist/img/light-logo.png" id="bg" alt="" />
          </a>
        </div>
        <div className="nav-container">
          <ul className="nav navbar-nav hidden-xs">
            <li>
              <a id="fullscreen" href="#">
                <i className="material-icons">fullscreen</i>{' '}
              </a>
            </li>
            <li className="hidden-xs">
              <a className="search-trigger" href="#">
                <i className="material-icons">search</i>
              </a>
              <div className="fullscreen-search-overlay" id="search-overlay">
                <a href="#" className="fullscreen-close" id="fullscreen-close-button">
                  <i className="ti-close" />
                </a>
                <div id="fullscreen-search-wrapper">
                  <form method="get" id="fullscreen-searchform">
                    <input
                      type="text"
                      defaultValue=""
                      placeholder="Type keyword(s) here"
                      id="fullscreen-search-input"
                    />
                    <i className="ti-search fullscreen-search-icon">
                      <input value="" type="submit" />
                    </i>
                  </form>
                </div>
              </div>
            </li>
            <li>
              <a id="menu-toggle" href="#">
                <i className="material-icons">apps</i>
              </a>
            </li>
            <li className="dropdown hidden-sm">
              <a href="#" className="dropdown-toggle material-ripple" data-toggle="dropdown">
                Dropdown <b className="caret" />
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#">Dropdown Link 1</a>
                </li>
                <li>
                  <a href="#">Dropdown Link 2</a>
                </li>
                <li>
                  <a href="#">Dropdown Link 3</a>
                </li>
                <li className="dropdown dropdown-submenu">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    Dropdown Link 4
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#">Submenu Link 4.1</a>
                    </li>
                    <li>
                      <a href="#">Submenu Link 4.2</a>
                    </li>
                    <li>
                      <a href="#">Submenu Link 4.3</a>
                    </li>
                    <li>
                      <a href="#">Submenu Link 4.4</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown dropdown-submenu">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    Dropdown Link 5
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#">Submenu Link 5.1</a>
                    </li>
                    <li>
                      <a href="#">Submenu Link 5.2</a>
                    </li>
                    <li>
                      <a href="#">Submenu Link 5.3</a>
                    </li>
                    <li className="divider" />
                    <li className="dropdown dropdown-submenu">
                      <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                        Submenu Link 5.4
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="#">Submenu Link 5.4.1</a>
                        </li>
                        <li>
                          <a href="#">Submenu Link 5.4.2</a>
                        </li>
                        <li className="divider" />
                        <li className="dropdown dropdown-submenu">
                          <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                            Submenu Link 5.4.3
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a href="#">Submenu Link 5.4.3.1</a>
                            </li>
                            <li>
                              <a href="#">Submenu Link 5.4.3.2</a>
                            </li>
                            <li>
                              <a href="#">Submenu Link 5.4.3.3</a>
                            </li>
                            <li>
                              <a href="#">Submenu Link 5.4.3.4</a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown dropdown-submenu">
                          <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                            Submenu Link 5.4.4
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a href="#">Submenu Link 5.4.4.1</a>
                            </li>
                            <li>
                              <a href="#">Submenu Link 5.4.4.2</a>
                            </li>
                            <li>
                              <a href="#">Submenu Link 5.4.4.3</a>
                            </li>
                            <li>
                              <a href="#">Submenu Link 5.4.4.4</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="dropdown mega-dropdown hidden-sm">
              <a href="#" className="dropdown-toggle material-ripple" data-toggle="dropdown">
                Megamenu <b className="caret" />
              </a>
              <ul className="dropdown-menu mega-dropdown-menu">
                <li className="row">
                  <div className="col-menu col-md-3">
                    <ul className="menu-col">
                      <li>
                        <a href="buttons.html">
                          <i className="fa fa-window-minimize" />
                          Buttons
                        </a>
                      </li>
                      <li>
                        <a href="tabs.html">
                          <i className="fa fa-tablet" />
                          Tab
                        </a>
                      </li>
                      <li>
                        <a href="notification.html">
                          <i className="fa fa-exclamation-triangle" />
                          Notification
                        </a>
                      </li>
                      <li>
                        <a href="tree-view.html">
                          <i className="fa fa-tree" />
                          Tree View
                        </a>
                      </li>
                      <li>
                        <a href="progressbars.html">
                          <i className="fa fa-minus" />
                          Progressber
                        </a>
                      </li>
                      <li>
                        <a href="list.html">
                          <i className="fa fa-list-ol" />
                          List View
                        </a>
                      </li>
                      <li>
                        <a href="typography.html">
                          <i className="fa fa-text-width" />
                          Typography
                        </a>
                      </li>
                      <li>
                        <a href="panels.html">
                          <i className="fa fa-keyboard-o" />
                          Panels
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-menu col-md-3">
                    <ul className="menu-col">
                      <li>
                        <a href="modals.html">
                          <i className="fa fa-file-text-o" />
                          Modals
                        </a>
                      </li>
                      <li>
                        <a href="icheck_toggle_pagination.html">
                          <i className="fa fa-check-square-o" />
                          iCheck, Toggle
                        </a>
                      </li>
                      <li>
                        <a href="labels-badges-alerts.html">
                          <i className="fa fa-exclamation" />
                          labels, Badges, Alerts
                        </a>
                      </li>
                      <li>
                        <a href="charts_flot.html">
                          <i className="fa fa-area-chart" />
                          Flot Chart
                        </a>
                      </li>
                      <li>
                        <a href="charts_Js.html">
                          <i className="fa fa-bar-chart" />
                          Chart js
                        </a>
                      </li>
                      <li>
                        <a href="charts_morris.html">
                          <i className="fa fa-pie-chart" />
                          Morris Charts
                        </a>
                      </li>
                      <li>
                        <a href="charts_sparkline.html">
                          <i className="fa fa-line-chart" />
                          Sparkline Charts
                        </a>
                      </li>
                      <li>
                        <a href="maps_data.html">
                          <i className="fa fa-map-marker" />
                          Data Maps
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-menu col-md-3">
                    <ul className="menu-col">
                      <li>
                        <a href="maps_jvector.html">
                          <i className="fa fa-puzzle-piece" />
                          Jvector Maps
                        </a>
                      </li>
                      <li>
                        <a href="maps_google.html">
                          <i className="fa fa-google" />
                          Google map
                        </a>
                      </li>
                      <li>
                        <a href="maps_snazzy.html">
                          <i className="fa fa-map-signs" />
                          Snazzy Map
                        </a>
                      </li>
                      <li>
                        <a href="widgets.html">
                          <i className="fa fa-windows" /> <span>Widgets</span>
                          <span className="pull-rightr">
                            <small className="label pull-right bg-green">new</small>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="table.html">
                          <i className="fa fa-table" />
                          Simple tables
                        </a>
                      </li>
                      <li>
                        <a href="dataTables.html">
                          <i className="ti-layout-tab-window" />
                          Data tables
                        </a>
                      </li>
                      <li>
                        <a href="footable.html">
                          <i className="ti-layout-width-default" />
                          FooTable
                        </a>
                      </li>
                      <li>
                        <a href="x-editable.html">
                          <i className="ti-close" />
                          X-editable
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-menu col-md-3">
                    <ul className="menu-col">
                      <li>
                        <a href="icons_bootstrap.html">
                          <i className="fa fa-bold" />
                          Bootstrap Icons
                        </a>
                      </li>
                      <li>
                        <a href="icons_fontawesome.html">
                          <i className="fa fa-fort-awesome" />
                          Fontawesome Icon
                        </a>
                      </li>
                      <li>
                        <a href="icons_flag.html">
                          <i className="fa fa-flag-checkered" />
                          Flag Icons
                        </a>
                      </li>
                      <li>
                        <a href="icons_material.html">
                          <i className="fa fa-meetup" />
                          Material Icons
                        </a>
                      </li>
                      <li>
                        <a href="icons_weather.html">
                          <i className="fa fa-bolt" />
                          Weather Icons{' '}
                        </a>
                      </li>
                      <li>
                        <a href="icons_line.html">
                          <i className="fa fa-lemon-o" />
                          Line Icons
                        </a>
                      </li>
                      <li>
                        <a href="icons_pe.html">
                          <i className="fa fa-diamond" />
                          Pe Icons
                        </a>
                      </li>
                      <li>
                        <a href="icon_socicon.html">
                          <i className="fa fa-share-alt" />
                          Socicon Icons
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-menu col-md-3">
                    <ul className="menu-col">
                      <li>
                        <a href="invoice.html">
                          <i className="fa fa-file-text-o" />
                          Invoice
                        </a>
                      </li>
                      <li>
                        <a href="timeline.html">
                          <i className="fa fa-hourglass-o" />
                          Vertical timeline
                        </a>
                      </li>
                      <li>
                        <a href="horizontal_timeline.html">
                          <i className="fa fa-hourglass-end" />
                          Horizontal timeline
                        </a>
                      </li>
                      <li>
                        <a href="pricing.html">
                          <i className="fa fa-usd" />
                          Pricing Table
                        </a>
                      </li>
                      <li>
                        <a href="slider.html">
                          <i className="fa fa-sliders" />
                          Slider
                        </a>
                      </li>
                      <li>
                        <a href="carousel.html">
                          <i className="fa fa-long-arrow-left" />
                          Carousel
                        </a>
                      </li>
                      <li>
                        <a href="code_editor.html">
                          <i className="fa fa-code" />
                          Code editor
                        </a>
                      </li>
                      <li>
                        <a href="calender.html">
                          <i className="ti-calendar" />
                          <span>Calendar</span>
                          <span className="pull-right">
                            <small className="label pull-right bg-red m-r-5">9</small>
                            <small className="label pull-right bg-yellow m-r-5">29</small>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="https://themeforest.net/item/adminpage-responsive-bootstrap-admin-template-dashboard/20281702?s_rank=5"
                target="_blank"
                className="btn-buy hidden-xs hidden-sm hidden-md"
              >
                Buy now $25
              </a>
            </li>
          </ul>
          <ul className="nav navbar-top-links navbar-right">
            <li className="dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                <i className="material-icons">chat</i>
                <span className="label label-danger">9</span>
              </a>
              <ul className="dropdown-menu dropdown-messages">
                <li className="rad-dropmenu-header">
                  <a href="#">New Messages</a>
                </li>
                <li>
                  <a href="#" className="rad-content">
                    <div className="inbox-item">
                      <div className="inbox-item-img">
                        <img src="assets/dist/img/avatar.png" className="img-circle" alt="" />
                      </div>
                      <strong className="inbox-item-author">Naeem Khan</strong>
                      <span className="inbox-item-date">-13:40 PM</span>
                      <p className="inbox-item-text">Hey! there I'm available...</p>
                      <span className="profile-status available pull-right" />
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="rad-content">
                    <div className="inbox-item">
                      <div className="inbox-item-img">
                        <img src="assets/dist/img/avatar2.png" className="img-circle" alt="" />
                      </div>
                      <strong className="inbox-item-author">Sala Uddin</strong>
                      <span className="inbox-item-date">-13:40 PM</span>
                      <p className="inbox-item-text">Hey! there I'm available...</p>
                      <span className="profile-status away pull-right" />
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="rad-content">
                    <div className="inbox-item">
                      <div className="inbox-item-img">
                        <img src="assets/dist/img/avatar3.png" className="img-circle" alt="" />
                      </div>
                      <strong className="inbox-item-author">Mozammel</strong>
                      <span className="inbox-item-date">-13:40 PM</span>
                      <p className="inbox-item-text">Hey! there I'm available...</p>
                      <span className="profile-status busy pull-right" />
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="rad-content">
                    <div className="inbox-item">
                      <div className="inbox-item-img">
                        <img src="assets/dist/img/avatar4.png" className="img-circle" alt="" />
                      </div>
                      <strong className="inbox-item-author">Tanzil Ahmed</strong>
                      <span className="inbox-item-date">-13:40 PM</span>
                      <p className="inbox-item-text">Hey! there I'm available...</p>
                      <span className="profile-status offline pull-right" />
                    </div>
                  </a>
                </li>
                <li className="rad-dropmenu-footer">
                  <a href="#">View All messages</a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                <i className="material-icons">flag</i>
                <span className="label label-success">4</span>
              </a>
              <ul className="dropdown-menu dropdown-tasks">
                <li className="rad-dropmenu-header">
                  <a href="#">Your Task</a>
                </li>
                <li>
                  <a href="#">
                    <div>
                      <p>
                        <strong>Task 1</strong>
                        <span className="pull-right sm-text">40% Complete</span>
                      </p>
                      <div className="progress progress-striped active">
                        <div
                          className="progress-bar progress-bar-success"
                          role="progressbar"
                          aria-valuenow={40}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: '40%' }}
                        >
                          <span className="sr-only">40% Complete (success)</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div>
                      <p>
                        <strong>Task 2</strong>
                        <span className="pull-right sm-text">20% Complete</span>
                      </p>
                      <div className="progress progress-striped active">
                        <div
                          className="progress-bar progress-bar-info"
                          role="progressbar"
                          aria-valuenow={20}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: '20%' }}
                        >
                          <span className="sr-only">20% Complete</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div>
                      <p>
                        <strong>Task 3</strong>
                        <span className="pull-right sm-text">60% Complete</span>
                      </p>
                      <div className="progress progress-striped active">
                        <div
                          className="progress-bar progress-bar-warning"
                          role="progressbar"
                          aria-valuenow={60}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: '60%' }}
                        >
                          <span className="sr-only">60% Complete (warning)</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div>
                      <p>
                        <strong>Task 4</strong>
                        <span className="pull-right sm-text">80% Complete</span>
                      </p>
                      <div className="progress progress-striped active">
                        <div
                          className="progress-bar progress-bar-danger"
                          role="progressbar"
                          aria-valuenow={80}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: '80%' }}
                        >
                          <span className="sr-only">80% Complete (danger)</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="rad-dropmenu-footer">
                  <a href="#">See All Tasks</a>
                </li>
              </ul>
            </li>
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
            <li className="dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                <i className="material-icons">person_add</i>
              </a>
              <ul className="dropdown-menu dropdown-user">
                <li>
                  <a href="profile.html">
                    <i className="ti-user" />
                    &nbsp; Profile
                  </a>
                </li>
                <li>
                  <a href="mailbox.html">
                    <i className="ti-email" />
                    &nbsp; My Messages
                  </a>
                </li>
                <li>
                  <a href="lockscreen.html">
                    <i className="ti-lock" />
                    &nbsp; Lock Screen
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ti-settings" />
                    &nbsp; Settings
                  </a>
                </li>
                <li>
                  <a href="login.html">
                    <i className="ti-layout-sidebar-left" />
                    &nbsp; Logout
                  </a>
                </li>
              </ul>
            </li>
            <li className="log_out">
              <a href="login.html">
                <i className="material-icons">power_settings_new</i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="sidebar" role="navigation">
        <div className="sidebar-nav navbar-collapse">
          <ul className="nav" id="side-menu">
            <li className="nav-heading ">
              {' '}
              <span>Main Navigation&nbsp;&nbsp;&nbsp;&nbsp;------</span>
            </li>
            <li className="active">
              <a href="index.html" className="material-ripple">
                <i className="material-icons">home</i> Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="material-ripple">
                <i className="material-icons">bubble_chart</i> Charts
                <span className="fa arrow" />
              </a>
              <ul className="nav nav-second-level">
                <li>
                  <a href="charts_flot.html">Flot Chart</a>
                </li>
                <li>
                  <a href="charts_Js.html">Chart js</a>
                </li>
                <li>
                  <a href="charts_morris.html">Morris Charts</a>
                </li>
                <li>
                  <a href="charts_sparkline.html">Sparkline Charts</a>
                </li>
                <li>
                  <a href="charts_am.html">Am Charts</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="material-ripple">
                <i className="material-icons">drafts</i> Mailbox
                <span className="fa arrow" />
              </a>
              <ul className="nav nav-second-level">
                <li>
                  <a href="mailbox.html">
                    Mailbox<span className="nav-tag green">3</span>
                  </a>
                </li>
                <li>
                  <a href="mailDetails.html">
                    Mailbox Details<span className="nav-tag yellow">2</span>
                  </a>
                </li>
                <li>
                  <a href="compose.html">
                    Compose<span className="nav-tag red">9</span>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="material-ripple">
                <i className="material-icons">business</i> Tables
                <span className="fa arrow" />
              </a>
              <ul className="nav nav-second-level">
                <li>
                  <a href="table.html">Simple tables</a>
                </li>
                <li>
                  <a href="dataTables.html">Data tables</a>
                </li>
                <li>
                  <a href="footable.html">FooTable</a>
                </li>
                <li>
                  <a href="x-editable.html">X-editable</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="material-ripple">
                <i className="material-icons">assignment</i> Forms
                <span className="fa arrow" />
              </a>
              <ul className="nav nav-second-level">
                <li>
                  <a href="forms_basic.html">Basic Forms</a>
                </li>
                <li>
                  <a href="form_input_group.html">Input group</a>
                </li>
                <li>
                  <a href="form-mask.html">Form Mask</a>
                </li>
                <li>
                  <a href="form_touchspin.html">Touchspin</a>
                </li>
                <li>
                  <a href="form_select.html">Select</a>
                </li>
                <li>
                  <a href="forms_validation.html">Validation Forms</a>
                </li>
                <li>
                  <a href="forms_cropper.html">Cropper</a>
                </li>
                <li>
                  <a href="form_file_upload.html">Forms File Upload</a>
                </li>
                <li>
                  <a href="forms_editor_ck.html">CK Editor</a>
                </li>
                <li>
                  <a href="forms_editor_summernote.html">Summernote</a>
                </li>
                <li>
                  <a href="form_wizard.html">Form Wizaed</a>
                </li>
                <li>
                  <a href="forms_editor_markdown.html">Markdown</a>
                </li>
                <li>
                  <a href="forms_editor_trumbowyg.html">Trumbowyg</a>
                </li>
                <li>
                  <a href="form_editor_wysihtml5.html">Wysihtml5</a>
                </li>
              </ul>
            </li>
            <li className="nav-heading ">
              {' '}
              <span>Components&nbsp;&nbsp;&nbsp;&nbsp;------</span>
            </li>
            <li>
              <a href="#" className="material-ripple">
                <i className="material-icons">format_color_fill</i> UI Elements
                <span className="fa arrow" />
              </a>
              <ul className="nav nav-second-level">
                <li>
                  <a href="buttons.html">Buttons</a>
                </li>
                <li>
                  <a href="tabs.html">Tab</a>
                </li>
                <li>
                  <a href="notification.html">Notification</a>
                </li>
                <li>
                  <a href="tree-view.html">Tree View</a>
                </li>
                <li>
                  <a href="progressbars.html">Progressber</a>
                </li>
                <li>
                  <a href="list.html">List View</a>
                </li>
                <li>
                  <a href="typography.html">Typography</a>
                </li>
                <li>
                  <a href="panels.html">Panels</a>
                </li>
                <li>
                  <a href="modals.html">Modals</a>
                </li>
                <li>
                  <a href="icheck_toggle_pagination.html">iCheck, Toggle, pagination</a>
                </li>
                <li>
                  <a href="labels-badges-alerts.html">labels, Badges, Alerts</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="material-ripple">
                <i className="material-icons">map</i> Maps
                <span className="fa arrow" />
              </a>
              <ul className="nav nav-second-level">
                <li>
                  <a href="maps_amcharts.html">Amcharts Map</a>
                </li>
                <li>
                  <a href="maps_gmaps.html">gMaps</a>
                </li>
                <li>
                  <a href="maps_data.html">Data Maps</a>
                </li>
                <li>
                  <a href="maps_jvector.html">Jvector Maps</a>
                </li>
                <li>
                  <a href="maps_google.html">Google map</a>
                </li>
                <li>
                  <a href="maps_snazzy.html">Snazzy Map</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="material-ripple">
                <i className="material-icons">insert_emoticon</i> Icons
                <span className="fa arrow" />
              </a>
              <ul className="nav nav-second-level">
                <li>
                  <a href="icons_bootstrap.html">Bootstrap Icons</a>
                </li>
                <li>
                  <a href="icons_fontawesome.html">Fontawesome Icon</a>
                </li>
                <li>
                  <a href="icons_flag.html">Flag Icons</a>
                </li>
                <li>
                  <a href="icons_material.html">Material Icons</a>
                </li>
                <li>
                  <a href="icons_weather.html">Weather Icons </a>
                </li>
                <li>
                  <a href="icons_line.html">Line Icons</a>
                </li>
                <li>
                  <a href="icons_pe.html">Pe Icons</a>
                </li>
                <li>
                  <a href="icon_socicon.html">Socicon Icons</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="widgets.html">
                <i className="material-icons">widgets</i>Widgets
                <span className="nav-tag green">new</span>
              </a>
            </li>
            <li>
              <a href="calender.html">
                <i className="material-icons">perm_contact_calendar</i>Calendar
                <span className="nav-tag red">3</span>
                <span className="nav-tag green">5</span>
                <span className="nav-tag yellow">8</span>
              </a>
            </li>
            <li className="nav-heading ">
              {' '}
              <span>Extra&nbsp;&nbsp;&nbsp;&nbsp;------</span>
            </li>
            <li>
              <a href="#" className="material-ripple">
                <i className="material-icons">stay_current_portrait</i>App Views
                <span className="fa arrow" />
              </a>
              <ul className="nav nav-second-level">
                <li>
                  <a href="invoice.html">Invoice</a>
                </li>
                <li>
                  <a href="timeline.html">Vertical timeline</a>
                </li>
                <li>
                  <a href="horizontal_timeline.html">Horizontal timeline</a>
                </li>
                <li>
                  <a href="pricing.html">Pricing Table</a>
                </li>
                <li>
                  <a href="slider.html">Slider</a>
                </li>
                <li>
                  <a href="carousel.html">Carousel</a>
                </li>
                <li>
                  <a href="code_editor.html">Code editor</a>
                </li>
                <li>
                  <a href="gridSystem.html">Grid System</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="material-ripple">
                <i className="material-icons">devices_other</i>Other pags
                <span className="fa arrow" />
              </a>
              <ul className="nav nav-second-level">
                <li>
                  <a href="login.html">Login</a>
                </li>
                <li>
                  <a href="register.html">Register</a>
                </li>
                <li>
                  <a href="profile.html">Profile</a>
                </li>
                <li>
                  <a href="forget_password.html">Forget password</a>
                </li>
                <li>
                  <a href="lockscreen.html">Lockscreen</a>
                </li>
                <li>
                  <a href="404.html">404 Error</a>
                </li>
                <li>
                  <a href="505.html">505 Error</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="material-ripple">
                <i className="material-icons">invert_colors</i> Multi-Level Dropdown
                <span className="fa arrow" />
              </a>
              <ul className="nav nav-second-level">
                <li>
                  {' '}
                  <a href="#">Second Level Item</a>
                </li>
                <li>
                  <a href="#">Second Level Item</a>
                </li>
                <li>
                  <a href="#">
                    Third Level <span className="fa arrow" />
                  </a>
                  <ul className="nav nav-third-level">
                    <li>
                      <a href="#">Third Level Item</a>
                    </li>
                    <li>
                      <a href="#">Third Level Item</a>
                    </li>
                    <li>
                      <a href="#">Third Level Item</a>
                    </li>
                    <li>
                      <a href="#">Third Level Item</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="blank.html" className="material-ripple">
                <i className="material-icons">check_box_outline_blank</i> Blank page
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="side-bar right-bar">
        <div className="">
          <ul className="nav nav-tabs right-sidebar-tabs" role="tablist">
            <li role="presentation" className="active">
              <a href="#home" aria-controls="home" role="tab" data-toggle="tab">
                <i className="material-icons">home</i>
              </a>
            </li>
            <li role="presentation">
              <a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">
                <i className="material-icons">person_add</i>
              </a>
            </li>
            <li role="presentation">
              <a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">
                <i className="material-icons">chat</i>
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div role="tabpanel" className="tab-pane fade  in active" id="home">
              <ul id="styleOptions" title="switch styling">
                <li>
                  <b>Dark Skin</b>
                </li>
                <li>
                  <a href="javascript: void(0)" data-theme="skin-blue.min">
                    <img src="assets/dist/img/theme-color/1.jpg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="javascript: void(0)" data-theme="skin-dark.min">
                    <img src="assets/dist/img/theme-color/2.jpg" alt="" />
                  </a>
                </li>
                <li>
                  <a
                    href="javascript: void(0)"
                    data-theme="skin-red-light.min"
                    className="skin-logo"
                  >
                    <img src="assets/dist/img/theme-color/5.jpg" alt="" />
                  </a>
                </li>
                <li>
                  <b>Dark Skin sidebar</b>
                </li>
                <li>
                  <a href="javascript: void(0)" data-theme="skin-default.min">
                    <img src="assets/dist/img/theme-color/7.jpg" alt="" />{' '}
                  </a>
                </li>
                <li>
                  <a href="javascript: void(0)" data-theme="skin-red-dark.min">
                    <img src="assets/dist/img/theme-color/6.jpg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="javascript: void(0)" data-theme="skin-dark-1.min">
                    <img src="assets/dist/img/theme-color/8.jpg" alt="" />
                  </a>
                </li>
                <li>
                  <b>Light Skin sidebar</b>
                </li>
                <li>
                  <a
                    href="javascript: void(0)"
                    data-theme="skin-default-light.min"
                    className="skin-logo"
                  >
                    <img src="assets/dist/img/theme-color/3.jpg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="javascript: void(0)" data-theme="skin-white.min">
                    <img src="assets/dist/img/theme-color/4.jpg" alt="" />
                  </a>{' '}
                </li>
              </ul>
            </div>
            <div role="tabpanel" className="tab-pane fade " id="profile">
              <h3 className="sidebar-heading">Activity</h3>
              <div className="rad-activity-body">
                <div className="rad-list-group group">
                  <a href="#" className="rad-list-group-item">
                    <div className="rad-list-icon bg-red pull-left">
                      <i className="fa fa-phone" />
                    </div>
                    <div className="rad-list-content">
                      <strong>Client meeting</strong>
                      <div className="md-text">Meeting at 10:00 AM</div>
                    </div>
                  </a>
                  <a href="#" className="rad-list-group-item">
                    <div className="rad-list-icon bg-yellow pull-left">
                      <i className="fa fa-refresh" />
                    </div>
                    <div className="rad-list-content">
                      <strong>Created ticket</strong>
                      <div className="md-text">Ticket assigned to Dev team</div>
                    </div>
                  </a>
                  <a href="#" className="rad-list-group-item">
                    <div className="rad-list-icon bg-primary pull-left">
                      <i className="fa fa-check" />
                    </div>
                    <div className="rad-list-content">
                      <strong>Activity completed</strong>
                      <div className="md-text">Completed the dashboard html</div>
                    </div>
                  </a>
                  <a href="#" className="rad-list-group-item">
                    <div className="rad-list-icon bg-green pull-left">
                      <i className="fa fa-envelope" />
                    </div>
                    <div className="rad-list-content">
                      <strong>New Invitation</strong>
                      <div className="md-text">Max has invited you to join Inbox</div>
                    </div>
                  </a>
                </div>
              </div>
              <h3 className="sidebar-heading">Tasks Progress</h3>
              <ul className="sidebar-menu">
                <li>
                  <a href="#">
                    <h4 className="subheading">
                      Task one
                      <span className="label label-danger pull-right">40%</span>
                    </h4>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-danger progress-bar-striped active"
                        style={{ width: '40%' }}
                      />
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <h4 className="subheading">
                      Task two
                      <span className="label label-success pull-right">20%</span>
                    </h4>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-success progress-bar-striped active"
                        style={{ width: '20%' }}
                      />
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <h4 className="subheading">
                      Task Three
                      <span className="label label-warning pull-right">60%</span>
                    </h4>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-warning progress-bar-striped active"
                        style={{ width: '60%' }}
                      />
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <h4 className="subheading">
                      Task four
                      <span className="label label-primary pull-right">80%</span>
                    </h4>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-primary progress-bar-striped active"
                        style={{ width: '80%' }}
                      />
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div role="tabpanel" className="tab-pane fade " id="messages">
              <div className="message_widgets">
                <a href="#">
                  <div className="inbox-item">
                    <div className="inbox-item-img">
                      <img src="assets/dist/img/avatar.png" className="img-circle" alt="" />
                    </div>
                    <strong className="inbox-item-author">Naeem Khan</strong>
                    <span className="inbox-item-date">-13:40 PM</span>
                    <p className="inbox-item-text">Hey! there I'm available...</p>
                    <span className="profile-status available pull-right" />
                  </div>
                </a>
                <a href="#">
                  <div className="inbox-item">
                    <div className="inbox-item-img">
                      <img src="assets/dist/img/avatar2.png" className="img-circle" alt="" />
                    </div>
                    <strong className="inbox-item-author">Sala Uddin</strong>
                    <span className="inbox-item-date">-13:40 PM</span>
                    <p className="inbox-item-text">Hey! there I'm available...</p>
                    <span className="profile-status away pull-right" />
                  </div>
                </a>
                <a href="#">
                  <div className="inbox-item">
                    <div className="inbox-item-img">
                      <img src="assets/dist/img/avatar3.png" className="img-circle" alt="" />
                    </div>
                    <strong className="inbox-item-author">Mozammel</strong>
                    <span className="inbox-item-date">-13:40 PM</span>
                    <p className="inbox-item-text">Hey! there I'm available...</p>
                    <span className="profile-status busy pull-right" />
                  </div>
                </a>
                <a href="#">
                  <div className="inbox-item">
                    <div className="inbox-item-img">
                      <img src="assets/dist/img/avatar4.png" className="img-circle" alt="" />
                    </div>
                    <strong className="inbox-item-author">Tanzil</strong>
                    <span className="inbox-item-date">-13:40 PM</span>
                    <p className="inbox-item-text">Hey! there I'm available...</p>
                    <span className="profile-status offline pull-right" />
                  </div>
                </a>
                <a href="#">
                  <div className="inbox-item">
                    <div className="inbox-item-img">
                      <img src="assets/dist/img/avatar5.png" className="img-circle" alt="" />
                    </div>
                    <strong className="inbox-item-author">Amir Khan</strong>
                    <span className="inbox-item-date">-13:40 PM</span>
                    <p className="inbox-item-text">Hey! there I'm available...</p>
                    <span className="profile-status available pull-right" />
                  </div>
                </a>
                <a href="#">
                  <div className="inbox-item">
                    <div className="inbox-item-img">
                      <img src="assets/dist/img/avatar.png" className="img-circle" alt="" />
                    </div>
                    <strong className="inbox-item-author">Salman Khan</strong>
                    <span className="inbox-item-date">-13:40 PM</span>
                    <p className="inbox-item-text">Hey! there I'm available...</p>
                    <span className="profile-status available pull-right" />
                  </div>
                </a>
                <a href="#">
                  <div className="inbox-item">
                    <div className="inbox-item-img">
                      <img src="assets/dist/img/avatar.png" className="img-circle" alt="" />
                    </div>
                    <strong className="inbox-item-author">Tahamina</strong>
                    <span className="inbox-item-date">-13:40 PM</span>
                    <p className="inbox-item-text">Hey! there I'm available...</p>
                    <span className="profile-status available pull-right" />
                  </div>
                </a>
                <a href="#">
                  <div className="inbox-item">
                    <div className="inbox-item-img">
                      <img src="assets/dist/img/avatar4.png" className="img-circle" alt="" />
                    </div>
                    <strong className="inbox-item-author">Jhon</strong>
                    <span className="inbox-item-date">-13:40 PM</span>
                    <p className="inbox-item-text">Hey! there I'm available...</p>
                    <span className="profile-status offline pull-right" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="control-sidebar-bg" />
      <div id="page-wrapper">
        <div className="content">
          <div className="content-header">
            <div className="header-icon">
              <i className="pe-7s-tools" />
            </div>
            <div className="header-title">
              <h1>Adminpage - Responsive Bootstrap Admin Template Dashboard</h1>
              <small>Very detailed & featured admin.</small>
              <ol className="breadcrumb">
                <li>
                  <a href="index.html">
                    <i className="pe-7s-home" /> Home
                  </a>
                </li>
                <li className="active">Dashboard</li>
              </ol>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
              <div className="statistic-box statistic-filled-3">
                <h2>
                  <span className="count-number">789</span>K{' '}
                  <span className="slight">
                    <i className="fa fa-play fa-rotate-270 text-warning" /> +29%
                  </span>
                </h2>
                <div className="small">Social users </div>
                <i className="ti-world statistic_icon" />
                <div className="sparkline3 text-center" />
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
              <div className="statistic-box statistic-filled-1">
                <h2>
                  <span className="count-number">696</span>K{' '}
                  <span className="slight">
                    <i className="fa fa-play fa-rotate-270 text-warning" /> +28%
                  </span>
                </h2>
                <div className="small">Visitors this Month</div>
                <i className="ti-server statistic_icon" />
                <div className="sparkline1 text-center" />
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
              <div className="statistic-box statistic-filled-2">
                <h2>
                  <span className="count-number">321</span>M{' '}
                  <span className="slight">
                    <i className="fa fa-play fa-rotate-90 c-white" /> +10%
                  </span>{' '}
                </h2>
                <div className="small">Total users</div>
                <i className="ti-user statistic_icon" />
                <div className="sparkline2 text-center" />
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
              <div className="statistic-box statistic-filled-4">
                <h2>
                  <span className="count-number">5489</span>${' '}
                  <span className="slight">
                    <i className="fa fa-play fa-rotate-90 c-white" /> +24%
                  </span>
                </h2>
                <div className="small">Total Sales</div>
                <i className="ti-bag statistic_icon" />
                <div className="sparkline4 text-center" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
              <div className="panel panel-bd ">
                <div className="panel-body">
                  <div id="chartdiv" />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8 ">
              <div className="panel panel-bd lobidrag">
                <div className="panel-heading">
                  <div className="panel-title">
                    <i className="ti-panel" />
                    <h4>CSS animations Chart</h4>
                  </div>
                </div>
                <div className="panel-body">
                  <div id="chartdiv2" />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
              <div className="panel panel-bd lobidisable">
                <div className="panel-heading">
                  <div className="panel-title">
                    <i className="ti-stats-up" />
                    <h4>Recent Activities</h4>
                  </div>
                </div>
                <div className="panel-body">
                  <ul className="activity-list list-unstyled">
                    <li className="activity-purple">
                      <small className="text-muted">9 minutes ago</small>
                      <p>
                        You <span className="label label-success label-pill">recommended</span>{' '}
                        Karen Ortega
                      </p>
                    </li>
                    <li className="activity-danger">
                      <small className="text-muted">15 minutes ago</small>
                      <p>You followed Olivia Williamson</p>
                    </li>
                    <li className="activity-warning">
                      <small className="text-muted">22 minutes ago</small>
                      <p>
                        You <span className="text-danger">subscribed</span> to Harold Fuller
                      </p>
                    </li>
                    <li className="activity-primary">
                      <small className="text-muted">30 minutes ago</small>
                      <p>You updated your profile picture</p>
                    </li>
                    <li>
                      <small className="text-muted">35 minutes ago</small>
                      <p>You deleted homepage.psd</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
              <div className="panel panel-bd lobidisable">
                <div className="panel-heading">
                  <div className="panel-title">
                    <i className="ti-email" />
                    <h4>Messages</h4>
                  </div>
                </div>
                <div className="panel-body">
                  <div className="message_inner">
                    <div className="message_widgets">
                      <a href="#">
                        <div className="inbox-item">
                          <div className="inbox-item-img">
                            <img src="assets/dist/img/avatar.png" className="img-circle" alt="" />
                          </div>
                          <strong className="inbox-item-author">Naeem Khan</strong>
                          <span className="inbox-item-date">-13:40 PM</span>
                          <p className="inbox-item-text">Hey! there I'm available...</p>
                          <span className="profile-status available pull-right" />
                        </div>
                      </a>
                      <a href="#">
                        <div className="inbox-item">
                          <div className="inbox-item-img">
                            <img src="assets/dist/img/avatar2.png" className="img-circle" alt="" />
                          </div>
                          <strong className="inbox-item-author">Sala Uddin</strong>
                          <span className="inbox-item-date">-13:40 PM</span>
                          <p className="inbox-item-text">Hey! there I'm available...</p>
                          <span className="profile-status away pull-right" />
                        </div>
                      </a>
                      <a href="#">
                        <div className="inbox-item">
                          <div className="inbox-item-img">
                            <img src="assets/dist/img/avatar3.png" className="img-circle" alt="" />
                          </div>
                          <strong className="inbox-item-author">Mozammel Hoque</strong>
                          <span className="inbox-item-date">-13:40 PM</span>
                          <p className="inbox-item-text">Hey! there I'm available...</p>
                          <span className="profile-status busy pull-right" />
                        </div>
                      </a>
                      <a href="#">
                        <div className="inbox-item">
                          <div className="inbox-item-img">
                            <img src="assets/dist/img/avatar4.png" className="img-circle" alt="" />
                          </div>
                          <strong className="inbox-item-author">Tanzil Ahmed</strong>
                          <span className="inbox-item-date">-13:40 PM</span>
                          <p className="inbox-item-text">Hey! there I'm available...</p>
                          <span className="profile-status offline pull-right" />
                        </div>
                      </a>
                      <a href="#">
                        <div className="inbox-item">
                          <div className="inbox-item-img">
                            <img src="assets/dist/img/avatar5.png" className="img-circle" alt="" />
                          </div>
                          <strong className="inbox-item-author">Amir Khan</strong>
                          <span className="inbox-item-date">-13:40 PM</span>
                          <p className="inbox-item-text">Hey! there I'm available...</p>
                          <span className="profile-status available pull-right" />
                        </div>
                      </a>
                      <a href="#">
                        <div className="inbox-item">
                          <div className="inbox-item-img">
                            <img src="assets/dist/img/avatar.png" className="img-circle" alt="" />
                          </div>
                          <strong className="inbox-item-author">Salman Khan</strong>
                          <span className="inbox-item-date">-13:40 PM</span>
                          <p className="inbox-item-text">Hey! there I'm available...</p>
                          <span className="profile-status available pull-right" />
                        </div>
                      </a>
                      <a href="#">
                        <div className="inbox-item">
                          <div className="inbox-item-img">
                            <img src="assets/dist/img/avatar.png" className="img-circle" alt="" />
                          </div>
                          <strong className="inbox-item-author">Naeem Khan</strong>
                          <span className="inbox-item-date">-13:40 PM</span>
                          <p className="inbox-item-text">Hey! there I'm available...</p>
                          <span className="profile-status available pull-right" />
                        </div>
                      </a>
                      <a href="#">
                        <div className="inbox-item">
                          <div className="inbox-item-img">
                            <img src="assets/dist/img/avatar4.png" className="img-circle" alt="" />
                          </div>
                          <strong className="inbox-item-author">Tanzil Ahmed</strong>
                          <span className="inbox-item-date">-13:40 PM</span>
                          <p className="inbox-item-text">Hey! there I'm available...</p>
                          <span className="profile-status offline pull-right" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
              <div className="panel panel-bd lobidisable">
                <div className="panel-heading">
                  <div className="panel-title">
                    <i className="ti-user" />
                    <h4>Chat</h4>
                  </div>
                </div>
                <div className="panel-body">
                  <ul className="chat_list">
                    <li className="clearfix">
                      <div className="chat-avatar">
                        <img src="assets/dist/img/avatar4.png" alt="male" />
                        <i>10:00</i>
                      </div>
                      <div className="conversation-text">
                        <div className="ctext-wrap">
                          <i>John Deo</i>
                          <p>Hello! ✋</p>
                        </div>
                      </div>
                    </li>
                    <li className="clearfix odd">
                      <div className="chat-avatar">
                        <img src="assets/dist/img/avatar5.png" alt="Female" />
                        <i>10:01</i>
                      </div>
                      <div className="conversation-text">
                        <div className="ctext-wrap">
                          <i>Marco Lopes</i>
                          <p>Hi, How are you?☺ What about our next meeting?😼</p>
                        </div>
                      </div>
                    </li>
                    <li className="clearfix">
                      <div className="chat-avatar">
                        <img src="assets/dist/img/avatar4.png" alt="male" />
                        <i>10:01</i>
                      </div>
                      <div className="conversation-text">
                        <div className="ctext-wrap">
                          <i>John Deo</i>
                          <p>Yeah everything is fine 👍</p>
                        </div>
                      </div>
                    </li>
                    <li className="clearfix odd">
                      <div className="chat-avatar">
                        <img src="assets/dist/img/avatar5.png" alt="male" />
                        <i>10:02</i>
                      </div>
                      <div className="conversation-text">
                        <div className="ctext-wrap">
                          <i>Marco Lopes</i>
                          <p>Wow that's great 👏</p>
                        </div>
                      </div>
                    </li>
                    <li className="clearfix">
                      <div className="chat-avatar">
                        <img src="assets/dist/img/avatar4.png" alt="male" />
                        <i>10:03</i>
                      </div>
                      <div className="conversation-text">
                        <div className="ctext-wrap">
                          <i>John Deo</i>
                          <p>What can you do with HTML VIEWER ?</p>
                        </div>
                      </div>
                    </li>
                    <li className="clearfix odd">
                      <div className="chat-avatar">
                        <img src="assets/dist/img/avatar5.png" alt="male" />
                        <i>10:04</i>
                      </div>
                      <div className="conversation-text">
                        <div className="ctext-wrap">
                          <i>Marco Lopes</i>
                          <p>It helps to beautify/format your HTML.</p>
                        </div>
                      </div>
                    </li>
                    <li className="clearfix odd">
                      <div className="chat-avatar">
                        <img src="assets/dist/img/avatar5.png" alt="male" />
                        <i>10:04</i>
                      </div>
                      <div className="conversation-text">
                        <div className="ctext-wrap">
                          <i>Marco Lopes</i>
                          <p>It helps to save and share HTML content and show the HTML output</p>
                        </div>
                      </div>
                    </li>
                    <li className="clearfix">
                      <div className="chat-avatar">
                        <img src="assets/dist/img/avatar4.png" alt="male" />
                        <i>10:05</i>
                      </div>
                      <div className="conversation-text">
                        <div className="ctext-wrap">
                          <img src="assets/dist/img/1f600.png" alt="" />
                          <img src="assets/dist/img/1f60e.png" alt="" />
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="panel-footer">
                  <div className="input-group">
                    <input className="form-control emojionearea" placeholder="Your Message. . . " />
                    <span className="input-group-btn">
                      <button className="btn btn-success" type="button">
                        Send
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
              <div className="panel panel-bd lobidisable">
                <div className="panel-heading">
                  <div className="panel-title">
                    <i className="ti-archive" />
                    <h4>Calender</h4>
                  </div>
                </div>
                <div className="panel-body">
                  <div className="monthly_calender">
                    <div className="monthly" id="m_calendar" />
                  </div>
                </div>
                <div className="panel-footer">This is panel footer</div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
              <div className="panel panel-bd lobidisable">
                <div className="panel-heading">
                  <div className="panel-title">
                    <i className="ti-pie-chart" />
                    <h4>Colors Pie Chart</h4>
                  </div>
                </div>
                <div className="panel-body">
                  <div id="chartPie" />
                  <div className="chart-legend">
                    <div className="chart-legend-item">
                      <div className="chart-legend-color red" />
                      <p>From Google</p>
                      <p className="percentage">63.259 %</p>
                    </div>
                    <div className="chart-legend-item">
                      <div className="chart-legend-color blue" />
                      <p>Your Website</p>
                      <p className="percentage">25.321 %</p>
                    </div>
                    <div className="chart-legend-item">
                      <div className="chart-legend-color green" />
                      <p>Other Search Engines</p>
                      <p className="percentage">11.42 %</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-9">
              <div className="panel panel-bd">
                <div className="panel-body">
                  <div id="chartMap" />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-9">
              <div className="panel panel-bd lobidrag">
                <div className="panel-heading">
                  <div className="panel-title">
                    <i className="ti-truck" />
                    <h4>Contacts</h4>
                  </div>
                </div>
                <div className="panel-body">
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>Image</th>
                          <th>Name</th>
                          <th>Phone</th>
                          <th>Street Address</th>
                          <th>% Share</th>
                          <th>City</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <figure className="user-avatar small">
                              <img
                                src="assets/dist/img/avatar.png"
                                className="img-responsive"
                                alt="user-image"
                              />
                            </figure>
                          </td>
                          <td>Naeem Khan</td>
                          <td>123 456 7890</td>
                          <td>294-318 Duis Ave</td>
                          <td>
                            <div className="sparkline5" />
                          </td>
                          <td>Noakhali</td>
                          <td>
                            <a href="#" className="btn btn-success btn-xs">
                              View
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <figure className="user-avatar small">
                              <img
                                src="assets/dist/img/avatar2.png"
                                className="img-responsive"
                                alt="user-image"
                              />
                            </figure>
                          </td>
                          <td>Tuhin Sarkar</td>
                          <td>123 456 7890</td>
                          <td>680-1097 Mi Rd.</td>
                          <td>
                            <div className="sparkline6" />
                          </td>
                          <td>Lavoir</td>
                          <td>
                            <a href="#" className="btn btn-success btn-xs active">
                              View
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <figure className="user-avatar small">
                              <img
                                src="assets/dist/img/avatar6.png"
                                className="img-responsive"
                                alt="user-image"
                              />
                            </figure>
                          </td>
                          <td>Tanjil Ahmed</td>
                          <td>456 789 1230</td>
                          <td>Ap #289-8161 In Avenue</td>
                          <td>
                            <div className="sparkline7" />
                          </td>
                          <td>Dhaka</td>
                          <td>
                            <a href="#" className="btn btn-success btn-xs">
                              View
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <figure className="user-avatar small">
                              <img
                                src="assets/dist/img/avatar3.png"
                                className="img-responsive"
                                alt="user-image"
                              />
                            </figure>
                          </td>
                          <td>Sourav</td>
                          <td>789 123 4560</td>
                          <td>226-4861 Augue. St.</td>
                          <td>
                            <div className="sparkline5" />
                          </td>
                          <td>Rongpur</td>
                          <td>
                            <a href="#" className="btn btn-success btn-xs">
                              View
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <figure className="user-avatar small">
                              <img
                                src="assets/dist/img/avatar7.png"
                                className="img-responsive"
                                alt="user-image"
                              />
                            </figure>
                          </td>
                          <td>Jahangir Alam</td>
                          <td>(01662) 59083</td>
                          <td>3219 Elit Avenue</td>
                          <td>
                            <div className="sparkline6" />
                          </td>
                          <td>Chittagong</td>
                          <td>
                            <a href="#" className="btn btn-success btn-xs">
                              View
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-md-6 col-lg-3 hidden-sm hidden-md">
              <div className="social-widget">
                <ul>
                  <li>
                    <div className="fb_inner">
                      <i className="fa fa-facebook" />
                      <span className="sc-num">5,791</span>
                      <small>Fans</small>
                    </div>
                  </li>
                  <li>
                    <div className="twitter_inner">
                      <i className="fa fa-twitter" />
                      <span className="sc-num">691</span>
                      <small>Followers</small>
                    </div>
                  </li>
                  <li>
                    <div className="g_plus_inner">
                      <i className="fa fa-google-plus" />
                      <span className="sc-num">147</span>
                      <small>Followers</small>
                    </div>
                  </li>
                  <li>
                    <div className="dribble_inner">
                      <i className="fa fa-dribbble" />
                      <span className="sc-num">3,485</span>
                      <small>Followers</small>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
