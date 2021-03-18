import React from 'react';

const UserCard = ({ name, avatarURL, askedCount, answeredCount }) => {
	return(
		<div className="card question">

			<div className="card-header" style={{ textAlign: 'left' }}>
				<strong>{ name }</strong>
				<span className="badge success" style={{ float: 'right' }}>SCORE: { askedCount + answeredCount }</span>
			</div>
			<div className="row">
				<div className="col-md-4 avatar-wrapper">
					<img src={ avatarURL }  alt="user avatar"/>
				</div>
				<div className="col-md-8">
					<div className="card-body" style={{ textAlign: 'left' }}>
						<h5 className="card-title" style={{ color: 'dimgrey'}}>Score Details</h5>
						<p className="card-text" style={{ color: 'black' }}>
							No. of Questions Asked: <strong> { askedCount } </strong>
						</p>
						<p className="card-text" style={{ color: 'black' }}>
							No. of Questions Answered: <strong> { answeredCount } </strong>
						</p>
					</div>
				</div>
			</div>

		</div>
	);
};

export default UserCard;
