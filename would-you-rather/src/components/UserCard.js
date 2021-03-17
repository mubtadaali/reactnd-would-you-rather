import React from 'react';

const UserCard = ({ name, askedCount, answeredCount }) => {
	return(
		<div className="card question">

			<div className="card-header" style={{ textAlign: 'left' }}>
				<strong>{ name }</strong>
				<span className="badge success" style={{ float: 'right' }}>SCORE: { askedCount + answeredCount }</span>
			</div>

			<div className="card-body">
				<h5 className="card-title" style={{ color: 'dimgrey'}}>Score Details</h5>
				<p className="card-text" style={{ color: 'black' }}>
					No. of Questions Asked: <strong> { askedCount } </strong>
				</p>
				<p className="card-text" style={{ color: 'black' }}>
					No. of Questions Answered: <strong> { answeredCount } </strong>
				</p>
			</div>

		</div>
	);
};

export default UserCard;
