import React from 'react';
import { useHistory } from "react-router";

const Question = ({ id, author, optionOne, optionTwo, dateTimeText, isAnswered }) => {
	const history = useHistory();
	return(
		<div className="card question pointer" onClick={() => {history.push(`questiondsds/${id}`)}}>
			<div className="card-header" style={{ textAlign: 'left' }}>
				<strong>{author}</strong> Asked
				{ isAnswered && <span className="badge success" style={{ float: 'right' }}>ANSWERED</span> }
			</div>
			<div className="card-body">
				<h5 className="card-title" style={{ color: 'dimgrey'}}>Would You Rather</h5>
				<p className="card-text" style={{ fontStyle: 'italic', color: 'black' }}>{optionOne}</p>
				<h5 style={{ color: 'dimgrey'}}>OR</h5>
				<p className="card-text" style={{ fontStyle: 'italic', color: 'black' }}>{optionTwo}</p>
				<p className="card-text" style={{ textAlign: 'right' }}>
					<small className="text-muted">{ dateTimeText }</small>
				</p>
			</div>
		</div>
	);
};

export default Question;
