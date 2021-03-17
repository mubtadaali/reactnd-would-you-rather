import { getInitialData } from '../utils/api'
import { receiveQuestions } from './questions'

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION';
export const USER_ANSWER_QUESTION = 'USER_ANSWER_QUESTION';

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData()
            .then(({ users, questions})=> {
                dispatch(receiveUsers(users));
                dispatch(receiveQuestions(questions))
        })
    }
}

export function receiveUsers(users){
    return{
        type: RECEIVE_USERS,
        users
    }
}

export function addUserQuestion (authedUserId, qid) {
    return {
      type: ADD_USER_QUESTION,
      authedUserId,
      qid
    }
  }

export function saveUserAnswer (auth, qid, option) {
  return {
    type: USER_ANSWER_QUESTION,
    auth,
    qid,
    option
  }
}
