import * as types from '../types'
import { reviews } from '../data.json'

export const getReviews = () => ({
  type: types.GET_REVIEWS,
  payload: reviews,
})

export const addReview = (review) => ({
  type: types.ADD_REVIEW,
  payload: { ...review, id: Math.ceil(Math.random() * 1000) },
})

export const addComment = (reviewId, comment) => ({
  type: types.ADD_COMMENT,
  payload: { reviewId, comment },
})
