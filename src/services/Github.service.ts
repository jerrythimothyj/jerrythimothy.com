import axios from 'axios'
import moment from 'moment'
import * as R from 'ramda'
import { dateDiff, getYear } from './Date.service'
import { UTCToLocal } from './index'

const linkToEvents =
  'https://api.github.com/users/jerrythimothyj/events?client_id=c132515708d1af7c47c2&client_secret=10451eb02c4d1e2831d5fb2d037ea9a20267a040'
export const getGithubEvents = () =>
  axios.all([
    axios.get(linkToEvents + '&page=1'),
    // axios.get(linkToEvents + '&page=2'),
    // axios.get(linkToEvents + '&page=3'),
    // axios.get(linkToEvents + '&page=4'),
    // axios.get(linkToEvents + '&page=5'),
    // axios.get(linkToEvents + '&page=6'),
    // axios.get(linkToEvents + '&page=7'),
    // axios.get(linkToEvents + '&page=8'),
    // axios.get(linkToEvents + '&page=9'),
    // axios.get(linkToEvents + '&page=10'),
  ])

export const transformGithubEvents = (events: any[]) => {
  const eventDttms = R.pluck('created_at', R.unnest(events))
  const eventDates = R.map((eventDttm: string) => UTCToLocal(eventDttm))(eventDttms)
  const groupedEventDates = R.countBy(R.toLower)(eventDates)

  return R.reverse(
    R.map(key => {
      return { date: key, count: groupedEventDates[key] }
    }, R.keys(groupedEventDates))
  )
}

const githubEventsList: any = {
  CheckRunEvent: {},
  CheckSuiteEvent: {},
  CommitCommentEvent: {},
  ContentReferenceEvent: {},
  CreateEvent: { text: 'created' },
  DeleteEvent: { text: 'deleted' },
  DeployKeyEvent: {},
  DeploymentEvent: {},
  DeploymentStatusEvent: {},
  DownloadEvent: {},
  FollowEvent: {},
  ForkApplyEvent: {},
  ForkEvent: {},
  GistEvent: {},
  GitHubAppAuthorizationEvent: {},
  GollumEvent: {},
  InstallationEvent: {},
  InstallationRepositoriesEvent: {},
  IssueCommentEvent: {},
  IssuesEvent: {},
  LabelEvent: {},
  MarketplacePurchaseEvent: {},
  MemberEvent: {},
  MembershipEvent: {},
  MetaEvent: {},
  MilestoneEvent: {},
  OrgBlockEvent: {},
  OrganizationEvent: {},
  PageBuildEvent: {},
  ProjectCardEvent: {},
  ProjectColumnEvent: {},
  ProjectEvent: {},
  PublicEvent: {},
  PullRequestEvent: {},
  PullRequestReviewCommentEvent: {},
  PullRequestReviewEvent: {},
  PushEvent: { text: 'pushed' },
  RegistryPackageEvent: {},
  ReleaseEvent: {},
  RepositoryEvent: {},
  RepositoryImportEvent: {},
  RepositoryVulnerabilityAlertEvent: {},
  SecurityAdvisoryEvent: {},
  StarEvent: {},
  StatusEvent: {},
  TeamAddEvent: {},
  TeamEvent: {},
  WatchEvent: {},
}

export const transformActivityText = (activity: any) => {

  let displayText = activity.actor.display_login
  let link = 'https://github.com/' + activity.repo.name

  if (activity.payload.action) {
    if (activity.payload.action === 'closed') {
      displayText +=
        ' ' + "<span class='label label-success label-pill'>" + activity.payload.action + '</span>'
    } else {

      displayText +=
        ' ' + "<span class='label label-primary label-pill'>" + activity.payload.action + '</span>'
    }

    if (activity.payload.issue) {
      displayText += ' ' + activity.payload.issue.title
      link = activity.payload.issue.html_url
    } else {
      displayText += ' ' + activity.payload.pull_request.title
      link = activity.payload.pull_request.html_url
    }
  } else {
    console.log('activity=', activity, githubEventsList[activity.type].text);
    displayText +=
      ' ' +
      "<span class='label label-danger label-pill'>" +
      githubEventsList[activity.type].text +
      '</span>'

    displayText += ' ' + (activity.payload.ref || activity.payload.ref_type)
  }

  return "<a href='" + link + "' target='_blank'>" + displayText + '</a>'
}

export const getActivityClassName = (activity: any) => {
  switch (activity.type) {
    case 'IssuesEvent':
      return 'activity-warning'
    case 'DeleteEvent':
      return 'activity-danger'
    case 'PushEvent':
      return 'activity-primary'
    default:
      return 'activity-purple'
  }
}

export const getGithubContributions = () => {
  return axios.get('https://github-contributions-api.now.sh/v1/jerrythimothyj')
}

export const transformContributionsData = (contributions: object[]) => {
  const dataUptoToday = R.filter((contribution: any) => {
    return dateDiff(contribution.date, 'days') >= 0 && getYear(contribution.date) === getYear()
  }, contributions)
  return R.reverse(R.slice(0, Infinity, dataUptoToday))
}
