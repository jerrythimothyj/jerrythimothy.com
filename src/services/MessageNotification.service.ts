import { getSessionStorageItem, setSessionStorageItem } from './index'

export const checkAndSetMessageNotificationCount = (count: number) => {
  if (isNaN(getMessageNotificationCount())) {
    setSessionStorageItem({ messageNotificationCount: count })
  }
}
export const setMessageNotificationCount = (count: number) => {
  setSessionStorageItem({ messageNotificationCount: count })
}

export const getMessageNotificationCount = () =>
  parseInt(getSessionStorageItem('messageNotificationCount'), 10)
