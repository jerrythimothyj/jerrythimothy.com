import React from 'react'

const Employment: React.FC = () => (
  <div id="page-wrapper">
    <div className="content">
      <div className="content-header">
        <div className="header-icon">
          <i className="pe-7s-portfolio" />
        </div>
        <div className="header-title">
          <h1>Employment</h1>
          <small>Employment</small>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="cd-horizontal-timeline">
            <div className="timeline">
              <div className="events-wrapper">
                <div className="events">
                  <ol>
                    <li>
                      <a href="#0" data-date="14/05/2012" className="selected">
                        May 2012
                      </a>
                    </li>
                    <li>
                      <a href="#0" data-date="06/01/2016">
                        Jan 2016
                      </a>
                    </li>
                    <li>
                      <a href="#0" data-date="23/03/2017">
                        Mar 2017
                      </a>
                    </li>
                    <li>
                      <a href="#0" data-date="17/12/2018">
                        Dec 2018
                      </a>
                    </li>
                  </ol>

                  <span className="filling-line" aria-hidden="true" />
                </div>
              </div>

              <ul className="cd-timeline-navigation">
                <li>
                  <a href="#0" className="prev inactive">
                    Prev
                  </a>
                </li>
                <li>
                  <a href="#0" className="next">
                    Next
                  </a>
                </li>
              </ul>
            </div>

            <div className="events-content">
              <ol>
                <li className="selected" data-date="14/05/2012">
                  <h2>Tech Lead - UI</h2>
                  <em>Ephicacy Lifesciences Analytics</em>
                  <p>
                    Enterprise Applications
                    <br />
                    Development of Front End, write Tests and Deploy in the production environment.
                  </p>
                  <p>
                    React 16.7.1/Redux/MobX/Lodash
                    <br />
                    HTML5/CSS3/Bootstrap
                    <br />
                    Jest - Enzyme/Jest - Puppeteer
                  </p>
                </li>
                <li data-date="06/01/2016">
                  <h2>Senior Consultant</h2>
                  <em>XEBIA IT ARCHITECTS</em>
                  <p>
                    Enterprise Applications
                    <br />
                    Development of Front End, write Tests and Deploy in the production environment.
                  </p>
                  <p>
                    React 16.4.1/Redux-Saga/Ramda
                    <br />
                    Angular 1.6.3
                    <br />
                    HTML5/CSS3/Bootstrap/RTL
                    <br />
                    Jest - Enzyme/CoffeeScript - Jasmine/Protractor-Selenium/Karma - Jasmine
                  </p>
                </li>
                <li data-date="23/03/2017">
                  <h2>Systems Engineer</h2>
                  <em>TATA CONSULTANCY SERVICES</em>
                  <p>
                    Development of Front End, write Unit Tests and Deploy in the production
                    environment.
                  </p>
                  <p>
                    Angular 1.5.8
                    <br />
                    HTML5/CSS3/Bootstrap 3<br />
                    Javascript ES6/Karma - Jasmine
                  </p>
                </li>

                <li data-date="17/12/2018">
                  <h2>Software Engineer</h2>
                  <em>ADELA SOFTWARE & SERVICES</em>
                  <p>
                    Maintaining existing project and develop new modules.
                    <br />
                    Requirement analysis, Develop prototypes and common modules.
                  </p>
                  <p>
                    Angular 1.5.4
                    <br />
                    HTML5/CSS3/Bootstrap 3<br />
                    Javascript 1.8
                    <br />
                    PHP 5.6.10
                    <br />
                    SQL Server 2014
                    <br />
                    C# Forms ( Dotnet Framework 2.0 )<br />
                    XML 1.0
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
export default Employment
