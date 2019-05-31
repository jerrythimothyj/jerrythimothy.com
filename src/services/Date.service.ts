import moment from 'moment'

export const UTCToLocal = (dttm: string) => {
  return moment
    .utc(dttm)
    .local()
    .format('YYYY-MM-DD')
}
