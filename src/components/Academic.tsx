import React from 'react'

const Academic: React.FC = () => (
  <div id="page-wrapper">
    <div className="content">
      <div className="content-header">
        <div className="header-icon">
          <i className="pe-7s-culture" />
        </div>
        <div className="header-title">
          <h1>Academic</h1>
          <small>Academic</small>
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
                      <a href="#0" data-date="01/05/2005" className="selected">
                        2005
                      </a>
                    </li>
                    <li>
                      <a href="#0" data-date="01/05/2007">
                        2007
                      </a>
                    </li>
                    <li>
                      <a href="#0" data-date="01/05/2011">
                        2011
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
                <li className="selected" data-date="01/05/2005">
                  <h2>SSLC ( State Board )</h2>
                  <em>National College Higher Secondary School, Tiruchirappalli.</em>
                  <p>87.6%</p>
                </li>
                <li data-date="01/05/2007">
                  <h2>HSC ( State Board )</h2>
                  <em>National College Higher Secondary School, Tiruchirappalli.</em>
                  <p>81.25%</p>
                </li>
                <li data-date="01/05/2011">
                  <h2>B.E ( Computer Science & Engineering )</h2>
                  <em>
                    Oxford Engineering College, Tiruchirappalli. ( Anna University, Tiruchirappalli
                    )
                  </em>
                  <p>76.82%</p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
export default Academic
