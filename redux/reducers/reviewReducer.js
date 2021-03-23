import * as types from '../types'

const initialState = {
  reviews: null
}

const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
      }
    case types.ADD_REVIEW:
      return {
        ...state,
        reviews: [action.payload, ...state.reviews]
      }
    case types.ADD_COMMENT:
      let revs = [...state.reviews]
      const index = revs.findIndex((rev) => rev.id === action.payload.reviewId)
      revs[index].comment = action.payload.comment
      return {
        ...state,
      }
    default:
      return state
  }
}

export default reviewReducer