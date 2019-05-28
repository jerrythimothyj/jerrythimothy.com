import React from 'react'
import CareerLocations from './CareerLocations/CareerLocations'

const Career: React.FC = () => (
  <div id="page-wrapper">
    <div className="content">
      <div className="content-header">
        <div className="header-icon">
          <i className="pe-7s-bicycle" />
        </div>
        <div className="header-title">
          <h1>Career</h1>
          <small>Career</small>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-4">
          <div className="card">
            <div className="card-header">
              <div
                className="card-header-headshot"
                style={{
                  backgroundImage: `url("http://jerrythimothy.bigjapps.com/assets/images/profile.png")`,
                }}
              />
            </div>
            <div className="card-content">
              <div className="card-content-member">
                <h4 className="m-t-0">Jerry Thimothy J</h4>
                <p className="m-0">
                  <i className="pe-7s-map-marker" />
                  Tiruchirappalli, India
                </p>
              </div>
              <div className="card-content-languages">
                <div className="card-content-languages-group">
                  <div>
                    <h4>Speaks:</h4>
                  </div>
                  <div>
                    <ul>
                      <li>
                        English,
                        <div className="fluency fluency-4" />
                      </li>
                      <li>
                        Tamil
                        <div className="fluency fluency-4" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-content-summary">
                <p>Web | Full stack | UI | Javascript | PHP</p>
              </div>
            </div>
            <div className="card-footer">
              <div className="card-footer-stats">
                <div>
                  <p>Projects:</p>
                  <i className="fa fa-code" />
                  <span>15</span>
                </div>
                <div>
                  <p>Looking for job:</p>
                  <i className="fa fa-check" />
                  <span>Yes</span>
                </div>
                <div>
                  <p>Freelancing:</p>
                  <i className="fa fa-briefcase" />
                  <span>Available</span>
                </div>
              </div>
              <div className="card-footer-message">
                <a
                  href="mailto:jerrythimothy@gmail.com?Subject=Message from jerrythimothy.com"
                  target="_blank"
                >
                  <h4>
                    <i className="fa fa-comments" /> Message me
                  </h4>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-8">
          <CareerLocations />
        </div>
      </div>
    </div>
  </div>
)
export default Career
