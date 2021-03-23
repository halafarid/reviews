import { combineReducers } from 'redux'
import reviewReducer from './reviewReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
  reviewRed: reviewReducer,
  userRed: userReducer,
})

export default rootReducer
