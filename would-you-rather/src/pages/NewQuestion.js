import React, { useState, useEffect } from 'react';
import { withRouter, useHistory } from "react-router";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions";


const NewQuestion = ({ addQuestion }) => {
  const [isSubmitDisabled, setSubmitDisabled] = useState(true)
  const [firstOption, setFirstOption] = useState('')
  const [secondOption, setSecondOption] = useState('')
  const history = useHistory();

  useEffect(() => {
    setSubmitDisabled(!Boolean(firstOption && secondOption))
  }, [firstOption, secondOption]);

  const handleFormSubmission = (e) => {
    e.preventDefault();
    addQuestion(firstOption, secondOption);
    history.push('/');
  }

  return (
    <div className="question-detail">
      <h2> Add New Poll</h2>
      <form style={{ padding: '30px' }} onSubmit={handleFormSubmission}>
        <h5> Would You Rather</h5>
        <div className="form-group">
          <input type="text" className="form-control" id="formGroupExampleInput" value={firstOption}
                 placeholder="First Option" onChange={ e => setFirstOption(e.target.value) }/>
        </div>
        <div className="form-group">
          <input type="text" className="form-control" id="formGroupExampleInput2" value={secondOption}
                 placeholder="Second Option" onChange={ e => setSecondOption(e.target.value) }/>
        </div>
        <button type="submit" className="btn btn-primary" style={{ marginTop: '30px'}}
                disabled={isSubmitDisabled}>
          Add Poll
        </button>
      </form>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    addQuestion: (firstOption, secondOption) => {
      dispatch(handleAddQuestion(firstOption, secondOption))
    }
  }
}

export default connect(null, mapDispatchToProps)(withRouter(NewQuestion));
