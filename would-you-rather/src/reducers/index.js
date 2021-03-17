import { combineReducers } from 'redux'
import authedUserId from './authentication'
import users from './users'
import questions from './questions'

export default combineReducers({
  users,
  questions,
  authedUserId
})
