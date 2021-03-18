import React from 'react';
import {connect} from "react-redux";
import UserCard from "../components/UserCard";


const LeaderBoard = ({ users }) => {
  return (
    <div className="question-wrapper">
      <h2> Leader Board </h2>
      {
        users.map( user => {
          const { id, name, avatarURL, answers, questions } = user;
          return(
            <UserCard key={id}
                      name={name}
                      avatarURL={avatarURL}
                      askedCount={questions.length}
                      answeredCount={Object.keys(answers).length} />
            );
        })
      }
    </div>
  );
}

const mapStateToProps = ({ users }) => {
  const scoreMap = (user) => { return(Object.keys(user.answers).length + user.questions.length); };
  return {
    users: Object.values(users).sort((a, b) => scoreMap(b) - scoreMap(a))
  }
};

export default connect(mapStateToProps)(LeaderBoard);
