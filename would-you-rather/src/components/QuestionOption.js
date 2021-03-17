import React from 'react';

const QuestionOption = ({isAnswer, text, votes, totalVotes, isClickAble, handleClick}) => {
	return(
		<span className={`col-md-5 alert ${isClickAble && 'zoom'} ${isAnswer && 'alert-success'}`}
					onClick={ () => handleClick() }>
			{
				isAnswer &&
				<span className="badge success">ANSWERED</span>
			}
			<p className="card-text" style={{ fontStyle: 'italic', color: 'black' }}>
				{text}
			</p>
			{
				isAnswer &&
				<div>
					<hr/>
					<p className="card-text" style={{ color: "black"}}>
						No. of people voted this option: <strong>{votes}</strong>
					</p>
					<p className="card-text" style={{ color: "black"}}>
						% of people voted this option: <strong>{(votes/totalVotes) * 100} %</strong>
					</p>
				</div>
			}

		</span>
	);
};

export default QuestionOption;
