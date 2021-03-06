import React from 'react'

const handleOnClick = () => {
  window.location.href = 'mailto:jerrythimothy@gmail.com?Subject=Message from jerrythimothy.com'
}

const Pricing: React.FC = () => (
  <div id="page-wrapper">
    <div className="content">
      <div className="content-header">
        <div className="header-icon">
          <i className="pe-7s-cash" />
        </div>
        <div className="header-title">
          <h1>Pricing Table</h1>
          <small>Pricing Table</small>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-3">
          <div className="promos plan-1">
            <div className="promo">
              <div className="deal">
                <div className="ic">
                  <i className="fa fa-server" />
                </div>
                <span>Free</span>
                <span>Free one time consulting</span>
              </div>
              <div className="price">
                <p>from</p>
                <span>$0/</span>
                <span className="period">project</span>
              </div>
              <ul className="features">
                <li>Tech stack to use</li>
                <li>About domain and hosting</li>
                <li>Resource allocation</li>
                <li>Roadmap</li>
              </ul>
              <button className="button center-block" onClick={handleOnClick}>
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-3">
          <div className="promos plan-2">
            <div className="promo">
              <div className="deal">
                <div className="ic">
                  <i className="fa fa-shield" />
                </div>
                <span>Home</span>
                <span>Static website development</span>
              </div>
              <div className="price">
                <p>from</p>
                <span>$50/</span>
                <span className="period">project</span>
              </div>

              <ul className="features">
                <li>5 pages</li>
                <li>HTML / CSS / Javascript</li>
                <li>No domain / hosting</li>
                <li>Free maintenance</li>
              </ul>
              <button className="button center-block" onClick={handleOnClick}>
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-3">
          <div className="promos plan-3">
            <div className="promo">
              <div className="deal">
                <div className="ic">
                  <i className="fa fa-university" />
                </div>
                <span>Business</span>
                <span>Dynamic website development ( Front-end only )</span>
              </div>
              <div className="price">
                <p>from</p>
                <span>$100/</span>
                <span className="period">project</span>
              </div>
              <ul className="features">
                <li>5 pages</li>
                <li>HTML / CSS / Javascript</li>
                <li>JQuery / Angular / React / Vue</li>
                <li>No domain / hosting</li>
              </ul>
              <button className="button center-block" onClick={handleOnClick}>
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-3">
          <div className="promos plan-4">
            <div className="promo">
              <div className="deal">
                <div className="ic">
                  <i className="fa fa-area-chart" />
                </div>
                <span>Advanced</span>
                <span>Dynamic website development ( Front-end and Back-end )</span>
              </div>
              <div className="price">
                <p>from</p>
                <span>$150/</span>
                <span className="period">project</span>
              </div>
              <ul className="features">
                <li>5 pages</li>
                <li>Business plan + Node / Php</li>
                <li>MongoDB / MySQL</li>
                <li>No domain / hosting</li>
              </ul>
              <button className="button center-block" onClick={handleOnClick}>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-12">
        <div className="pricing">
          <div className="pricing_item">
            <h3 className="pricing_title">Part-time</h3>
            <div className="pricing_price">
              <span className="pricing_currency">$</span>15
              <span className="pricing_period">/ hour</span>
            </div>
            <ul className="pricing_feature-list">
              <li className="pricing_feature">
                <i className="ti-bar-chart" />
                Maximum 2 hours/day
              </li>
            </ul>

            <button className="pricing_action" onClick={handleOnClick}>
              Choose plan
            </button>
          </div>
          <div className="pricing_item pricing_item_featured">
            <h3 className="pricing_title">Full-time</h3>
            <div className="pricing_price">
              <span className="pricing_currency">$</span>21
              <span className="pricing_period">/ hour</span>
            </div>
            <ul className="pricing_feature-list">
              <li className="pricing_feature">
                <i className="ti-bar-chart" />
                Maximum 8 hours/day
              </li>
            </ul>
            <button className="pricing_action" onClick={handleOnClick}>
              Choose plan
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-12 col-md-12">
        <div className="panel panel-bd lobidrag">
          <div className="panel-body">
            <div className="panel-title">
              <h4>Note</h4>
            </div>
            <p>- Deployment can be done at extra cost.</p>
            <p>- Maintenance cost on Business and Advanced plan.</p>
            <p>- Extra pages on Home, Business and Advanced plan costs extra.</p>
            <p>
              - All the plans are for Remote work. Cost differs to work at the customer's place.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Pricing
