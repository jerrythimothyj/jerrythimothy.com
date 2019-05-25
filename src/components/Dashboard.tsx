import React from 'react'
import LinkedInRecommendations from './LinkedInRecommendations'
import PlacesWorked from './PlacesWorked/PlacesWorked'

const Dashboard: React.FC = () => (
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
                    You <span className="label label-success label-pill">recommended</span> Karen
                    Ortega
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
          <LinkedInRecommendations />
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
          <PlacesWorked />
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
)

export default Dashboard
