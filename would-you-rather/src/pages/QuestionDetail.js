import React from 'react';
import {connect} from "react-redux";

import { getQuestionDetails } from "../utils/utils";
import QuestionOption from "../components/QuestionOption";
import { handleAnswerSubmission } from "../actions/questions";

const QuestionDetail = (props) => {
	const { author, myAnswer,  totalVotes, optionOne, optionOneVotes,
		avatar, optionTwo, optionTwoVotes, dateTimeText }= props;
	const handleOptionSelection = (answer) => {
		if (myAnswer === '') {
			props.saveQuestionAnswer(answer)
		}
	};

	return(
		<div className="question-detail">
			<div className="card">
				<div className="card-header">
					<img src={avatar} alt={author} height={70} width={70} />
					<h3> {author} Asked: </h3>
				</div>
				<div className="card-body">
					<h5 className="card-title" style={{ color: 'dimgrey'}}>Would You Rather</h5>

					<div className="row" style={{ marginTop: '20px', padding: '20px' }}>
						<QuestionOption totalVotes={totalVotes}
														text={optionOne}
														votes={optionOneVotes}
														isClickAble={myAnswer === ''}
														isAnswer={myAnswer === 'optionOne'}
														handleClick={() => handleOptionSelection('optionOne')} />
						<h5 className="col-md-2" style={{ color: 'dimgrey'}}>OR</h5>
						<QuestionOption totalVotes={totalVotes}
														text={optionTwo}
														votes={optionTwoVotes}
														isClickAble={myAnswer === ''}
														isAnswer={myAnswer === 'optionTwo'}
														handleClick={() => handleOptionSelection('optionTwo')} />
					</div>

					<p className="card-text" style={{ textAlign: 'right' }}>
						<small className="text-muted">{ dateTimeText }</small>
					</p>

				</div>
			</div>
		</div>
	);
};

function mapStateToProps({questions, users, authedUserId}, { match }){
	const qId = match.params.id;
	let question = questions[qId];
	question = getQuestionDetails(question, users, authedUserId)
	const totalVotes = question.optionOneVotes + question.optionTwoVotes;

	return { ...question, totalVotes, qId }
}

function mapDispatchToProps(dispatch, props) {
  const { id } = props.match.params;

  return {
    saveQuestionAnswer: (answer) => {
      dispatch(handleAnswerSubmission(id, answer))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps )(QuestionDetail);
