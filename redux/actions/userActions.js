import * as types from '../types'
import { currentUser } from '../data.json'

export const getCurrentUser = () => ({
  type: types.GET_USER,
  payload: currentUser
})
