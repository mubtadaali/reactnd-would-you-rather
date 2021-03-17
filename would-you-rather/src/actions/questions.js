import { _saveQuestionAnswer, _saveQuestion } from '../utils/_DATA'
import { addUserQuestion, saveUserAnswer } from "./users";

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER';

export function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question
  }
}

export function receiveQuestions(questions){
  return{
    type: RECEIVE_QUESTIONS,
    questions
  }
}

export function saveQuestionAnswer(authedUserId, qid, answer) {
  return {
    type: SAVE_QUESTION_ANSWER,
    authedUserId,
    qid,
    answer
  }
}

export function handleAnswerSubmission (qid, option) {
    return (dispatch, getState) => {
      const { authedUserId } = getState();
      const info = {
        authedUserId: authedUserId,
        qid,
        answer: option
      };
      _saveQuestionAnswer(info)
          .then(() => {
              dispatch(saveQuestionAnswer(authedUserId, qid, option));
              dispatch(saveUserAnswer(authedUserId, qid, option))
          })
    }
}

export function handleAddQuestion (optionOneText, optionTwoText){
    return (dispatch, getState) => {
        const { authedUserId } = getState();
        return _saveQuestion({
            optionOneText,
            optionTwoText,
            author: authedUserId
        })
        .then((question) => {
            dispatch(addQuestion(question));
            dispatch(addUserQuestion(authedUserId, question.id))
        })

    }
}