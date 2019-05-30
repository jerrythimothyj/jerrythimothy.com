import * as R from 'ramda'

export const setSessionStorageItem = (obj: object) => {
  sessionStorage.setItem(R.keys(obj)[0], R.toString(R.values(obj)[0]))
}

export const getSessionStorageItem = (key: string) => sessionStorage.getItem(key)
