import axios from 'axios'
import * as R from 'ramda'
import { UTCToLocal } from './index'

export const getGithubEvents = () => axios.get('https://api.github.com/users/jerrythimothyj/events')

export const transformGithubEvents = (events: object[]) => {
  const eventDttms = R.pluck('created_at', events)
  const eventDates = R.map((eventDttm: string) => UTCToLocal(eventDttm))(eventDttms)
  const groupedEventDates = R.countBy(R.toLower)(eventDates)

  return R.reverse(
    R.map(key => {
      return { date: key, count: groupedEventDates[key] }
    }, R.keys(groupedEventDates))
  )
}
