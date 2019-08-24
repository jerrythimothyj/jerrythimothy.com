import * as R from 'ramda'
import React, { useEffect, useState } from 'react'
import { getGithubContributions, getGithubEvents } from '../services'
import GithubContributions from './GithubContributions/GithubContributions'
import GithubEvents from './GithubEvents/GithubEvents'
import GithubRecentActivities from './GithubRecentActivities/GithubRecentActivities'
import LinkedInRecommendations from './LinkedInRecommendations'
import LinksToSocial from './LinksToSocial/LinksToSocial'
import PlacesWorked from './PlacesWorked/PlacesWorked'
import TopStats from './TopStats/TopStats'
import UserVisits from './UserVisits/UserVisits'

const Dashboard: React.FC = () => {
  const [ghEvents, setGhEvents] = useState([])
  const [ghContributions, setGhContributions] = useState([])

  useEffect(() => {
    const fetchEvents = async () => {
      const responses = await getGithubEvents()
      const allResponseData = R.map(response => {
        return response.data
      }, responses)
      setGhEvents(allResponseData)
    }
    fetchEvents()

    const fetchContributions = async () => {
      const response: any = await getGithubContributions()
      setGhContributions(response.data.contributions)
    }
    fetchContributions()
  }, [])
  return (
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
          <TopStats noOfContributions={ghContributions.length} />
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <GithubContributions contributions={ghContributions} />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-8">
            <GithubEvents events={ghEvents} />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <GithubRecentActivities activities={ghEvents.length > 0 && ghEvents[0]} />
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
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-8">
            <UserVisits />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
