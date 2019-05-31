import axios from 'axios'
import * as R from 'ramda'
import { UTCToLocal } from './index'

export const getGithubEvents = () => axios.all([
  axios.get('https://api.github.com/users/jerrythimothyj/events'),
  axios.get('https://api.github.com/users/jerrythimothyj/events?page=2'),
  axios.get('https://api.github.com/users/jerrythimothyj/events?page=3'),
  axios.get('https://api.github.com/users/jerrythimothyj/events?page=4'),
  axios.get('https://api.github.com/users/jerrythimothyj/events?page=5'),
  axios.get('https://api.github.com/users/jerrythimothyj/events?page=6'),
  axios.get('https://api.github.com/users/jerrythimothyj/events?page=7'),
  axios.get('https://api.github.com/users/jerrythimothyj/events?page=8'),
  axios.get('https://api.github.com/users/jerrythimothyj/events?page=9'),
  axios.get('https://api.github.com/users/jerrythimothyj/events?page=10'),
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
