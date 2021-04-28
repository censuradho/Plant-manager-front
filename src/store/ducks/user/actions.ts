import { UserData, UserTypes } from './types'

export function setUser (user: Partial<UserData>) {
  return {
    type: UserTypes.SET_USER,
    payload: user
  }
}

export function logOff () {
  return {
    type: UserTypes.LOG_OFF
  }
}