
export function getListingQuestionMapping(question, users) {
	const q_date = new Date(question.timestamp)
	return {
		id: question.id,
		optionOne: question.optionOne.text,
		optionTwo: question.optionTwo.text,
		author: users[question.author].name,
		dateTimeText: q_date.toLocaleDateString('en-US') + ' ' + q_date.toLocaleTimeString('en-US'),
	}
}

export function getQuestionDetails(question, users, userId) {
	let questionMap = getListingQuestionMapping(question, users);
	questionMap.myAnswer = question.optionOne.votes.includes(userId)? 'optionOne':
		question.optionTwo.votes.includes(userId)? 'optionTwo': '';
	questionMap.optionOneVotes = question.optionOne.votes.length;
	questionMap.optionTwoVotes = question.optionTwo.votes.length;

	return questionMap;
}
