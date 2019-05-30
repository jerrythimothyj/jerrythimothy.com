import React from 'react'
import LinkedInRecommendations from './LinkedInRecommendations'
import LinksToSocial from './LinksToSocial/LinksToSocial'
import PlacesWorked from './PlacesWorked/PlacesWorked'

const Dashboard: React.FC = () => (
  <div id="page-wrapper">
    <div className="content">
      <div className="content-header">
        <div className="header-icon">
          <i className="pe-7s-home" />
        </div>
        <div className="header-title">
          <h1>Dashboard</h1>
          <small>Dashboard</small>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
          <LinkedInRecommendations />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-8">
          <PlacesWorked />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
          <LinksToSocial />
        </div>
      </div>
    </div>
  </div>
)

export default Dashboard
