import { Reducer } from 'redux'

import { UserData, UserTypes } from './types'

const baseState: UserData = {
  id: '',
  username: '',
  user_image: '',
  password: '',
  email: ''
}

const userReducer: Reducer<UserData> = (state = baseState, action) => {
  switch (action.type) {
    case UserTypes.GET_USER:
      return {...state}
    case UserTypes.SET_USER:
      return { ...state, ...action.payload }
    case UserTypes.LOG_OFF:
      return { ...baseState }
    default:
      return {...state}
  }
}

export default userReducer
