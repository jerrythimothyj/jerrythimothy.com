import React from 'react'

const GithubRecentActivities: React.FC = () => (
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
            You <span className="label label-success label-pill">recommended</span> Karen Ortega
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
)

export default GithubRecentActivities
