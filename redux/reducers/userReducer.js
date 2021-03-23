import * as types from '../types'

const initialState = {
  currentUser: null,
}

const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USER:
      return {
        ...state,
        currentUser: action.payload,
      }
    default:
      return state
  }
}

export default reviewReducer