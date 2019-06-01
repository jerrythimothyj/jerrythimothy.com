import * as R from 'ramda'
import React from 'react'
import { fromNowAgo, getActivityClassName, transformActivityText } from '../../services'
import './GithubRecentActivities.scss'

interface Props {
  activities: object[]
}

const GithubRecentActivities: React.FC<Props> = (props: Props) => (
  <div id="githubRecentActivities" className="panel panel-bd lobidisable">
    <div className="panel-heading">
      <div className="panel-title">
        <i className="ti-stats-up" />
        <h4>Recent Activities</h4>
      </div>
    </div>
    <div className="panel-body">
      <ul className="activity-list list-unstyled">
        {R.map((activity: any) => {
          return (
            <li className={getActivityClassName(activity)} key={activity.id}>
              <small className="text-muted">{fromNowAgo(activity.created_at)}</small>
              <p dangerouslySetInnerHTML={{ __html: transformActivityText(activity) }} />
            </li>
          )
        }, props.activities)}
      </ul>
    </div>
  </div>
)

export default GithubRecentActivities
