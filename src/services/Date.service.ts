import moment from 'moment'

export const UTCToLocal = (dttm: string) => {
  return moment
    .utc(dttm)
    .local()
    .format('YYYY-MM-DD')
}

export const fromNowAgo = (dttm: string) => {
  return moment
    .utc(dttm)
    .local()
    .fromNow()
}

export const dateDiff = (date: string, diffType: any) => {
  return moment()
    .local()
    .diff(date, diffType)
}

export const getYear = (
  date = moment()
    .local()
    .format('YYYY')
) => {
  return moment(date)
    .local()
    .format('YYYY')
}
