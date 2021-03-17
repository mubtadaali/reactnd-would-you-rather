import React, {useState} from 'react';
import {connect} from "react-redux";
import Question from "../components/Question";
import {getListingQuestionMapping} from "../utils/utils";

const DashBoard = ({questions, users, answeredQuestions, unansweredQuestions}) => {
	const [showOnlyAnsweredQuestions, setShowOnlyAnsweredQuestions] = useState(false);
	const questionsToShow = showOnlyAnsweredQuestions? answeredQuestions: unansweredQuestions;
	const questionsList = questionsToShow.map(qId => getListingQuestionMapping(questions[qId], users))

	return (
		<div>
			<div className="form-check form-switch question-switch">
				<input className="form-check-input" type="checkbox"
							 id="flexSwitchCheckDefault" checked={showOnlyAnsweredQuestions}
							 onChange={() => setShowOnlyAnsweredQuestions(!showOnlyAnsweredQuestions)} />
				<label className="form-check-label" htmlFor="flexSwitchCheckDefault">
					Show My Answered Questions
				</label>
			</div>
			<div className="question-wrapper">
				<h2> { `${showOnlyAnsweredQuestions? 'My ': 'Un'}Answered Questions` } </h2>
				{
					questionsList.length > 0?
						questionsList.map(
							question => (<Question key={question.id} {...question} isAnswered={showOnlyAnsweredQuestions} />)
						):
						<h5>No Question Found</h5>
				}
			</div>

		</div>
	);
}

function mapStateToProps({questions, users, authedUserId}) {
	const loggedInUser = users[authedUserId];
  const answeredQuestions = Object.keys(loggedInUser.answers).sort(
  	(a,b) => questions[b].timestamp - questions[a].timestamp);
  const unansweredQuestions = Object.keys(questions).filter(qid => !answeredQuestions.includes(qid))
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp);

  return {
		users,
		questions,
    answeredQuestions,
    unansweredQuestions,
  }
}

export default connect(mapStateToProps)(DashBoard)
